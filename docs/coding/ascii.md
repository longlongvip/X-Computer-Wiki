---
layout: doc
layoutClass: better-layout
---

# ASCII

上个世纪 60 年代，美国制定了一套字符编码，对 **常用字符与二进制位之间的关系** 做了统一规定，这被称为 ASCII 码并一直沿用至今

ASCII 码一共规定了 128 个字符的编码，比如空格 “SPACE” 是 32，大写的字母 A 是 65。这 128 个符号(包括 32 个不能打印出来的控制符号)，只占用了一个字节的后面 7 位，最前面的 1 位统一规定为 0

## 查找

<script setup>
    const ascii_desc = [
    "NUL(NULL), 空字符",
    "SOH(Start Of Headling), 标题开始",
    "STX(Start Of Text), 正文开始",
    "ETX(End Of Text), 正文结束",
    "EOT(End Of Transmission), 传输结束",
    "ENQ(Enquiry), 请求",
    "ACK(Acknowledge), 回应/响应/收到通知",
    "BEL(Bell), 响铃",
    "BS(Backspace), 退格",
    "HT(Horizontal Tab), 水平制表符",
    "LF/NL(Line Feed/New Line), 换行键",
    "VT(Vertical Tab), 垂直制表符",
    "FF/NP(Form Feed/New Page), 换页键",
    "CR(Carriage Return), 回车键",
    "SO(Shift Out), 不用切换",
    "SI(Shift In), 启用切换",
    "DLE(Data Link Escape), 数据链路转义",
    "DC1/XON(Device Control 1/Transmission On), 设备控制1/传输开始",
    "DC2(Device Control 2), 设备控制2",
    "DC3/XOFF(Device Control 3/Transmission Off), 设备控制3/传输中断",
    "DC4(Device Control 4), 设备控制4",
    "NAK(Negative Acknowledge), 无响应/非正常响应/拒绝接收",
    "SYN(Synchronous Idle), 同步空闲",
    "ETB(End of Transmission Block), 传输块结束/块传输终止",
    "CAN(Cancel), 取消",
    "EM(End of Medium), 已到介质末端/介质存储已满/介质中断",
    "SUB(Substitute), 替补/替换",
    "ESC(Escape), 逃离/取消",
    "FS(File Separator), 文件分割符",
    "GS(Group Separator), 组分隔符/分组符",
    "RS(Record Separator), 记录分离符",
    "US(Unit Separator), 单元分隔符",
    "(Space), 空格",
    "!, 叹号",
    '", 双引号',
    "#, #",
    "$, 美元符合",
    "%, 百分号",
    "&, &",
    "', 单引号",
    "(, 左括号",
    "), 右括号",
    "*, *",
    "+, +",
    ", , , ",
    "-, -",
    "., .",
    "/, /",
    "0, 0",
    "1, 1",
    "2, 2",
    "3, 3",
    "4, 4",
    "5, 5",
    "6, 6",
    "7, 7",
    "8, 8",
    "9, 9",
    ":, 冒号",
    ";, 分号",
    "<, 小于号",
    "=, 等于号/赋值",
    ">, 大于号",
    "?, 问号",
    "@, @",
    "A, A",
    "B, B",
    "C, C",
    "D, D",
    "E, E",
    "F, F",
    "G, G",
    "H, H",
    "I, I",
    "J, J",
    "K, K",
    "L, L",
    "M, M",
    "N, N",
    "O, O",
    "P, P",
    "Q, Q",
    "R, R",
    "S, S",
    "T, T",
    "U, U",
    "V, V",
    "W, W",
    "X, X",
    "Y, Y",
    "Z, Z",
    "[, 左中括号",
    "\\,  \\",
    "], 右中括号",
    "^, ^",
    "_, 下划线",
    "`, 顿号",
    "a, a",
    "b, b",
    "c, c",
    "d, d",
    "e, e",
    "f, f",
    "g, g",
    "h, h",
    "i, i",
    "j, j",
    "k, k",
    "l, l",
    "m, m",
    "n, n",
    "o, o",
    "p, p",
    "q, q",
    "r, r",
    "s, s",
    "t, t",
    "u, u",
    "v, v",
    "w, w",
    "x, x",
    "y, y",
    "z, z",
    "{, 做花括号",
    "|, 竖线",
    "}, 右花括号",
    "~, 连接符",
    "DEL, 删除"
];

</script>

<table>
    <tr>
        <th>ASCII</th>
        <th>字符</th>
        <th>含义</th>
        <th>二进制</th>
        <th>八进制</th>
        <th>十六进制</th>
        <th>HTML 数值</th>
    </tr>
    <tr v-for="i in 128">
        <th>{{ i-1 }}</th>
        <th>{{ ascii_desc[i - 1].split(',')[0]}}</th>
        <th>{{ ascii_desc[i - 1].split(',')[1] }}</th>
        <th>{{ (i - 1).toString(2) }}</th>
        <th>{{ (i - 1).toString(8) }}</th>
        <th>{{ (i - 1).toString(16) }}</th>
        <th>{{ '&#' + (i - 1).toString(10) }}</th>
    </tr>

</table>
