const character = document.getElementById('character');

let y = 0;

let x = 0;

window.addEventListener("keydown", function(event){
    console.log(event.key);
    switch (event.key){
        case 'w':
        case 'ArrowUp':
            let up = setInterval(function(){
                y++;
                character.style.bottom = y + 'px';
                if (y > 225) {
                    clearInterval(up);
                    alert('OUT OF ZONE');
                }
            }, 10)
            console.log(x, y);
            break;
        case 'a':
        case 'ArrowLeft':
            let left = setInterval(function(){
                x--;
                character.style.left = x + 'px';
                if (x < -470) {
                    clearInterval(left);
                    alert('OUT OF ZONE');
                }
            }, 10)
            console.log(x, y);
            break;
        case 's':
        case 'ArrowDown':
            let down = setInterval(function(){
                y--;
                character.style.bottom = y + 'px';
                if (y < -225) {
                    clearInterval(down);
                    alert('OUT OF ZONE');
                }
            }, 10)
            console.log(x, y);
            break;
        case 'd':
        case 'ArrowRight':
            let right = setInterval(function(){
                x++;
                character.style.left = x + 'px';
                if (x > 470) {
                    clearInterval(right);
                    alert('OUT OF ZONE');
                }
            }, 10)
            console.log(x, y);
    }
});

