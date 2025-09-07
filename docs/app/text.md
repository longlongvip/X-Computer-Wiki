# 文本处理

## 处理 Wolfram 链接

```py
file_path = "Images.md"
with open(file_path, "r") as f:
    data = f.read()  # 读取文件

data = data.strip("# Images").replace("\\", "").replace("\"", "").split(',')
data_links = []
for data_e in data:
    data_e = data_e.strip().replace(' ', '').replace('\n', '').replace('\t', '').replace('\r', '').strip()
    data_e = data_e.replace("thumb/", "").split("/")
    print(data_e)
    data_link = "/".join(data_e[:-1])
    data_links.append(data_link)


def WriteFile(file_path, list):
    with open(file_path, "w", encoding="utf-8") as f_write:
        for list_e in list:
            f_write.write(list_e + "\n")


WriteFile("WolframLinks.txt", data_links)
```
