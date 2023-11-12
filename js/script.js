// create an object which holds the time to be displayed for each of the hour blocks
// The object needs to have a boolean variable which can store if any object is complete or not
// the object needs to be passed and retrieved from local storage
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





var timeEl = $("#clock");
let currentHour = dayjs().hour();
timeEl.text(dayjs());
timeEl.css(
    "text-align", "center",
    "font-size", "100rem"
);
//some of the syntax changed in implementing jquery. r.e. text setting.
function updateTime() {
    timeEl.text(dayjs());
};


clock = setInterval(updateTime, 1000);

for (let i = 0; i < 18; i++) {
    let blockEl = $("<div><div>");
    blockEl.addClass("row justify-content-center");
    blockEl.attr("id: time-block");
    blockEl.attr("style", "margin: 20px; padding: 10px");

    let hourEl = $("<div><div>");
    hourEl.attr("style", "padding: 30px")
    hourEl.addClass("row justify-content-center");


    hourEl.addClass("col-1");
    hourEl.text(times[i].time);


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
        "padding": "23px"
    }
    );
    console.log(textArea);


    var cachedObject = localStorage.getItem(i);
    var cachedObjectParse = JSON.parse(cachedObject);

    console.log(cachedObjectParse);
    if (cachedObjectParse === null) {
        console.log("null");
    } else {
        textArea.val(cachedObjectParse.content);
    }

    if (cachedObjectParse !== null && cachedObjectParse.complete === true && cachedObjectParse.content !== "") {
        textArea.val(cachedObjectParse.content);
    } else if (cachedObjectParse !== null && cachedObjectParse.complete === false && cachedObjectParse.content !== "") {
        textArea.val(cachedObjectParse.content);
    } else if (cachedObjectParse === null) {
        textArea.css({
            "text-decoration": "none"
        })
    }



    // if(cachedObjectParse.complete === true){
    // (cachedObjectParse.complete === null){
    //     console.log("null");
    // } else if(cachedObjectParse.complete === false){
    //     textArea.css({
    //         "text-decoration" : "none"
    //     })
    // } else if(cachedObjectParse.complete === true){
    //     textArea.css({
    //         "text-decoration" : "line-through"
    //     })
    // }

    let saveField = $("<div></div>");
    saveField.addClass("col-1 saveBtn");

    let saveIcon = $("<i></i>");
    saveIcon.addClass("fas fa-save text-center");
    saveField.addClass("text-center");
    saveField.css({
        "padding": "30px",
        "background-color": "black"

    });
    saveField.attr("data-reference", i);

    saveField.on("click", function () {
        key = $(this).attr("data-reference");
        times[i]["content"] = textArea.val();
        var cacheObj = times[i];
        localStorage.setItem(i, JSON.stringify(cacheObj));
    });


    function updateTime() {
        timeEl.text(dayjs());
    };

    var rInc = 25;
    var gInc = 250;
    var bInc = 250;
    
    var rDec = 0;
    var gDec = 51;
    var bDec = 25;
   
    // if(currentHour === i){
    //     textEl.css({
    //         "background-color" : "red",
    //     })}

        if(currentHour > i+6){
        for(var j=0; j<i+6; j++){
            textEl.css({
            "background-color" : "rgb(" + rInc + "," + gInc + "," + bInc + ")",

            }) 

             rInc = rInc - 18; //on first iteration rInc = 250, gInc = 250, bInc = 250, on second iteration rInc = 235, gInc = 225, bInc = 215 on third iteration rInc = 220, gInc = 200, bInc = 180
             gInc = gInc - 8;
             bInc = bInc - 1;

            textArea.attr("disabled", "disabled");

            textArea.css({

                "color" : "Red",
                "font-size" : "20px",
                "font-weight" : "bold",

                });
        }
            textArea.attr("disabled", "disabled");

            textArea.css({

                "color" : "white",
                "font-size" : "20px",
                "font-weight" : "bold",

                });
    // a bit of a "hacky" solution by adding 6 to the index- the index is equivalent to the hour of the day.
            }else if(currentHour === i+6){
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
                for(var j = i+6; j < 24; j++){ //24 hrs in a day
                textEl.css({
                    "background-color" : "rgb(" + rDec + "," + gDec + "," + bDec + ")",
                    
                }) 
                rDec = rDec + 1;
                gDec = gDec + 8;
                bDec = bDec + 4;

                textArea.css({

                    "color" : "white",
                    "font-size" : "20px",
                    "font-weight" : "bold",

                    })     
            }
        }

    let taskCompleteButton = $("<button>Complete</button>");
    taskCompleteButton.addClass("btn btn-success");

    //if clicked then toggles the text in text area to line through and appends a checkmark to the text area
    let taskIncompleteButton = $("<button>Incomplete</button>");
    taskIncompleteButton.addClass("btn btn-danger");
    // if clicked then toggles the text in text area to italic and append a red x to the text area
    let clearButton = $("<button>Clear</button>");
    clearButton.addClass("btn btn-light");

    //this requires further considetation.
    clearButton.on("click", function () {
        textArea.val("");
        times[i]["content"] = "";
        cachedObject = times[i];
        localStorage.setItem(i, JSON.stringify(cachedObject));
    });

    taskCompleteButton.on("click", function () {

        var completeText = textArea.val()
        if (completeText.includes("❌")) {
            completeText = completeText.replace("❌", "✅");
            textArea.val(completeText);
            times[i]["complete"] = true;
            times[i]["content"] = textArea.val();
            cachedObject = times[i];
            localStorage.setItem(i, JSON.stringify(cachedObject));

        } else if (completeText.includes("✅")) {
            completeText = textArea.val();
            times[i]["complete"] = true;
            times[i]["content"] = textArea.val();
            cachedObject = times[i];
            localStorage.setItem(i, JSON.stringify(cachedObject));

        } else {
            completeText = completeText + "✅";
            textArea.val(completeText);
            times[i]["complete"] = true;
            times[i]["content"] = textArea.val();
            cachedObject = times[i];
            localStorage.setItem(i, JSON.stringify(cachedObject));

        }

    });

    taskIncompleteButton.on("click", function () {
        var incompleteText = textArea.val();
        if (incompleteText.includes("✅")) {
            incompleteText = incompleteText.replace("✅", "❌");
            textArea.val(incompleteText);
            times[i]["complete"] = false;
            times[i]["content"] = textArea.val();
            cachedObject = times[i];
            localStorage.setItem(i, JSON.stringify(cachedObject));
        } else if (incompleteText.includes("❌")) {
            incompleteText = incompleteText.val();
            times[i]["complete"] = false;
            times[i]["content"] = textArea.val();
            cachedObject = times[i];
            localStorage.setItem(i, JSON.stringify(cachedObject));

        } else {
            incompleteText = incompleteText + "❌";
            textArea.val(incompleteText);
            times[i]["complete"] = false;
            times[i]["content"] = textArea.val();
            cachedObject = times[i];
            localStorage.setItem(i, JSON.stringify(cachedObject));

        }


    });


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


