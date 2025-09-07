# windows

## 概念

- Win32, Win32，并不是指 32 位 Windows，而是现代 NT 内核 Windows 用户态的统称。64 位 Windows 的用户态也可以称作 Win32
- Win32 api，顾名思义，就是 Windows 在用户态为开发者提供的 API 函数。这些函数种类多样，功能非常丰富。这些 API 函数的用户态实现被微软存放在几个 dll 文件里，最常用的有两个：user32.dll 和 kernel32.dll

```txt

```
- Win32 数据类型
```cpp

```
- 微软的命名比较有特点，一般用的是匈牙利命名法：变量名 = 属性 + 类型 + 对象描述
```cpp

```
- 用户通过控件与应用程序交互。在 Win32 API 中，每个控件都可以看成一个特殊的窗口
- 推荐使用 Unicode 字符集
- 句柄是它所代表的对象的唯一标识，和它所代表的对象一一对应。指针和句柄的作用有些像，但不完全一样。句柄会限制使用者的权限；句柄结构不公开

## 常用代码
```cpp
int APIENTRY wWinMain(_In_ HINSTANCE hInstance,
                     _In_opt_ HINSTANCE hPrevInstance,
                     _In_ LPWSTR    lpCmdLine,
                     _In_ int       nCmdShow)
// hInstance 程序当前实例的句柄
// hPrevInstance 程序上一个实例的句柄。当同一个程序打开两次时，第一次打开的窗口就是上一个实例的窗口。此参数已废弃，逆向 msvcrt 即可发现，运行库总是将此参数设为 0
// lpCmdLine 类似于控制台程序中的 argv，但不能像 argv 那样根据空格自动拆分传入的参数
// nCmdShow 指定程序的窗口如何显示
```
