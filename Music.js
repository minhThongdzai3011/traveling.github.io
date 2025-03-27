document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('#small_part5 button');
    const d33 = document.querySelector('#d33');

    button.addEventListener('mouseenter', function() {
        d33.style.display = 'block';
        d33.style.color = 'silver';
    
    });

    button.addEventListener('mouseleave', function() {
        d33.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('#small_part51 button');
    const d331 = document.querySelector('#d331');

    button.addEventListener('mouseenter', function() {
        d331.style.display = 'block';
        d331.style.color = 'silver';
    
    });

    button.addEventListener('mouseleave', function() {
        d331.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('#small_part52 button');
    const d332 = document.querySelector('#d332');

    button.addEventListener('mouseenter', function() {
        d332.style.display = 'block';
        d332.style.color = 'silver';
    
    });

    button.addEventListener('mouseleave', function() {
        d332.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('#small_part53 button');
    const d333 = document.querySelector('#d333');

    button.addEventListener('mouseenter', function() {
        d333.style.display = 'block';
        d333.style.color = 'silver';
    
    });

    button.addEventListener('mouseleave', function() {
        d333.style.display = 'none';
    });
});

document.querySelectorAll('.play-button').forEach(button => {
    button.addEventListener('click', function() {
        const audioSrc = this.getAttribute('data-audio');
        const audioPlayer = document.getElementById('audio-player');
        if (audioPlayer.style.bottom === '5px' || audioPlayer.style.bottom === '') {
            audioPlayer.style.bottom = '-300px';
            audioPlayer.pause();
        } else {
            audioPlayer.style.bottom = '5px';
            audioPlayer.src = audioSrc;
            audioPlayer.play();
        }
    });
});

document.getElementById('next').onclick = function() {
    let list = document.querySelectorAll('.part6_1.item');
    let firstItem = list[0];
    let secondItem = list[1];
    let thirdItem = list[2];
    let lastItem = list[list.length - 1];

    document.getElementById('p6').removeChild(firstItem);
    document.getElementById('p6').appendChild(firstItem);
    firstItem.style.transform = "translateX(-25%)";
    secondItem.style.transform = "translateX(0%)";
    thirdItem.style.transform = "translateX(25%)";
    lastItem.style.transform = "translateX(50%)";
}

document.getElementById('prev').onclick = function() {
    let list = document.querySelectorAll('.part6_1.item');
    let firstItem = list[0];
    let secondItem = list[1];
    let thirdItem = list[2];
    let lastItem = list[list.length - 1];

    document.getElementById('p6').removeChild(lastItem);
    document.getElementById('p6').prepend(lastItem);
    firstItem.style.transform = "translateX(24%)";
    secondItem.style.transform = "translateX(16%)";
    thirdItem.style.transform = "translateX(8%)";
    lastItem.style.transform = "translateX(0%)";
}