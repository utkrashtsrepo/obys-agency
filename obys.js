var tl = gsap.timeline();

// 🔒 This flag will make sure the counter runs only once
let counterStarted = false;

tl.from(".line h1", {
    y: 150,
    stagger: 0.2,
    duration: 0.6,
    delay: 0.5
});

tl.from("#line1part1, .line h2", {
    opacity: 0,
    onstart: function () {
        // Prevent the counter from running multiple times
        if (counterStarted) return;
        counterStarted = true;

        var h5timer = document.querySelector("#line1part1 h5");
        var grow = 0;
        var interval = setInterval(function () {
            if (grow <= 100) {
                h5timer.innerHTML = grow++;
            } else {
                clearInterval(interval);
            }
        }, 35);
    },
});

tl.to(".line h2", {
    animationName: "anime",
    opacity:1
})

tl.to("#loader", {
    opacity: 0,
    delay: 3.6,
    duration: 0.3,
});

tl.from("#page1", {
    y: 1600,
    opacity: 0,
    duration:0.5,
    ease:Power4
})

tl.to("#loader", {
    display: "none",

})