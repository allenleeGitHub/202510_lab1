// 不安全:
eval('(' + jsonString + ')');

// 安全:
JSON.parse(jsonString);
