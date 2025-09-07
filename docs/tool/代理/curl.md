# curl

## 命令行
```bash
curl -x <[protocol://][user:password@]proxyhost[:port]> url
--proxy <[protocol://][user:password@]proxyhost[:port]> url
--proxy http://user:password@Your-Ip-Here:Port url
-x http://user:password@Your-Ip-Here:Port url

curl -x socks5://[user:password@]proxyhost[:port]/ url
curl --socks5 192.168.1.254:3099 https://www.cyberciti.biz/

# 如果临时不需要代理使用以下参数
curl --noproxy "*" http://www.google.com
```
例子
```bash
curl -x 'http://vivek:myPasswordHere@10.12.249.194:3128' -v -O https://dl.cyberciti.biz/pdfdownloads/b8bf71be9da19d3feeee27a0a6960cb3/569b7f08/cms/631.pdf
```

## 永久设置
.curlrc 文件位置
- Windows :
- Linux :
- MacOS :

.curlrc 文件内容
```txt
proxy = server1.cyberciti.biz:3128
proxy-user = "foo:bar"
```

记住，代理字符串中可以使用 protocol:// 前缀来指定不同的代理协议。使用 socks4://，socks4a://，socks5://或者 socks5h:// 来指定使用的 SOCKS 版本。若没有指定协议或者使用 http:// 表示 HTTP 协议。若没有指定端口号则默认为 1080。-x 选项的值要优先于环境变量设置的值。若不想走代理，而环境变量总设置了代理，那么可以通过设置代理为空值（""）来覆盖环境变量的值
```bash
# 设置setproxy和unsetproxy 可以快捷的开关
# 需要时先输入命令 setproxy
# 不需要时输入命令 unsetproxy
alias setproxy="export http_proxy=socks5://127.0.0.1:1024; export https_proxy=$http_proxy; echo 'HTTP Proxy on';"
alias unsetproxy="unset http_proxy; unset https_proxy; echo 'HTTP Proxy off';"
```

## 排查问题
curl -v参数会输出请求中访问的路由信息，方便确定是否设置成功，请求有没有代理
netstat -nat | grep 1024 查看与代理端口相链接的端口
lsof -i :1024 查看端口相关的进程
