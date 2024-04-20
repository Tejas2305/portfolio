

if (window.screen.width > 985) {
    $(document).ready(function () {

        $('.carousel').owlCarousel({
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeOut: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: false
                }
            }
        });
    });

}
if (window.screen.width <= 300) {
    location.replace("http://tejas2305.rf.gd/img/nosize.jpg")

}

// if (window.screen.width <= 980) {
//     document.getElementById("site").style.minWidth = ("1274px");
// }
function change(){
    var w=1400-(window.screen.width/10)
    document.getElementById("html").style.minWidth=(w)+"px";
    console.log(w);

}
change();
