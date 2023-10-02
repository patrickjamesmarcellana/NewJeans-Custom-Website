const header = document.querySelector(".about-panel-header")
const content = document.querySelector(".about-panel-content")

const header_element = {
    element: header,
    already_seen: false
}

const content_element = {
    element: content,
    already_seen: false
}

function apply_animation(element, animation, settings) {
    const bounding = element.element.getBoundingClientRect();
    if (!element.already_seen && bounding.top + (bounding.height / 2) > 0 && bounding.left + (bounding.width/2) > 0 && bounding.left + (bounding.width/2) < (window.innerWidth || document.documentElement.clientWidth) && bounding.top + (bounding.height / 2) < (window.innerHeight || document.documentElement.clientHeight)) {
        element.element.animate(animation, settings)
        element.already_seen = true;
    }
}

$(window).scroll((e) => {
    apply_animation(header_element, { transform: ['translateX(-400%)', 'translateX(0)'] }, 
    { duration: 500, fill: 'forwards', easing: 'ease-out' })
    apply_animation(content_element, { transform: ['translateX(400%)', 'translateX(0)']}, 
    { duration: 500, fill: 'forwards', easing: 'ease-out' })

})