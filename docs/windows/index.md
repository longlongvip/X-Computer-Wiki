# Windows 开发

## Windows 数据类型

| 数据类型  |  标准数据类型  | 说明 |
|:---------:|:--------------:|:----:|
|   ATOM    | unsigned short |      |
|   BOOL    |      int       |      |
|  BOOLEAN  |      int       |      |
|   BYTE    | unsigned char  |      |
| CALLBACK  |   __stdcall    |      |
|   CCHAR   |      char      |      |
| COLORREF  | unsigned long  |      |
|   CONST   |     const      |      |
|   DWORD   | unsigned long  |      |
|   FLOAT   |     float      |      |
|  HANDLE   |     void*      |      |
|  HBITMAP  |     HANDLE     |      |
|  HBRUSH   |     HANDLE     |      |
|  HCURSOR  |     HANDLE     |      |
|    HDC    |     HANDLE     |      |
|   HDESK   |     HANDLE     |      |
|   HFONT   |     HANDLE     |      |
|   HFILE   |     HANDLE     |      |
|  HGDIOBJ  |     HANDLE     |      |
|   HOOK    |     HANDLE     |      |
|   HICON   |     HANDLE     |      |
| HINSTANCE |     HANDLE     |      |
|   HKEY    |     HANDLE     |      |
|  HMODULE  |     HANDLE     |      |
|   HMENU   |     HANDLE     |      |
|   HWND    |     HANDLE     |      |
|  HRESULT  |      long      |      |
|    INT    |      int       |      |

## Windows 新数据类型

| 新数据类型 |  标准数据类型  |      说明       |
|:----------:|:--------------:|:-------------:|
|  DWORD32   | unsigned short | 32 位无符号整数 |
|  DWORD64   | unsigned short | 64 位无符号整数 |
|   INT32    | unsigned short | 32 位带符号整数 |
|   INT64    | unsigned short | 64 位带符号整数 |
|   LONG32   | unsigned short | 32 位带符号整数 |
|   LONG64   | unsigned short | 64 位带符号整数 |
|   UINT32   | unsigned short | 无符号的 INT32  |
|   UINT64   | unsigned short | 无符号的 INT64  |
|  ULONG32   | unsigned short | 无符号的 LONG32 |
|  ULONG64   | unsigned short | 无符号的 LONG64 |

## Unicode

## 数据结构

- WIN32_FIND_DATAW

```cpp
typedef struct _WIN32_FIND_DATAW {
    DWORD    dwFileAttributes;
    FILETIME ftCreationTime;
    FILETIME ftLastAccessTime;
    FILETIME ftLastWriteTime;
    DWORD    nFileSizeHigh;
    DWORD    nFileSizeLow;
    DWORD    dwReserved0;
    DWORD    dwReserved1;
    WCHAR    cFileName[MAX_PATH];
    WCHAR    cAlternateFileName[14];
    DWORD    dwFileType; // Obsolete. Do not use.
    DWORD    dwCreatorType; // Obsolete. Do not use
    WORD     wFinderFlags; // Obsolete. Do not use
} WIN32_FIND_DATAW, *PWIN32_FIND_DATAW, *LPWIN32_FIND_DATAW;
```

- LARGE_INTEGER

```cpp
typedef union _LARGE_INTEGER {
    struct {
        DWORD LowPart;
        LONG  HighPart;
    } DUMMYSTRUCTNAME;

    struct {
        DWORD LowPart;
        LONG  HighPart;
    } u;
    LONGLONG QuadPart;
} LARGE_INTEGER;
```