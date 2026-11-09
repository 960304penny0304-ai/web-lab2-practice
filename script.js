
$(document).ready(function() {

  // ==========================
  // 功能一：jQuery 展開個人介紹
  // ==========================

  $("#toggleBtn").click(function() {

    $("#moreInfo").slideToggle();

    if ($(this).text() === "顯示更多介紹") {
      $(this).text("收起介紹");
    } else {
      $(this).text("顯示更多介紹");
    }

  });


  // ==========================
  // 功能二：Ajax 讀取 JSON 資料
  // ==========================

  $("#loadDataBtn").click(function() {

    $("#jsonResult").text("資料載入中...");

    $.ajax({

      url: "data.json",

      type: "GET",

      dataType: "json",

      success: function(data) {

        $("#jsonResult").empty();

        // 顯示網站名稱
        $("<h3>")
          .text(data.name)
          .appendTo("#jsonResult");

        // 顯示訊息
        $("<p>")
          .text(data.message)
          .appendTo("#jsonResult");

        // 建立技能清單
        const skillList = $("<ul>");

        data.skills.forEach(function(skill) {

          $("<li>")
            .text(skill)
            .appendTo(skillList);

        });

        $("#jsonResult").append(skillList);

      },

      error: function() {

        $("#jsonResult").text("資料載入失敗！");

      }

    });

  });

});
