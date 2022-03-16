const searchvideos = async ()=>{
    console.log("a")
    try {
        let inp = document.getElementById("search").value;
        let res =await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inp}&key=AIzaSyABQVG89PmKmLPZD2DulOIWVKcjcKXWmWg&maxResults=20`)
   
    let data = await res.json()
    let videos=data.items
    appendvideos(videos)
     console.log("data:",data);
} catch(error) {
    console.log("erroe:",error)
}
};
const appendvideos =(data) => {
    document.getElementById("search_retules").innerHTML=""
       try{
           data.map((el) =>{
               let div=document.createElement("div")
               let title=document.createElement("p")
               title.innerText=el.snippet.title
               let iframe=document.createElement("img")
               iframe.src=el.snippet.thumbnails.high.url;
               ca=document.createElement("iframe")
               ca.src=`https://www.youtube.com/embed/${el.id.videoId}`
               iframe.style.width="100%"
              iframe.style.height="170px"
               div.addEventListener("click",function(){
               cardto(ca)
        
     })
               div.append(iframe,title)
        
               document.getElementById("search_retules").append(div)
           });
       } catch(error){
           console.log("error:",error)
       }
   }
         
                     function cardto(ca){
                        var c=[]
                          c.push(ca.src)
                         console.log(c)
                         window.open(c);
                     }

//   const appendvideos =(data) => {
//    document.getElementById("content").innerHTML=""
//       try{
//           data.map((el) =>{
//               let div=document.createElement("div")
//               let title=document.createElement("p")
//               title.innerText=el.snippet.title
//               let iframe=document.createElement("img")
//               iframe.src=el.snippet.thumbnails.high.url;
//               iframe.style.width="100%"
//               iframe.style.height="170px"
//             let iframe1=document.createElement("iframe")
//                iframe1.src=`https://www.youtube.com/embed/${el.id.videoId}`
//                   div.document.addEventListener("click",function(){
//                     addopen(el)
//                   })
//               div.append(iframe,title,)
//               document.getElementById("content").append(div)
//           });
//       } catch(error){
//           console.log("error:",error)
//       }
//   }
//     var c=[]
//          function addopen(el){
//              c.push(el)
//              console.log(el)
           
//          }
     