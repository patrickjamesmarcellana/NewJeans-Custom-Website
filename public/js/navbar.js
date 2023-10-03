// click action listeners for navbar buttons
$(".navbar-logo").click(() => { window.location.href = "/" })
$("#home-button-1").click(() => { window.location.href = "/" })
$("#members-button-1").click(() => { window.location.href = "/members" })
$("#discography-button-1").click(() => { window.location.href = "/discography" })
$("#awards-button-1").click(() => { window.location.href = "/awards" })
$("#performances-button-1").click(() => { window.location.href = "/performances" })
$("#gallery-button-1").click(() => { window.location.href = "/gallery" })

$("#home-button-2").click(() => { window.location.href = "/" })
$("#members-button-2").click(() => { window.location.href = "/members" })
$("#discography-button-2").click(() => { window.location.href = "/discography" })
$("#awards-button-2").click(() => { window.location.href = "/awards" })
$("#performances-button-2").click(() => { window.location.href = "/performances" })
$("#gallery-button-2").click(() => { window.location.href = "/gallery" })

// hover event listener for navbar-buttons
$(".navbar-button3").mouseenter((e) => {
    const element_id = e.currentTarget.closest('.navbar-button').getAttribute("id")
    $("#" + element_id).css("transition-duration", "1s")
    $("#" + element_id).css("-webkit-transition-duration", "1s")
    $("#" + element_id).css("font-size", "19px")
})

$(".navbar-button3").mouseleave((e) => {
    const element_id = e.currentTarget.closest('.navbar-button').getAttribute("id")
    $("#" + element_id).css("transition-duration", "1s")
    $("#" + element_id).css("-webkit-transition-duration", "1s")
    $("#" + element_id).css("font-size", "16px")
})

$(".navbar-button2").mouseenter((e) => {
    const element_id = e.currentTarget.closest('.navbar-button').getAttribute("id")
    $("#" + element_id).css("transition-duration", "1s")
    $("#" + element_id).css("-webkit-transition-duration", "1s")
    $("#" + element_id).css("font-size", "24px")
})

$(".navbar-button2").mouseleave((e) => {
    const element_id = e.currentTarget.closest('.navbar-button').getAttribute("id")
    $("#" + element_id).css("transition-duration", "1s")
    $("#" + element_id).css("-webkit-transition-duration", "1s")
    $("#" + element_id).css("font-size", "18px")
})

// click event listener for hamburger
$(".navbar-hamburger").click(() => {
    $(".menu-modal").css("display", "block")
    setTimeout(function() {
        $(".menu-modal").css('opacity', '1')
        $(".menu-modal").css('transform', 'translateY(0)')
    }, 10);
    // $(".menu-modal").animate({ transform: ['translateY(-30%)', 'translateY(0)'], opacity: ['0', '1']},{ duration: 2000, fill: 'forwards', easing: 'ease-out' })
})

// event listener for window resize
function adjust_window() {
    if(window.visualViewport.width > 1000) {
        $(".menu-modal").css("display", "none")
    }
}
window.onresize = adjust_window

// click event listener for menu exit button
$(".exit-button").click(() => {
    setTimeout(function() {
        $(".menu-modal").css('opacity', '0')
        $(".menu-modal").css('transform', 'translateY(-30%)')
    }, 10);
    setTimeout(() => {
        $(".menu-modal").css("display", "none")
    }, 100)
    
})