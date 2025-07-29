$(document).ready(function() {
  // --- 導入実績スライドショー ---
  // 画面幅に応じて処理を分岐
  if (window.matchMedia('(min-width: 480px)').matches) {
    // PC表示 (480px以上) のスライダー処理
    const $recordBody = $('.record-body');
    const $boxes = $('.record-box');
    const boxWidth = $recordBody.width() / 3;
    let currentIndex = 0;

    // 無限ループのために要素をクローン
    $boxes.clone().appendTo($recordBody);

    function slideImages() {
      currentIndex++;
      $recordBody.animate({ scrollLeft: currentIndex * boxWidth }, 500, function() {
        // ループの終端に来たら、アニメーションなしで先頭に戻す
        if (currentIndex >= $boxes.length) {
          currentIndex = 0;
          $recordBody.scrollLeft(0);
        }
      });
    }
    setInterval(slideImages, 3000);

  } else {
    // スマホ表示 (479px以下) のフェードイン/アウト処理
    const $boxes = $('.record-box');
    let currentIndex = 0;
    const totalBoxes = $boxes.length;

    // 最初に1番目だけ表示し、他を非表示にする
    $boxes.hide().first().show();

    setInterval(function() {
      // 現在のボックスをフェードアウト
      $boxes.eq(currentIndex).fadeOut(0);
      // 次のインデックスを計算 (ループ)
      currentIndex = (currentIndex + 1) % totalBoxes;
      // 次のボックスをフェードイン
      $boxes.eq(currentIndex).fadeIn(0);
    }, 3000);
  }

  // =======CTAホバー時の矢印色変更=======
  $(".try-cta").hover(function() {
      $(".try-cta img").attr("src", "img/arrow_bluewhite.png")
    },
    function() {
      $(".try-cta img").attr("src", "img/arrow_whiteblue.png")
    }
  );



  //======= bigcta-docbtnの画像をホバー時に動かす=======
  $(".bigcta-docbtn").hover(
  function() {
    $(".bigcta-docimg img").attr("src", "img/doc_img.png");
  },
  function() {
    $(".bigcta-docimg img").attr("src", "img/doc-before-img.png");
  }
  );


  //======= bigcta-btnの画像をホバー時に動かす=======
  $(".bigcta-btn").hover(
  function() {
    $(".bigcta-img img").css("transform", "scale(1.1)");
  },
  function() {
    $(".bigcta-img img").css("transform", "scale(1)");
  }
  );


  // =======bigcta-docbtnのホバー時の色変更=======
  $(".bigcta-docbtn").hover(
  function() {
    $(".bigcta-docbtn img").attr("src", "img/arrow-white.png")
  },
  function() {
    $(".bigcta-docbtn img").attr("src", "img/arrow_bluewhite.png")
  }
  );

  //======= bigcta-btnのホバー時の色変更=======
  $(".bigcta-btn").hover(
    function() {
            // hover時の画像変更
      $(".bigcta-btn img").attr("src", "img/arrow-white.png")
    }, 
    function() {
      // hover解除時の元の画像に戻す
      $(".bigcta-btn img").attr("src", "img/arrow_bluewhite.png")
    }
  );
});
