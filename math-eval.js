// 不安全:
eval('2 + 2 * 4');

// 安全:
const calculate = new Function('return 2 + 2 * 4');
const result = calculate();

// 或使用專門的數學表達式解析庫如 math.js
