// §1 Varaible declarations:
var times = [
    {
        time: "06:00",
        complete: false,
        content: ""
    },
    {
        time: "07:00",
        complete: false,
        content: ""

    },
    {
        time: "08:00",
        complete: false,
        content: ""


    },
    {
        time: "09:00",
        complete: false,
        content: ""

    },
    {
        time: "10:00",
        complete: false,
        content: ""

    },
    {
        time: "11:00",
        complete: false,
        content: ""

    },
    {
        time: "12:00",
        complete: false,
        content: ""

    },
    {
        time: "13:00",
        complete: false,
        content: ""

    },
    {
        time: "14:00",
        complete: false,
        content: ""

    },
    {
        time: "15:00",
        complete: false,
        content: ""

    },
    {
        time: "16:00",
        complete: false,
        content: ""

    },
    {
        time: "17:00",
        complete: false,
        content: ""

    },
    {
        time: "18:00",
        complete: false,
        content: ""

    },
    {
        time: "19:00",
        complete: false,
        content: ""

    },
    {
        time: "20:00",
        complete: false,
        content: ""

    },
    {
        time: "21:00",
        complete: false,
        content: ""

    },
    {
        time: "22:00",
        complete: false,
        content: ""

    },
    {
        time: "23:00",
        complete: false,
        content: ""

    }
];
//JS reference to HTML clock element
let timeEl = $("#clock");
// Sets clock to current time
let currentHour = dayjs().hour();
// variables for generation of time-block colors




let headerBackground = $("header");
headerBackground.css({
"background-color": "rgb(83, 95, 79)",
    "border": "none",
    "font-family": "ubuntu",
    "color": "white",

});


//styles background color of page
let colorBackground = document.querySelector("body");
colorBackground.style.backgroundColor = "rgb(83, 95, 79)";
//§2 Getting the time
//sets time element to display current time
timeEl.text(dayjs().format("MMMM D YYYY, HH:mm"));


//styles current time display


timeEl.css({
    "font-family": "ubuntu",
    "font-size": "20px",
    "color": "white",
    "text-align": "center",
});

//function which gets current time
function updateTime() {
    timeEl.text(dayjs().format("MMMM D YYYY, HH:mm"));
};

//set interval calls update time at interval of 1 second to get the updated time
clock = setInterval(updateTime, 1000);

//§3 Generating Site Layout
/* for loop generates the elements of the page
1. The containing element for each row of the application
2. The block on the far left containing hours covered by application
3. The div which will hold the text-areas
4. The text area
5. Retrieves any items in local storage
5[a]. (Has been removed as redundant) If data in local storage, renders it - else- logs null to console to handle null value. 
5[b]. If data is in local storage, and its complete or incomplete and is not an empty string then display it else, display nothing.
6. adds the save button, styles  and instantiates listener for click which stores value in corresponding time-block to local storage.
*/
for (let i = 0; i < 18; i++) {

    //[1]
    let blockEl = $("<div><div>");
    blockEl.addClass("row justify-content-center");
    blockEl.attr("id: time-block");
    blockEl.css({
        "margin": "20px",
        //  "padding": "10px",
         "border": "none",
          "border-radius": "10px",
          "align-items": "center",
        });
    //[2]
    let hourEl = $("<div><div>");
    hourEl.css({
        "justify-content": "center",
        "align-items": "center",
        "border": "none",
        "font-size": "20px",
        "font-family": "ubuntu",
        "color": "white",
    })
    hourEl.addClass("row");
    hourEl.addClass("col-1");
    hourEl.text(times[i].time);

    //[3]
    let textEl = $("<div></div>");
    textEl.addClass("col-10 description");
    textEl.css({
        "justify-content" : "center",
        "display": "flex",
        "align-items": "center",
        "height" : "100%",
        "border-radius": "49px",
        // "box-shadow": "inset 0 0 4px 3px #000",
        // "margin": "auto",

    }
    );

    //[4]
    let textArea = $("<textarea></textarea>");
    textArea.addClass("textarea");
    textArea.attr("data-index", i);
    textArea.css({
        "width":"80%",
        "border": "none",
    }
    );
    console.log(textArea);

    //[5]
    var cachedObject = localStorage.getItem(i);
    var cachedObjectParse = JSON.parse(cachedObject);
    
    //5[a]
    // console.log(cachedObjectParse);
    // if (cachedObjectParse === null) {
    //     console.log("null");
    // } else {
    //     textArea.val(cachedObjectParse.content);
    // }
    
    //5[b]
    if (cachedObjectParse !== null && cachedObjectParse.complete === true && cachedObjectParse.content !== "") {
        textArea.val(cachedObjectParse.content);
    } else if (cachedObjectParse !== null && cachedObjectParse.complete === false && cachedObjectParse.content !== "") {
        textArea.val(cachedObjectParse.content);
    } else {
        textArea.val('');
    }

    //[6] //
    let saveField = $("<div></div>");
    saveField.addClass("col-1 saveBtn");

    let saveIcon = $("<i></i>");
    saveIcon.addClass("fas fa-save text-center");
    saveField.addClass("text-center");
    saveField.css({
        "padding": "30px",
        "background-color": "black",
        "height": "100%",
        "background-color": "rgb(83, 95, 79)",
        "border": "none",
        

    });
    saveField.attr("data-reference", i);

    saveField.on("click", function () {
        key = $(this).attr("data-reference");
        times[i]["content"] = textArea.val();
        var cacheObj = times[i];
        localStorage.setItem(i, JSON.stringify(cacheObj));
    });


   /*§4 Controls colour of blocks with conditional block
   - if the time now is greater than i+6 (because the time values are derived from array of objects, arrays are 0-indexed, times start from 06:00)
    First render time blocks in the past red
    Second render the timeblock for the current time yellow 
    Third render time blocks in the future green

    / uncomment line 293 to disable text entry for past time blocks.

    n.b r* g* b* - inc/dec values- are itterated and changed to provide unique RGB values for all elements of future and past respectively
   */
        if(currentHour > i+6){
            let rInc = 189;
            let gInc = 34;
            let bInc = 24;
        
            for(var j=0; j<i+6; j++){
            
            textEl.css({
            "background-color" : "rgb(" + rInc + "," + gInc + "," + bInc + ")",

            }) 

             rInc += 5; //on first iteration rInc = 250, gInc = 250, bInc = 250, on second iteration rInc = 235, gInc = 225, bInc = 215 on third iteration rInc = 220, gInc = 200, bInc = 180
             gInc += 5;
             bInc += 5;

            // textArea.attr("disabled", "disabled");

            textArea.css({

                "color" : "black",
                "font-size" : "20px",
                "font-weight" : "bold",

                });
       

                };
            }else if(currentHour === i+6){
                textEl.css({
                    "background-color" : "rgb(255, 244, 214)",
                    "color" : "black",
                })

                textArea.css({

                "color" : "black",
                "font-size" : "20px",
                "font-weight" : "bold",

                })      

             hourEl.css({
                    "border-left": "solid 5px rgb(255, 244, 214)",
            })
            }else{

                let rDec = 10;
                let gDec = 10;
                let bDec = 10;

                for(var j = i+6; j < 24; j++){ //24 hrs in a day
                    

                textEl.css({
                    "background-color" : "rgb(" + rDec + "," + gDec + "," + bDec + ")",
                    
                }) 
                rDec += 5;
                gDec += 5;
                bDec += 5;

                textArea.css({

                    "color" : "white",
                    "font-size" : "20px",
                    "font-weight" : "bold",

                    })     
            }
        }

    /*§5 Adds buttons to mark tasks as complete / incomplete

    */
    
    let taskCompleteButton = $("<button>Complete</button>");
    taskCompleteButton.addClass("btn btn-success");
    taskCompleteButton.css({
        "margin": "10px",
        "padding": "10px",
        "font-size": "10px",
        "font-weight": "bold",
        "border-radius": "10px",
        "background-color": "rgb(83, 95, 79)",
    });

    //if clicked then toggles the text in text area to line through and appends a checkmark to the text area
    let taskIncompleteButton = $("<button>Incomplete</button>");
    taskIncompleteButton.addClass("btn btn-danger");
    taskIncompleteButton.css({
        "margin": "10px",
        "padding": "10px",
        "font-size": "10px",
        "font-weight": "bold",
        "border-radius": "10px",
        "background-color": "rgb(189, 34, 24)",

    });

    // if clicked then toggles the text in text area to italic and append a red x to the text area
    let clearButton = $("<button>Clear</button>");
    clearButton.addClass("btn btn-tertiary");
    clearButton.css({
        "margin": "10px",
        "padding": "10px",
        "font-size": "10px",
        "font-weight": "bold",
        "color": "white",
        "border-radius": "10px",
        "background-color": "rgb(247, 168, 11)",
    });

    //this requires further considetation.
    clearButton.on("click", function () {
        textArea.val("");
        times[i]["content"] = "";
        cachedObject = times[i];
        localStorage.setItem(i, JSON.stringify(cachedObject));
    });

    taskCompleteButton.on("click", function () {

        var completeText = textArea.val()
        if (completeText.includes("👎")) {
            completeText = completeText.replace("👎", "👍");
            textArea.val(completeText);
            times[i]["complete"] = true;
            times[i]["content"] = textArea.val();
            cachedObject = times[i];
            localStorage.setItem(i, JSON.stringify(cachedObject));

        } else if (completeText.includes("👍")) {
            completeText = textArea.val();
            times[i]["complete"] = true;
            times[i]["content"] = textArea.val();
            cachedObject = times[i];
            localStorage.setItem(i, JSON.stringify(cachedObject));

        } else {
            completeText = completeText + "👍";
            textArea.val(completeText);
            times[i]["complete"] = true;
            times[i]["content"] = textArea.val();
            cachedObject = times[i];
            localStorage.setItem(i, JSON.stringify(cachedObject));

        }

    });

    taskIncompleteButton.on("click", function () {
        var incompleteText = textArea.val();
        if (incompleteText.includes("👍")) {
            incompleteText = incompleteText.replace("👍", "👎");
            textArea.val(incompleteText);
            times[i]["complete"] = false;
            times[i]["content"] = textArea.val();
            cachedObject = times[i];
            localStorage.setItem(i, JSON.stringify(cachedObject));
        } else if (incompleteText.includes("👎")) {
            incompleteText = incompleteText.val();
            times[i]["complete"] = false;
            times[i]["content"] = textArea.val();
            cachedObject = times[i];
            localStorage.setItem(i, JSON.stringify(cachedObject));

        } else {
            incompleteText = incompleteText + "👎";
            textArea.val(incompleteText);
            times[i]["complete"] = false;
            times[i]["content"] = textArea.val();
            cachedObject = times[i];
            localStorage.setItem(i, JSON.stringify(cachedObject));

        }


    });

//appends all buttons to DOM
    $(textEl).append(textArea);

    $(blockEl).append(hourEl);

    $(blockEl).append(textEl);

    $(textEl).append(taskCompleteButton);
    $(textEl).append(taskIncompleteButton);
    $(textEl).append(clearButton);
    $("body").append(blockEl);

    $(saveField).append(saveIcon);
    $(blockEl).append(saveField);

};


