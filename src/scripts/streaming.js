const getStreamingKey = localStorage.getItem('key');
const source = `http://localhost:3002/live/loi/index.m3u8`;
const servers = Array.from(document.querySelectorAll('.server-bt'))

////-- init player
var options = {
    html5: {
        hlsjsConfig: {
          // Put your hls.js config here
        }
    }
};

// setup beforeinitialize hook
videojs.Html5Hlsjs.addHook('beforeinitialize', (videojsPlayer, hlsjsInstance) => {
    // here you can interact with hls.js instance and/or video.js playback is initialized
});

var player = videojs('video-hls', options);

////


player.on('pause', function() {
    this.bigPlayButton.show();
  
    // Now the issue is that we need to hide it again if we start playing
    // So every time we do this, we can create a one-time listener for play events.
    video.one('play', function() {
      this.bigPlayButton.hide();
    });
  });

// const video = videojs('stream-video');
// const liveBT = document.querySelector('.live')
// liveBT.addEventListener("click",function(){
//     duration = video.duration
//     video.currentTime = duration-5
// })

servers[0].dataset.source =`http://localhost:3002/live/loi/index.m3u8`
servers[1].dataset.source =`http://127.0.0.1:3002/live/khang/index.m3u8`


for (var i=0, max=servers.length; i < max; i++) {
    // Do something with the element here
    servers[i].addEventListener("click",function(){
        const a = this.dataset.source
        removeClass("active")
        this.classList.add("active")
        loadHLS(a)
    })

};




function getStreamingURL(){
    
}
function loadHLS(source,player){
    player.src({type: 'application/x-mpegURL', src: source});
    player.play()
}


function removeClass(classname){
    console.log(servers)
    for (var i=0, max=servers.length; i < max; i++) {
        servers[i].classList.remove(classname)
    }
}
loadHLS(source, player)

