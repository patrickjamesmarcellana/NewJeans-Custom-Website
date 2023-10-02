const first_photo = {
    element: document.querySelector(".about-panel-photo"),
    already_seen: false
}

const header_element = {
    element: document.querySelector(".about-panel-header"),
    already_seen: false
}

const content_element = {
    element: document.querySelector(".about-panel-content"),
    already_seen: false
}

const second_photo = {
    element: document.querySelector(".members-panel-photo"),
    already_seen: false
}

function apply_animation(element, animation, settings) {
    const bounding = element.element.getBoundingClientRect();
    if (!element.already_seen && bounding.top + (bounding.height / 2) > 0 && bounding.left + (bounding.width/2) > 0 && bounding.left + (bounding.width/2) < (window.innerWidth || document.documentElement.clientWidth) && bounding.top + (bounding.height / 2) < (window.innerHeight || document.documentElement.clientHeight)) {
        element.element.style.visibility = "visible"
        element.element.animate(animation, settings)
        element.already_seen = true;
    }
}

apply_animation(first_photo, { transform: ['scale(2)', 'scale(1)'] },
{ duration: 1000, fill: 'forwards', easing: 'ease-out' })

$(window).scroll((e) => {
    apply_animation(first_photo, { transform: ['scale(2)', 'scale(1)'] },
    { duration: 1000, fill: 'forwards', easing: 'ease-out' })
    apply_animation(header_element, { transform: ['translateX(-400%)', 'translateX(0)'] }, 
    { duration: 500, fill: 'forwards', easing: 'ease-out' })
    apply_animation(content_element, { transform: ['translateX(400%)', 'translateX(0)']}, 
    { duration: 500, fill: 'forwards', easing: 'ease-out' })
    apply_animation(second_photo, { opacity: ['0', '1'] },
    { duration: 2000, fill: 'forwards', easing: 'ease-out' })

})