console.log("Welcome to spotify");
// initialize the variable
let songIndex = 0;
// audioElement.play();
let audioElement = new Audio("1.mp3");
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
   { songName: "Mera maan", filepath:"songs\1.mp3",coverPath:"cover1.png"},
   {songName: "Wishlist", filepath:"songs\2.mp3",coverPath:"cover2.jpg"},
   {songName: "Baarshien", filepath:"songs\3.mp3",coverPath:"cover3.jpg"},
   {songName: "I like better", filepath:"songs\4.mp3",coverPath:"cover4.jpg"},
   {songName: "Socha vich tu", filepath:"songs\5.mp3",coverPath:"cover5.jpg"},

   
]

songItem.forEach((element,i) => {
   console.log(element,i);
   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innertext = songs[i].songName;
});

//handle play/pause click
masterplay.addEventListener('click',()=>{
   if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      masterplay.classList.remove('fa-circle-play');
      masterplay.classList.add('fa-circle-pause');
      gif.style.opacity=1;
   }
   else{
      audioElement.pause();
      masterplay.classList.remove('fa-circle-pause');
      masterplay.classList.add('fa-circle-play');
      gif.style.opacity=0;
   }
})

audioElement.addEventListener('timeupdate',()=>{
   
   //  update seekbar
   progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   myprogressbar.value = progress;

})
myprogressbar.addEventListener('change',()=>{
   audioElement.currentTime = myprogressbar.value *audioElement.duration/100;
})
const makeAllPlays =()=>{
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      
         element.classList.remove('fa-circle-pause');
         element.classList.add('fa-circle-play');
   
      })
   
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.addEventListener('click',(e)=>{
      makeAllPlays();
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause');
     
      audioElement.src = `songs\${index+1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterplay.classList.remove('fa-circle-pause');
      masterplay.classList.add('fa-circle-play');

   })
})






















