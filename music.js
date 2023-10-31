let songIndex = 0;
let audioElement = new Audio('songs/2.mp3');
let masterPlay=document.getElementById('masterPlay');
let progressBar = document.getElementById('progressbar'); 
let songItems = Array.from(document.getElementsByClassName('songItem'));
let gif = document.getElementById('gif');
let songItemPlay = document.getElementsByClassName('songItemPlay');

let songs = [

           {songName:"let me love", filePath:"songs/1.mp3",coverPath:"covers/alan walker.jpg"},
           {songName:"Alan Walker  Ava Max", filePath:"songs/2.mp3",coverPath:"covers/alan walker.jpg"},
           {songName:"Alan Walker  Ava Max ", filePath:"songs/3.mp3",coverPath:"covers/alan walker.jpg"},
           {songName:"DJ Snake  Taki Taki ft ", filePath:"songs/4.mp3",coverPath:"covers/alan walker.jpg"},
           {songName:"Glass Animals  Heat Waves", filePath:"songs/5.mp3",coverPath:"covers/alan walker.jpg"},
           {songName:"Luis Fonsi  Despacito ft", filePath:"songs/6.mp3",coverPath:"covers/alan walker.jpg"},
           {songName:"Sub Urban  Cradles Official ", filePath:"songs/7.mp3",coverPath:"covers/alan walker.jpg"},

]

let i;
songItems.forEach((element,i)=>{
       // console.log(element,i);
       element.getElementsByTagName('img')[0].src=songs[i].coverPath;
       element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
})


masterPlay.addEventListener('click',()=>{
     if (audioElement.paused || audioElement.currentTime<=0) {
     	audioElement.play();
     	masterPlay.classList.remove('fa-circle-play');
     	masterPlay.classList.add('fa-circle-pause');
      gif.style.opacity=1;
     }
     else{
     	 audioElement.pause();
     	masterPlay.classList.remove('fa-circle-pause');
     	masterPlay.classList.add('fa-circle-play');
       gif.style.opacity=0;
     }
})


audioElement.addEventListener('timeupdate',()=>{

   progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   progressBar.value=progress;
})


progressBar.addEventListener('change',()=>{
   audioElement.currentTime=progressBar.value*audioElement.duration/100;
})



const makeAllPlays = ()=>{
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.classList.remove('fa-circle-pause');
      element.classList.add('fa-circle-play');
})

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.addEventListener('click',(e)=>{
      makeAllPlays();
      index = parseInt(e.target.id);
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause');
      audioElement.src = 'songs/1.mp3';
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');

   })
})