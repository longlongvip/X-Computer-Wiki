---
title: LaTeX
keywords: 常用, 推荐, 开发
desc: LaTex 使用
layout: doc
date: 2022-09-01
---

# Scoop

## 简介

Scoop是一个Win­dows包管理工具，类似于 De­bian 的apt、ma­cOS 的 homebrew。它由开源社区驱动，体验可能是目前所有Win­dows包管理工具中最好的。对于开发者来说，包管理器能非常方便的部署开发环境，比如Python、Node.js。而对于使用者来说，可以方便的安装一些常用软件，尤其是开源软件，免去了手动去官网下载的繁琐步骤，而且后续对软件进行升级只需要输入一行命令，非常便捷。

## 官网

[Scoop](https://scoop.sh/)

## 必须的环境要求

- 系统 Windows 10/11
- 终端
- **Windows的用户名英文，Windows 用户环境变量中路径值不支持中文字符**
- **正常、快速的访问 GitHub 并下载资源**

## 安装

Scoop默认使用普通用户权限，其本体和安装的软件默认会放在%USERPROFILE%\scoop(即C:\Users\用户名\scoop)，使用管理员权限进行全局安装(-g)的软件在C:\ProgramData\scoop。如果有自定安装路径的需求，那么要提前设置好环境变量，否则后续再改不是一件容易的事情。

- 打开终端
- 设置用户安装路径

```sh
\$env:SCOOP="D:\Scoop"
[Environment]::SetEnvironmentVariable('SCOOP', \$env:SCOOP, 'User')
```

- 设置全局安装路径（需要管理员权限）

```sh
\$env:SCOOP_GLOBAL='D:\Scoop_Global'
[Environment]::SetEnvironmentVariable('SCOOP_GLOBAL', \$env:SCOOP_GLOBAL, 'Machine')
```

- 设置允许 powershell 执行本地脚本

```sh
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

- 安装 Scoop

```sh
iwr -useb get.scoop.sh | iex
```

- 没安装过 Git 则需要安装。

```sh
scoop install git
```

## 基础使用

- scoop search app - 搜索软件
- scoop install app - 安装软件
- scoop info app - 查看软件详细信息
- scoop list - 查看已安装软件
- scoop uninstall app - 卸载软件，-p删除配置文件。
- scoop update - 更新 scoop 本体和软件列表
- scoop update app - 更新指定软件
- scoop update * - 更新所有已安装的软件
- scoop checkup - 检查 scoop 的问题并给出解决问题的建议
- scoop help - 查看命令列表
- scoop help command - 查看命令帮助说明

## 添加 bucket

所有的包管理器都会有相应的软件仓库 ，而bucket就是Scoop中的软件仓库。细心的你可能会发现scoop翻译为中文是 “舀”，而bucket是“水桶”，所以安装软件可以理解为从水桶里舀水，似乎很形象的说。

Scoop默认软件仓库（main bucket）软件数量是有限的，但是可以进行额外的添加。通过`scoop bucket known`命令可以查看官方认可的bucket：

```sh
scoop bucket known

main
extras
versions
nightlies
nirsoft
php
nerd-fonts
nonportable
java
games
jetbrains
```

以上官方认可的 bucket 可以通过下面这个命令直接添加：

```sh
scoop bucket add <bucketname>
```

extras 涵盖了大部分因为种种原因不能被收录进主仓库的常用软件，这个是强推荐添加的。

```sh
scoop bucket add extras
```

比如博主经常会使用到的写盘工具 Ru­fus 就在 extras 这个仓库中。

```sh
scoop install rufus
```

nerd-fonts 包含了美化终端时会用到的 Pow­er­line 字体

```sh
scoop bucket add nerd-fonts
```

当添加 nerd-fonts 仓库后可以通过以下命令搜索到所有的字体：

```sh
scoop search "-NF"
```

安装字体需要使用管理员权限：

```sh
sudo scoop install FiraCode-NF
```

## 第三方 bucket

添加第三方 bucket

```sh
scoop bucket add <bucketname> https://github.com/xxx/xxx
```

从第三方 bucket 中安装软件

```sh
scoop install <bucketname>/app
```

## 清理安装包缓存

Scoop会保留下载的安装包，对于卸载后又想再安装的情况，不需要重复下载。但长期累积会占用大量的磁盘空间，如果用不到就成了垃圾。这时可以使用scoopcache命令来清理。

scoopcacheshow-显示安装包缓存
scoopcachermapp-删除指定应用的安装包缓存
scoopcacherm*-删除所有的安装包缓存
如果你不希望安装和更新软件时保留安装包缓存，可以加上-k或--no-cache选项来禁用缓存：

scoopinstall-kapp
scoopupdate-k*

## 删除旧版本软件

当软件被更新后Scoop还会保留软件的旧版本，更新软件后可以通过scoopcleanup命令进行删除。

scoopcleanupapp-删除指定软件的旧版本
scoopcleanup*-删除所有软件的旧版本
与安装软件一样，删除旧版本软件的同时也可以清理安装包缓存，同样是加上-k选项。

scoopcleanup-kapp-删除指定软件的旧版本并清除安装包缓存
scoopcleanup-k*-删除所有软件的旧版本并清除安装包缓存

## 全局安装

全局安装就是给系统中的所有用户都安装，且环境变量是系统变量，对于需要设置系统变量的一些软件就需要全局安装，比如Node.js、Python，否则某些情况会出现无法找到命令的问题。

使用scoopinstallapp命令加上-g或--global选项可对软件进行全局安装，全局安装需要管理员权限，所以需要提前以管理员权限运行的Pow­er­Shell。更简单的方式是先安装sudo，然后用sudo命令来提权执行：

scoopinstallsudo
sudoscoopinstall-gapp
达成在Win­dows上使用sudo的成就
使用scooplist命令查看已装软件时，全局安装的软件末尾会有*global*标志。

```sh
scooplist

Installedapps:

7zip19.00
adb30.0.0
aria21.35.0-1
busybox3466-g53c09d0e1
CascadiaCode-NF2.1.0[nerd-fonts]
colortool1904.29002
dark3.11.2*global*
ffmpeg4.2.3
figlet1.0-go
FiraCode-NF2.1.0[nerd-fonts]
git2.26.2.windows.1*global*
innounp0.49
iperf33.1.3
lessmsi1.6.91*global*
lxrunoffline3.4.1[extras]
nano4.9-4
neofetch7.0.0
nodejs-lts12.17.0*global*
python3.8.3*global*
rclone1.52.0
rufus3.10[extras]
screentogif2.24.2[extras]
sudo0.2020.01.26
```

此外对于全局软件的更新和卸载等其它操作，都需要加上-g选项：

sudoscoopupdate-g*-更新所有软件（且包含全局软件）
sudoscoopuninstall-gapp-卸载全局软件
sudoscoopuninstall-gpapp-卸载全局软件（并删除配置文件）
sudoscoopcleanup-g*-删除所有全局软件的旧版本
sudoscoopcleanup-gk*-删除所有全局软件的旧版本（并清除安装包包缓存）

## 代理设置

Scoop默认使用的是系统代理，如果你想手动指定代理，可以输入下面的命令。需要注意的是只支持http协议。

scoopconfigproxylocalhost:1080
设置完可以通过scoopconfigproxy查看。
如果你想取消代理，那么输入下面的命令，这将会恢复使用系统代理。

scoopconfigrmproxy
开启多线程下载
使用Scoop安装Aria2后，Scoop会自动调用Aria2进行多线程加速下载。

scoopinstallaria2
使用scoopconfig命令可以对Aria2进行设置，比如scoopconfigaria2-enabledfalse可以禁止调用Aria2下载。以下是与Aria2有关的设置选项：

aria2-enabled:开启Aria2下载，默认true
aria2-retry-wait:重试等待秒数，默认2
aria2-split:单任务最大连接数，默认5
aria2-max-connection-per-server:单服务器最大连接数，默认5，最大16
aria2-min-split-size:最小文件分片大小，默认5M
博主在这里推荐以下优化设置，单任务最大连接数设置为32，单服务器最大连接数设置为16，最小文件分片大小设置为1M

scoopconfigaria2-split32
scoopconfigaria2-max-connection-per-server16
scoopconfigaria2-min-split-size1M

## 常用命令总结

看到这里一定有很多小伙伴已经懵逼了，最后总结一波Scoop在日常使用中的常用命令：

# 更新scoop及软件包列表
scoopupdate

## 安装软件 ##
# 非全局安装（并禁止安装包缓存）
scoopinstall-kapp
# 全局安装（并禁止安装包缓存）
sudoscoopinstall-gkapp

## 卸载软件 ##
# 卸载非全局软件（并删除配置文件）
scoopuninstall-papp
# 卸载全局软件（并删除配置文件）
sudoscoopuninstall-gpapp

## 更新软件 ##
# 更新所有非全局软件（并禁止安装包缓存）
scoopupdate-k*
# 更新所有软件（并禁止安装包缓存）
sudoscoopupdate-gk*

## 垃圾清理 ##
# 删除所有旧版本非全局软件（并删除软件包缓存）
scoopcleanup-k*
# 删除所有旧版本软件（并删除软件包缓存）
sudoscoopcleanup-gk*
# 清除软件包缓存
scoopcacherm*

## 尾巴

Scoop的使用方法和功能远不止上面提及的这些，但作为一个普通用户也只会用到一些基本的命令和功能。纵观全网也很少有人把基础功能都说明白，这也是在0202年咕鸽随便一搜一大把Scoop教程和笔记文章的情况下博主依然写这样一篇更加全面教程的原因。希望这篇教程对你有所帮助。

## 参考

- <https://p3terx.com/archives/scoop-the-best-windows-package-manager.html>
- <https://github.com/ScoopInstaller/Scoop>
