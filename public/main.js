let buttonElement = {
    video : document.getElementById('bunnyVideo'),
    playButton : document.getElementById('play'),
    pauseButton : document.getElementById('pause'),
    playnpause : document.getElementsByClassName('playnpause'),
    volumeBar : document.getElementById('volumebar'),
    muteButton : document.getElementById('mute'),
    playup : document.getElementById('playup'),
    playback : document.getElementById('playback'),
    fullscreen : document.getElementById('fullscreen'),
    seekerbar : document.getElementById('seekerbar'),
    container : document.querySelector('#container')
}


// 화면 클릭시 play & pause
buttonElement.video.addEventListener('click', playevent);

// video에 mouseover가 실행되면 controller가 올라온다. 
container.addEventListener('mouseover', showControllers)

// video에 mouseover가 실행되면 controller가 올라온다. 
container.addEventListener('mouseleave', hideControllers)

// play & pause 버튼 클릭시 재생, 
Array.from(buttonElement.playnpause).forEach( el => el.addEventListener('click', playevent));

// 볼륨 뮤팅
buttonElement.muteButton.onclick = () => {
    if(buttonElement.video.muted){
        buttonElement.video.muted = false
        window.pointVal === 'undefined' ? buttonElement.volumeBar.value = 1 : buttonElement.volumeBar.value = pointVal;
    }
    else{ 
        buttonElement.video.muted = true;
        buttonElement.volumeBar.value = 0;
    }
    
    console.log(`current volume : ${buttonElement.video.volume}`);
}

// 볼륨 변경
buttonElement.volumeBar.oninput = () => {
    buttonElement.video.muted ? buttonElement.video.muted = false : null;
    pointVal = buttonElement.volumeBar.value;
    
    buttonElement.video.volume = pointVal;
    console.log(`current volume : ${buttonElement.video.volume}`);
}

// 재생구간 변경 
buttonElement.playup.onclick = () =>{
    buttonElement.video.currentTime += 12;
    console.log(`current time : ${buttonElement.video.currentTime}`);
}

buttonElement.playback.onclick = () =>{
    buttonElement.video.currentTime -= 12;
    console.log(`current time : ${buttonElement.video.currentTime}`);
}

// 드래그에 따른 비디오 이동
buttonElement.seekerbar.oninput = () => {
    let pointVal = buttonElement.seekerbar.value;
    let seekLength = buttonElement.video.seekable.end(0)/100;
    buttonElement.video.currentTime = pointVal * seekLength;
}

// seekerbar 업데이트 
buttonElement.video.addEventListener("timeupdate", () => {
    let value = (100 / buttonElement.video.duration) * buttonElement.video.currentTime;
    buttonElement.seekerbar.value = value;
});

// 전체화면 
// buttonElement.fullscreen.onclick = () =>{
//     document.querySelector('#container').webkitRequestFullscreen(); 
    
//     // let video = document.querySelector('video');
//     // video.classList.toggle('fullscreen');
// }

buttonElement.fullscreen.addEventListener('click', toggleFullScreen)


// video가 끝났을 때 다른 링크를 안내
buttonElement.video.onended = () => {
    let nextStep = document.getElementById('nextStep');

    nextStep.innerHTML= '영상을 더 보시려면 <a href="https://www.bigbuckbunny.org/">Big Buck Bunny</a>';

}