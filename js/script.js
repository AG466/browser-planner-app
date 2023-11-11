// create an object which holds the time to be displayed for each of the hour blocks
// The object needs to have a boolean variable which can store if any object is complete or not
// the object needs to be passed and retrieved from local storage


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
    textEl.css({
        // "justify-content" : "center",
        "display": "flex",
        "align-items": "center"
    }
    );
    // textEl.attr("style", "arrange- 10px");
    
  
    let textArea = $("<textarea></textarea>");
    textArea.attr("style", "width:80%", "padding: 23px");
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


    function updateTime() {
        timeEl.text(dayjs());
        console.log(dayjs());
    };
    




    if(currentHour > i){
        
        textEl.css({
            "background-color" : "grey",
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
                "color" : "black",
            })

            textArea.css({
               
            "color" : "black",
            "font-size" : "20px",
            "font-weight" : "bold",

            })      
  
        }else{
            textEl.css({
                "background-color" : "navy"
            }) 
            
            textArea.css({
               
                "color" : "white",
                "font-size" : "20px",
                "font-weight" : "bold",
    
                })     
        }
    
    let taskCompleteButton = $("<button>Mark Complete</button>");
    taskCompleteButton.addClass("btn btn-success");
    
    //if clicked then toggles the text in text area to line through and appends a checkmark to the text area
    let taskIncompleteButton = $("<button>Mark Incomplete</button>");
    taskIncompleteButton.addClass("btn btn-danger");
    // if clicked then toggles the text in text area to italic and append a red x to the text area
    taskCompleteButton.on("click", function(){
        textArea.css({
            "text-decoration" : "line-through"
        })
    });

    taskIncompleteButton.on("click", function(){
        textArea.css({
            "text-decoration" : "none"
        });
    
        
    });

    
    $(textEl).append(textArea);
    
    $(blockEl).append(hourEl);
    
    $(blockEl).append(textEl);
    
    $(textEl).append(taskCompleteButton);
    $(textEl).append(taskIncompleteButton);
    $("body").append(blockEl);
    
    $(saveField).append(saveIcon);
    $(blockEl).append(saveField);
    
};


