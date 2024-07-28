export function parallax(){
    const parallaxElements = document.querySelectorAll('.parallax')

    document.addEventListener('mousemove', (e) => {
        parallaxElements.forEach((move, index) => {
            let x = e.clientX / 170
            let y = e.clientY / 170
            let transform

            if(index % 2 === 0){
                transform = `translate(${x}px, ${y}px)`
            }else{
                transform = `translate(${-x}px, ${-y}px)`
            }

            move.style.transform = transform
        })
    })
}