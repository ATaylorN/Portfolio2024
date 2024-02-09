<template>
  <main id="app">

    <div class="amanda">
    <h1 class="name">Amanda Taylor</h1>
    <p class="about">Junior Software Developer *  Veteran  *  Artist  *  Sci-fi Enthusiast </p>
    </div>
    <HeaderSection class="sticky-top"/>

    <section class="bio">
      <img class="mainphoto" src="@/assets/mainBioPhoto.jpg" alt="Various photos Amanda and her work"/>
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
        <a href="https://www.linkedin.com/in/amanda-taylor1/"><img src="@/assets/icons/linkedin.png"></a>
        <a href="https://github.com/ATaylorN"><img src="@/assets/icons/github.png"></a>
        <!-- Email Button Functions: -->
        <div class="dropdown">
        <button type="button" data-bs-toggle="dropdown"><img src="@/assets/icons/email.png" alt="Email: amandanagies@gmail.com"> </button>
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

    <img class="timeline" src="@/assets/timeline.png" alt="career timeline">

    <section class="skills">
      <h2>Technical Skills Acquired</h2>
      <div class="lists">
      <div class="list">
        <li>Java</li>
        <li>Python</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>Vue.js</li>
        <li>Integration Testing (Postman)</li>
        
      </div>

      <div class="list">
        <li>Git</li>
        <li>PowerBi</li>
        <li>IntelliJ</li>
        <li>Figma</li>
        <li>PostgreSQL</li>
        <li>Unit Testing (JUnit)</li>
        <li>E/R Diagrams</li>
        <li>SpringBoot</li>
      </div>

      <div class="list2">
        <li>Tableau</li>
        <li>Agile Methodologies</li>
        <li>Microsoft Excel</li>
        <li>Data Analytics</li>
        <li>Responsive Web Design</li>
      </div>
      </div>
    </section>

    <section class="menus">
      <div id="accordion">
        <!-- coding -->
        <div class="card">
          <div class="card-header">
          <a class="btn" data-bs-toggle="collapse" href="#collapseOne">CODING PROJECTS</a>
          </div>
        <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
        <div class="card-body">
          <div class="tools">
            <h4>Tools:</h4>
              <img src="@/assets/icons/bootstrap.png">
              <img src="@/assets/icons/intellij.png">
              <img src="@/assets/icons/javascript.png">
              <img src="@/assets/icons/java.png">
              <img src="@/assets/icons/html.png">
              <img src="@/assets/icons/figma.png">
              <img src="@/assets/icons/vue.png">
              <img src="@/assets/icons/vscode.png">
              <img src="@/assets/icons/css.png">
              <img src="@/assets/icons/pgadmin.png">
          </div>
          <div class="desc">
          <p>Projects include a meal planner application that I worked on with three other Tech Elevator graduates, a flash cards application that
            I created to study Java, my personal portfolio site, and a library application that I'm currently working on. 
          </p>
          <a href="/coding-projects"><button>View More</button></a>
          </div>
          <div class="photo">
          <img class="preview" src="@/assets/coding/LandingPage.png">
          </div>
        </div>
        </div>
      </div>
<!-- data analytics -->
  <div class="card">
    <div class="card-header">
      <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">DATA ANALYTICS & PYTHON</a>
    </div>
    <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
      <div class="card-body">
        <div class="tools">
            <h4>Tools:</h4>
              <img src="@/assets/icons/bootstrap.png">
              <img src="@/assets/icons/intellij.png">
              <img src="@/assets/icons/javascript.png">
              <img src="@/assets/icons/java.png">
              <img src="@/assets/icons/html.png">
              <img src="@/assets/icons/figma.png">
              <img src="@/assets/icons/vue.png">
              <img src="@/assets/icons/vscode.png">
              <img src="@/assets/icons/css.png">
              <img src="@/assets/icons/pgadmin.png">
          </div>
          <div class="desc">
          <p>Lorem ipsum..</p>
          <a href="data-analytics"><button>View More</button></a>
          </div>
          <div class="photo">
          <img class="preview" src="@/assets/data.jpg">
          </div>
      </div>
    </div>
  </div>
<!-- marketing -->
  <div class="card">
    <div class="card-header">
      <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">MARKETING</a>
    </div>
    <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
      <div class="card-body">
       <div class="tools">
            <h4>Tools:</h4>
              <img src="@/assets/icons/instagram.png">
              <img src="@/assets/icons/canva.png">
              <img src="@/assets/icons/facebook.png">
              <img src="@/assets/icons/linkedin.png">
              <img src="@/assets/icons/airtable.png">
              <img src="@/assets/icons/mailchimp.png">
          </div>
          <div class="desc">
          <p>Individual Realtors and Real Estate Teams need a ton of marketing to get in front of potential home-seller 
            and home-buying clients and stay top of mind. This can mean numerous social media campaigns, listing presentations, 
            events, brochures, email campaigns, and brochures (just to name a few!)</p>
          <a href="/marketing"><button>View More</button></a>
          </div>
          <div class="photo">
          <img class="preview" src="@/assets/marketing/realestatepreview.jpg">
          </div>
      </div>
    </div>
  </div>
<!-- portraits -->
  <div class="card">
    <div class="card-header">
      <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseFour">GRAPHITE PORTRAITS</a>
    </div>
    <div id="collapseFour" class="collapse" data-bs-parent="#accordion">
      <div class="card-body">
       <div class="tools">
            <h4>Tools:</h4>
              <img src="@/assets/icons/instagram.png">
              <img src="@/assets/icons/facebook.png">
              <img src="@/assets/icons/pencil.png">
              <img src="@/assets/icons/paint.png">
          </div>
          <div class="desc">
          <p>Using primarily graphite pencil with the occasional acrylic paint for a pop of color, each portrait 
            takes roughly 40+ hours. I've drawn characters from several of my favorite shows, movies, video games, 
            along with the occasional commission.</p>
          <a href="/portraits"><button>View More</button></a>
          </div>
          <div class="photo">
          <img class="preview" src="@/assets/portraits/aerith_gainsborough.jpg">
          </div>
      </div>
    </div>
  </div>
<!-- blog -->
  <div class="card">
    <div class="card-header">
      <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseFive">BLOG</a>
    </div>
    <div id="collapseFive" class="collapse" data-bs-parent="#accordion">
      <div class="card-body">
       <div class="tools">
            <h4>Tools:</h4>
              <img src="@/assets/icons/word.png">
              <img src="@/assets/icons/computer.png">
          </div>
          <div class="desc">
          <p>A blog I've created so that I can share resources I've found, talk about what I've learned, and share
            what my experience as a junior software developer has been like. 
          </p>
          <a href="/blog"><button>View More</button></a>
          </div>
          <div class="photo">
          <img class="preview" src="@/assets/blog.jpg">
          </div>
      </div>
    </div>
  </div>

</div>

    </section>

    <FooterSection/>
  </main>
</template>

<script>
// @ is an alias to /src
import HeaderSection from '@/components/HeaderSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import emailjs from '@emailjs/browser';

export default {
  name: 'HomeView',
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
.menus{
  margin-bottom: 4rem;
}
.skills{
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0 3rem 0;
  margin-bottom: 4rem;
  background-color: white;
}
.skills h2{
  text-align: center;
  padding: 1.5rem;
  font-family: 'Share Tech Mono', monospace;
  color: #142126;
  font-size: 36px;
}
.lists{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.list{
  padding: 1rem 4rem 1.5rem 0;
  margin-right: 50px;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 18px;
  border-right: 2px solid #9EB5BC;
}
.list2{
  padding: 1.5rem 4rem 2rem 0;
  margin-right: 50px;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 18px;
}
.card{
  margin: 0 5rem;
  background-color: rgba(255, 255, 255, 0.692);
  box-shadow: 0px 0px 20px black;
}
.card-header{
  background-color:#384C52;
  text-align: center;
}
.card-header a{
  color: white;
  font-family: 'Share Tech Mono', monospace;
  font-size: 20px;
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
  max-width: 800px;
  font-family: 'Roboto Condensed';
  font-size: 18px;
}
.desc button{
  font-family: 'Share Tech Mono', monospace;
  background-color: #142126;
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
  width: 30rem;
  border-radius: 8px;
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
  max-height: 270px;
  background-color: #9EB5BC;
  width: 100%;
  padding: 0 10rem;
}
.dropdown-item h4{
  font-family: 'Share Tech Mono', monospace;
  padding: 0.5rem 0;
}
.send{
    background-color: #142126;
    border: none;
    width: 80px;
    border-radius: 10px;
    color: white;
    margin-bottom: 0.5rem;
}
.send:hover{
  background-color: #9EB5BC;
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
  color: #142126;
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
.icons img:hover{
  border: 3px solid #9EB5BC;
  border-radius: 4px;
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
  background-image: url('@/assets/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>