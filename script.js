var imgs = document.querySelectorAll('#gallery .photos img');
var curr = 0;
var nextBtn = document.querySelector('.next');
var prevBtn = document.querySelector('.prev');


var nextSlide = function () {
    clearInterval(timer);
    // fadeout(imgs[curr]);
    // imgs[curr].style.display = 'none';
    // curr++;
    // if(curr == imgs.length){
    //     curr = 0;
    // }
    //
    // imgs[curr].style.display = 'block';
    // fadein(imgs[curr]);
    fadeout(imgs[curr],1000,function () {
        imgs[curr].style.display = 'none';
        curr++;
        if(curr == imgs.length){
            curr = 0;
        }
        imgs[curr].style.display = 'block';
        imgs[curr].style.opacity = 0;
        fadein(imgs[curr],1000,function () {
            timer = setInterval(nextSlide,3000);
        })
    });

};

nextBtn.onclick = nextSlide;

prevBtn.onclick = function () {
    console.log(this);
    clearInterval(timer);
    imgs[curr].style.display = 'none';
    curr--;
    if(curr < 0){
        curr = imgs.length-1;
    }
    imgs[curr].style.display = 'block';
    timer = setInterval(nextSlide,3000);
};

var timer = setInterval(nextSlide,3000);


function fadeout(elm, time, callback) {
    var t = time || 500;
    var fps = 50;
    var step = t / fps;
    var op = 1;
    var d0 = op / step;
    var call = callback;

    var timer = setInterval(function () {
        op -= d0;
        elm.style.opacity = op;
        step--;
        if(step === 0){
            elm.style.opacity=0;
            clearInterval(timer);
            call();
        }
    },(1000/fps));
}


function fadein(elm, time, callback) {
    var t = time || 500;
    var fps = 50;
    var step = t / fps;
    var op = 0;
    var d0 = op / step;
    var call = callback;

    var timer = setInterval(function () {
        op += d0;
        elm.style.opacity = op;
        step--;
        if(step === 0){
            elm.style.opacity = 1;
            clearInterval(timer);
            call();
        }
    },(1000/fps));
}
