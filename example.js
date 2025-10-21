// 安全的 JSON 解析函數
function safeJSONParse(jsonString) {
    // 基本的輸入驗證
    if (typeof jsonString !== 'string' || !jsonString.trim()) {
        console.error('無效的輸入：必須是非空字串');
        return null;
    }
    
    // 檢查基本的 JSON 格式（不使用正則表達式）
    const firstChar = jsonString.trim()[0];
    const lastChar = jsonString.trim()[jsonString.trim().length - 1];
    if (!((firstChar === '{' && lastChar === '}') || 
          (firstChar === '[' && lastChar === ']'))) {
        console.error('無效的 JSON 格式');
        return null;
    }

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
