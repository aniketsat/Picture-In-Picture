const videoElement = document.getElementById('video');
const startButton = document.getElementById('start-button');
const shareButton = document.getElementById('share-button');


// Prompt to select media stram, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('The error is ', error)
    }
}


startButton.addEventListener('click', async () => {
    // disble button
    startButton.disabled = true;
    // start pic in pic
    await videoElement.requestPictureInPicture();
    // Reset button
    startButton.disabled = false;
});


shareButton.addEventListener('click', async () => {
    selectMediaStream();
});


// On load
// selectMediaStream();