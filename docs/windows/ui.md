# ui
// https://www.codeproject.com/KB/cpp/cppforumfaq.aspx#other_cpp

## 如何更改对话框的背景颜色，或在窗口的背景中绘制图片？
处理 WM_ERASEBKGND 消息。对于对话框，请勿处理WM_PAINT;WM_ERASEBKGND就是为此目的而设计的信息

## 我有一个对话框，它执行一些冗长的处理，我需要一个 Cancel 按钮，以便用户可以中止处理。如何让 Cancel 按钮工作？
首先，UI 不响应鼠标的原因是您的程序是单线程的，这意味着当线程忙于执行处理时，它不会在对话框的消息队列中抽取消息

您有两种选择，要么将处理移至工作线程，要么保持对话为单线程并在处理期间定期轮询消息队列。多线程超出了此常见问题解答的范围，但请查看CodeProject的线程、进程和进程间通信部分以获取更多信息。对于第二种解决方案，下面是 MFC 代码，它将抽取消息队列中等待的任何消息：
```cpp
void ProcessMessages()
{
CWinApp* pApp = AfxGetApp();
MSG msg;

  while ( PeekMessage ( &msg, NULL, 0, 0, PM_NOREMOVE ))
      pApp->PumpMessage();
}
```
在执行冗长处理的代码中定期调用 ProcessMessages（）

## 当光标在我的窗口中时，如何更改光标？
处理WM_SETCURSOR消息，并调用 SetCursor（） 函数来更改光标。请注意，每次移动鼠标时，窗口都会收到此消息，因此请确保 WM_SETCURSOR 处理程序快速执行。（也就是说，不要执行文件访问等慢速操作

## 如何显示或隐藏窗口？
```cpp
// 显示
// MFC:

  wndYourWindow.ShowWindow ( SW_SHOW );

// Win32 API:

  ShowWindow ( hwndYourWindow, SW_SHOW );

// 隐藏
// MFC:

  wndYourWindow.ShowWindow ( SW_HIDE );

// Win32 API:

  ShowWindow ( hwndYourWindow, SW_HIDE );
```

## 如何启用或禁用对话框控件（按钮、编辑框等）？
```cpp
// 禁用
// MFC:

  wndYourControl.EnableWindow ( FALSE );
 
// Win32 API:

  EnableWindow ( hwndYourControl, FALSE );

// 启用
// MFC:

  wndYourControl.EnableWindow ( TRUE );
 
// Win32 API:

  EnableWindow ( hwndYourControl, TRUE );
```

## 如何使一个窗口位于所有其他窗口的顶部？
```cpp
// 最顶部
// MFC:

  wndYourWindow.SetWindowPos ( &wndTopMost, 0, 0, 0, 0, 0, 
                               SWP_NOMOVE|SWP_NOSIZE );
 
// Win32 API:

  SetWindowPos ( hwndYourWindow, HWND_TOPMOST, 0, 0, 0, 0,
                 SWP_NOMOVE|SWP_NOSIZE );

// 恢复正常
// MFC:

  wndYourWindow.SetWindowPos ( &wndNoTopMost, 0, 0, 0, 0, 
                               SWP_NOMOVE|SWP_NOSIZE );
 
// Win32 API:

  SetWindowPos ( hwndYourWindow, HWND_NOTOPMOST, 0, 0, 0, 0,
                 SWP_NOMOVE|SWP_NOSIZE );
```

## 如何更改静态控件的背景颜色？

执行此操作的方法会有所不同，具体取决于您使用的是 MFC 还是 Win32 API。在 Win32 中，您处理 WM_CTLCOLORSTATIC 消息，而在 MFC 中，您处理WM_CTLCOLOR。在处理程序中，验证该消息是否针对有问题的 static 控件，然后返回所需颜色的画笔。

```cpp
// MFC:

HBRUSH CYourDlg::OnCtlColor(CDC* pDC, CWnd* pWnd, UINT nCtlColor) 
{
HBRUSH hbr = CDialog::OnCtlColor(pDC, pWnd, nCtlColor);
    
    if ( pWnd->GetSafeHwnd() == GetDlgItem(IDC_LABEL1)->GetSafeHwnd() &&
         CTLCOLOR_STATIC == nCtlColor )
        {
        // m_bkbrush is a CBrush member variable

        m_bkbrush.CreateSolidBrush ( RGB(255,0,0) );

        pDC->SetBkMode ( TRANSPARENT );
        return m_bkbrush;
        }

    return hbr;
}

// Win32 API:

LRESULT CALLBACK YourDlgProc(HWND hDlg, UINT message,
                             WPARAM wParam, LPARAM lParam)
{
static HBRUSH hbrBkcolor;

    switch (message)
        {
        case WM_INITDIALOG:
            hbrBkcolor = CreateSolidBrush ( RGB(255,0,0) );
            return TRUE;
        break;

        case WM_CTLCOLORSTATIC:
            {
            HDC hdc = (HDC) wParam;
            HWND hwndStatic = (HWND) lParam;

            if ( hwndStatic == GetDlgItem ( hDlg, IDC_LABEL1 ))
                {
                SetBkMode ( hdc, TRANSPARENT );
                return (LRESULT) hbrBkcolor;
                }
            }
        break;
        // ...

        }

    return FALSE;
}

```

## 如何设置框架窗口或对话框的标题中的文本？
使用 SetWindowText（） API
```cpp
// MFC:

  wndYourWindow.SetWindowText, _T("New text here") );

// Win32 API:

  SetWindowText ( hwndYourWindow, _T("New text here") );
```

## 如何设置在框架窗口或对话框的标题中显示的图标？
首先从程序的资源中加载图标，然后将其设置为窗口的当前图标。您应该同时设置大 （32x32） 和小 （16x16） 图标;大图标用于 Alt+Tab 窗口，小图标用于标题栏和任务栏。
```cpp
// MFC:

HICON hLargeIcon = AfxGetApp()->LoadIcon ( IDI_NEW_ICON );
HICON hSmallIcon = (HICON) ::LoadImage ( AfxGetResourceHandle(), 
                                         MAKEINTRESOURCE(IDI_NEW_ICON),
                                         IMAGE_ICON, 16, 16, LR_DEFAULTCOLOR );

  wndYourWindow.SetIcon ( hLargeIcon, TRUE );
  wndYourWindow.SetIcon ( hSmallIcon, FALSE );

// Win32 API:

HICON hLargeIcon = LoadIcon ( hinstYourModuleInstance,
                              MAKEINTRESOURCE(IDI_NEW_ICON) );
HICON hSmallIcon = (HICON) LoadImage ( hinstYourModuleInstance,
                                       MAKEINTRESOURCE(IDI_NEW_ICON),
                                       IMAGE_ICON, 16, 16, LR_DEFAULTCOLOR );
 
  SendMessage ( hwndYourWindow, WM_SETICON, ICON_BIG, hLargeIcon );
  SendMessage ( hwndYourWindow, WM_SETICON, ICON_SMALL, hSmallIcon );
```

## 如何在另一个进程中读取编辑框中的文本？
当您使用 GetWindowText（） 函数检索另一个进程中的窗口中的文本时，该函数的行为会有所不同。问题和解决方案的完整描述位于此 MSDN 杂志文章的第一个问题中。

## 如何限制我的窗口，使其大小不能调整为大于或小于特定大小？
您可以通过处理 WM_GETMINMAXINFO 消息来限制窗口的大小。您的处理程序接收指向 MINMAXINFO 结构的指针，您可以使用窗口的最小和/或最大大小填充该指针。下面是一个将窗口大小保持在 100x150 和 600x400 像素之间的示例。

```cpp
LRESULT OnGetMinMaxInfo ( WPARAM wParam, LPARAM lParam )
{
MINMAXINFO* pmmi = (MINMAXINFO*) lParam;
 
  pmmi->ptMinTrackSize.x = 100;
  pmmi->ptMinTrackSize.y = 150;
  pmmi->ptMaxTrackSize.x = 600;
  pmmi->ptMaxTrackSize.y = 400;
 
  return 0;
}
```






