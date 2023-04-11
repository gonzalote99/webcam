const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const video = document.querySelector('.player');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo() {
  navigator.mediaDevices
  .getUserMedia({video: true, audio: false})
  .then((userMedia) => {
    video.srcObject = userMedia;
    video.play();
  })
  .catch((err) => console.log(err));
}


function paintToCanvas()  {
const width = video.videoWidth;
const height = video.videoHeight;
canvas.width = width;
canvas.height = height;

setInterval(() => {
  ctx.drawImage(video, 0, 0, width, height);

}, 16);
}


function takePhoto() {
  snap.currentTime = 0;
  snap.play();
  const imgSrc = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = imgSrc;
  link.setAttribute('download', 'handsome');
  link.innerHTML = `
  <img src="${imgSrc}" alt="Handsome">
  `;


  strip.insertBefore(link, strip.firstChild);
}


getVideo();
video.addEventListener('canplay', paintToCanvas)





