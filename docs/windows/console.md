# console

## 如何清除控制台程序中的屏幕？
该过程是获取有关控制台输出缓冲区大小的信息，然后使用 FillConsoleOutputCharacter（） 和 FillConsoleOutputAttribute（） 用空格填充它
但是，在使用此方法之前，您需要获取控制台屏幕缓冲区的 HANDLE，如下所示：

## 对于其他编译器，我曾经使用 gotoxy（） 在控制台程序中定位光标。如何在 Visual C++ 中执行此操作？
输出到控制台基本上由控制台屏幕缓冲区的当前设置控制，缓冲区中的每个位置都可以使用 COORD 结构进行寻址。此代码使用 SetConsoleCursorPosition（） 将当前输出位置移动到第 11 行第 32 列：
```cpp
#include <windows.h>

#include <stdio.h>

 
int main ( int argc, char** argv )
{
HANDLE hConsole = GetStdHandle ( STD_OUTPUT_HANDLE );

    if ( INVALID_HANDLE_VALUE != hConsole )
        {
        COORD pos = {32, 11};
        SetConsoleCursorPosition ( hConsole, pos );
        printf ( "Hello World!\n" );
        }
 
    return 0;
}
```

## 如何在控制台程序中输出不同颜色的文本？
控制台屏幕缓冲区中的每个位置都有文本属性以及与之关联的字符，Win32 控制台函数可以通过两种方式影响这些属性。SetConsoleTextAttribute（） 会影响写入缓冲区的后续字符，而 FillConsoleOutputAttribute（） 会直接更改现有文本块的属
```cpp
void CMyConsoleClass::SetTextNormal()
{
    // white on black - the default

    SetConsoleTextAttribute ( m_hConsole,
                              FOREGROUND_RED |
                                FOREGROUND_GREEN |
                                FOREGROUND_BLUE );
}

void CMyConsoleClass::SetTextBold()
{
    // hi-white on black 

    SetConsoleTextAttribute ( m_hConsole,
                              FOREGROUND_RED |
                                FOREGROUND_GREEN |
                                FOREGROUND_BLUE |
                                FOREGROUND_INTENSITY );
}

void CMyConsoleClass::SetTextReverse()
{
    // black on white

   SetConsoleTextAttribute ( m_hConsole, 
                             BACKGROUND_RED |
                               BACKGROUND_GREEN |
                               BACKGROUND_BLUE );
}
```

## 我在 GUI 程序中分配了一个控制台窗口，但是如果用户关闭控制台，我的程序也会关闭。该怎么办？
一种行之有效的方法是禁用关闭菜单选项。使用 AllocConsole（） 分配控制台后，如果能找到控制台窗口的句柄，则可以执行此操作。
```cpp
void DisableClose() 
{
char buf[100];

    wsprintf ( buf,
               _T("some crazy but unique string that will ID ")
               _T("our window - maybe a GUID and process ID") );

    SetConsoleTitle ( (LPCTSTR) buf );

    // Give this a chance - it may fail the first time through.

HWND hwnd = NULL;

    while ( NULL == hwnd )
        {
        hwnd = ::FindWindowEx ( NULL, NULL, NULL, (LPCTSTR) buf );
        }

    // Reset old title - we'd normally save it with GetConsoleTitle.

    SetConsoleTitle ( _T("whatever") );  

    // Remove the Close menu item. This will also disable the [X] button

    // in the title bar.

HMENU hmenu = GetSystemMenu ( hwnd, FALSE );

    DeleteMenu ( hmenu, SC_CLOSE, MF_BYCOMMAND );
}
```

## 我已经在我的 GUI 程序中分配了一个控制台。当我尝试关闭控制台窗口时，它会挂起一段时间。为什么？
虽然只有一个控制台可以与一个进程关联，但多个进程可以共享同一个控制台。当您调用 FreeConsole（） 时，Windows 会将您的应用与控制台分离，如果没有其他进程正在使用它，则将其关闭。NT 和 9x 在执行结算的时间上存在差异。NT 似乎立即检查状态并关闭控制台。Windows 9x 似乎更多地采用了“垃圾回收”方法，它更喜欢等到在控制台 widow 上执行某些操作后再检查是否该删除它。

一个有用的技巧是在调用 FreeConsole（） 之前最小化窗口;查看前面的 FAQ 条目，获取有关获取执行此操作所需的窗口句柄的提示。

```cpp
CloseHandle ( hConsole );

  // This helps kill the window quickly.

  ShowWindow ( console_hwnd, SW_HIDE );

  console_hwnd = NULL;

  FreeConsole();
```


## 如何在不弹出控制台窗口的情况下运行我的控制台程序？
使用 CreateProcess（）（如常见问题解答 6.4 中所述），并在 STARTUPINFO 结构中设置一些成员，以告知 Windows 隐藏控制台窗口。
```cpp
STARTUPINFO si = { sizeof(STARTUPINFO) };
PROCESS_INFORMATION pi = {0};
BOOL bSuccess;
 
  si.dwFlags = STARTF_USESHOWWINDOW;
  si.wShowWindow = SW_HIDE;
 
  // see FAQ 6.4 for all the parameters

  bSuccess = CreateProcess ( ..., &si, &pi );
```
如果 CreateProcess （） 调用成功，控制台窗口将被隐藏，因为我们在 wShowWindow 成员中指定了 SW_HIDE。

