# This script generates links for downloading free books from O'Reilly site (http://www.oreilly.com/programming/free)
# Requirements
# ruby
# httparty, nokogiri (gem install httparty nokogiri --no-ri --no-rdoc)
# Execute
# ruby script.rb

require 'httparty'
require 'nokogiri'
require 'uri'

URL    = 'http://www.oreilly.com/'
THEMES = ['programming', 'iot', 'data', 'webops', 'web-platform', 'security', 'business']
FREE_PATH = 'free/'
FILE_PATH = 'files/'
FORMATS = ['.pdf', '.epub', '.mobi']

def theme_url(theme)
  URL + theme+ '/' + FREE_PATH
end

def download_url(book, fmt)
  URL + book[:theme] + '/' + FREE_PATH + FILE_PATH + book[:file_name] + fmt 
end

def get_book_info(link)
  splitted_url = URI(link.attributes['href'].value).path.split('/')
  {
    theme:     splitted_url[1],
    title:     link.attributes['title'].value,
    file_name: splitted_url.last.split('.').first
  }
end

def books(theme_url)
  Nokogiri.HTML(HTTParty.get(theme_url).body)
    .css("section .product-row a")
    .map { |link| get_book_info(link) }
end

def main
  THEMES.each do |t|
    puts "## From theme: #{t.capitalize}"
    books(theme_url(t)).each do |book|
      puts "### #{book[:title]}"
      FORMATS.each { |fmt| puts download_url(book, fmt) + "</br>" }
    end
  end  
end

main