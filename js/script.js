//最初に発動するイベント
// 画面の大きさ反映させる
$(document).ready(function () {
//ウィンドウの高さを取得しhsizeに入れる
  hsize = $(window).height();
  windowWidth = $(window).width();
  //#topのCSSにheight(hsize)px
  $("#top").css("height", hsize + "px");
  $("#profile").css("height", hsize + "px");
  // 768px以上のとき
  if (windowWidth >= 768) {
    $("#profile_img").css("height", hsize + "px");
    $("#profile_img img").css("height", hsize + "px");
  }
  $("#skill").css("height", hsize + "px");
  // $("#works").css("height", hsize + "px");
  // 768px以上のとき
  if (windowWidth >= 768) {
    $("#blog").css("height", hsize + "px");
  }
  $("#vj").css("height", hsize + "px");
  if (windowWidth >= 768) {
    $("#contact").css("height", hsize + "px");
  }
});
//画面をリサイズ
$(window).resize(function () {
  hsize = $(window).height();
  windowWidth = $(window).width();
  $("#top").css("height", hsize + "px");
  $("#profile").css("height", hsize + "px");
  // 768px以上のとき
  if (windowWidth >= 768) {
    $("#profile_img").css("height", hsize + "px");
    $("#profile_img img").css("height", hsize + "px");
  }
  $("#skill").css("height", hsize + "px");
  // $("#works").css("height", hsize + "px");
  // 768px以上のとき
  if (windowWidth >= 768) {
    $("#blog").css("height", hsize + "px");
  }
  $("#vj").css("height", hsize + "px");
  if (windowWidth >= 768) {
    $("#contact").css("height", hsize + "px");
  }
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
  // 5つ目押した5つ目表示
  $("#works_item5").click(function() {
    $("#works_item1_content").hide();
    $("#works_item2_content").hide();
    $("#works_item3_content").hide();
    $("#works_item4_content").hide();
    $("#works_item5_content").show();
    $("#works_item6_content").hide();
    $("#works_item7_content").hide();
    $("#works_item8_content").hide();
  });

  // ボタンを押したらスクロールするようにする
  // クリックした要素のhref属性に指定されたidの要素の上端
  // またはhtml要素の上端をスクロール席に指定する
  // #で始まるリンクをクリックしたら実行
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 700;
    //クリックしたaタグのhrefで指定されている値を取得
    var href = $(this).attr("href");
    // 移動先を取得 hrefが"#"または""のときはhtml（つまりトップ）
    // それ以外のときはhrefに指定されているidの要素
    var target = $(href == "#" || href == "" ? "html" : href);
    // 移動先を数値で取得 targetの上端
    var position = target.offset().top;
    // スムーススクロール
    $("body, html").animate(
      // scrollTopをpositionに向けて変化
      {scrollTop:position}, speed, "swing"
    );
    return false;
  });
});