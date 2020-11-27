


videostatslol = {
  "vid0": {
    Youtubeur: 0,
    IdYoutubeur: 0,
    IdVideo: 0,
    TitreVideo: 0,
 

  },

  "vid1": {
    Youtubeur: 0,
    IdYoutubeur: 0,
    IdVideo: 0,
    TitreVideo: 0,
 

    },

    "vid2": {
      Youtubeur: 0,
      IdYoutubeur: 0,
      IdVideo: 0,
      TitreVideo: 0,
   
  
    },

    "vid3": {
      Youtubeur: 0,
      IdYoutubeur: 0,
      IdVideo: 0,
      TitreVideo: 0,
   
  
    },

    "vid4": {
      Youtubeur: 0,
      IdYoutubeur: 0,
      IdVideo: 0,
      TitreVideo: 0,
    },
  

    "vid5": {
      Youtubeur: 0,
      IdYoutubeur: 0,
      IdVideo: 0,
      TitreVideo: 0,
   
  
    },

    "vid6": {
      Youtubeur: 0,
      IdYoutubeur: 0,
      IdVideo: 0,
      TitreVideo: 0,
   
  
    },

    "vid7": {
      Youtubeur: 0,
      IdYoutubeur: 0,
      IdVideo: 0,
      TitreVideo: 0,
   
  

    },


  }







$(document).ready(function(){
  document.getElementById("search").value = "Hypixel Skyblock"
  hide = document.getElementById("search")
  hide.style.display = "none";
  
  var API_KEY = "AIzaSyD8i_0JMyLJJQOBuib4dIdWA9q7-mFG1NU"
  var video = ""
  var videos = $("#videos")


 
    var search = $("#search").val();

    console.log("search.clicked ==> " + search)

    videoLists(API_KEY, search, 8, "");
  
  
  $("#channelInfo").submit(function(event){
    event.preventDefault();
    //alert("form is submitted");
 
    var search = $("#search").val();
    var nextPageToken = $("#nextPageToken").val();

    //console.log(nextPageToken)
    videoLists(API_KEY, search, 5, nextPageToken);
  })

  
    event.preventDefault();
 
    var videoId = $("#videoId").val();
    //var nextPageToken = $("#nextPageToken").val();

    console.log("detail-info.clicked ==>" + videoId)

    videoDetails(API_KEY, videoId, channelId, videoinfo);
  

  // add "export" button for CSV download @ 2020.11.15.
  $("#printOut").submit(function(event){
    event.preventDefault();
 
    // var jb = $( 'h1' ).html();
    var contents = $('#videos').html();
    
    //var splitCont = contents.split(' ')
    //alert(splitCont)
    
    //console.log(Array.isArray(splitCont))
    //console.log("printOut --> ",splitCont)

    let csvContent = "data:text/csv;charset=utf-8,";
    
    /*
    contents.forEach(function(rowArray) {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });
    */

    csvContent += contents;
    
    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
  })

  function videoLists(key, search, maxResults, nextPageToken){

    //$("#nextPageToken").empty()
    $("#totalResults").empty()
    $("#videos").empty()
    $("#contents").empty()

    $.get("https://www.googleapis.com/youtube/v3/search?key="+key
    + "&type=video&part=snippet&maxResults="+maxResults+ "&q="+search+"&pageToken="+nextPageToken, function(data){
      console.log('1')
      console.log(data)
      videostatslol = data

      for (let i = 0; i < 8; i++) {
        document.getElementById("widget"+(i+1)).src = "https://www.youtube.com/embed/" + videostatslol.items[i].id.videoId + "?html5=1&enablejsapi=1&autoplay=0&rel=0&showinfo=0&modestbranding=1&controls=1&autohide=0&vq=large"
      }
      


      //$("#nextPageToken").append(data.nextPageToken)
      
      document.getElementById("nextPageToken").value = data.nextPageToken;

      $("#totalResults").append("totalResults : " + data.pageInfo.totalResults)

      data.items.forEach(function(item, index, data) {
        console.log('2-1', index)
        console.log(data[index])
        console.log(index + " index")
        hh = "vid" + index
        videostatslol[hh].Youtubeur = item.snippet.channelTitle
        
        // 표 형식 추가 @ 2020.11.21
        // 참조 : https://blog.naver.com/neo_start/220322362255
        video = `
            <tr>
              <td>
                <iframe src="https://www.youtube.com/embed/${item.id.videoId}" height="315" width="420" frameboarder="0" allowfullscreen></iframe>
              </td>
              <td>
                <h6>${item.snippet.channelId}</h6>
              </td>
              <td>
                <h6>${item.snippet.channelTitle}</h6>
              </td>
              <td>
                <h6>${item.snippet.title}</h6>
              </td>
              <td>
                <h6>${item.snippet.description}</h6>
              </td>
              <td>
                <h6>${item.snippet.publishedAt}</h6>   
              </td>
        `    
        // video 상세정보 조회 + 추가한 다음, tbody에 표 형식으로 추가
        
        
        videoDetails(API_KEY, data[index].id.videoId, data[index].snippet.channelId, video);
        

      });
    })


  }

  function videoDetails(key, videoId, channelId, videoinfo){
    console.log("called videoDetails") // --> ", videoId, channelId)  

    $("#contents").empty()

    $.get("https://www.googleapis.com/youtube/v3/videos?id="+videoId + "&key="+key
    + "&part=snippet,contentDetails,statistics,status", function(detail){
      console.log("called getting videoDetails")  

      //$("#details").append("totalResults : " + detail.snippet.tags[])
      detail.items.forEach(function(item, index, det) {
        console.log('3-2', index, channelId)

        if (channelId == det[index].snippet.channelId) {
          
          videoDetail = videoinfo + `
              <td>
                <h6>${det[index].contentDetails.duration}</h6>
              </td>
              <td>
                <h6>${det[index].statistics.viewCount} </h6>
              </td>
              <td>
                <h6>${det[index].statistics.commentCount} </h6>
              </td>
              <td>
                <h6>${det[index].snippet.tags} </h6>
              </td>
            </tr>
          `

          $("#videos").append(videoDetail);


          //console.log(det[index].contentDetails.duration)
          //console.log(det[index].statistics.viewCount)
          //console.log(det[index].statistics.commentCount)
          //console.log(det[index].snippet.tags)

        }

        //$("#contents").append("<br>contentDetails.duration : " + det[index].contentDetails.duration);
        //$("#contents").append("<br>statistics.viewCount : " + det[index].statistics.viewCount);
        //$("#contents").append("<br>statistics.commentCount : " + det[index].statistics.commentCount);
        //$("#contents").append("<br>statistics.favoriteCount : " + det[index].statistics.favoriteCount);
        //$("#contents").append("<br>snippet.tags : " + det[index].snippet.tags);

      })    
    })
  }


  document.getElementById("ytplayer2").src = "http://www.youtube.com/embed/" + videostatslol.items[0].id.videoId

})