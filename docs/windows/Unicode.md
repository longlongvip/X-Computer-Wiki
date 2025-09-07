# Unicode
## L
在字符串前加一个大写字母L表示，告诉编译器这个字符串按照宽字符来存储，每个字符占2个字节
例如：
```cpp
wchar_t sex[24] = L"Sexy";
wchar_t sex[24] = {L"Sexy"};
```
L的特点就是无论以什么方式编译，一律按照 Unicode 来编译（即每个字符占两个字节），这里说每个字符占两个字节，是因为 Unicode 字符集一般是指 UTF-16 编码的 Unicode ，但 Unicode 字符集不等于每个字符占两个字符

## _T() 和 _TEXT()
_T 和 _TEXT 都在头文件 tchar.h 中定义，在字符串之间加 _TEXT 或者是 _T 的效果是一样的，与 L 不同的是，如果项目使用了 Unicode 字符集（定义了 UNICODE 宏），则自动在字符串前面加上L，否则字符串不变

（意思是如果编译环境使用的多字符节字符集 或者是 未设置，那么字符串不变），_T 和 _TEXT 是根据 _UNICODE 来确定宏的

在 tchar.h 中可以找到如下的宏定义：
```cpp
#define _T(x) __T(x);
#define _TEXT(x) __T(x);
```
使用：
```cpp
wchar_t sex[24] = _T("Sexy");
wchar_t sex[24] = _TEXT("Sexy");
```

## TEXT()
需要注意的是如果只 #include<WinNT.h> 编译器是会报错的，需要在 #include<WinNT.h> 前加上#include <Windows.h>  才能使用 TEXT ， TEXT 是根据 UNICODE 来确定宏的，因为当编译环境使用 Unicode 字符集时，

因为预编译宏包含了 _UNICODE 和 UNICODE ，所以在使用Unicode字符集的环境下 _T 、 _TEXT 、 TEXT 都可以使用
使用：
```cpp;
wchar_t sex[24] = TEXT("Sexy");
```

LPSTR = char*
LPCSTR = const char*

LPTSTR:
如果定义了UNICODE宏，那么LPTSTR = wchar_t*否则LPTSTR = char*

LPCTSTR:
如果定义了UNICODE宏，那么LPCTSTR = const wchar_t*，否则LPCSTR = const char*