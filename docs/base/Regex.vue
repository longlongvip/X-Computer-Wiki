<template>
    <div class="regex-demo">
        <!-- 文本区域 -->
        <div class="section">
            <label>文本：</label>
            <span>{{ text }}</span>
        </div>

        <!-- 正则表达式区域 -->
        <div class="section">
            <label>正则表达式：</label>
            <span>{{ regexPattern }}</span>
        </div>

        <!-- 匹配结果（带高亮） -->
        <div class="section">
            <label>匹配结果：</label>
            <span v-html="highlightedText"></span>
        </div>

        <!-- 解释说明区域 -->
        <div class="explanation">
            <h3>解释说明：</h3>
            <ul>
                <li>正则表达式需包含在两个单斜杠之间，即 <code>/表达式/</code> 才是标准格式</li>
                <li><code>g</code> 是“全局匹配”（匹配所有符合的内容，而非仅第一个）；<code>m</code> 是“多行匹配”；<code>gm</code> 则同时启用全局和多行匹配</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    // 定义可接收的props
    props: {
        // 要匹配的文本内容
        text: {
            type: String,
            required: true, // 必须传入
            default: ''
        },
        // 正则表达式模式（如 "/OK/g"）
        regexPattern: {
            type: String,
            required: true, // 必须传入
            default: ''
        }
    },
    computed: {
        // 处理“高亮匹配结果”的计算属性
        highlightedText() {
            try {
                // 从传入的正则表达式字符串中提取模式和修饰符
                // 例如从 "/OK/g" 中提取 "OK" 和 "g"
                const regexParts = this.regexPattern.match(/^\/(.*)\/([gim]*)$/);

                if (!regexParts) {
                    return this.text; // 正则格式不正确时返回原始文本
                }

                const pattern = regexParts[1];
                const flags = regexParts[2];

                // 创建正则表达式对象
                const regex = new RegExp(pattern, flags);

                // 将匹配到的内容用带高亮样式的span包裹
                return this.text.replace(regex, '<span class="highlight">$&</span>');
            } catch (error) {
                console.error('正则表达式错误:', error);
                return this.text; // 发生错误时返回原始文本
            }
        }
    }
};
</script>

<style scoped>
.regex-demo {
    font-family: system-ui, sans-serif;
    line-height: 1.6;
    padding: 16px;
    border: 1px solid #eee;
    border-radius: 4px;
    max-width: 800px;
    margin: 20px auto;
}

.section {
    margin-bottom: 12px;
    padding: 8px;
    background-color: #f9f9f9;
    border-radius: 4px;
}

label {
    font-weight: 600;
    margin-right: 6px;
    color: #333;
}

/* 匹配内容的高亮样式 */
.highlight {
    background-color: #aaffaa;
    padding: 1px 3px;
    border-radius: 2px;
    font-weight: bold;
}

.explanation {
    margin-top: 16px;
    padding: 10px;
    background-color: #f0f7ff;
    border-radius: 4px;
}

ul {
    list-style-type: disc;
    padding-left: 24px;
}

code {
    background-color: #f5f5f5;
    padding: 2px 5px;
    border-radius: 3px;
    font-family: monospace;
}
</style>
