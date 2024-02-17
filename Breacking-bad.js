var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var menu = document.getElementById('Menu');
var box_1 = document.getElementById('box-1');
var box_2 = document.getElementById('box-2')
var box_3 = document.getElementById('box-3');
var ff = document.getElementsByClassName('ff');
var p = document.getElementsByTagName('p');
var h1 = document.getElementsByTagName('h1');
var h2 = document.getElementsByTagName('h2');
var last_button = document.getElementsByClassName("last-button");
var next_button = document.getElementsByClassName("next-button");
var series_button = document.getElementById(`series-button`);
var series_container = document.getElementById(`linksContainer`);
var series = document.getElementsByClassName(`series`);
var video_buttonvar = document.getElementById(`video-button`);


function toggleLinks() {
  var linksContainer = document.getElementById("linksContainer");
  if (linksContainer.style.display === "block") {
    linksContainer.style.display = "none";
  } else {
    linksContainer.style.display = "block";
  }
}
function video_button() {
 var  video_button =  document.getElementById('video-button');
 video_button.style.display = "none";
 document.getElementById(`linksContainer`).style.display = `none`
 
 var run_video = document.getElementById('video_player')
 run_video.play();
 run_video.setAttribute('controls', 'true');
}
var indexValue = 0;
  function SlideShow(){
    setTimeout(SlideShow, 1500)
    var x;
    const imagesContainer = document.querySelector(".images");
    const imgs = imagesContainer.querySelectorAll("img");
  for (var x = 0; x < imgs.length; x++) {
    imgs[x].style.display = "none";
  }
    indexValue++
  if (indexValue > imgs.length) {
    indexValue = 1; 
  }

  imgs[indexValue - 1].style.display = "block";
}
SlideShow();
function ScreenAdaptation (width){

  if(width <= 1000){
    
    for(var i = 0; i < ff.length; i++){
      ff[i].style.cssText = "width: 100%; border-bottom: none; height: 100px; background: #326B3D; font-size: 60px; border-radius: 0; border: 1px solid black; ";
    }
    for(var i = 0; i < series.length; i++){
      series[i].style.cssText = `font-size: 50px; width: 100%`
    }

    for(var i = 0; i < last_button.length; i++){
      last_button[i].style.cssText = "width: 260px, height: 110px; display: flex; alingn-items: center; justify-content: center";
    }
    for(var i = 0; i < next_button.length; i++){
      next_button[i].style.cssText = "width: 260px, height: 110px; display: flex; alingn-items: center; justify-content: center";
    }
      
      menu.style.display = "contents";
      box_1.style.display = "none";
      box_2.style.cssText = "margin-left: 0; margin-right: 0";
      box_3.style.cssText = "position: fixed; margin-left: 70%; margin-top: -110%; min-width: 254px; max-width: 254px; height: 302px";
      

    for(var i = 0; i < p.length; i++ ){
      p[i].style.fontSize = "50px";
    }
    for(var i = 0; i < h1.length; i++ ){
      h1[i].style.fontSize = "74px";
    }
    for(var i = 0; i < h2.length; i++ ){
      h2[i].style.fontSize = "65px";
    } 
      series_container.style.cssText = `top: 108px; width: 210px`
      series_button.style.cssText = `font-size: 63px`
      video_buttonvar.style.cssText = `width: 140px`
  }
}
ScreenAdaptation(screenWidth);

 





async function fetchPosts () {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
  return posts.json()
}

async function fetchUser () {
  const user = await fetch('https://jsonplaceholder.typicode.com/users')
  return user.json()
}


async function renderPost (){
const posts = await fetchPosts();
const users = await fetchUser();

  
  for(const user of users){
    
      posts.forEach(post =>{

        if(user.id === post.userId){

        const post_list = document.querySelector('.post-list')
        const li = document.createElement('li');
        const name = document.createElement('h1');
        const pos = document.createElement('p');

        li.classList.add('item')
        
        name.innerHTML = user.name;
        pos.innerHTML = post.body;
        
        li.append(name, pos)
        post_list.appendChild(li)
        }
      });
    }
  }

renderPost() 



