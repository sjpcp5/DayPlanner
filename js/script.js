/* alt+shift+a gives me commented paragraphs */
var currentdayEL = document.getElementById("#currentDay"); 
var fieldsetEl = document.getElementsByTagName("fieldset");

$(currentdayEL).append(moment().year().month().date());
console.log(currentdayEL);