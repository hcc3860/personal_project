// 給input  date設定預設值
var now = new Date();
var tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
//格式化日，如果小於9，前面補0
var day = ("0" + now.getDate()).slice(-2);
var tomorrow_day = ("0" + tomorrow.getDate()).slice(-2);
//格式化月，如果小於9，前面補0
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var tomorrow_month = ("0" + (tomorrow.getMonth() + 1)).slice(-2);

var tomorrow_year = tomorrow.getFullYear();
//拼裝完整日期格式
var today = now.getFullYear()+"-"+(month)+"-"+(day);

var tomorrow_full = tomorrow_year+"-"+(tomorrow_month)+"-"+(tomorrow_day);
//完成賦值
$('.check-in').val(today);
$('.check-out').val(tomorrow_full);
