// overlay-script.js
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-overlay');
  const nav = document.querySelector('.nav-overlay');
  const menuText = document.querySelector('.menu');
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    
    const isOpen = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isOpen);
    nav.setAttribute('aria-hidden', !isOpen);

    // テキストを 'MENU' と 'CLOSE' で切り替える
    if (isOpen) {
      menuText.textContent = 'CLOSE';
    } else {
      menuText.textContent = 'MENU';
    }

    // メニューオープン時に背景スクロールを防止
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  
  // ESCキーでメニューを閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
      hamburger.setAttribute('aria-expanded', false);
      nav.setAttribute('aria-hidden', true);
      menuText.textContent = 'MENU'; // テキストを 'MENU' に戻す
      document.body.style.overflow = '';
    }
  });
});

//メニュー内を閉じておく
$(function () {
  $(".header__navi_02 a[href]").click(function () {
    $(".header__navi_02").removeClass("active");
    $(".sp-menu-btn_02").removeClass("active");
  });
})