# Pypi

## 检查 Python 安装与版本

```bash
py --version
```

## 检查 Pip 安装与版本

```bash
py -m pip --version
```

## 在线安装包——来自 Github

```bash
py -m pip install git+https://github.com/pypa/sampleproject.git@main
```

## 离线安装包——来自源代码

```bash
py -m pip install sampleproject-1.0.tar.gz
```

## 离线安装包——来自 wheel

```bash
py -m pip install sampleproject-1.0-py3-none-any.whl
```

## 在线安装包——来自 requirements 文件

```bash
py -m pip install -r requirements.txt
```

## 升级包

```bash
py -m pip install --upgrade sampleproject
```

## 卸载包

```bash
py -m pip uninstall sampleproject
```

## 安装 pip

通常，pip 会自动安装，如果 Python 环境没有安装 pip，那么使用一下方法

- ensurepip

```bash
 py -m ensurepip --upgrade
```

- get-pip.py
下载 `get-pip.py` 来自 <https://bootstrap.pypa.io/get-pip.py> 打开终端/命令提示符，`cd` 到包含 `get-pip.py` 的文件夹并运行

```bash
py get-pip.py
```

- zip
下载 `pip.pyz` 来自 <https://bootstrap.pypa.io/pip/pip.pyz> 打开终端/命令提示符，`cd` 到包含 `pip.pyz` 的文件夹并运行

```bash
py pip.pyz --help
```

## 升级 pip

```bash
py -m pip install --upgrade pip
```

## 获取 pip 参数

```bash
py -m pip
```

## 安装最新版本的包

```bash
py -m pip install SomePackage # latest version
```

## 安装指定版本的包

```bash
py -m pip install SomePackage==1.0.4 # specific version
```

## 安装最小版本的包

```bash
py -m pip install 'SomePackage>=1.0.4' # minimum version
```

## 使用代理

`pip` 可以配置为以各种方式通过代理服务器进行连接：

- 使用 `--proxy` 命令行选项以以下形式指定代理

```bash
scheme://[user:passwd@]proxy.server:port
```

- 在配置文件中使用代理
- 通过设置标准环境变量 `http_proxy`、`https_proxy` 和 `no_proxy`
- 使用环境变量 `PIP_USER_AGENT_USER_DATA` 在 `pip` 请求中使用的用户代理变量中包含 `JSON` 编码的字符串。

## 使用 requirements.txt 文件安装包

```bash
py -m pip install -r requirements.txt
```

## 生成 requirements 文件

```bash
py -m pip freeze > requirements.txt
```

## 使用 constraints.txt 文件安装包

```bash
py -m pip install -r constraints.txt
```

## 从 wheels 文件安装包

- 直接安装

```bash
py -m pip install SomePackage-1.0-py2.py3-none-any.whl
```

- 要将 `provides_extras` 元数据中提供的可选依赖项包含在 `wheel` 中，必须在安装目标名称前后加上引号

```bash
py -m pip install './somepackage-1.0-py2.py3-none-any.whl[my-extras]'
```

⚠️ 将来，`path[extras]` 语法可能会被弃用。建议尽可能使用PEP 508语法

## 卸载包

```bash
py -m pip uninstall SomePackage
```

## 列出安装的包

```bash
py -m pip list 
```

## 列出安装包的信息

```bash
py -m pip show sphinx
```

## 搜索包

```bash
py -m pip search "query"
```
