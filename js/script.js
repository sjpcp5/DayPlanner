/* alt+shift+a gives me commented paragraphs */
const fieldsetEl = $("fieldset");
const textareaEL = $("textarea");
const timeblockEl = $("time");
const inputbtnEl = $(".saveBtn b ph3 pv2 input-reset ba f3 bg-light-green");



// function getDay(){
//     return moment().format("MMMM Do YYYY, h:mm:ss a");
// };
// console.log(getDay());




function getLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value) {
        $(`#text${key}`).text(value);
    }
};
const btnInputEl = $("#btnInput");
const inputEventEl = $("#inputEvent");
const timeareaEL = $("#time-area");
const formEL = $("#form")

$(document).ready(function() {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    for (let i = 9; i < 18; i++) {

        // create a form-block
        var form = $(`<div data-time=${i} id='${i}' class="flex justify-center w-100 pa1">`);

        // create a time-area
        var time = $('<div class="w-25 pa2 mr2 bg-blue"> <time class="hour time-block dib w-100 v-mid tc b:bold f3">' + formatAMPM(i) + '</time>');

        //create a text button
        var text = $(`<div class="outline w-100 pa2 mr2" top--1"><textarea id=text${i} class="description dib v-mid w-100 f3" placeholder="Add your event here..."></textarea>`);

        //create a button
        var button = $(`<div class="w-25 pa2 mr3"><input class="saveBtn b ph3 pv2 input-reset ba f3 bg-light-green" type=submit value="Save"  id=${i}></input>`)

        // append col to row
        form.append(time);
        form.append(text);
        form.append(button);

        // last step add rows to container
        fieldsetEl.append(form);

        getLocalStorage(i);
    }

    function formatAMPM(hours) {
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + ampm;
    }
    formatAMPM();

    function updateColors() {
        var currentTime = new Date().getHours();
        for (var i = 9; i < 18; i++) {
            console.log(currentTime, $(`#${i}`).data("time"));
            if ($(`#${i}`).data("time") == currentTime) {
                $(`#text${i}`).addClass("present");
            } else if (currentTime < $(`#${i}`).data("time")) {
                $(`#text${i}`).addClass("future");
            }
        }

        setInterval(function() {
            updateColors();
        }, 1000);
    }
    inputbtnEl.on("click", function() {
        console.log("i have been clicked");
        let eventbtnId = $(this).attr('id');
        let eventText = $(this).parent().siblings().children('.description').value();
        localStorage.setItem(eventbtnId, eventText);
    })
});