# 操作系统

## 为什么学习操作系统？

想搞明白原理，然后做一些东西

## 为什么 Ctrl + C 有时无法退出程序？[Vim?](https://stackoverflow.blog/2017/05/23/stack-overflow-helping-one-million-developers-exit-vim/)

因为 Ctrl + C 是向进程发送 SIGINT 信号，而 SIGINT 的默认处理是终止进程，有些程序会忽略 SIGINT 信号，比如 Vim

## 概念

- 设备
    - [鼠标](mouse.md)
    - [键盘](keyboard.md)
    - [显示器]()
    - [打印机]
    - [扫描仪]
    - [网卡]
    - [磁盘]
    - [内存]
- [进程](process.md)
- [线程](thread.md)
- [协程](coroutine.md)
- [虚拟内存](virtual_memory.md)
- [文件系统](file_system.md)
- [网络](network.md)
- [系统调用](system_call.md)
- [并发](concurrency.md)
- [并行](parallelism.md)
- [同步](synchronization.md)
- [异步](asynchronization.md)
- [信号](signal.md)
- [管道](pipe.md)
- [共享内存](shared_memory.md)
- [互斥锁](mutex.md)
- [信号量](semaphore.md)
- [进程间通信](process_communication.md)
- [线程间通信](thread_communication.md)
- [进程调度](process_scheduling.md)
- [线程调度](thread_scheduling.md)
- [锁](lock.md)
- [死锁](deadlock.md)
- [竞争](race_condition.md)
- [原子操作](atomic_operation.md)
- 

## 