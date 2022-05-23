const video = document.querySelector('.video'),
    playBtn = document.querySelector('.controls__play'),
    stopBtn = document.querySelector('.controls__stop'),
    playBtnImg = document.querySelector('.play__btn'),
    progress = document.querySelector('.progress'),
    play_pause = document.querySelector('.buttons_video'),
    time = document.querySelector('.controls__time');
//play/pause video//

function toggleVideoStatus() {
    if (video.paused) {
        video.play()
        playBtnImg.src = './assets/svg/pause.svg'
        play_pause.style.display = 'none'
    } else {
        video.pause()
        playBtnImg.src = './assets/svg/play.svg'
        play_pause.style.display = 'block'

    }
}
playBtn.addEventListener('click', toggleVideoStatus)
video.addEventListener('click', toggleVideoStatus)
play_pause.addEventListener('click', toggleVideoStatus)

/*stop video*/

function toggleVideoStop() {
    video.currentTime = 0
    video.pause()
    playBtnImg.src = './assets/svg/play.svg'
}
stopBtn.addEventListener('click', toggleVideoStop)

/*timer*/

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100


    //minute//
    let minutes = Math.floor(video.currentTime / 60)
    if (minutes < 10) {
        minutes = '0' + String(minutes)
    }
    //seconds
    let seconds = Math.floor(video.currentTime % 60)
    if (seconds < 10) {
        seconds = '0' + String(seconds)
    }
    time.innerHTML = `${minutes} : ${seconds}`

    slidingProgress()//////
}

video.addEventListener('timeupdate', updateProgress)

//set progress
function setProgress() {
    video.currentTime = (progress.value * video.duration) / 100

}
progress.addEventListener('change', setProgress)


///volume ///


//звук

document.querySelector('.volume').oninput = videoVolume;

function videoVolume() {
    let v = this.value;
    video.volume = v / 100;
    if (video.volume == 0) {
        changeButtonType(btnMute, '<img src="./assets/svg/volume_off.svg" alt="volume" height="36" width="36">');
    } else {
        changeButtonType(btnMute, '<img src="./assets/svg/volume_on.svg" alt="volume" height="36" width="36">');
    }
}

///кнопка звука
const btnMute = document.getElementById('btnMute');

function muteVolume() {
    if (video.muted) {
        // Change the button to a mute button
        changeButtonType(btnMute, '<img src="./assets/svg/volume_on.svg" alt="volume" height="36" width="36">');
        video.muted = false;
    }
    else {
        // Change the button to an unmute button
        changeButtonType(btnMute, '<img src="./assets/svg/volume_off.svg" alt="volume" height="36" width="36">');
        video.muted = true;
    }
}

function changeButtonType(btn, value) {
    btn.title = value;
    btn.innerHTML = value;
    btn.className = value;
}


////////////////////////////////////////////////////////////////////


const progress_volume = document.querySelector('.progress_volume');

progress_volume.addEventListener('input', function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #d8d8d8 ${value}%, #d8d8d8 100%)`
})




function slidingProgress() {
    progress.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${progress.value}%, #d8d8d8 ${progress.value}%, #d8d8d8 100%)`
}

video.addEventListener('timeupdate', updateProgress)

progress.oninput = slidingProgress;



