<template>
  <section class="data-page">

    <h2 class="title">Data Analytics & Python</h2>

    <section class="featured">
      <div id="left" class="slide-in-right">
        <h3 class="left-title">SQL: Data Cleaning and Exploration</h3>
        <img src="@/assets/icons/sql.png" alt="SQL icon">
        <img src="@/assets/icons/excel.png" alt="Microsoft Excel icon">
        <p>Exercises where I went through large data sets, formatted the data so that it was 
          consistent and easier to manipulate, and ran multiple SQL queries to analyze the data.</p>
        <a href="https://github.com/ATaylorN/SQL-Data-Exploration"><button class="btn">View Project</button></a>
      </div>
      <div id="right" class="slide-in-right">
        <img src="@/assets/data/sql.jpg" alt="Screenshot of SQl Queries">
      </div>
  
    </section>

    <section id="projects-section" class="fade-in-bottom">

<!-- Data Visualization in Excel-->
        <div class="card" style="width: 600px">
            <img class="card-img-top" src="@/assets/data/DashboardScreenshot.png" alt="Dashboard in Excel">
            <div class="card-body">
            <a href="https://github.com/ATaylorN/Data-Visualizations-in-Excel"><h4 class="card-title">Data Visualization in Excel</h4></a>
            <img src="@/assets/icons/excel.png">
            <p class="card-text"> Reformated the data in the Excel columns so that they were more readable. For example, 
              changing 'M' and 'S' to 'Married' and 'Single' so that you don't have to guess what the single letters 
              stand for. Used the information to create pivot tables and then used those pivot tables to create a 
              dashboard with filters.</p>
            <a href="https://github.com/ATaylorN/Data-Visualizations-in-Excel" class="btn">View Project</a>
            </div>
        </div>
<!-- SQL Data Exploration-->
        <div class="card" style="width: 600px">
            <img class="card-img-top" src="@/assets/data/sql.jpg" alt="Dashboard in Excel">
            <div class="card-body">
            <a href="https://github.com/ATaylorN/SQL-Data-Exploration"><h4 class="card-title">SQL: Data Cleaning and Exploration</h4></a>
            <img src="@/assets/icons/sql.png">
            <img src="@/assets/icons/excel.png">
            <p class="card-text">Used SQL to analyze Covid data. Looked at things like countries with the highest 
              rates of infection per population, countries with the highest death count per population, and 
              continents with the highest death count per population.</p>
            <a href="https://github.com/ATaylorN/SQL-Data-Exploration" class="btn">View Project</a>
            </div>
        </div>
<!-- BMI Calculator -->
        <div class="card" style="width: 600px">
            <img class="card-img-top" style="height: 300px" src="@/assets/coding/library.png" alt="Library">
            <div class="card-body">
            <a href="https://github.com/ATaylorN/Python-Lessons"><h4 class="card-title">Python: BMI Calculator</h4></a>
            <img src="@/assets/icons/jupyter.png">
            <img src="@/assets/icons/python.png">
            <img src="@/assets/icons/anaconda.png">
            <p class="card-text">Your standard body mass index (BMI) calculator written in Python. It'll prompt 
              the user their name, weight in pounds, and height in inches, and then let you know what category 
              you fall in.</p>
            <a href="https://github.com/ATaylorN/Python-Lessons" class="btn">View Project</a>
            </div>
        </div>
<!-- Python Automated File Sorter -->
        <div class="card" style="width: 600px">
            <img class="card-img-top" style="height: 300px" src="@/assets/coding/library.png" alt="Library">
            <div class="card-body">
            <a href="https://github.com/ATaylorN/Python-Lessons"><h4 class="card-title">Python: Automatic File Sorter</h4></a>
            <img src="@/assets/icons/anaconda.png">
            <img src="@/assets/icons/python.png">
            <img src="@/assets/icons/jupyter.png">
            <p class="card-text">Input your file path and it will create a seperate folder for png, 
              csv, and text files and then seperate those files into their respective folders.</p>
            <a href="https://github.com/ATaylorN/Python-Lessons" class="btn">View Project</a>
            </div>
        </div>
<!-- Python Web Scraping: Amazon -->
          <div class="card" style="width: 600px">
            <img class="card-img-top" style="height: 300px" src="@/assets/coding/library.png" alt="Library">
            <div class="card-body">
            <a href="https://github.com/ATaylorN/Python-Lessons"><h4 class="card-title">Python Web Scraping: Amazon</h4></a>
            <img src="@/assets/icons/anaconda.png">
            <img src="@/assets/icons/python.png">
            <img src="@/assets/icons/jupyter.png">
            <img src="@/assets/icons/excel.png">
            <p class="card-text">Built a web scraper using Python in Jupyter Notebook that checks on a "Got Data?" 
              t-shirt that is for sale on Amazon. It pulls the title, price, rating, and description information, 
              formats the information to make it more readable, and logs the data in a csv file (creating the csv 
              file if it doesn't already exist). I set it up to automatically pull the data once a day and append 
              it to the csv file. There's also code to send an email if the t-shirt's price drops below $14.00.</p>
            <a href="https://github.com/ATaylorN/Python-Lessons" class="btn">View Project</a>
            </div>
        </div>
<!-- Crypto Currency API & Visualization -->
      <div class="card" style="width: 600px">
            <img class="card-img-top" style="height: 300px" src="@/assets/coding/library.png" alt="Library">
            <div class="card-body">
            <a href="https://github.com/ATaylorN/Python-Lessons"><h4 class="card-title">Python: Crypto Currency API</h4></a>
            <img src="@/assets/icons/anaconda.png">
            <img src="@/assets/icons/python.png">
            <img src="@/assets/icons/jupyter.png">
            <img src="@/assets/icons/excel.png">
            <p class="card-text">Pulls information from a crypto currency API and stores it in a dataframe using 
              Pandas and Python. Set it collect the data once every minute and then append the data to the dataframe. 
              Then worked on cleaning the data and making it more readable and eventually putting the data into charts.</p>
            <a href="https://github.com/ATaylorN/Python-Lessons" class="btn">View Project</a>
            </div>
        </div>

    </section>
  </section>
</template>

<script>
export default {
    name: 'DataProjects'
}
</script>

<style scoped>
#left-title{
  margin-bottom: 0;
  font-family: 'Share Tech Mono', monospace;
  color: white;
}
.featured{
  background-color: #9EB5BC;
  color: white;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 18px;
  display: flex;
  padding: 6% 8rem;
  margin-bottom: 4rem;
  gap: 4rem;
}
#left img{
  width: 40px;
  margin-bottom: 1.5rem;
}
#right img{
  max-width: 700px; 
  border-radius: 8px;
}
.title{
    text-align: center;
    background-color: #384C52;
    color: white;
    font-family: 'Share Tech Mono';
    padding: 2rem;
    margin-bottom: 0;
}
.card {
    box-shadow: 0px 5px 20px 0px black;
    border: none;
}
a{
    text-decoration: none;
    color: black;
}
a:hover{
    color: #9EB5BC;
}
#projects-section{
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;
    margin-bottom: 4rem;
    padding: 0 1.5rem;
}
.card-body img{
    width: 30px;
    padding-bottom: 1rem;
}
.card-body{
    font-family: 'Share Tech Mono', monospace;
    padding: 1.5rem 2rem;
    max-height: 420px;
    overflow: auto;
}
.card-title{
    margin-bottom: 0;
    font-size: 28px;
    font-weight: 600;
}
.card-text{
    font-family: 'Roboto Condensed', sans-serif;
    overflow: auto;
}
.btn{
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    background-color: #142126;
    color: white;
}
.btn:hover{
    background-color: #ECEAE4;
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
.slide-in-right {
	-webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@media only screen and (max-width: 600px) {
  .featured {
  flex-direction: column;
  font-size: 14px;
  padding: 1.2rem;
  gap: 0;
  }
  #right img{
  max-width: 350px; 
}
}
@media only screen and (min-width: 600px) and (max-width: 1200px){
  .featured {
  flex-direction: column;
  padding: 4rem;
  }
  #right img{
  max-width: 600px; 
}
}
</style>