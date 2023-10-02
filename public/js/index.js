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
    const bounding_1 = element.element.getBoundingClientRect();
    if (!element.already_seen && bounding_1.top >= 0 && bounding_1.left >= 0 && bounding_1.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding_1.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        element.element.animate(animation, settings)
        element.already_seen = true;
    }
}

$(window).scroll((e) => {
    const bounding_1 = header_element.element.getBoundingClientRect();
    if (!header_element.already_seen && bounding_1.top >= 0 && bounding_1.left >= 0 && bounding_1.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding_1.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        header.animate({
            transform: ['translateX(-400%)', 'translateX(0)'],
        }, {
            duration: 500,
            fill: 'forwards',
            easing: 'ease-out',
        });
        header_element.already_seen = true;
    }
    apply_animation(header_element, { transform: ['translateX(-400%)', 'translateX(0)'] }, 
    { duration: 500, fill: 'forwards', easing: 'ease-out' })
    apply_animation(content_element, { transform: ['translateX(400%)', 'translateX(0)']}, 
    { duration: 500, fill: 'forwards', easing: 'ease-out' })

})