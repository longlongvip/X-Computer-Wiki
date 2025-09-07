# 删除

## Web

### 快速删除 node_modules

```bash
rd /s /q node_modules
Remove-item -Force -Recurse node_modules

npm install rimraf -g
rimraf node_modules
```
