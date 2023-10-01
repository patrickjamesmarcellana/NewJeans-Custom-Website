$(window).scroll((e) => {
    // Reference for checking if an element is in viewport: https://awik.io/check-if-element-is-inside-viewport-with-javascript/#:~:text=To%20find%20out%20if%20the,the%20viewport%20height%20ie%20window.
    const header = document.querySelector(".about-panel-header")
    const content = document.querySelectorAll(".about-panel-content")

    let bounding_1 = header.getBoundingClientRect();
    if (bounding_1.top >= 0 && bounding_1.left >= 0 && bounding_1.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding_1.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        header.animate({
            transform: ['translateX(-400%)', 'translateX(0)'],
        }, {
            duration: 500,
            fill: 'forwards',
            easing: 'ease-out',
        });
    }

    // const posts = document.querySelectorAll(".post-container")
    // for(post of posts) {
    //     let bounding = post.getBoundingClientRect();
    //     const post_id = post.getAttribute("post-id") 
    //         if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
    //             console.log('Element ' + post_id + ' is in the viewport!');
    //             const post = postManager.getPost(post_id) // getting the post will increment the view count
    //         } 
    //     }
    // }, 200); // 200 -> in milliseconds
})