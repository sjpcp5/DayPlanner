/* alt+shift+a gives me commented paragraphs */
const fieldsetEl = $("fieldset");
const textareaEL = $("textarea");
const timeblockEl = $("time");

console.log("consts")


// function getDay(){
//     return moment().format("MMMM Do YYYY, h:mm:ss a");
// };
// console.log(getDay());

function getLocalStorage(key) {
    console.log("get local storage")
    let value = localStorage.getItem(key);
    if (value) {
        $(`#text${key}`).text(value);
    }
};
const btnInputEl = $("#btnInput");
const inputEventEl = $("#inputEvent");
const timeareaEL = $("#time-area");
const formEL = $("#form")
console.log("2nd consts")
$(document).ready(function() {
    console.log("document ready")
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    for (let i = 9; i < 18; i++) {

        // create a form-block
        var form = $(`<div data-time=${i} id='${i}' class="flex justify-center w-100 pa1">`);

        // create a time-area
        var time = $('<div class="w-25 pa2 mr2 bg-blue"> <time class="hour dib v-mid w-100 tc b:bold f2">' + formatAMPM(i) + '</time>');

        //create a text button
        var text = $(`<div class="outline w-100 pa2 mr2" top--1"><textarea id=text${i} class="description dib v-mid w-100 f3" placeholder="Add your event here..."></textarea>`);

        //create a button
        var button = $(`<div class="w-25 pa2 mr3"><button class="saveBtn" id=${i}><input class="b ph3 pv2 input-reset ba f2 bg-gold" type=submit value="Save"></input></button>`)

        // append col to row
        form.append(time);
        form.append(text);
        form.append(button);

        // last step add rows to container
        fieldsetEl.append(form);
        console.log("fieldsetEl");
        getLocalStorage(i);
    }

    function formatAMPM(hours) {
        console.log("formateAMPL")
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + ampm;
    }
    formatAMPM();

    function updateColors() {
        console.log("updatedColors")
        var currentTime = new Date().getHours();
        for (var i = 9; i < 18; i++) {
            console.log(currentTime, $(`#${i}`).data("time"));
            if ($(`#${i}`).data("time") == currentTime) {
                $(`#text${i}`).addClass("present");
            } else if (currentTime < $(`#${i}`).data("time")) {
                $(`#text${i}`).addClass("future");
            }
        }
    }
    setInterval(function() {
        console.log("set interval")
        updateColors();
    }, 1000);

    const inputbtnEl = $(".saveBtn");
    inputbtnEl.on('click', function() {
        console.log("clicked");
        let eventbtnId = $(this).attr('id');
        let eventText = $(this).parent().siblings().children('.description').val();
        localStorage.setItem(eventbtnId, eventText);

    });
});