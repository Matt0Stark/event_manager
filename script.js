// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// where we send the buttons from the loop
var timeBlockList = $("#time-block-list");

//  ?? = array.length
var timeBlockIndex = '';

var array = [
  { 
    hour:"9am",
    // text:textArea
  },

  { 
    hour:"10am",
    // text:textArea
  },

  { 
    hour:"11am",
    // text:textArea
  },

  { 
    hour:"12pm",
    // text:textArea
  },

  { 
    hour:"1pm",
    // text:textArea
  },

  { 
    hour:"2pm",
    // text:textArea
  },

  { 
    hour:"3pm",
    // text:textArea
  },

  { 
    hour:"4pm",
    // text:textArea
  },


];

$(document).ready(function(){

  $(function () {

    console.log(array);
    console.log(this);


      for(var i = 0; i < array.length; i++) {
        
        $(timeBlockList).append(
          $("<div></div>").addClass("row time-block past").append(
            $("<div/>", {
              "class":"col-2 col-md-1 hour text-center py-3",
              // set text cotent to [i].hour
            }),
            $("<textarea/>", {
              "class":"col-8 col-md-10 description",
              "row":"3"
              // check localstorage if null "", else fill in?
            }),
            $("<button/>", {
              "class":"btn saveBtn col-2 col-md-1",
              "aria-hidden":"true"
            }).append(
                $("<i/>", {
                  "class":"fas fa-save",
                  "aria-hidden":"true"
                })
              )
         ));



        // var timeBlock = $("<div/>", {
        //     "id":"hour_" + [i],
        //     "class":"row time-block past"
        // });
        // var hourCount = $("<div/>", {
        //     "class":"col-2 col-md-1 hour text-center py-3"
        //     // set text cotent to [i].hour
        // });
        // var textArea = $("<textarea/>", {
        //     "class":"col-8 col-md-10 description",
        //     "row":"3"
        //     // check localstorage if null "", else fill in?
        // });
        // var saveButton = $("<button/>", {
        //     "class":"btn saveBtn col-2 col-md-1",
        //     "aria-hidden":"true"
        // });
        // var faSave = $("<i/>", {
        //     "class":"fas fa-save",
        //     "aria-hidden":"true"
        // });

        // $("savebutton").append("faSave");
        // $("timeBlock").append("hourCount", "textArea", "button");
        // // $("#time-block-list").append("timeBlock");
      
      };
    
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  });
});