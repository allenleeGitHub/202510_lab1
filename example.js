// 安全的 JSON 解析函數
function safeJSONParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        console.error('JSON 解析錯誤:', e);
        return null;
    }
}

// 使用範例
const result = safeJSONParse(jsonString);
if (result) {
    // 安全地處理解析後的資料
    console.log('解析成功:', result);
}
