/* alt+shift+a gives me commented paragraphs */
var currentdayEL = document.getElementById("#currentDay"); 
var fieldsetEl = document.getElementsByTagName("fieldset");
var textareaEL = document.getElementsByTagName("textarea");
var timeblockEl = document.getElementsByTagName("time");
var inputbtnEl = document.getElementsByTagName("input");

$(currentdayEL).append(moment().year(year).month(month).date(day));
console.log(currentdayEL);