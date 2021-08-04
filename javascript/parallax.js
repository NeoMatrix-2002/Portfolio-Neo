window.onload = function() {
    const EFFECT = document.querySelector("#effect");

    window.addEventListener('scroll', scrollEffect);

    function scrollEffect() {
        if(window,scrollY>=500) {
            EFFECT.style.opacity = '1';
            EFFECT.style.transfrom = 'translateX(0px)';
            EFFECT.style.transition = '0.5s ease-in-out';
        } 
        else {
            EFFECT.style.opacity = '0';
            EFFECT.style.transfrom = 'translateX(-50)';
        }
    }
    scrollEffect();
}