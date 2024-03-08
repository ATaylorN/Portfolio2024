<template>
  <div class="portraits-page">

    <section class="portraits-caro">
    <div id="demo" class="carousel slide" data-bs-ride="carousel">
        <!-- Indicators/dots -->
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="6"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="7"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="8"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="9"></button>
  </div>

  <!-- The slideshow/carousel -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="@/assets/portraits/aerith_gainsborough.jpg" alt="FFVII - Aerith" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="@/assets/portraits/chester_bennington.jpg" alt="Linkin Park - Chester Bennington" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="@/assets/portraits/cutiepiesensei_cosplay.jpg" alt="CutiePieSensei - Black Panther Cosplay" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="@/assets/portraits/eleventh_doctor.jpg" alt="Doctor Who - Eleventh Doctor" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="@/assets/portraits/jessica_jones.jpg" alt="Jessica Jones - Jessica & Kilgrave" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="@/assets/portraits/loki_of_asgard.jpg" alt="Marvel - Loki" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="@/assets/portraits/newly_weds.jpg" alt="Commission - Newly Weds" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="@/assets/portraits/nux.jpg" alt="Mad Max: Fury Road - Nux" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="@/assets/portraits/tifa_lockhart.jpg" alt="FFVII - Tifa" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="@/assets/portraits/nux2.jpg" alt="Mad Max: Fury Road - Nux" class="d-block w-100">
    </div>
  </div>

  <!-- Left and right controls/icons -->
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" id="nextbtn"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon" id="nextbtn"></span>
  </button>
    </div>
  </section>

    <section class="art-desc">
    <h2 class="fade-in-bottom">Graphite Pencil Portraits</h2>
    <p id="port-desc" class="fade-in-bottom">Using primarily graphite pencil with the occasional acrylic paint for a pop of color, each portrait takes roughly 40+ hours. I've drawn characters from several of my favorite shows, movies, video games, along with the occasional commission.</p>
    </section>

  <div class="portraits">
    
    <button type="button" data-bs-toggle="modal" data-bs-target="#modal1">
        <div class="card">
            <img class="card-img-top" src="@/assets/portraits/nux.jpg" alt="Nux">
            <div class="card-img-overlay">
            <h4 class="card-title">Mad Max - Nux</h4>
            </div>
        </div>
    </button>
        <div class="modal" id="modal1">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Mad Max: Fury Road - Nux</h4>
            <p>"If I'm gonna die, I'm gonna die historic on the Fury Road!" -Nux</p>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="resetImg()"></button>
        </div>
        <div class="modal-body">
            <div v-show="showImage"><img class="card-img-top" src="@/assets/portraits/nux.jpg" alt="Nux"></div>
            <div class="pic-desc" v-show="showDescription"><p v-show="showDescription">Nux is a character from 'Mad Max: Fury Road' played by Nicholas Hoult.
                Previously one of the 'War Boys', he eventually teams up with Max and Furiosa. This piece took an especially long time to complete
                because of all the small details in this image. The tattoo on his chest, for example, took forever!</p></div>
        </div>
        <div class="modal-footer">
        <button type="button" id="toggle" class="btn" @click="toggleDescription()">Toggle Description</button>
        <button type="button" id="close" class="btn" data-bs-dismiss="modal" @click="resetImg()">Close</button>
        </div>
        </div>
        </div>
        </div>

        <button type="button" data-bs-toggle="modal" data-bs-target="#modal2">
        <div class="card">
            <img class="card-img-top" src="@/assets/portraits/nux2.jpg" alt="Nux v2">
            <div class="card-img-overlay">
            <h4 class="card-title">Mad Max - Nux</h4>
            </div>
        </div>
         </button>
        <div class="modal" id="modal2">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Mad Max: Fury Road - Nux</h4>
            <p>"Oh, what a day@.what a lovely day! -Nux"</p>
            <p></p>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="resetImg()"></button>
        </div>
        <div class="modal-body">
            <div v-show="showImage"><img class="card-img-top" src="@/assets/portraits/nux2.jpg" alt="Nux"></div>
            <div class="pic-desc" v-show="showDescription"><p v-show="showDescription">Nux is a character from 'Mad Max: Fury Road' played by Nicholas Hoult.
                Previously one of the 'War Boys', he eventually teams up with Max and Furiosa. In the movie, there's a scene where he spray paints
                his mouth silver so in the original piece, I painted his mouth silver as well. It adds a really cool effect as well when the light hits it.
                </p></div>
        </div>
        <div class="modal-footer">
        <button type="button" id="toggle" class="btn" @click="toggleDescription()">Toggle Description</button>
        <button type="button" id="close" class="btn" data-bs-dismiss="modal" @click="resetImg()">Close</button>
        </div>
        </div>
        </div>
        </div>

        <button type="button" data-bs-toggle="modal" data-bs-target="#modal3">
        <div class="card">
            <img class="card-img-top" src="@/assets/portraits/chester_bennington.jpg" alt="Chester Bennington">
            <div class="card-img-overlay">
            <h4 class="card-title">Chester Bennington</h4>
            </div>
        </div>
        </button>
        <div class="modal" id="modal3">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Linkin Park - Chester Bennington (1976-2017)</h4>
            <p>"Life leaves us blind, love keeps us kind" -Chester Bennington</p>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="resetImg()"></button>
        </div>
        <div class="modal-body">
            <div v-show="showImage"><img class="card-img-top" src="@/assets/portraits/chester_bennington.jpg" alt="Chester Bennington"></div>
            <div class="pic-desc" v-show="showDescription"><p v-show="showDescription">I grew up listening to Linkin Park and was devastated when Chester Bennington passed away.
            I drew this in memory of him and to help myself process it. I took a bit of a different approach to my signature here, choosing instead to weave my name into
            the graphic on his shirt.</p></div>
        </div>
        <div class="modal-footer">
        <button type="button" id="toggle" class="btn" @click="toggleDescription()">Toggle Description</button>
        <button type="button" id="close" class="btn" data-bs-dismiss="modal" @click="resetImg()">Close</button>
        </div>
        </div>
        </div>
        </div>

        <button type="button" data-bs-toggle="modal" data-bs-target="#modal4">
        <div class="card">
            <img class="card-img-top" src="@/assets/portraits/eleventh_doctor.jpg" alt="Dr.Who - 11th Doctor">
            <div class="card-img-overlay">
            <h4 class="card-title">Dr.Who - 11th Doctor</h4>
            </div>
        </div>
    </button>
        <div class="modal" id="modal4">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Doctor Who - 11th Doctor</h4>
            <p>"Bowties are cool!" -Matt Smith as the Doctor</p>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="resetImg()"></button>
        </div>
        <div class="modal-body">
            <div v-show="showImage"><img class="card-img-top" src="@/assets/portraits/eleventh_doctor.jpg" alt="Dr.Who - 11th Doctor"></div>
            <div class="pic-desc" v-show="showDescription"><p v-show="showDescription">Doctor Who is a British sci-fi TV series and has also been named TV's longest-running sci-fi show in the
                world according to the Guinness World Records. It's essentially about an alien referred to as a 'Time Lord' named simply "the Doctor" who travels through space
                and time, saving the universe. If the Doctor is severely injured, they have the ability to regenerate which is why there's been several actors who have played the
                role of the Doctor over the years. The 11th Doctor was played by Matt Smith and is one of my favorites.</p></div>
        </div>
        <div class="modal-footer">
        <button type="button" id="toggle" class="btn" @click="toggleDescription()">Toggle Description</button>
        <button type="button" id="close" class="btn" data-bs-dismiss="modal" @click="resetImg()">Close</button>
        </div>
        </div>
        </div>
        </div>

        <button type="button" data-bs-toggle="modal" data-bs-target="#modal5">
        <div class="card">
            <img class="card-img-top" src="@/assets/portraits/jessica_jones.jpg" alt="Jessica Jones & Kilgrave">
            <div class="card-img-overlay">
            <h4 class="card-title">Jessica Jones & Kilgrave</h4>
            </div>
        </div>
    </button>
        <div class="modal" id="modal5">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Marvel's Jessica Jones & Kilgrave</h4>
            <p>"Would you put day drinking under experience or special abilities?" -Krysten Ritter as Jessica Jones</p>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="resetImg()"></button>
        </div>
        <div class="modal-body">
            <div v-show="showImage"><img class="card-img-top" src="@/assets/portraits/jessica_jones.jpg" alt="Jessica Jones & Kilgrave"></div>
            <div class="pic-desc" v-show="showDescription"><p v-show="showDescription">Jessica Jones is a character in the Marvel Universe and part of the Defenders.
                She's an ex-superhero turned private investigator who suffers from PTSD played by the actress Krysten Ritter. Kilgrave, played by David Tennant,
                has the ability to control minds and is the reason why Jessica has PTSD and gave up on being a hero. I actually got to meet David Tennant (who also plays
                the 10th Doctor in Doctor Who and is my favorite Doctor) in person at ComicCon and got him to sign the original piece!</p></div>
        </div>
        <div class="modal-footer">
        <button type="button" id="toggle" class="btn" @click="toggleDescription()">Toggle Description</button>
        <button type="button" id="close" class="btn" data-bs-dismiss="modal" @click="resetImg()">Close</button>
        </div>
        </div>
        </div>
        </div>

        <button type="button" data-bs-toggle="modal" data-bs-target="#modal6">
        <div class="card">
            <img class="card-img-top" src="@/assets/portraits/cutiepiesensei_cosplay.jpg" alt="Cutiepiesensei">
            <div class="card-img-overlay">
            <h4 class="card-title">Cutiepiesensei Cosplay</h4>
            </div>
        </div>
    </button>
        <div class="modal" id="modal6">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Marvel's Black Panther Cosplay - Cutiepiesensei</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="resetImg()"></button>
        </div>
        <div class="modal-body">
            <div v-show="showImage"><img class="card-img-top" src="@/assets/portraits/cutiepiesensei_cosplay.jpg" alt="Cutiepiesensei"></div>
            <div class="pic-desc" v-show="showDescription"><p v-show="showDescription">CutiePieSensei is the username of an extremely talented cosplayer that I follow on Facebook.
            For reference, cosplay is when someone dresses up as characters from movies, comics, manga, anime, TV, video games, etc. A lot of cosplayers painstakingly sew their
            own costumes and build their own props. This particular cosplayer not only sewed, but designed her own costume based off of Marvel's Black Panther. This
            was one of the first pieces were I decided that it needed a pop of color so I used a combination of colored pencils and acrylic paint to add the purple.</p></div>
        </div>
        <div class="modal-footer">
        <button type="button" id="toggle" class="btn" @click="toggleDescription()">Toggle Description</button>
        <button type="button" id="close" class="btn" data-bs-dismiss="modal" @click="resetImg()">Close</button>
        </div>
        </div>
        </div>
        </div>

        <button type="button" data-bs-toggle="modal" data-bs-target="#modal7">
        <div class="card">
            <img class="card-img-top" src="@/assets/portraits/loki_of_asgard.jpg" alt="Loki">
            <div class="card-img-overlay">
            <h4 class="card-title">Marvel - Loki</h4>
            </div>
        </div>
    </button>
        <div class="modal" id="modal7">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Marvel's Thor - Loki of Asgard</h4>
            <p>"I am Loki of Asgard and I am burdened with glorious purpose." -Tom Hiddleston as Loki in The Avengers</p>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="resetImg()"></button>
        </div>
        <div class="modal-body">
            <div v-show="showImage"><img class="card-img-top" src="@/assets/portraits/loki_of_asgard.jpg" alt="Loki"></div>
            <div class="pic-desc" v-show="showDescription"><p v-show="showDescription">Loki is a character from the Marvel Universe who is known as the God of Mischief
                and brother of Thor. His relationship to Thor starts off strained to say the least, but as his character has developed, he has gone from supervillain to 
                more of an antihero. While he started as a recurring character in the Thor movies and the Avengers, he now has his own TV series. He's played by the
                actor Tom Hiddleston who is one of my favorite actors and I absolutely love him as Loki.
                </p></div>
        </div>
        <div class="modal-footer">
        <button type="button" id="toggle" class="btn" @click="toggleDescription()">Toggle Description</button>
        <button type="button" id="close" class="btn" data-bs-dismiss="modal" @click="resetImg()">Close</button>
        </div>
        </div>
        </div>
        </div>

        <button type="button" data-bs-toggle="modal" data-bs-target="#modal8">
        <div class="card">
            <img class="card-img-top" src="@/assets/portraits/newly_weds.jpg" alt="Newly Weds Commission">
            <div class="card-img-overlay">
            <h4 class="card-title">Commission - Newly Weds</h4>
            </div>
        </div>
    </button>
        <div class="modal" id="modal8">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Commission - Newly Weds</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="resetImg()"></button>
        </div>
        <div class="modal-body">
            <div v-show="showImage"><img class="card-img-top" src="@/assets/portraits/newly_weds.jpg" alt="Newly Weds Commission"></div>
            <div class="pic-desc" v-show="showDescription"><p v-show="showDescription">This was a commission that I did for a lovely couple that was getting married. The husband
                 commissioned me to draw one of their engagement photos as a surprise for his wife. Fortunately, I was able to get it completed in time for their wedding where they displayed
                 it for all of their guests as you walked into the reception. This was such a great piece to work on and they loved it!</p></div>
        </div>
        <div class="modal-footer">
        <button type="button" id="toggle" class="btn" @click="toggleDescription()">Toggle Description</button>
        <button type="button" id="close" class="btn" data-bs-dismiss="modal" @click="resetImg()">Close</button>
        </div>
        </div>
        </div>
        </div>

        <button type="button" data-bs-toggle="modal" data-bs-target="#modal9">
        <div class="card">
            <img class="card-img-top" src="@/assets/portraits/tifa_lockhart.jpg" alt="FFVII - Tifa">
            <div class="card-img-overlay">
            <h4 class="card-title">FFVII - Tifa</h4>
            </div>
        </div>
    </button>
        <div class="modal" id="modal9">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Final Fantasy VII - Tifa Lockhart</h4>
            <p>"You've seen how much ass I can kick." -Tifa Lockhart</p>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="resetImg()"></button>
        </div>
        <div class="modal-body">
            <div v-show="showImage"><img class="card-img-top" src="@/assets/portraits/tifa_lockhart.jpg" alt="FFVII - Tifa"></div>
            <div class="pic-desc" v-show="showDescription"><p v-show="showDescription">Tifa Lockhart is a character from the video game 'Final Fantasy VII'. She's Cloud's
                childhood friend, owner of the 7th Heaven bar, member of AVALANCHE, and a martial arts fighter.</p></div>
        </div>
        <div class="modal-footer">
        <button type="button" id="toggle" class="btn" @click="toggleDescription()">Toggle Description</button>
        <button type="button" id="close" class="btn" data-bs-dismiss="modal" @click="resetImg()">Close</button>
        </div>
        </div>
        </div>
        </div>

        <button type="button" data-bs-toggle="modal" data-bs-target="#modal10">
        <div class="card">
            <img class="card-img-top" src="@/assets/portraits/aerith_gainsborough.jpg" alt="FFVII - Aerith">
            <div class="card-img-overlay">
            <h4 class="card-title">FFVII - Aerith Gainsborough</h4>
            </div>
        </div>
    </button>
        <div class="modal" id="modal10">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Final Fantasy VII - Aerith Gainsborough</h4>
            <p>"Don't fight here! You'll ruin the flowers!" -Aerith Gainsborough</p>
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="resetImg()"></button>
        </div>
        <div class="modal-body">
            <div v-show="showImage"><img class="card-img-top" src="@/assets/portraits/aerith_gainsborough.jpg" alt="FFVII - Aerith"></div>
            <div class="pic-desc" v-show="showDescription"><p v-show="showDescription">Aerith Gainsborough is a character from the video game 'Final Fantasy VII'. She's a
                flower peddler and the last of the Cetra, which is an ancient race with magical powers. She's spent her live running from Shinra, which seeks to
                use her powers, and ends up teaming up with Cloud to fight Shinra and take on Sephiroth.</p></div>
        </div>
        <div class="modal-footer">
        <button type="button" id="toggle" class="btn" @click="toggleDescription()">Toggle Description</button>
        <button type="button" id="close" class="btn" data-bs-dismiss="modal" @click="resetImg()">Close</button>
        </div>
        </div>
        </div>
        </div>


  </div>
  </div>
</template>

<script>
export default {
  name: 'GraphitePortraits',
  data(){
        return{
            showDescription: false,
            showImage: true,
            id: false
        }
    },
    methods: {
        toggleDescription(){
            this.showDescription = !this.showDescription,
            this.showImage = !this.showImage,
            this.id =!this.is
        },
        resetImg(){
            this.showDescription = false;
            this.showImage = true;
        }
    }
}
</script>

<style scoped>
.pic-desc{
    font-family: 'Roboto Condensed', sans-serif;
}
.portraits-page{
     background-image: url('@/assets/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding-bottom: 3rem;
}
.portraits-caro{
  padding: 2rem;
  background-color: white;
}
.art-desc h2 {
  padding: 3rem 1rem;
  font-family: 'Share Tech Mono', monospace;
}
.art-desc{
  padding: 0 15% 2rem;
  text-align: center;
  background-color: #384C52;
  color: white;
}
#port-desc{
font-family: 'Roboto Condensed', sans-serif;
font-size: 20px;
}
#nextbtn{
  background-color: gray;
  border-radius: 8px;
  height: 80px;
}
#demo{
  max-width: 70vw;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
  background-color: white;
  border-radius: 10px;
}
#demo img {
  object-fit: contain;
  background-position: top;
  max-height: 600px;
}
#toggle{
    background-color:#9EB5BC;
    color: white;
    font-family: 'Share Tech Mono'
}
#toggle:hover{
    background-color:#ECEAE4;
}
#close{
    background-color: #384C52;
    color: white;
    font-family: 'Share Tech Mono'
}
#close:hover{
    background-color:#ECEAE4;
}
.modal{
    overflow: hidden;
}
.modal-header{
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
}
.modal-header h4{
    font-family: 'Share Tech Mono';
    font-size: 24px;
}
.modal-header p{
    font-style: italic;
}
button{
    border: none;
}
.card img{
    width: 250px;
    height: 310px;
    object-fit: cover;
    border-radius: 10px;
}
.card{
    box-shadow: 0px 5px 20px 0px black;
    border: none;
}
.card:hover{
    border: 3px solid #9EB5BC;
}
.portraits{
    padding: 4rem;
    display: flex;
    flex-direction: row;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    background-color: white;
    margin-top: 3rem;
}
.card-img-overlay{
    text-align: center;
    margin-top: 250px;
    background: linear-gradient(transparent, black);
}
.card h4 {
    font-family: 'Share Tech Mono', monospace;
    font-size: 18px;
    color: white;
}
.fade-in-bottom {
	-webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
@-webkit-keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(150px);
            transform: translateY(150px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(150px);
            transform: translateY(150px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@media screen and (max-width: 600px) {
  .modal-header h4{
    font-size: 18px;
  }
  .modal-header p{
    font-size: 14px;
  }
  .modal img{
    max-height: 375px;
  }
}
</style>