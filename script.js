// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(document).ready(function () {

  var array = [
    {
      hour: 9,
      // text:textArea
    },

    {
      hour: 10,
      // text:textArea
    },

    {
      hour: 11,
      // text:textArea
    },

    {
      hour: 12,
      // text:textArea
    },

    {
      hour: 13,
      // text:textArea
    },

    {
      hour: 14,
      // text:textArea
    },

    {
      hour: 15,
      // text:textArea
    },

    {
      hour: 16,
      // text:textArea
    },


  ];

  var today = dayjs();
  console.log(today)
  console.log(array);
  console.log(this);

  // where we send the buttons from the loop
  var timeBlockList = $("#time-block-list");
  //  ?? = array.length
  // var timeBlockIndex = '';


  for (var i = 0; i < array.length; i++) {
    console.log(array[i])
    var hourIndex = array[i].hour
    // hour daata needs to load nothing if null, else localStorage.getItem
    var hourData
    const currentHour = $(`
      <div id="hour-${hourIndex}" class="row time-block ">
        <div class="col-2 col-md-1 hour text-center py-3">${hourIndex}</div>
        <textarea class="col-8 col-md-10 description" rows="3">${hourData}</textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>
    `);
    console.log(currentHour);
    timeBlockList.append(currentHour);
    hourUpdate();
  };
  
  function hourUpdate(){
    var currentTime = dayjs().hour(12);
    $(".time-block").each( function(){
      var blockHour= parseInt($(this).attr("id").split("-")[1]);
      console.log(currentTime);
      console.log(blockHour);



      if (blockHour < currentTime){
        $(this).addClass("past");
        console.log("is past");
        console.log(this);
      
      } else if (blockHour === currentTime){
        $(this).removeClass("past");
        $(this).addClass("present");
        console.log("is present");
        console.log(this);
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
        console.log("is future");
        console.log(this);
      };
    });
    // var currentClass;
    
  };

  // $(timeBlockList).append(
  //   $("<div></div>").addClass("row time-block past").append(
  //     $("<div></div>").addClass("col-2 col-md-1 hour text-center py-3").text(
  //       array.hour
  //     )),
  //     $("<textarea/>", {
  //       "class":"col-8 col-md-10 description",
  //       "row":"3"
  //       // check localstorage if null "", else fill in?
  //     }),
  //     $("<button/>", {
  //       "class":"btn saveBtn col-2 col-md-1",
  //       "aria-label":"save"
  //     }).append(
  //         $("<i/>", {
  //           "class":"fas fa-save",
  //           "aria-hidden":"true"
  //         })
  //       ),
  // $(".hour").text(array.hour[i])



  $(document).ready(function(){
    $(".saveBtn").on("click", function(){
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      localStorage.setItem(time, value);
      console.log(localStorage)
    })
  })
});


// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage? (as the key)
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?(dayjs().hour())+(parseInt)?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
