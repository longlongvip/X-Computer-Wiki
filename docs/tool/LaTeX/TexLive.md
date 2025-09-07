# TexLive
## 简介
TeX Live是由国际TEX使用者群组（TeX Users Group，TUG）整理和发布的TEX软体发行套装，包含与TeX系统相关的各种程式、编辑与检视工具、常用宏包及文件、常用字型及多国语言支援。TeX Live是许多Linux/Unix系统（比如Fedora、Debian、Ubuntu、Gentoo以及OpenBSD、FreeBSD、NetBSD等）预设或推荐的TEX套装，同时也支援包括Windows和Mac OS X等在内的其它作业系统。TeX Live是开发状态最为活跃的TeX发行版之一，保持著每年一版的更新频率。TeX Live属于免费软体。

## 安装
### Windows
- 下载
[在线安装器](https://mirror.ctan.org/systems/texlive/tlnet/install-tl-windows.exe)
[离线安装包](https://mirrors.tuna.tsinghua.edu.cn/CTAN/systems/texlive/Images/)

- 安装

- 验证
打开终端，依次输入一下命令
```bash
tex -v
latex -v
xelatex -v
pdflatex -v
```
看到的版本信息能够正常输出，那么TeX Live的安装就成功啦😄
