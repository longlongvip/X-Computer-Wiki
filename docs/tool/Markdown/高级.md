# 高级
## 自定义表题+ID
```markdown
# X {#x}
```

## 段落
Markdown里面的段落前面不能有超过一个空白字符（空格、制表符等）。 前面如果有超过一个空格或制表符，该行文本会被生成代码块`<pre><code>...</code></pre>`而不是段落`<p>...</p>`

段落后面也不能有超过一个空白字符（空格、换行符等）。 如果有超过一个换行符，会生成两个段落。如果有超过一个空格，会生成换行标签`<br/>`

## 换行
请在行尾添加多个空格或 HTML的`<br/>`标签来实现换行

## 

## 分割线
在使用分隔线时一行在分隔线的上下各留一行空白行
虽然星号、减号和下划线都能构成分隔符，但一般使用减号，输入更方便

## 超链接
```markdown
[Sex](Sex.com)
[Sex](./Sex)
<Sex.com>
<Sex@Sex>
[Sex](./Sex )
`Sex.com`

1. 这是一个[**粗体链接**](./粗体斜体删除线)
1. 这是一个[_斜体链接_](./粗体斜体删除线)
1. 这是一个[**_粗斜体链接_**](./粗体斜体删除线)
1. 这是一个[`在代码里面的链接`](./代码块)
```

## 图片
本地：![这是一个图片](/images/tutorials/markdown/工具页截图-dark.png)
链接：[![这是一个图片](/images/tutorials/markdown/工具页截图-dark.png)](/tools/)
标题：![这是一个图片](/images/tutorials/markdown/工具页截图-dark.png "这是工具页的截图")
大小：

## 支持内嵌HTML、CSS和JavaScript

## 表格

## 公式

## 图表
- 流程图
```mermaid
flowchart LR
    A[直角矩形] -->|链接文本| B(圆角矩形)
    B --> C{选择}
    C -->|一| D[结果一]
    C -->|二| E[结果二]
```
- 时序图
```mermaid
sequenceDiagram
          autonumber
          par Action 1
            Alice->>John: Hello John, how are you?
          and Action 2
            Alice->>Bob: Hello Bob, how are you?
          end
          Alice->>+John: Hello John, how are you?
          Alice->>+John: John, can you hear me?
          John-->>-Alice: Hi Alice, I can hear you!
          Note right of John: John is perceptive
          John-->>-Alice: I feel great!
              loop Every minute
                John-->Alice: Great!
            end
```
- 类图
```mermaid
classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }
```
- 状态图
```mermaid
stateDiagram-v2
    [*] --> Still
    Still --> [*]

    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
```
- 实体关系图
```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```
- 用户旅行图
```mermaid
journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me
```
- 甘特图
```mermaid
gantt
    dateFormat  YYYY-MM-DD
    title       Adding GANTT diagram functionality to mermaid
    excludes    weekends
    %% (`excludes` accepts specific dates in YYYY-MM-DD format, days of the week ("sunday") or "weekends", but not the word "weekdays".)

    section A section
    Completed task            :done,    des1, 2014-01-06,2014-01-08
    Active task               :active,  des2, 2014-01-09, 3d
    Future task               :         des3, after des2, 5d
    Future task2              :         des4, after des3, 5d

    section Critical tasks
    Completed task in the critical line :crit, done, 2014-01-06,24h
    Implement parser and jison          :crit, done, after des1, 2d
    Create tests for parser             :crit, active, 3d
    Future task in critical line        :crit, 5d
    Create tests for renderer           :2d
    Add to mermaid                      :1d
    Functionality added                 :milestone, 2014-01-25, 0d

    section Documentation
    Describe gantt syntax               :active, a1, after des1, 3d
    Add gantt diagram to demo page      :after a1  , 20h
    Add another diagram to demo page    :doc1, after a1  , 48h

    section Last section
    Describe gantt syntax               :after doc1, 3d
    Add gantt diagram to demo page      :20h
    Add another diagram to demo page    :48h
```
- 需求图
```mermaid
requirementDiagram

    requirement test_req {
    id: 1
    text: the test text.
    risk: high
    verifymethod: test
    }

    element test_entity {
    type: simulation
    }

    test_entity - satisfies -> test_req
```
- Git记录图
```mermaid
gitGraph
       commit
       commit
       branch develop
       checkout develop
       commit
       commit
       checkout main
       merge develop
       commit
       commit
```
- C4模型图
```mermaid
C4Context
      title System Context diagram for Internet Banking System
      Enterprise_Boundary(b0, "BankBoundary0") {
        Person(customerA, "Banking Customer A", "A customer of the bank, with personal bank accounts.")
        Person(customerB, "Banking Customer B")      
        Person_Ext(customerC, "Banking Customer C", "desc")            

        Person(customerD, "Banking Customer D", "A customer of the bank, <br/> with personal bank accounts.")

        System(SystemAA, "Internet Banking System", "Allows customers to view information about their bank accounts, and make payments.")  

        Enterprise_Boundary(b1, "BankBoundary") {
         
          SystemDb_Ext(SystemE, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")      

          System_Boundary(b2, "BankBoundary2") {  
            System(SystemA, "Banking System A")  
            System(SystemB, "Banking System B", "A system of the bank, with personal bank accounts. next line.")        
          } 

          System_Ext(SystemC, "E-mail system", "The internal Microsoft Exchange e-mail system.") 
          SystemDb(SystemD, "Banking System D Database", "A system of the bank, with personal bank accounts.") 

          Boundary(b3, "BankBoundary3", "boundary") {  
            SystemQueue(SystemF, "Banking System F Queue", "A system of the bank.")        
            SystemQueue_Ext(SystemG, "Banking System G Queue", "A system of the bank, with personal bank accounts.") 
          }
        }
      }
      
      BiRel(customerA, SystemAA, "Uses")
      BiRel(SystemAA, SystemE, "Uses")
      Rel(SystemAA, SystemC, "Sends e-mails", "SMTP")
      Rel(SystemC, customerA, "Sends e-mails to")

      UpdateElementStyle(customerA, $fontColor="red", $bgColor="grey", $borderColor="red")
      UpdateRelStyle(customerA, SystemAA, $textColor="blue", $lineColor="blue", $offsetX="5")
      UpdateRelStyle(SystemAA, SystemE, $textColor="blue", $lineColor="blue", $offsetY="-10")
      UpdateRelStyle(SystemAA, SystemC, $textColor="blue", $lineColor="blue", $offsetY="-40", $offsetX="-50")
      UpdateRelStyle(SystemC, customerA, $textColor="red", $lineColor="red", $offsetX="-50", $offsetY="20")
      
      UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")

```
## 注释
```html
<!-- 注释内容 -->
<?注释内容>
```