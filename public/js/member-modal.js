// click event listener for member photos
$(".member").click(() => {
    $(".member-modal").css("display", "flex")
    setTimeout(function() {
        $(".member-modal").css('opacity', '1')
        $(".member-modal").css('transform', 'translateY(0)')
    }, 10);

})

// click event listener for menu exit button
$(".exit-button").click(() => {
    setTimeout(function() {
        $(".member-modal").css('opacity', '0')
        $(".member-modal").css('transform', 'translateY(-30%)')
    }, 10);
    setTimeout(() => {
        $(".member-modal").css("display", "none")
    }, 100)
})

// exit on click outside the box
$(".member-modal").click(() => {
    setTimeout(function() {
        $(".member-modal").css('opacity', '0')
        $(".member-modal").css('transform', 'translateY(-30%)')
    }, 10);
    setTimeout(() => {
        $(".member-modal").css("display", "none")
    }, 100)
})
$(".main-box").click((e) => {
    e.stopPropagation()
})