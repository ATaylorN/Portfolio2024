<template>
  <main id="app">

    <div class="amanda">
    <h1 class="name">Amanda Taylor</h1>
    <p class="about">Junior Software Developer *  Veteran  *  Artist  *  Sci-fi Enthusiast </p>
    </div>
    <HeaderSection class="sticky-top"/>

    <section class="bio">
      <img class="mainphoto" src="./assets/mainBioPhoto.png" alt="Various photos Amanda and her work"/>
        <div class="text">
        <h2>A Little About Me </h2>
        <p>I'm a software developer, veteran, and artist with over 11 years of customer service and sales
           experience. As far back as I can remember, I’ve always been the creative type. I was the kid 
           that spent all of my time drawing crayon pictures to be hung up on the refrigerator. As I got a 
           little older, I participated in and won numerous art competitions and I was always the kid in 
           class with all the sketches in the margins of their notes. Whether it’s drawing or building an 
           app, if I’m creating something, I’m happy. I find the process of figuring out how to bring an 
           idea to reality to be incredibly rewarding and I have a passion for learning.</p>
        </div>
      <span class="icons">
        <a href=""><img src="./assets/icons/linkedin.png"></a>
        <a href=""><img src="./assets/icons/github.png"></a>
        <!-- Email Button Functions: -->
        <div class="dropdown">
        <button type="button" data-bs-toggle="dropdown"><img src="./assets/icons/email.png" alt="Email: amandanagies@gmail.com"> </button>
        <ul class="dropdown-menu">
            <li class="dropdown-item"><h4>Email Me</h4>
                <form ref="form" @submit.prevent="sendEmail" class="form">
                  <input type="text" placeholder="Name" name="user_name" required>
                  <input type="email" placeholder="Email" name="user_email" required>
                  <textarea name="message" placeholder="Please type message here" required></textarea>
                  <input type="submit" value="SEND" class="send">
            </form></li>
            <li class="status" v-show="showStatus=true">{{statusMessage}}</li>
        </ul>
        </div>
      
      </span>
    </section>

    <img class="timeline" src="./assets/timeline.png" alt="career timeline">

    <section class="skills">
      <h3>Technical Skills Acquired</h3>
      <div class="list1"></div>
        <li>Java</li>
        <li>Python</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>Vue.js</li>
        <li>Git</li>
      <div class="list2">
        <li>PowerBi</li>
        <li>IntelliJ</li>
        <li>Figma</li>
        <li>PostgreSQL</li>
        <li>Unit Testing (JUnit)</li>
        <li>E/R Diagrams</li>
        <li>Integration Testing (Postman)</li>
        <li>SpringBoot</li>
      </div>
      <div class="list2">
        <li>Tableau</li>
        <li>Agile Methodologies</li>
        <li>Microsoft Excel</li>
        <li>Data Analytics</li>
        <li>Responsive Web Design</li>
      </div>
    </section>

    <section class="menus">
      <div id="accordion">
        <div class="card">
          <div class="card-header">
          <a class="btn" data-bs-toggle="collapse" href="#collapseOne">CODING PROJECTS</a>
          </div>
        <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
        <div class="card-body">
          <div class="tools">
            <h4>Tools:</h4>
              <img src="./assets/icons/bootstrap.png">
              <img src="./assets/icons/intellij.png">
              <img src="./assets/icons/javascript.png">
              <img src="./assets/icons/java.png">
              <img src="./assets/icons/html.png">
              <img src="./assets/icons/figma.png">
              <img src="./assets/icons/vue.png">
              <img src="./assets/icons/vscode.png">
              <img src="./assets/icons/css.png">
              <img src="./assets/icons/pgadmin.png">
          </div>
          <div class="desc">
          <p>Lorem ipsum..</p>
          <button>View More</button>
          </div>
          <div class="photo">
          <img class="preview" src="./assets/coding/mealplannerpreview.png">
          </div>
        </div>
        </div>
      </div>

  <div class="card">
    <div class="card-header">
      <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">DATA ANALYTICS & PYTHON</a>
    </div>
    <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
      <div class="card-body">
        <div class="tools">
            <h4>Tools:</h4>
              <img src="./assets/icons/bootstrap.png">
              <img src="./assets/icons/intellij.png">
              <img src="./assets/icons/javascript.png">
              <img src="./assets/icons/java.png">
              <img src="./assets/icons/html.png">
              <img src="./assets/icons/figma.png">
              <img src="./assets/icons/vue.png">
              <img src="./assets/icons/vscode.png">
              <img src="./assets/icons/css.png">
              <img src="./assets/icons/pgadmin.png">
          </div>
          <div class="desc">
          <p>Lorem ipsum..</p>
          <button>View More</button>
          </div>
          <div class="photo">
          <img class="preview" src="./assets/coding/mealplannerpreview.png">
          </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">MARKETING</a>
    </div>
    <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
      <div class="card-body">
       <div class="tools">
            <h4>Tools:</h4>
              <img src="./assets/icons/bootstrap.png">
              <img src="./assets/icons/intellij.png">
              <img src="./assets/icons/javascript.png">
              <img src="./assets/icons/java.png">
              <img src="./assets/icons/html.png">
              <img src="./assets/icons/figma.png">
              <img src="./assets/icons/vue.png">
              <img src="./assets/icons/vscode.png">
              <img src="./assets/icons/css.png">
              <img src="./assets/icons/pgadmin.png">
          </div>
          <div class="desc">
          <p>Lorem ipsum..</p>
          <button>View More</button>
          </div>
          <div class="photo">
          <img class="preview" src="./assets/coding/mealplannerpreview.png">
          </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseFour">GRAPHITE PORTRAITS</a>
    </div>
    <div id="collapseFour" class="collapse" data-bs-parent="#accordion">
      <div class="card-body">
       <div class="tools">
            <h4>Tools:</h4>
              <img src="./assets/icons/bootstrap.png">
              <img src="./assets/icons/intellij.png">
              <img src="./assets/icons/javascript.png">
              <img src="./assets/icons/java.png">
              <img src="./assets/icons/html.png">
              <img src="./assets/icons/figma.png">
              <img src="./assets/icons/vue.png">
              <img src="./assets/icons/vscode.png">
              <img src="./assets/icons/css.png">
              <img src="./assets/icons/pgadmin.png">
          </div>
          <div class="desc">
          <p>Lorem ipsum..</p>
          <button>View More</button>
          </div>
          <div class="photo">
          <img class="preview" src="./assets/coding/mealplannerpreview.png">
          </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseFive">BLOG</a>
    </div>
    <div id="collapseFive" class="collapse" data-bs-parent="#accordion">
      <div class="card-body">
       <div class="tools">
            <h4>Tools:</h4>
              <img src="./assets/icons/bootstrap.png">
              <img src="./assets/icons/intellij.png">
              <img src="./assets/icons/javascript.png">
              <img src="./assets/icons/java.png">
              <img src="./assets/icons/html.png">
              <img src="./assets/icons/figma.png">
              <img src="./assets/icons/vue.png">
              <img src="./assets/icons/vscode.png">
              <img src="./assets/icons/css.png">
              <img src="./assets/icons/pgadmin.png">
          </div>
          <div class="desc">
          <p>Lorem ipsum..</p>
          <button>View More</button>
          </div>
          <div class="photo">
          <img class="preview" src="./assets/coding/mealplannerpreview.png">
          </div>
      </div>
    </div>
  </div>

</div>

    </section>

    <section class="filler">
      filler
    </section>

    <FooterSection/>
  </main>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'
import FooterSection from './components/FooterSection.vue'
import emailjs from '@emailjs/browser';

export default {
  name: 'App',
  components: {
    HeaderSection,
    FooterSection
  },
  data(){
        return{
            showStatus: false,
            statusMessage: ''
        }
    },
    methods: {
    sendEmail() {
      emailjs.sendForm('Contact_Me', 'contact_form', this.$refs.form, 'GEie82de2ImMbutSn')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            this.statusMessage = 'Email Sent!'
            this.$refs.form.reset();
        }, (error) => {
            console.log('FAILED...', error.text);
            this.statusMessage = "Error Occurred. Please Try Again!"
        });
    }
  }
}
</script>

<style scoped>
.card{
  margin: 0 5rem;
}
.card-header{
  background-color:#384C52;
  text-align: center;
}
.card-header a{
  color: white;
  font-family: 'Share Tech Mono', monospace;
}
.card-header:hover{
  background-color: #9EB5BC;
}
.card-body{
  display: grid;
  padding: 2rem 6rem;
  justify-content: space-around;
  grid-template-areas: "tools photo"
                        "text photo";
}
.desc{
  grid-area: text;
}
.desc button{
  font-family: 'Share Tech Mono', monospace;
  background-color: #384C52;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
}
.desc button:hover{
  background-color: #9EB5BC;
}
.photo{
  grid-area: photo;
}
.photo img{
  width: 20rem;
  
}
.tools{
  grid-area: tools;
  display: flex;
  gap: 0.2rem;
  align-items: center;
}
.tools h4{
  font-family: 'Share Tech Mono', monospace;
  padding-right: 1rem;
  margin: 0;
}
.tools img {
  width: 40px;
}
.timeline{
  max-height: 250px;
  background-color: #9EB5BC;
  width: 100%;
  padding: 0 10rem;
}
.dropdown-item h4{
  font-family: 'Share Tech Mono', monospace;
  padding: 0.5rem 0;
}
.send{
    background-color: #384C52;
    border: none;
    width: 80px;
    border-radius: 10px;
    color: white;
    margin-bottom: 0.5rem;
}
.status{
    font-family: 'Share Tech Mono', monospace;
    font-size: 24px;
    text-align: center;
}
form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}
form input {
    font-size: 18px;
    font-family: 'Roboto Condensed', sans-serif;
    width: 25rem;
}
form textarea{
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 18px;
    width: 25rem;
    height: 15rem;
}
.dropdown button{
  background-color: white;
  border: none;
}
body{
  margin: 0;
  padding: 0;
}
.bio{
  background-color: white;
  display: grid;
  grid-template-areas: "photo text"
                        "photo icons";
  justify-content: center;
  gap: 4rem;
}
.text h2{
  font-family: 'Share Tech Mono', monospace;
  font-weight: 600;
  color: #384C52;
  padding-bottom: 1.50rem;
  }
.text{
  text-align: center;
  padding: 15% 0 0 1.5rem;
  grid-area: text;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 20px;
  width:  40rem;
}
.icons{
  display: flex;
  grid-area: icons;
  padding-left: 35%;
  gap: 1rem;
  margin-top: -180px;
}
.mainphoto {
  max-height: 50em;
  grid-area: photo;
}
.icons img{
  height: 60px;
}
.amanda{
  background: rgb(158,181,188);
  background: radial-gradient(circle, rgba(158,181,188,1) 0%, rgba(56,76,82,1) 73%, rgba(11,15,17,1) 100%);
  padding-top: 15%;
  padding-bottom: 15%;
}
.name{
  text-align: center;
  font-family: 'Share Tech Mono';
  font-size: 6em;
  margin: 0;
  color: #ECEAE4;
}
.about {
  text-align: center;
  margin: 0;
  font-family: 'Share Tech Mono';
  font-size: 1.4rem;
  color: #ECEAE4;
}
#app{
  background-image: url('./assets/background.jpg');
  background-repeat: round;
}
.filler{
  height: 500px;
}
</style>
