
let song= document.querySelector('.song');
let progressBar= document.querySelector('.progressBar');
let playButton= document.querySelector("#playButton");
let songSource= document.querySelector('#songSource');
let songName= document.querySelector('h1');
let creatorName= document.querySelector('p');
let songPic= document.querySelector('.songPic');
console.log(songName);
let songs=[{

    name: '101',
    artist: '-Seedhe Maut',
    Image: '101.jpg',
    audio: '101.mp3'
},
{
   
    name: 'Gulabo',
    artist: '-Arpit Bala',
    Image: 'gulabo.jfif',
    audio: 'gulabo.mp3'
},
{
    
    name: 'Nalla Freestyle',
    artist: '-Seedhe Maut',
    Image: 'freestyle.jpg',
    audio: 'nalla.mp3'
},
{
    
    name: 'Namastute',
    artist: '-Seedhe Maut',
    Image: 'nama.jpg',
    audio: 'nama.mp3'
},
{
 
    name: 'Gumaan',
    artist: '-Talha Anjum',
    Image: 'gumann.jfif',
    audio: 'gumaan.mp3'
},
{
  
    name: 'Baaz',
    artist: '-Talha Yunus',
    Image: 'baaz.jpg',
    audio: 'baaz.mp3'
},
{
    name: 'The Less I Know The Better',
    artist: '-Tame Impala',
    Image: 'better.jpeg',
    audio: 'better.mp3'
},
{

    name: 'Picture',
    artist: '-Talha Anjum',
    Image: 'picture.jfif',
    audio: 'picture.mp3'
},
{
   
    name: 'Death Wish',
    artist: '-Talha Anjum',
    Image: 'death.jpg',
    audio: 'deathwish.mp3'
},
{
    name: 'Dooba',
    artist: '-Udbhav',
    Image: 'dooba.jpg',
    audio: 'dooba.mp3'
},

]
function home(){
   const pop= document.querySelector('.tab4')
   pop.style.backgroundImage='none';
   pop.innerHTML=` 
   <table>
   <th style="color: white; font-size: x-large;">
       Songs
   </th>
   <tr>
       <td>
       <button class="music_buttons" onclick="songSourceChanger(101)">
           <img src="101.jpg" height="100px"><br>101
       </button>
       </td>
       <td>
       <button class="music_buttons" onclick="songSourceChanger('Gulabo')">
           <img src="gulabo.jfif" height="100px"><br>Gulabo
       </button>
       </td>
       <td>
       <button class="music_buttons" onclick="songSourceChanger('Nalla Freestyle')">
           <img src="freestyle.jpg" height="100px"><br>Freestyle
       </button>
       </td>
       <td>
           <button class="music_buttons" onclick="songSourceChanger('Namastute')">
           <img src="nama.jpg" height="100px"><br>Namastute
       </button>
       </td>
       <td>
       <button class="music_buttons" onclick="songSourceChanger('Dooba')">
           <img src="dooba.jpg" height="100px"><br>Dooba
       </button>
       </td>
   </tr>
   <th style="color: white; font-size: x-large;">
       Albums
   </th>
   <tr>
       <td>
       <button class="music_buttons" >
           <img src="throw.jfif" height="100px"><br>Throwaways
       </button>
       </td>
       <td>
       <button class="music_buttons">
           <img src="overthink.jfif" height="100px"><br>OverThink
       </button>
   </td>
       <td>
       <button class="music_buttons">
           <img src="rescue.jpg" height="100px"><br>Rescue
       </button>
   </td>
   <td>
   <button class="music_buttons">
       <img src="khayal.jpg" height="100px"><br>khayal
   </button>
   </td>
   <td>
   <button class="music_buttons" >
       <img src="anveshna.jpg" height="100px"><br>Anveshna
   </button>
   </td>
   </tr>
   <th  style="color: white; font-size: x-large;">
       OverSeas
   </th>
   <tr>
       <td>
       <button class="music_buttons" onclick="songSourceChanger('Gumaan')">
           <img src="gumann.jfif" height="100px"><br>Gumaan
       </button>
       </td>
       <td>
       <button class="music_buttons" onclick="songSourceChanger('Baaz')">
           <img src="baaz.jpg" height="100px"><br>Baaz
       </button>
       </td>
       <td>
       <button class="music_buttons" onclick="songSourceChanger('Picture')">
           <img src="picture.jfif" height="100px"><br>Picture
       </button>
       </td>
       <td>
       <button class="music_buttons" onclick="songSourceChanger('Death Wish')">
           <img src="death.jpg" height="100px"><br>DeathWish
       </button>
       <td>
       <button class="music_buttons" onclick="songSourceChanger('The Less I Know The Better')">
           <img src="better.jpeg" height="100px"><br>Better
       </button>
       </td>
   </tr>
</table>`
}
function search(){
    const pop= document.querySelector('.tab4')
    pop.style.backgroundImage='none';
    pop.innerHTML= `
        <div class="search">
        <label for="searchbar"> <i class="fa-solid fa-magnifying-glass" style="color: white; font-size: x-large; padding-top:4px;"></i></label>
        <input type="text" id="searchbar" name="q" placeholder="Enter the name of song"  onkeydown=" 
        if(event.key=='Enter'){
        showClick();
        }">
</div>
<div class="searchTable">
    <table >
        <tr>
            <td class="searchTd">
            <button id="pott" class="SearchMusic_buttons" onclick="songSourceChanger(101)">
                <img src="101.jpg" height="100px"><br>101
            </button>
            </td>
            <td class="searchTd">
            <button class="SearchMusic_buttons"  onclick="songSourceChanger('Gulabo')">
                <img src="gulabo.jfif" height="100px"><br>Gulabo
            </button>
            </td>
            <td class="searchTd">
            <button class="SearchMusic_buttons" onclick="songSourceChanger('Nalla Freestyle')">
                <img src="freestyle.jpg" height="100px"><br>Freestyle
            </button>
            </td>
            <td class="searchTd">
                <button class="SearchMusic_buttons" onclick="songSourceChanger('Namastute')">
                <img src="nama.jpg" height="100px"><br>Namastute
            </button>
            </td>
        </tr>
        <tr>
            <td class="searchTd">
            <button class="SearchMusic_buttons">
                <img src="throw.jfif" height="100px"><br>Throwaways
            </button>
            </td>
            <td class="searchTd">
            <button class="SearchMusic_buttons">
                <img src="overthink.jfif" height="100px"><br>OverThink
            </button>
        </td>
            <td class="searchTd">
            <button class="SearchMusic_buttons">
                <img src="rescue.jpg" height="100px"><br>Rescue
            </button>
        </td>
        <td class="searchTd">
        <button class="SearchMusic_buttons">
            <img src="anveshna.jpg" height="100px"><br>Anveshna
        </button>
        </td>
        </tr>
        <tr>
            <td class="searchTd">
            <button class="SearchMusic_buttons" onclick="songSourceChanger('Gumaan')">
                <img src="gumann.jfif" height="100px"><br>Gumaan
            </button>
            </td>
            <td class="searchTd">
            <button class="SearchMusic_buttons" onclick="songSourceChanger('Baaz')">
                <img src="baaz.jpg" height="100px"><br>Baaz
            </button>
            </td>
            <td class="searchTd">
            <button class="SearchMusic_buttons" onclick="songSourceChanger('Death Wish')">
                <img src="death.jpg" height="100px"><br>DeathWish
            </button>
            <td class="searchTd">
            <button class="SearchMusic_buttons" onclick="songSourceChanger('The Less I Know The Better')">
                <img src="better.jpeg" height="100px"><br>Better
            </button>
            </td>
        </tr>
     </table>
     </div>
    `
}

function showClick(){
    const songsList = document.querySelector('.searchTable');
    let a=0;
    songsList.style.justifyContent = 'flex-start';
    songsList.style.marginLeft = '20px';
    let value=document.getElementById("searchbar").value;

for(let i=0; i<songs.length; i++){
    if(value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()===songs[i].name){
        a++;
          songsList.innerHTML=`
          <div style="display: flex; flex-direction: column; padding-bottom: 20px">
           <div>
              <button class="SearchMusic_buttons" onclick="songSourceChanger('${songs[i].name}')">
                  <img src="${songs[i].Image}" height="100px"><br>${songs[i].name}
              </button>
         </div>
         </div>
         `;
    }
}
if(a==0)
{
    songsList.innerHTML=`
          <div style="color: white; font-size: x-large; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
              No result found
         </div>
         `;
}
}
function songSourceChanger(nameOfArtist){
    console.log(nameOfArtist);
  for (let index = 0; index < songs.length; index++) {
     if(songs[index].name==nameOfArtist)
     {
        songPic.src= songs[index].Image;
        songSource.src=songs[index].audio;
        songName.innerHTML= songs[index].name;
        creatorName.innerHTML= songs[index].artist;
        song.load();
        song.onloadedmetadata= function(){
        progressBar.max= song.duration;
        progressBar.value= song.currentTime;
     }
     break;
     }
  }
    playPauseFunc();
}

function playPauseFunc() { 
 if(playButton.classList.contains("fa-play"))
 {
    song.play();
    playButton.classList.remove("fa-play");
    playButton.classList.add("fa-pause");
 }
 else{         
    song.pause();
    playButton.classList.remove("fa-pause");
    playButton.classList.add("fa-play");
 }
}
if(songSource.src!=undefined)
{
if(song.play()){
   setInterval(() => {
     progressBar.value= song.currentTime;
   }, 500);
}
progressBar.onchange= ()=>{
    song.play();
    song.currentTime= progressBar.value;
    if(playButton.classList.contains("fa-play"))
    {
       song.play();
       playButton.classList.remove("fa-play");
       playButton.classList.add("fa-pause");
    }
    else{         
       song.pause();
       playButton.classList.remove("fa-pause");
       playButton.classList.add("fa-play");
    }
}
}
function forward(){
    song.currentTime+= 10;
    progressBar.value= song.currentTime; 
}
function backward(){
    song.currentTime-= 10; 
    progressBar.value= song.currentTime;
}
function nextSong(){
    for (let index = 0; index < songs.length; index++) {
        if(songName.innerHTML==songs[index].name)
        {
            console.log(songs[index+1].name);
            if((index+1)>10)
            {
                break;
            }
            songSourceChanger(songs[index+1].name);
            break;
        }
    }
}
function prevSong(){
    for (let index = 0; index < songs.length; index++) {
        if(songName.innerHTML==songs[index].name)
        {
            if((index-1)<0)
            {
                break;
            }
            songSourceChanger(songs[index-1].name);
            break;
        }
    }
}