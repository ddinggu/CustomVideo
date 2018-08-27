function excuteAd(){
    let nextStep = document.getElementById('nextStep');
    
    setTimeout(()=>{
        nextStep.childNodes[0].textContent += ' 광고';
    }, 6000)
}

function playevent() {
    // let playTime = parseInt(buttonElement.video.seekable.end(0)/30, 10);

    // for(let i=0; i<playTime; i++){
    //     excuteAd();
    // }
     
    if(buttonElement.video.paused){
        buttonElement.video.play();
        buttonElement.playButton.setAttribute('style', 'display : none');
        buttonElement.pauseButton.setAttribute('style', 'display : inline');
    }else{
        buttonElement.video.pause();
        buttonElement.pauseButton.setAttribute('style', 'display : none');
        buttonElement.playButton.setAttribute('style', 'display : inline');
    }
}

function toggleFullScreen() {
    if (buttonElement.video.requestFullscreen) {
        buttonElement.video.requestFullscreen();
    } else if (buttonElement.video.webkitRequestFullScreen) {
        buttonElement.video.webkitRequestFullScreen();
    } else if (player.mozRequestFullScreen) {
        player.mozRequestFullScreen();
    } else if (buttonElement.video.msRequestFullscreen) {
        buttonElement.video.msRequestFullscreen();
    }
}

function showControllers() {
    let contollers = document.querySelector('#contollers');

    contollers.setAttribute('style', 'display : block');
}

function hideControllers() {
    let contollers = document.querySelector('#contollers');

    contollers.setAttribute('style', 'display : none');
}
