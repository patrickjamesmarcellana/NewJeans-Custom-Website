// click event listener for member photos
$(".member").click(() => {
    $(".member-modal").css("display", "flex")
    $(".member-modal").animate({ opacity: ['0', '1'] },{ duration: 1500, fill: 'forwards', easing: 'ease-out' })
})

// click event listener for menu exit button
$(".exit-button").click(() => {
    $(".member-modal").css("display", "none")
})

// exit on click outside the box
$(".member-modal").click(() => {
    $(".member-modal").css("display", "none")
})
$(".main-box").click((e) => {
    e.stopPropagation()
})