# API
Windows 应用程序接口（Windows API），或俗称的WinAPI，是微软Windows操作系统中的一套核心应用程序接口。Windows API这一叫法实际上是多个Windows平台上相似接口的统称，这些接口也拥有各自的名字，如Win32 API。几乎所有的Windows应用程序都在与 Windows API 进行交互。

Windows API将与Windows系统有关的复杂操作封装在简单的函数当中，编译成动态链接库，再随Windows一同发布。开发者可以简单地借助这些函数来完成复杂的操作，有效降低了编写Windows程序的难度。

Windows有一个软件开发包（SDK, software development kit）提供相应的文档和工具，以使程序员开发使用Windows API的软件和利用Windows技术。

C是Windows API（Win32）的主要编程语言，在该API的文档中所公开的函数和数据结构均以该语言进行了描述。但是，如果某种编程语言能够处理（明确定义的）低级数据结构，并能按照规定进行调用与回调，那么其编译器或汇编器也可以调用Windows API。类似地，在历史上Windows API也由多种语言进行了开发。尽管C不是面向对象的编程语言，但Windows API和Windows都具有面向对象的特性；同时，也有许多面向对象语言的包装类和扩展（如微软基础类库MFC、可视化组件库VCL、GDI+等）使这种面向对象的结构更加清晰。例如，Windows 8提供的Windows API和WinRT API就是用C++[3]实现的，并且在设计上也是面向对象的。

