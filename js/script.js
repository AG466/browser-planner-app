// display current date and time in html

// create a sortable list with editable items

// Display the current day at the top of the calendar when a user opens the planner.
// Present timeblocks for standard business hours when the user scrolls down.
// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
// Allow a user to enter an event when they click a timeblock.
// Save the event in local storage when the save button is clicked in that timeblock.
// Persist events between refreshes of a page.

// clock


var rootEl = $('#root');
var timeEl = $("#clock");
let currentHour = dayjs().hour();

timeEl.text(dayjs());
timeEl.css("text-align","center");
//some of the syntax changed in implementing jquery. r.e. text setting.
function updateTime() {
    timeEl.text(dayjs());
    console.log(dayjs());
};


clock = setInterval(updateTime,1000);

for(let i = 6; i < 24;i++){
    let blockEl = $("<div><div>");
    blockEl.addClass("row justify-content-center");
    blockEl.attr("id: time-block");
    blockEl.attr("style", "margin: 20px; padding: 10px");
    console.log(i);

    let hourEl = $("<div><div>");
    hourEl.attr("style", "padding: 30px")
    hourEl.addClass("row justify-content-center");


    hourEl.addClass("col-1");
    hourEl.text(i + ":00");
    

    let textEl = $("<div></div>");
    textEl.addClass("col-10 description");
    // textEl.attr("style", "arrange- 10px");
    
  
    let textArea = $("<textarea></textarea>");
    textArea.attr("style", "width:100%", "padding: 23px");
    textArea.addClass("textarea");
    textArea.attr("data-index", i);
    textArea.css({
        "padding" : "23px"
    }
    );
    console.log(textArea);
    textArea.val(localStorage.getItem(i));




    let saveField = $("<div></div>");
    saveField.addClass("col-1 saveBtn");

    let saveIcon = $("<i></i>");
    saveIcon.addClass("fas fa-save text-center");
    saveField.addClass("text-center");
    saveField.css({
        "padding": "30px",
        "background-color" : "black"

    });   
    saveField.attr("data-reference", i);
    
    saveField.on( "click", function() {
        key= $(this).attr("data-reference");
        localStorage.setItem(key, textArea.val());
    });

    if(currentHour > i){
        
        textEl.css({
            "background-color" : "grey",
            "opacity" : "0.4",   
        }) 

        textArea.attr("disabled", "disabled");

        textArea.css({
               
            "color" : "Red",
            "font-size" : "20px",
            "font-weight" : "bold",

            });

        }else if(currentHour === i){
            textEl.css({
                "background-color" : "yellow",
                "opacity" : "0.7",
                "color" : "black",
            })

            textArea.css({
               
            "color" : "black",
            "font-size" : "20px",
            "font-weight" : "bold",

            })      
  
        }else{
            textEl.css({
                "background-color" : "navy",
                "opacity" : "0.6"
            }) 
            
            textArea.css({
               
                "color" : "white",
                "font-size" : "20px",
                "font-weight" : "bold",
    
                })     
        }
    

    

    

    $(textEl).append(textArea);
    
    $(blockEl).append(hourEl);
    
    $(blockEl).append(textEl);
    
    $("body").append(blockEl);
    
    $(saveField).append(saveIcon);
    $(blockEl).append(saveField);
    
};

