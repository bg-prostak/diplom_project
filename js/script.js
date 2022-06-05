$(document).ready(function(){
 $("body").on("click","a", function (event) {
     //отменяем стандартную обработку нажатия по ссылке
     
     //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
     //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
     //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 500);
 });
});

$(document).ready(function(){
    $('.group__item__button').click(function(event){
        $('.list__upr').toggleClass('active');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});
/* ------------------------------------------------------------------------------------------GET_MORE_INFO */
const popupLinks = document.querySelectorAll( '.popup-link' );
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;
const timeout = 400;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName) ;
            popupOpen(curentPopup) ;
            e.preventDefault();
        });
    }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}
function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open' );
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();        
        }
        curentPopup.classList.add('open');
        
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.section-outer').offsetWidth + 'px';
    
    for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');
    
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}
function bodyUnLock() {
    setTimeout(function () {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index]; 
            el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);
    
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout) ;
}

function popupClose(popupActive, doUnlock = true){
    if(unlock){
        popupActive.classList.remove('open');
        if (doUnlock){
            bodyUnLock();
        }
    }
}

document.addEventListener('keydown', function(e){
    if(e.which ===27){
        const popupActive=document.querySelector('.popup.open');
        popupClose(popupActive);
    }
})
// 

