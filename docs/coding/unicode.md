---
layout: doc
layoutClass: better-layout
---

# Unicode

## Unicode to UTF-8

```cpp
u32 unicode_to_utf8(u32 unicode)
{
    u32 res = 0;
    if(unicode < 0x80)
    {
        return unicode;
    }
    else if(unicode < 0x800)
    {
        u32 res2 = ((unicode & 0x7C0) << 2) | 0xC000;
        u32 res1 = (unicode & 0x3F) | 0x80;
        return res2 | res1;
    }
    else if(unicode < 0xD800)
    {
        u32 res3 = ((unicode & 0xF000) << 4) | 0xE00000;
        u32 res2 = ((unicode & 0xFC0) << 2)  | 0x8000;
        u32 res1 = (unicode & 0x3F) | 0x80;
        return res3 | res2 | res1;
    }
    else if(unicode < 0xE000)
    {
        
    }
    else if(unicode < 0x010000)
    {
        u32 res3 = ((unicode & 0xF000) << 4) | 0xE00000;
        u32 res2 = ((unicode & 0xFC0) << 2)  | 0x8000;
        u32 res1 = (unicode & 0x3F) | 0x80;
        return res3 | res2 | res1;
    }
    else if(unicode < 0x10FFFF)
    {
        u32 res4 = ((unicode & 0x1E0000) << 6) | 0xF0000000;
        u32 res3 = ((unicode & 0x3F000) << 4) | 0x800000;
        u32 res2 = ((unicode & 0xFC0) << 2)  | 0x8000;
        u32 res1 = (unicode & 0x3F) | 0x80;
        return res4 | res3 | res2 | res1;
    }
    else
    {
        return -1;
    }
}
```

## Unicode to UTF-16

```cpp
u32 unicode_to_utf16(u32 unicode)
{
    u32 res = 0;
    if(unicode < 0xD7FF)
    {
        return unicode;
    }
    else if(unicode < 0xDFFFF)
    {
        return -1;
    }
    else if(unicode < 0x10000)
    {
        return unicode;
    }
    else if(unicode < 0x10FFFF)
    {
        u32 x = unicodex - 0x10000;
        u32 res2 = 0xD800 | ((x & 0xFFC00) >> 10);
        u32 res1 = 0xDC00 | (x & 0x3FF);
        return (res2 << 16) | res1;
    }
    else
    {
        return -1;
    }
}
```

## Unicode to UTF-32

```cpp
u32 unicode_to_utf32(u32 unicode)
{
    return unicode;
}
```

## UTF-8 to Unicode

```cpp
u32 utf8_to_unicode(u32 utf8)
{
    u32 res = 0;
    if(utf8 < 0x80)
    {
        return utf8;
    }
    else if(utf8 < 0x800)
    {
        
    }
    else if(utf8 < 0xD800)
    {

    }
    else if(utf8 < 0xE000)
    {
        
    }
    else if(utf8 < 0x010000)
    {
        
    }
    else if(utf8 < 0x10FFFF)
    {
        
    }
    else
    {
        return -1;
    }
}
```

## UTF-16 to Unicode

```cpp
u32 utf16_to_unicode(u32 utf16)
{
    u32 res = 0;
    if(utf16 < 0xD7FF)
    {
        return utf16;
    }
    else if(utf16 < 0xDFFFF)
    {
        return -1;
    }
    else if(utf16 < 0x10000)
    {
        return utf16;
    }
    else if(utf16 < 0x10FFFF)
    {
        u32 utf16h = (utf16 >> 16) & 0xFFFF;
        u32 utf16l = utf16 & 0xFFFF;
        u32 resh = utf16h ^ 0xD800;
        u32 resl = utf16l ^ 0xDC00;
        u32 res = ((resh << 10) | resl) + 0x10000;
        return res;
    }
    else
    {
        
        return -1;
    }
}
```

## UTF-32 to Unicode

```cpp
u32 utf32_to_unicode(u32 utf32)
{
    return utf32;
}
```

## IsUTF8

```cpp
bool is_utf8()
```

## IsUTF16

```cpp
bool is_utf16()
```

## IsUTF32

```cpp
bool is_utf16()
```

## IsGB2312

```cpp
bool is_gb2312()
```

## IsGBK

```cpp
bool is_gbk()
```

## IsGB18030

```cpp
bool is_gb18030()
```
