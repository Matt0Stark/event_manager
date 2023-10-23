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

  var today = dayjs().format('DD/MM/YYYY');
  $("#currentDay").text(today);

  var timeBlockList = $("#time-block-list");

  for (var i = 0; i < array.length; i++) {
    console.log(array[i])
    var hourIndex = array[i].hour
   
    const currentHour = $(`
      <div id="hour-${hourIndex}" class="row time-block ">
        <div class="col-2 col-md-1 hour text-center py-3">${hourIndex}</div>
        <textarea class="col-8 col-md-10 description" rows="3"></textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>
    `);
    console.log(currentHour);
    timeBlockList.append(currentHour);
    Update();
  };
  
  function Update(){
    var currentTime = dayjs().hour();
    $(".time-block").each( function(){
      var blockHour= parseInt($(this).attr("id").split("-")[1]);
      console.log(currentTime);
      console.log(blockHour);

      var savedText = localStorage.getItem($(this).attr("id"))
      if (savedText){
        $(this).children("textarea").val(savedText);
      };


      if (blockHour < currentTime){
        $(this).addClass("past");
      } else if (blockHour === currentTime){
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      };
    });
   
    
  };

  $(document).ready(function(){
    $(".saveBtn").on("click", function(){
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      localStorage.setItem(time, value);
      console.log(localStorage)
    })
  })
});


