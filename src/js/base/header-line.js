export function headerLine(){
    const el = document.querySelector('.header__line')

    function lineProgress(){
        const pageHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollPosition = document.documentElement.scrollTop;
        const percent = (scrollPosition / (pageHeight - windowHeight)) * 100; 
    
        el.style.width = `${percent}%`
    }

    window.addEventListener('scroll', lineProgress)
}