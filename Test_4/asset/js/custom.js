{
  // modal information . . .
  
  var indexData = 0;
  var data = [];
  var dateTime = [];

  function showModal(e) {
    let index = +$(e).attr("id");
    $(".modal").css("display", "block");
    $(".modal-title").text("");
    $(".modal-info").text("");
    $(".modal-time").text("");
    $(".modal-title").text($(e).text());
    $(".modal-info").text(data[index]);
    $(".modal-time").text(dateTime[index]);
  }

  $(".modal-close").click(function (e) {
    $(".modal").css("display", "none");
  });
}

$(function () {

  $(".todoList-result").draggable();

  $(".import-items").sortable();
  $(".not-import-items").sortable();

  $(".import-list").droppable({
    drop: (event, ui) => {
      var resultElem = $(".todoList-result");
      $(resultElem).attr("id", indexData);
      indexData++;
      data.push($(inputInfoElem).val());
      dateTime.push($(".pickTime").val());
      $(".import-items").append(resultElem);
      $(".todoList-result").removeAttr("style");
      $(".todoList-result").removeAttr("class");
      $(resultElem).addClass("list-result");
      $(resultElem).attr("onclick", "showModal(this)");
      $(".ul-todoList-result").append("<li class='todoList-result'></li>");
      $("#todoList-name").val("");
      $("#todoList-info").val("");
      $(".pickTime").val("یکشنبه ۲۴ مهر ۱۴۰۱  ۱۳:۲۶  ب ظ");
      $(".todoList-result").draggable();
    },
  });

  $(".not-import-list").droppable({
    drop: (event, ui) => {
      var resultElem = $(".todoList-result");
      $(resultElem).attr("id", indexData);
      indexData++;
      data.push($(inputInfoElem).val());
      dateTime.push($(".pickTime").val());
      $(".not-import-items").append(resultElem);
      $(".todoList-result").removeAttr("style");
      $(".todoList-result").removeAttr("class");
      $(resultElem).addClass("list-result");
      $(resultElem).attr("onclick", "showModal(this)");
      $(".ul-todoList-result").append("<li class='todoList-result'></li>");
      $("#todoList-name").val("");
      $("#todoList-info").val("");
      $(".todoList-result").draggable();
    },
  });

  {
    // time picker . . .
    $(".pickTime").pDatepicker();
  }

  {
    // input information . . .
    var inputNameElem = $("#todoList-name");
    var inputInfoElem = $("#todoList-info");

    $(inputNameElem).keyup((e) => {
      $(".todoList-result").html($(inputNameElem).val());
    });

    $(inputNameElem).focus((e) => {
      $(inputNameElem).attr("placeholder", "");
    });

    $(inputNameElem).focusout(function (e) {
      $(inputNameElem).attr("placeholder", "todo list name");
    });

    $(inputInfoElem).focus((e) => {
      $(inputInfoElem).attr("placeholder", "");
    });

    $(inputInfoElem).focusout(function (e) {
      $(inputInfoElem).attr("placeholder", "todo list name");
    });
  }
});
