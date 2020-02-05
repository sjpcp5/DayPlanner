/* alt+shift+a gives me commented paragraphs */
var fieldsetEl = document.getElementsByTagName("fieldset");
var textareaEL = document.getElementsByTagName("textarea");
var timeblockEl = document.getElementsByTagName("time");
var inputbtnEl = document.getElementsByTagName("input");

function getDay(){
    return moment().format("MMMM Do YYYY, h:mm:ss a");
};
console.log(getDay());


 $("#currentDay").text(getDay());
   
 function getLocalStorage(){
     let value = localStorage.getItem();
     if (value) {
         $
     }
 }