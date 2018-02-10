// 画面の大きさ反映させる
  $(document).ready(function () {
    //ウィンドウの高さを取得しhsizeに入れる
    hsize = $(window).height();
    //#topのCSSにheight(hsize)px
    $("#top").css("height", hsize + "px");
    $("#profile").css("height", hsize + "px");
    $("#profile_img").css("height", hsize + "px");
    $("#profile_img img").css("height", hsize + "px");
    $("#skill").css("height", hsize + "px");
    // $("#works").css("height", hsize + "px");
    $("#blog").css("height", hsize + "px");
    $("#vj").css("height", hsize + "px");
    $("#contact").css("height", hsize + "px");
  });
  //画面をリサイズ
  $(window).resize(function () {
    hsize = $(window).height();
    $("#top").css("height", hsize + "px");
    $("#profile").css("height", hsize + "px");
    $("#profile_img").css("height", hsize + "px");
    $("#profile_img img").css("height", hsize + "px");
    $("#skill").css("height", hsize + "px");
    // $("#works").css("height", hsize + "px");
    $("#blog").css("height", hsize + "px");
    $("#vj").css("height", hsize + "px");
    $("#contact").css("height", hsize + "px");
  });

  //WORKSの表示非表示
  $(function() {
    // 最初は全部隠れてる
    $("#works_item1_content").hide();
    $("#works_item2_content").hide();
    $("#works_item3_content").hide();
    $("#works_item4_content").hide();
    $("#works_item5_content").hide();
    $("#works_item6_content").hide();
    $("#works_item7_content").hide();
    $("#works_item8_content").hide();
    // 1つ目押したら1つ目表示
    $("#works_item1").click(function() {
      $("#works_item1_content").show();
      $("#works_item2_content").hide();
      $("#works_item3_content").hide();
      $("#works_item4_content").hide();
      $("#works_item5_content").hide();
      $("#works_item6_content").hide();
      $("#works_item7_content").hide();
      $("#works_item8_content").hide();
    });
    // 2つ目押したら2つ目表示
    $("#works_item2").click(function() {
      $("#works_item1_content").hide();
      $("#works_item2_content").show();
      $("#works_item3_content").hide();
      $("#works_item4_content").hide();
      $("#works_item5_content").hide();
      $("#works_item6_content").hide();
      $("#works_item7_content").hide();
      $("#works_item8_content").hide();
    });
    // 3つ目押したら3つ目表示
    $("#works_item3").click(function() {
      $("#works_item1_content").hide();
      $("#works_item2_content").hide();
      $("#works_item3_content").show();
      $("#works_item4_content").hide();
      $("#works_item5_content").hide();
      $("#works_item6_content").hide();
      $("#works_item7_content").hide();
      $("#works_item8_content").hide();
    });
    // 4つ目押した4つ目表示
    $("#works_item4").click(function() {
      $("#works_item1_content").hide();
      $("#works_item2_content").hide();
      $("#works_item3_content").hide();
      $("#works_item4_content").show();
      $("#works_item5_content").hide();
      $("#works_item6_content").hide();
      $("#works_item7_content").hide();
      $("#works_item8_content").hide();
    });
  });