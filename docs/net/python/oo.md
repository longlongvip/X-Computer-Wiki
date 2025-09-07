# 面向对象

## 类的定义
```python
class Name:

    # 限定Person对象只能绑定v1, v2, _v3和v4r属性
    __slots__ = ('v1', 'v2, '_v3', 'v4')
    def __init__(self, v1, v2, v3):
        self.v1 = v1
        self.v2 = v2
        self._v3 = v3 # 保护成员

    def f():
        # Public 成员函数
        print(v1, v2)

    def __g():
        # Private 成员函数

    def _h():
        # Protect 成员函数
    
    @staticmethod
    def i():
        # 静态方法

    #classmethod
    def j(cls, v1, v2):
        # 类方法
        return cls(v1, v2);

    @property
    # 访问器 - getter方法
    def v3(self):
        return self._v3

    @v3.setter
    # 修改器 - setter方法
    def v3(self, v3):
        self._v3 = v3
    
         
```

## 类的使用
```python
name = Name(1, 2)
```

## 类的关系
类和类之间的关系有三种：is-a、has-a和use-a关系。

is-a关系也叫继承或泛化，比如学生和人的关系、手机和电子产品的关系都属于继承关系。
has-a关系通常称之为关联，比如部门和员工的关系，汽车和引擎的关系都属于关联关系；关联关系如果是整体和部分的关联，那么我们称之为聚合关系；如果整体进一步负责了部分的生命周期（整体和部分是不可分割的，同时同在也同时消亡），那么这种就是最强的关联关系，我们称之为合成关系。
use-a关系通常称之为依赖，比如司机有一个驾驶的行为（方法），其中（的参数）使用到了汽车，那么司机和汽车的关系就是依赖关系。

## 装饰器
https://arrayfire.com/


## 