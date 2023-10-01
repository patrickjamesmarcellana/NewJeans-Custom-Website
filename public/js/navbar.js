// click action listeners for navbar buttons
$(".navbar-logo").click(() => { window.location.href = "/" })
$("#home-button").click(() => { window.location.href = "/" })
$("#members-button").click(() => { window.location.href = "/members" })
$("#discography-button").click(() => { window.location.href = "/discography" })
$("#awards-button").click(() => { window.location.href = "/awards" })
$("#performances-button").click(() => { window.location.href = "/performances" })
$("#gallery-button").click(() => { window.location.href = "/gallery" })

// hover event listener for navbar-buttons
$(".navbar-button").mouseenter((e) => {
    const element_id = e.currentTarget.closest('.navbar-button').getAttribute("id")
    $("#" + element_id).css("transition-duration", "1s")
    $("#" + element_id).css("-webkit-transition-duration", "1s")
    $("#" + element_id).css("font-size", "18px")
})

$(".navbar-button").mouseleave((e) => {
    const element_id = e.currentTarget.closest('.navbar-button').getAttribute("id")
    $("#" + element_id).css("transition-duration", "1s")
    $("#" + element_id).css("-webkit-transition-duration", "1s")
    $("#" + element_id).css("font-size", "15px")
})

// click event listener for hamburger
$(".navbar-hamburger").click(() => {
    $(".menu-modal").css("display", "block")
    $(".navbar-panel").css("display", "none")
    $(".content").css("display", "none")
})