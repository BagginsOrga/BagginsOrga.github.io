
fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyA72M7JIiArW_bLyw0lPbdKY9bTF-BSJws&type=video&part=snippet&maxResults=5&q=Hypixel%20Skyblock")
.then(result => result.json())
.then((yt)=> {
  
  
liveitems = yt.items[0].id.videoId


//<script src="//code.jquery.com/jquery-latest.min.js"></script>
//<script src="//youtube_controller.min.js"></script>




var ytController0 = $("#ytplayer0").YTController({
    videoId: liveitems
});


 



})