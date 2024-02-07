$("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();

  // クリックしたらis-openクラスの付け外し
  $("#js-drawer-content").toggleClass("is-open");

  //クリックされたらis-clickedクラスの付け外し
  $("#js-drawer-icon").toggleClass("is-clicked");
});

$('#js-drawer-content a[href^="#"]').on("click", function (e) {
  $("#js-drawer-icon").removeClass("is-clicked");
  $("#js-drawer-content").removeClass("is-open");
});

//href属性の値が "#" で始まるすべての <a> 要素を選択
$('a[href^="#"]').on("click", function (e) {
  //クリックされた <a> 要素の href 属性の値を取得
  const id = $(this).attr("href");

  //取得した href 属性の値に基づいて、スクロール先の要素を特定する。id が空文字列の場合はページ上部("html")にスクロールするようにし、それ以外の場合は対応する要素を取得
  const target = $("#" == id ? "html" : id);
  //スクロール先の要素(target)のページ上部からの距離（位置）を取得
  const position = $(target).offset().top;
  const speed = 1000;

  $("html, body").animate(
    {
      //positionに移動
      scrollTop: position,
    },
    speed,
    "swing"
  );
});
