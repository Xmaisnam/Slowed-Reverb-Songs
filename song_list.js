//song list
let All_song = [

  {
    name: "Knock Knock",
    path: "music/13.mp3",
    img: "images/13.jpg",
    singer: " Timo Wayne X M24"
  }
  ,
  {
    name: " Rewrite The Stars Slowed & Reverb",
    path: "music/14.mp3",
    img: "images/14.jpg",
    singer: "Anne Marie & James Arthur"
  }
  ,
  {
    name: " Another Love Slowed & Reverb",
    path: "music/2.mp3",
    img: "images/2.jpg",
    singer: "Tom Odell"
  },
  {
    name: " 6:30 ",
    path: "music/3.mp3",
    img: "images/3.jpg",
    singer: " Russ Millions"
  },
  {
    name: "fairytale slowed  reverb",
    path: "music/4.mp3",
    img: "images/4.jpg",
    singer: "Alexander Rybak"
  },
  {
    name: " Airplanes",
    path: "music/5.mp3",
    img: "images/5.jpg",
    singer: "BoB Feat Hayley Williams "
  },
  {
    name: "Jocelyn Flores Slowed & Reverb",
    path: "music/6.mp3",
    img: "images/6.jpg",
    singer: "XXXTENTACION"
  }
  ,
  {
    name: "Wildest Dreams",
    path: "music/7.mp3",
    img: "images/7.jpg",
    singer: "Taylor Swift"
  }
  ,
  {
    name: "Habibi Slowed & Reverb",
    path: "music/8.mp3",
    img: "images/8.jpg",
    singer: "Ricky Rich"
  }

  ,
  {
    name: "The Remedy For A Broken Heart",
    path: "music/9.mp3",
    img: "images/9.jpg",
    singer: "XXXTENTACION"
  }

  ,
  {
    name: "Who Do You Love Slowed & Reverb",
    path: "music/10.mp3",
    img: "images/10.jpg",
    singer: "Marc Lane"
  },

  {
    name: "Sweather Weather Slowed & Reverb",
    path: "music/11.mp3",
    img: "images/11.jpg",
    singer: " The Neighbourhood"
  },

  {
    name: "Eagles Of Death Metal Slowed & Reverb",
    path: "music/12.mp3",
    img: "images/12.jpg",
    singer: " Miss Alissa"
  }
  ,
  {
    name: "Sweet Dreams Intrumental Guitar ",
    path: "music/1.mp3",
    img: "images/1.jpg",
    singer: "Ravens Rock"
  }
  
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/