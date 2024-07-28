export function canvas() {
    const canvasEl = document.getElementById('canvas');
    const ctx = canvasEl.getContext('2d');
    const pi = Math.PI;
    const radius = 20;
    const colors = [
        '#d32f2f',
        '#0288d1',
        '#212121',
        '#ff9800',
        '#4caf50',
        '#ff5722',
        '#673ab7',
        '#009688',
        '#ffeb3b'
    ]

    let x = 50;
    let y = 100;
    let dx = 2;
    let dy = 2;
    let indexColor = 0;

    function draw() {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height); 
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, pi * 2, false);
        ctx.fillStyle= colors[indexColor] ;
        ctx.fill();
        ctx.closePath();

        x += dx;
        y += dy;

        if (x + radius > canvasEl.width || x - radius < 0) {
            dx = -dx;
            indexColor++
        }
        if (y + radius > canvasEl.height || y - radius < 0) {
            dy = -dy;
            indexColor++
        }

        if(indexColor > 8){
            indexColor = 0
        }

        requestAnimationFrame(draw); 
    }

    draw(); 
}

