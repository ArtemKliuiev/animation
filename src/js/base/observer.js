export function observer(){
    const elements = document.querySelectorAll('.observer');

    const options = {
        threshold: 0.3
    };  

    elements.forEach(el => {
        const vanish = el.getAttribute('data-vanish')

        function callback(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && vanish) {
                    el.classList.add('vanish-visible')
                }else if(entry.isIntersecting){
                    el.classList.add('visible')
                }else if(vanish){
                    el.classList.remove('vanish-visible')
                }
            });
        }

        const observer = new IntersectionObserver(callback, options)
        observer.observe(el)
    })
}