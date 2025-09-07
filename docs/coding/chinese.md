---
layout: doc
layoutClass: better-layout
---


# 中文与英文

## 字节与字符

- ASCII 码中，一个英文字母（不分大小写）为一个字节，一个中文汉字为两个字节。
- UTF-8 编码中，一个英文字为一个字节，一个中文为三个字节。
- Unicode 编码中，一个英文为一个字节，一个中文为两个字节。
符号：英文标点为一个字节，中文标点为两个字节。例如：英文句号 . 占1个字节的大小，中文句号 。占2个字节的大小
- UTF-16 编码中，一个英文字母字符或一个汉字字符存储都需要2个字节（Unicode 扩展区的一些汉字存储需要4个字节）
- UTF-32 编码中，世界上任何字符的存储都需要4个字节

## 多字节字符

多字节编码下，字符串对应的类型：char/CHAR
char叫多字节字符，一个char占一个字节，之所以叫多字节字符是因为它表示一个字时可能是一个字节也可能是多个字节。例如一个英文字符(如’s’)用一个char(一个字节)表示，一个中文汉字(如’中’)用3个char(三个字节)表示，看下面的例子：

```c++
// --run--
#include<cstdio>
int main()
{
	char ch1 = 's';              // 正确
	printf("ch1:%c\n", ch1);
	char ch2 = '中';             // 错误,一个char不能完整存放一个汉字信息
	printf("ch2:%c\n", ch2);     //显示乱码

	char str[4] = "中";          //前三个字节存放汉字'中',最后一个字节存放字符串结束符\0
	printf("str:%s\n", str);
	//char str2[2] = "国";       // 错误：'str2' : array bounds overflow(数组边界溢出)
	//printf("str2:%s\n", str2);
	/*
	输出：
	ch1:s
	ch2:?
	str:中
	*/
}
```

## Unicode字符

unicode编码下，字符串对应的类型：wchar_t/WCHAR
wchar_t被称为宽字符，一个wchar_t占2个字节。之所以叫宽字符是因为所有的字都要用两个字节(即一个wchar_t)来表示，不管是英文还是中文。看下面的例子：

```c++
// --run--
#include <cstdio>
#include <locale.h>
int main()
{
	setlocale(LC_ALL, "chs");       // 本地化语言设置为中文，否则中文乱码
	wchar_t wch1 = L's';            // 正确
	wprintf(L"wch1:%c\n", wch1);
	wchar_t wch2 = L'中';            // 正确,一个汉字用一个wchar_t表示
	wprintf(L"wch2:%c\n", wch2);
	wchar_t wstr[2] = L"中";         // 前两个字节(前一个wchar_t)存放汉字'中',最后两个字节(后一个wchar_t)存放字符串结束符\0
	wprintf(L"wstr:%s\n", wstr);
	wchar_t wstr2[3] = L"中国";
	wprintf(L"wstr2:%s\n", wstr2);
	return 0;
	/*
	输出：
	wch1:s
	wch2:中
	wstr:中
	wstr2:中国
	*/
}
```

1.对于宽字节字符串或者字符显示到控制台，不能使用printf，需要使用wprintf或者wprintf_s
2.宽字节字符串与多字节字符串不同，宽字节字符串前面有L修饰

## 多字节字符与Unicode字符

```c++
// --run--
#include<cstdio>
int main()
{
	char* p_mb = (char*)"Sexy的C/C++美人";      //普通字符串 - 多字节字符串
	wchar_t* p_u = (wchar_t*)L"Sexy的C/C++美人";  //unicode字符串 - 字符串有修饰符 L
	printf("p_mb :%s \n", p_mb);
	wprintf(L"p_u :%s \n", p_u);
    return 0;
    /*
    输出：
    p_mb :Sexy的C/C++美人
    p_u :Sexy?C/C++??
    */
}
```

解决

```c++
// --run--
#include<cstdio>
#include<locale.h> //需要包含头文件

int main()
{
	//以下两种方式都可以
	//_wsetlocale(LC_ALL, L"chs"); //chs 表示中文   方法一
	setlocale(LC_ALL, "chs");    //chs 表示中文   方法二
	char* p_mb = (char*)"Sexy的C/C++美人";      //普通字符串 - 多字节字符串
	wchar_t* p_u = (wchar_t*)L"Sexy的C/C++美人";  //unicode字符串 - 字符串有修饰符 L
	printf("p_mb :%s \n", p_mb);
	wprintf(L"p_u :%s \n", p_u);
	return 0;
    /*
    输出：
    p_mb :Sexy的C/C++美人
    p_u :Sexy的C/C++美人
    */
}
```

## 函数在 unicode 和多字节字编码中的区别

Win32 API中大部分参数有字符串的函数都有两个版本，以A结尾/开头,代表多字节版本，以W结尾/开头，代表Unicode版本,两者互不兼容，例如：

```
printf     //输出字符串到控制台  -- 多字节
wprintf    //输出字符串到控制台  -- 宽字节

outputdebugstringA   //输出字符串  -- 多字节
outputdebugstringW   //输出字符串  -- 宽字节

strcpy/strcpy_s  //拷贝字符串  -- 多字节
wcscpy/wcscpy_s  //拷贝字符串  -- 宽字节

strcat/strcat_s  //在字符串尾部添加字符串  -- 多字节
wcscat/wcscat_s  //在字符串尾部添加字符串  -- 宽字节

strlen     //计算字符串大小  -- 多字节
wcslen     //计算字符串大小  -- 宽字节
```

多字节编码和Unicode编码下，各自函数互不兼容，必须使用和编码格式对应的函数

http:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Farchive\u002F9e6536a64787631dd2770bcfa8dbf4ea64709667.jpg
http://i0.hdslb.com/bfs/archive/9e6536a64787631dd2770bcfa8dbf4ea64709667.jpg


\u3006\u3007\u4e00-\u9fff\u3400-\u4dbf\U00020000-\U0002a6df\U0002a700-\U0002ebef\U00030000-\U0003134f

U+3006: Character 〆 (often regarded as a Chinese character)
U+3007: Character 〇 (often regarded as a Chinese character)
U+4E00-U+9FFF: CJK Unified Ideographs
U+3400-U+4DBF: CJK Unified Ideographs Extension A
U+20000-U+2A6DF: CJK Unified Ideographs Extension B
U+2A700-U+2B73F: CJK Unified Ideographs Extension C
U+2B740-U+2B81F: CJK Unified Ideographs Extension D
U+2B820-U+2CEAF: CJK Unified Ideographs Extension E
U+2CEB0-U+2EBEF: CJK Unified Ideographs Extension F
U+30000-U+3134F: CJK Unified Ideographs Extension G
