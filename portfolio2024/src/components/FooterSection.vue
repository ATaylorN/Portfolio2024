<template>
  <footer class="footer-section">
    
    <!-- Left Section -->
    <section class="left">
        <h2 class="contact-me">Stay In Touch</h2>
        <a class="linkedin" href="https://www.linkedin.com/in/amanda-taylor1/"> <img src="../assets/icons/linkedin.png" alt="LinkedIn Logo"></a>
        <p class="li-text">LinkedIn: amanda-taylor1</p>
        <a class="github" href="https://github.com/ATaylorN"><img src="../assets/icons/github.png" alt="GitHub Logo"></a>
        <p class="git-text">GitHub: ATaylorN</p>
        <a class="icons-credit" href="https://icons8.com/"><p>Icons courtesy of Icons8</p></a>
    </section>

    <!-- Right Section -->
    <section class="right">
        <form ref="form" @submit.prevent="sendEmail" class="form">
            <input type="text" class="name" placeholder="Name" name="user_name" required>
            <input type="email"  class="email" placeholder="Email" name="user_email" required>
            <textarea class="message" name="message" placeholder="Please type message here" required></textarea>
            <input type="submit" value="SEND" class="send">
            </form>
        <span class="status" v-show="showStatus=true">{{statusMessage}}</span> 
    </section>

  </footer>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'FooterSection',
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
.icons-credit{
    font-family: 'Share Tech Mono', monospace;
    font-size: 10px;
    text-decoration: none;
    color: #142126;
    grid-area: credit;
}
.footer-section{
    background-color: #ECEAE4;
    padding: 3rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
}
.left{
    display: grid;
    font-family: 'Roboto Condensed', sans-serif;
    grid-template-areas: "text text"
                        "linkedin linkedintext"
                        "github githubtext"
                        "credit credit";
}
.contact-me{
    text-align: center;
    grid-area: text;
    font-family: 'Share Tech Mono', monospace;
}
.linkedin{
    grid-area: linkedin;
}
.linkedin img:hover{
    border: 2px solid #9EB5BC;
}
.li-text{
    grid-area: linkedintext;
    padding: 0.5rem;
}
.github{
    grid-area: github;
}
.github img:hover{
    border: 2px solid #9EB5BC;
}
.git-text{
    grid-area: githubtext;
    padding: 0.5rem;
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
}
.left img {
    width: 40px;
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
}
.right{
    text-align: center;
}
@media (max-width: 600px){
.footer-section {
    flex-direction: column;
}
form input {
    width: 20rem;
}
form textarea{
    width: 20rem;
    height: 15rem;
}
}
</style>