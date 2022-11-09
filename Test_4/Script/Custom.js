{
  // modal information . . .
  var data = [];
  var dateTime = [];
  var thisElem;

  $(".modal-time").pDatepicker();

  function showModal(element) {
    let indexElem = +$(element).attr("id");
    thisElem = $(element);
    $(".modal").css("display", "block");
    $(".modal-title").val("");
    $(".modal-info").val("");
    $(".modal-time").val("");
    $(".modal-title").val($(element).text());
    $(".modal-info").val(data[indexElem]);
    $(".modal-time").val(dateTime[indexElem]);
  }

  $(".modal-close").click((e) => {
    let indexElem = +$(thisElem).attr("id");
    $(thisElem).text($(".modal-title").val());
    data[indexElem] = $(".modal-info").val();
    dateTime[indexElem] = $(".modal-time").val();
    $(".modal").css("display", "none");
  });
}

$(function () {
  var indexData = 0;

  // Set Time Picker . . . \\
  $(".pickTime").pDatepicker();
  // -------------------------------------------------------------- \\

  // Draggable . . . \\
  $(".todoList-result").draggable();
  // -------------------------------------------------------------- \\

  // Sortable . . . \\
  $(".important-items").sortable({
    connectWith: ".not-important-items",
    cursor: "grabbing",
    items: "> li",
    zIndex: 9999,
  });
  $(".not-important-items").sortable({
    connectWith: ".important-items",
    cursor: "grabbing",
    items: "> li",
    zIndex: 9999,
  });
  // -------------------------------------------------------------- \\

  // Droppable . . . \\
  $(".important-items").droppable({
    drop: (e) => {
      if ($(e.toElement).hasClass("use")) {
        $(e.toElement).addClass("bg-danger").removeClass("bg-primary");
        $(e.toElement).attr("style", "position: relative;top:0;left:0;");
      } else {
        // let resultElem = $(".todoList-result");
        // $(resultElem).attr("id", indexData);
        // indexData++;

        // $(".important-items").append(resultElem);
        // $(resultElem).attr("style", "position: relative;top:0;left:0;");
        // $(resultElem).attr(
        // "class",
        // "use list-unstyled text-white bg-danger w-75 rounded-2 border border-2 border-dark py-1 mb-2 ui-sortable-handle"
        // );

        let listElem = document.querySelector(".important-items");
        let newElem = document.createElement("li");
        newElem.innerHTML = $(".todoList-result").html().trim();
        newElem.setAttribute("id", indexData.toString());
        indexData++;
        data.push($(inputInfoElem).val());
        dateTime.push($(".pickTime").val());
        newElem.setAttribute("style", "position: relative;top:0;left:0;");
        newElem.setAttribute(
          "class",
          "use list-unstyled text-white bg-danger w-75 rounded-2 border border-2 border-dark py-1 mb-2 ui-sortable-handle"
        );
        $(newElem).attr("onclick", "showModal(this)");
        listElem.append(newElem);

        $(".todoList-result").css("display", "none");

        $(".ul-todoList-result").append(
          "<li class='todoList-result btn btn-info list-unstyled mt-5 mb-3 rounded-3 text-center py-1' style='width: 90%; height: 2.2rem'></li>"
        );

        $("#todoList-name").val("");
        $("#todoList-info").val("");
        $(".pickTime").val("یکشنبه ۲۴ مهر ۱۴۰۱  ۱۳:۲۶  ب ظ");
        $(".todoList-result").draggable();
      }
      $(".important-items").sortable("refresh");
    },
  });

  // ------------------------------------------------------------------------ \\

  $(".not-important-items").droppable({
    drop: (e) => {
      if ($(e.toElement).hasClass("use")) {
        $(e.toElement).addClass("bg-primary").removeClass("bg-danger");
        $(e.toElement).attr("style", "position: relative;top:0;left:0;");
      } else {
        // let resultElem = $(".todoList-result");
        // $(resultElem).attr("id", indexData);
        // indexData++;

        // $(".not-important-items").append(resultElem);
        // $(resultElem).attr(
        //   "style",
        //   "position: relative;top:0;left:0;"
        // );

        // $(resultElem).attr(
        //   "class",
        //   "use list-unstyled text-white bg-primary w-75 rounded-2 border border-2 border-dark py-1 mb-2 ui-sortable-handle"
        // );

        let listElem = document.querySelector(".not-important-items");
        let newElem = document.createElement("li");
        newElem.innerHTML = $(".todoList-result").html().trim();
        newElem.setAttribute("id", indexData.toString());
        indexData++;
        data.push($(inputInfoElem).val());
        dateTime.push($(".pickTime").val());
        newElem.setAttribute("style", "position: relative;top:0;left:0;");
        newElem.setAttribute(
          "class",
          "use list-unstyled text-white bg-primary w-75 rounded-2 border border-2 border-dark py-1 mb-2 ui-sortable-handle"
        );
        $(newElem).attr("onclick", "showModal(this)");
        listElem.append(newElem);

        $(".todoList-result").css("display", "none");

        $(".ul-todoList-result").append(
          "<li class='todoList-result btn btn-info list-unstyled mt-5 mb-3 rounded-3 text-center py-1' style='width: 90%; height: 2.2rem'></li>"
        );

        $("#todoList-name").val("");
        $("#todoList-info").val("");
        $(".pickTime").val("یکشنبه ۲۴ مهر ۱۴۰۱  ۱۳:۲۶  ب ظ");
        $(".todoList-result").draggable();
      }
      $(".not-important-items").sortable("refresh");
    },
  });
  // -------------------------------------------------------------- \\

  // Input Infomation . . . \\
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
  // -------------------------------------------------------------- \\

  // Get The Target And Save \\

  // -------------------------------------------------------------- \\
});
