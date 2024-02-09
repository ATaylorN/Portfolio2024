<template>
  <section class="blog-page">  

     <nav class="blog-nav">
        <ul>
            <h2>BLOG</h2>
            <a href="#portfolio"><li>Portfolio Updates!</li></a>
            <a href="#newskills"><li>New Skills Acquired</li></a>
            <a href="#resources"><li>Resources</li></a>
        </ul>
    </nav> 

    <section class="posts">
    <article id="portfolio" class="slide-in-left">
        <h4>February 9th, 2024</h4>
        <h2>Portfolio Updates!</h2>
        <p>"But why tho? I liked your last one!" I get it; I didn't hate the previous version of my portfolio site. But since the time
            that I had initially created it, I've learned a lot and I wanted a way to showcase that. I probably could've 
            just thrown in a new section for the new skills, but a couple of weeks ago, I was hit with a spark of inspiration and it led 
            to me completely redoing my site. So new year, new...site. On the plus side, this project was a great refresher on frontend development and overall design.
        </p>
        <img src="../assets/posts/portfolio.png">
        <img src="../assets/right-arrow.png">
        <img src="../assets/posts/new-portfolio.png">
    </article>

    <article id="newskills">
        <h4>February 9th, 2024</h4>
        <h2>New Skills Acquired</h2>
        <p>Since graduating Tech Elevator, I've continued to learn as much as possible about software development. At first, I'll admit, I didn't really have 
            a direction, but as I was applying to jobs, the companies that were interested in me primarily used Python. Since I'm most familiar with Java, I
            decided that learning Python would be my next challenge.<br><br>
            I spent about two months going through LinkedIn Learning classes and even an online MIT class. 
            While I was working on this, I was also going through the interview process for a data analyst position so I quickly added data analytics, Excel (specifically things
            like pivot tables), tableau, pandas, and more to my list of things to learn, going through even more LinkedIn Learning classes and going so far as to watch a 19 
            hour data anayltics video on YouTube. <br><br>
            Ultimately, I didn't get that data analyst position. They found a candidate that was just a bit more of what they were looking for which was heart-breaking.
            On the bright side, I have all of this additional knowledge and skills that I didn't have before. And I know that if I'm up for another data analyst position,
            I'll be that much more prepared.
        </p>
    </article>

    <article class="resources" id="resources">
        <h4>February 7th, 2024</h4>
        <h2>Resources</h2>
        <p><b>Podcasts:</b><br>
            <ul>
            <a href="https://changelog.com/jsparty"><li>JSParty</li></a>
            <a href="https://linuxmatters.sh/"><li>Linux Matters</li></a>
            <a href="https://pythonbytes.fm/"><li>Python Bytes</li></a>
            <a href="https://shoptalkshow.com"><li>ShopTalk Show</li></a>
            <a href="https://syntax.fm"><li>Syntax</li></a>
            <a href="https://talkpython.fm/"><li>Talk Python to Me</li></a>
            <a href="https://virtualcoffee.io/podcast"><li>The Virtual Coffee Hour</li></a>
            </ul>

            <br><b>Newsletters</b>
            <ul>
                <a href="https://cassidoo.co/newsletter/"><li>Cassidoo</li></a>
                <p class="desc">A weekly newsletter sent by Cassidy Williams where she shares <i>"what's new and cool in the world of web development, with content for everyone, from beginners to pros."</i></p>
                <a href="https://gomakethings.com/"><li>Go Make Things</li></a> 
                <p class="desc">Chris Ferdinandi sends out <i>"a short email each weekday on how to build a simpler, more resilient web."</i></p>
            </ul>

            <br><b>Online Magazines</b>
            <ul>
                <a href="https://sidebar.io/"><li>SideBar</li></a> 
                <i class="desc">“Collecting the best design links of the day since October 2012.”</i>
                <a href="https://www.smashingmagazine.com/"><li>Smashing Magazine</li></a> 
                <i class="desc">“Magazine on CSS, JavaScript, front-end, accessibility, UX and design. For developers, designers, and front-end engineers.”</i>
            </ul>

            <br><b>Learn Coding Through Games:</b>
            <ul>
                <a href="https://checkio.org/"><li>CheckIO</li></a> 
                <i class="desc">“Coding games for beginners and advanced programmers where you can improve your coding skills by solving engaging 
                    challenges and fun tasks using Python and TypeScript”</i>
                <a href="https://codecombat.com/"><li>Code Combat</li></a> 
                <i class="desc">“Learn to Code Through the Power of Play”</i>
                <a href="https://flukeout.github.io/"><li>CSS Diner</li></a> 
                <i class="desc">“A fun and interactive game that challenges you to select the correct CSS selectors for different HTML elements.”</i>
                <a href="https://type.method.ac/"><li>Kerntype</li></a> 
                <i class="desc">“A letter spacing game</i>
                <a href="https://pixact.ly/"><li>Pixact.ly</li></a> 
                <i class="desc">“An online tool that tests how well you know your pixels”</i>
                <a href="https://screeps.com/"><li>Screeps</li></a> 
                <i class="desc">“MMO sandbox game for programmers. It means ‘scripting creeps’. It’s an open-source game 
                    for programmers, wherein the core mechanic is programming your units’ AI. You control your 
                    colony by writing JavaScript.”</i>
                <a href="https://mystery.knightlab.com/"><li>SQL Murder Mystery</li></a> 
                <i class="desc">“There's been a Murder in SQL City! The SQL Murder Mystery is designed to be both a 
                    self-directed lesson to learn SQL concepts and commands and a fun game for experienced 
                    SQL users to solve an intriguing crime.”</i>
            </ul>

            <br><b>Challenges and Learning Websites:</b>
            <ul>
                <a href="https://100dayscss.com/"><li>100 Days CSS Challenge</li></a>
                <a href="https://betterwebtype.com/"><li>Better WebType</li></a> 
                <i class="desc">“A free web typography course for designers and web developers by Matej Latin”</i>
                <a href="https://www.c0d3.com/"><li>C0d3</li></a> 
                <i class="desc">“Become a Software Engineer the Hard Way. Learn the right foundations you need to become a full stack software engineer. 
                    Our curriculum takes no shortcuts and effectively trains students with no technical background to become great 
                    software engineers.”</i>
                <a href="https://www.codewars.com/"><li>CodeWars</li></a> 
                <i class="desc">“Achieve mastery through challenge. Improve your development skills by training with your peers on code kata that continuously 
                    challenge and push your coding practice.”</i>
                <a href="https://css-tricks.com/"><li>CSS-Tricks</li></a>
                <a href="https://www.dailyui.co/"><li>Daily UI</li></a> 
                <i class="desc">“Become a better designer in 100 days. Daily Ui is a series of design challenges and surprise rewards send out everyday”</i>
                <a href="https://www.frontendmentor.io/"><li>Frontend Mentor</li></a> 
                <i class="desc">“Improve your coding skills by building realistic projects. Our professionally designed challenges help you gain hands-on 
                    experience writing HTML, CSS, and JavaScript. We create the designs so you can focus on the code and see your skills skyrocket!”</i>
                <a href="https://www.hackerrank.com/"><li>HackerRank</li></a> 
                <i class="desc">“We help candidates sharpen their tech skills and pursue job opportunities.”</i>
                <a href="ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016"><li>Intro to Computer Science and Programming in Python</li></a> 
                <i class="desc">A FREE computer programming class from MIT</i>
                <a href="https://leetcode.com/"><li>Leetcode</li></a> 
                <i class="desc">“the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.”</i> 
            </ul>

            <br><b>Inspiration:</b>
            <ul>
                <a href="https://www.awwwards.com/"><li>Awwwards</li></a> 
                <a href="https://codepen.io/"><li>CodePen</li></a>
                <a href="https://dribbble.com/"><li>Dribble</li></a>
            </ul>  

            <br><b>Tools:</b>
            <ul>
                <a href="https://animista.net/"><li>Animista</li></a> 
                <i class="desc">“On-demand css animations library.”</i>
                <a href="https://architextures.org/"><li>Architextures</li></a> 
                <i class="desc">"The material editor for architects and designers. Browse materials and create textures for construction drawings and 3D models”</i>    
                <a href="https://colormagic.app/"><li>ColorMagic</li></a> 
                <i class="desc">“A color palette generator with AI. Generate colors from keyword for image of color you enter.”</i>
                <a href="https://coolors.co"><li>Coolers</li></a> 
                <i class="desc">“The superfast color palettes generator! Create the perfect palette or get inspired by thousands of beautiful color schemes”</i>
                <a href="https://cssgradient.io/"><li>CSS Gradient</li></a> 
                <i class="desc">“a designstripe project that lets you create free gradient backgrounds for your website.”</i>
                <a href="https://9elements.github.io/fancy-border-radius/"><li>Fancy-Border-Radius</li></a>
                <a href="https://fontawesome.com/"><li>FontAwesome</li></a> 
                <i class="desc">“The internet’s icon library and toolkit, used by millions of designers, developers, and content creators.”</i>
                <a href="https://cssbud.com/css-generator/css-glow-generator/"><li>Glow Generator</li></a> 
                <i class="desc">“A fresh CSS glow generator that generates cross-browser compatible code for your glowing needs.”</i>
                <a href="https://www.happyhues.co/"><li>HappyHues</li></a> 
                <i class="desc">“A color palette inspiration site that acts as a real world example as to how the colors could be used in your design projects.”</i>
                <a href="https://huemint.com/"><li>HueMint</li></a> 
                <i class="desc">“Color palette generator. Huemint uses machine learning to create unique color schemes for your brand, website or graphic”</i>
                <a href="https://icons8.com/"><li>Icons8</li></a> 
                <i class="desc">“Curated graphics, design apps, and AI tools. The ultimate design kit for creatives and developers.”</i>
                
            </ul>
            </p>
    </article>

    </section>

    <section class="to-top"><a href="#"><img src="../assets/scroll-up.png"></a></section>
  </section>
</template>

<script>
export default {
    name: 'BlogSection'
}
</script>

<style scoped>
#portfolio img{
    margin: 2rem;
    max-height: 600px;
}
.to-top{
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 1.5rem 2rem;
}
.to-top img{
    max-width: 50px;
}
.to-top img:hover{
    max-width: 60px;
}
b{
    color: #384C52;
}
p{
    margin-bottom:0;
}
.desc{
    color: #9EB5BC;
    font-size: 16px;
}
.resources a{
    color:#384C52;
}
.resources a:hover{
    color: #ECEAE4;
}
.posts{
    padding: 4rem;
}
.posts article{
    background-color: white;
    box-shadow: 0px 0px 10px #142126;
    margin-bottom: 2rem;
    border-radius: 10px;
    padding: 4rem;
}
.posts h2{
    margin-bottom: 3rem;
}
.blog-page{
    display: grid;
    grid-template-areas: "blog nav";
    grid-template-columns: 4fr 1fr;
    background-image: url("../assets/background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}
.posts{
    grid-area: blog;
}
.blog-nav {
    grid-area: nav;
    background-color: #9EB5BC;
    font-family: 'Share Tech Mono';
    font-size: 18px;
    display: flex;
    justify-content: center;
    box-shadow: 0px 0px 10px #142126;
}
.blog-nav h2{
    margin: 2rem 0;
}
.blog-nav ul{
    list-style-type: none;
    height: 100%;
    position: fixed;
    overflow: auto;
    margin: 0;
    padding: 0;
}
.blog-nav li{
    padding-bottom: 0.5rem;
}
a {
    text-decoration: none;
    color: #ECEAE4;
}
a:hover{
    color: #142126;
}
h4{
    font-family: 'Share Tech Mono', monospace;
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 600;
    color: #9EB5BC;
}
h2{
    font-family: 'Share Tech Mono', monospace;
    color: #142126;
}
p{
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 18px;
}
.slide-in-left {
	-webkit-animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
</style>