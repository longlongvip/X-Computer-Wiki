# Ubuntu
## 换源
- 备份
```bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
```
- 更换
源：https://wiki.ubuntu.org.cn/%E6%A8%A1%E6%9D%BF:16.04source
```bash
sudo gedit /etc/apt/sources.list
```
- 更新
```bash
sudo apt-get update
```

## 增加 SWAP 交换空间
- 查看当前系统的 SWAP 大小
```bash
free -m
```
- 创建一个 SWAP 文件
```bash
mkdir /home/roo/swapfile
cd /home/roo/swapfile
sudo dd if=/dev/zero of=swap bs=1G count=61
```
- 转换 SWAP 文件
```bash
sudo mkswap -f swap
```
- 激活 SWAP 文件
```bash
sudo swapon swap
```
- 卸载
```bash
sudo swapoff swap
```
- 再次查看当前系统的 SWAP 大小
```bash
free -m
```
- 永久生效
```bash
sudo nano /etc/fstab
/home/roo/swapfile/swap none swap defaults 0 0
```
- SWAP 大小推荐表
| RAM 大小 | SWAP 大小 | 激活 SWAP 后合计大小 |
| -- | -- | -- |
| 256 MB | 256 MB | 512 MB |
| 512 MB | 512 MB | 1 GB |
| 1 GB | 1 GB | TD |
| 3 GB | 2 GB | TD |
| 4 GB | 2 GB | TD |
| 6 GB | 2 GB | TD |
| 8 GB | 3 GB | TD |
| 12 GB | 3 GB | TD |
| 16 GB | 4 GB | TD |
| 32 GB | 6 GB | TD |
| 64 GB | 8 GB | TD |
| 128 GB | 11 GB | TD |