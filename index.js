const character = document.getElementById('character');

let y = 0;

let x = 0;

if (y > 14 
|| x >= 30
|| y < -14
|| x <= -30){
    alert('stop');
}

window.addEventListener("keydown", function(event){
    console.log(event.key);
    switch (event.key){
        case 'w':
        case 'ArrowUp':
                let up = setInterval(function(){
                    y++;
                    character.style.bottom = y + 'px';
                }, 10)
                console.log(x, y);
            break;
        case 'a':
        case 'ArrowLeft':
                x--;
                character.style.left = x + 'rem';
                console.log(x, y);
            break;
        case 's':
        case 'ArrowDown':
                y--;
                character.style.bottom = y + 'rem';
                console.log(x, y);
            break;
        case 'd':
        case 'ArrowRight':
                x++;
                character.style.left = x + 'rem';
                console.log(x, y);
    }
});

