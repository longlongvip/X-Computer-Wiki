---
layout: doc
layoutClass: better-layout
---

<style src=".vitepress/theme/style/width-layout.css"></style>

# Base64

## 在线工具

<div>
    编码
    <form method="post" width="50%">
        <select id="coding">
            <option>UTF-8</option>
            <option>Unicode 16 LE</option>
            <option>GB 18030</option>
        </select>
    </form>
    <div class="base64-1">
        <div class="left">
            输入
            <textarea rows="5" cols="20"> </textarea>
        </div>
        <div class="right">
            输出
            <textarea rows="5" cols="20"> </textarea>
        </div>
    </div>
    <div class="base64-2">
        <button class="base64-bt">编码</button>
        <button class="base64-bt">解码</button>
        <button class="base64-bt">清空</button>
    </div>
</div>

<style>
.base64-1 {
    display: flex;
    flex-direction: row;
}

.left, .right{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-right: 10px;
    width: 100%;
}

.base64-2 {
    display: flex;
    flex-direction: row;
}

.base64-bt {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
}
</style>

## 什么是 Base64

Base64 是一种基于 64 个可打印字符来表示二进制数据的表示方法。
由于 $\log_{2}64=6$，所以每 6 个比特为一个单元，对应某个可打印字符
3 个字节相当于 24 个比特，对应于 4 个 Base64 单元，即 3 个字节可由 4 个可打印字符来表示

Base64 被设计用来在只可靠地支持文本内容的渠道中传输以二进制格式存储的数据。Base64 在万维网上特别流行，它的用途之一是能够将图像文件或其他二进制数据转化为文本，如 HTML 和 CSS 文件

Base64也被广泛用于发送电子邮件附件。这是有必要的，因为SMTP在其最初的形式中，被设计为只传输7位ASCII字符。这种编码会造成33-36%的开销（33%是由编码本身造成的；最多3%是由插入的换行符造成的）

## Bas64 编码表

在 Base64 中的可打印字符包括字母 A-Z、a-z、数字 0-9，这样共有 62 个字符，此外两个可打印符号 + 和 / 在不同的系统中而不同

- 从 0 到 25 ，也就是从 000000 到 011001，是 ASCII 字符 A - Z
- 从 26 到 51，也就是从 011010 到 110011，是 ASCII 字符 a - z
- 从 52 到 61，也就是从 110100 到 111101，是 ASCII 字符 0 - 9
- 62 （111110）是 ASCII 字符 +
- 63 （111111）是 ASCII 字符 /

## Base64 缀词

因为 Base64 是每 6 个比特进行一次编码，而现代电脑上的编码值被分为了一个个 8 比特的字节，因此，在 Base64 编码的文本中，每 4 个字符表示三个字节的未编码的文本或数据。这就意味着，当未编码的输入的字节数不是 3 的倍数时，编码输出必须加上缀词来使得输出的长度是 4 的倍数。这个缀词便是 = ，它表明：不再需要更多的比特来进行解码。

= 数量规则如下：

- 若源数据的字节数是 3 的倍数，则不需要加 =
- 若源数据的字节数除 3 余 1，则加 2 个 =
- 若源数据的字节数除 3 余 2，则加 1 个 =

## Base64索引表

<table>
    <tr>
        <th scope="col">数值</th>
        <th scope="col">字符</th>
        <td rowspan="17">&nbsp;</td>
        <th scope="col">数值</th>
        <th scope="col">字符</th>
        <td rowspan="17">&nbsp;</td>
        <th scope="col">数值</th>
        <th scope="col">字符</th>
        <td rowspan="17">&nbsp;</td>
        <th scope="col">数值</th>
        <th scope="col">字符</th>
    </tr>
    <tr>
        <td>0</td>
        <td>A</td>
        <td>16</td>
        <td>Q</td>
        <td>32</td>
        <td>g</td>
        <td>48</td>
        <td>w</td>
    </tr>
    <tr>
        <td>1</td>
        <td>B</td>
        <td>17</td>
        <td>R</td>
        <td>33</td>
        <td>h</td>
        <td>49</td>
        <td>x</td>
    </tr>
    <tr>
        <td>2</td>
        <td>C</td>
        <td>18</td>
        <td>S</td>
        <td>34</td>
        <td>i</td>
        <td>50</td>
        <td>y</td>
    </tr>
    <tr>
        <td>3</td>
        <td>D</td>
        <td>19</td>
        <td>T</td>
        <td>35</td>
        <td>j</td>
        <td>51</td>
        <td>z</td>
    </tr>
    <tr>
        <td>4</td>
        <td>E</td>
        <td>20</td>
        <td>U</td>
        <td>36</td>
        <td>k</td>
        <td>52</td>
        <td>0</td>
    </tr>
    <tr>
        <td>5</td>
        <td>F</td>
        <td>21</td>
        <td>V</td>
        <td>37</td>
        <td>l</td>
        <td>53</td>
        <td>1</td>
    </tr>
    <tr>
        <td>6</td>
        <td>G</td>
        <td>22</td>
        <td>W</td>
        <td>38</td>
        <td>m</td>
        <td>54</td>
        <td>2</td>
    </tr>
    <tr>
        <td>7</td>
        <td>H</td>
        <td>23</td>
        <td>X</td>
        <td>39</td>
        <td>n</td>
        <td>55</td>
        <td>3</td>
    </tr>
    <tr>
        <td>8</td>
        <td>I</td>
        <td>24</td>
        <td>Y</td>
        <td>40</td>
        <td>o</td>
        <td>56</td>
        <td>4</td>
    </tr>
    <tr>
        <td>9</td>
        <td>J</td>
        <td>25</td>
        <td>Z</td>
        <td>41</td>
        <td>p</td>
        <td>57</td>
        <td>5</td>
    </tr>
    <tr>
        <td>10</td>
        <td>K</td>
        <td>26</td>
        <td>a</td>
        <td>42</td>
        <td>q</td>
        <td>58</td>
        <td>6</td>
    </tr>
    <tr>
        <td>11</td>
        <td>L</td>
        <td>27</td>
        <td>b</td>
        <td>43</td>
        <td>r</td>
        <td>59</td>
        <td>7</td>
    </tr>
    <tr>
        <td>12</td>
        <td>M</td>
        <td>28</td>
        <td>c</td>
        <td>44</td>
        <td>s</td>
        <td>60</td>
        <td>8</td>
    </tr>
    <tr>
        <td>13</td>
        <td>N</td>
        <td>29</td>
        <td>d</td>
        <td>45</td>
        <td>t</td>
        <td>61</td>
        <td>9</td>
    </tr>
    <tr>
        <td>14</td>
        <td>O</td>
        <td>30</td>
        <td>e</td>
        <td>46</td>
        <td>u</td>
        <td>62</td>
        <td>+</td>
    </tr>
    <tr>
        <td>15</td>
        <td>P</td>
        <td>31</td>
        <td>f</td>
        <td>47</td>
        <td>v</td>
        <td>63</td>
        <td>/</td>
    </tr>
</table>

## 编码示例
Man的结果为TWFu，详细原理如下表所示：
<table>
    <tr>
        <th scope="row">文本</th>
        <td colspan="8" align="center"><b>M</b></td>
        <td colspan="8" align="center"><b>a</b></td>
        <td colspan="8" align="center"><b>n</b></td>
    </tr>
    <tr>
        <th scope="row">ASCII编码</th>
        <td colspan="8" align="center">77</td>
        <td colspan="8" align="center">97</td>
        <td colspan="8" align="center">110</td>
    </tr>
    <tr>
        <th scope="row">二进制位</th>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
    </tr>
    <tr>
        <th scope="row">索引</th>
        <td colspan="6" align="center">19</td>
        <td colspan="6" align="center">22</td>
        <td colspan="6" align="center">5</td>
        <td colspan="6" align="center">46</td>
    </tr>
    <tr>
        <th scope="row">Base64编码</th>
        <td colspan="6" align="center"><b>T</b></td>
        <td colspan="6" align="center"><b>W</b></td>
        <td colspan="6" align="center"><b>F</b></td>
        <td colspan="6" align="center"><b>u</b></td>
    </tr>
</table>

如果要编码的字节数不能被3整除，最后会多出1个或2个字节，那么可以使用下面的方法进行处理：先使用0字节值在末尾补足，使其能够被3整除，然后再进行Base64的编码。在编码后的Base64文本后加上一个或两个=号，代表补足的字节数。也就是说，当最后剩余两个八位(待补足)字节（2个byte）时，最后一个6位的Base64字节块有四位是0值，最后附加上两个等号；如果最后剩余一个八位(待补足)字节（1个byte）时，最后一个6位的base字节块有两位是0值，最后附加一个等号。 参考下表：

<table>
    <tr>
        <th scope="row">文本（1 Byte）</th>
        <td colspan="8" align="center"><b>A</b></td>
        <td colspan="8" align="center"></td>
        <td colspan="8" align="center"></td>
    </tr>
    <tr>
        <th scope="row">二进制位</th>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
    </tr>
    <tr>
        <th scope="row">二进制位（补0）</th>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td><b>0</b></td>
        <td><b>0</b></td>
        <td><b>0</b></td>
        <td><b>0</b></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
    </tr>
    <tr>
        <th scope="row">Base64编码</th>
        <td colspan="6" align="center"><b>Q</b></td>
        <td colspan="6" align="center"><b>Q</b></td>
        <td colspan="6" align="center">=</td>
        <td colspan="6" align="center">=</td>
    </tr>
    <tr>
        <th scope="row">文本（2 Byte）</th>
        <td colspan="8" align="center"><b>B</b></td>
        <td colspan="8" align="center"><b>C</b></td>
        <td colspan="8" align="center"></td>
    </tr>
    <tr>
        <th scope="row">二进制位</th>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
    </tr>
    <tr>
        <th scope="row">二进制位（补0）</th>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td><b>0</b></td>
        <td><b>0</b></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
    </tr>
    <tr>
        <th scope="row">Base64编码</th>
        <td colspan="6" align="center"><b>Q</b></td>
        <td colspan="6" align="center"><b>k</b></td>
        <td colspan="6" align="center"><b>M</b></td>
        <td colspan="6" align="center">=</td>
    </tr>
</table>

## 代码实现
