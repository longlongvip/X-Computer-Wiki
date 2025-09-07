# 编码转换

```py
bytes_v = codes.decode(v.to_bytes(), 'decode-name', 'replace').encode('encode-name')
bytes_hex_v = "0x{}".format(bytes_v.hex())
res = "{{ {}, {} }}, // {}".format(hex(i), bytes_hex_i, bytes_i.decode('utf-8'))

```
