<template>
  <section id="marketing-page" class="fade-in-bottom">

    <section class="all-ways">
        <section class="left">
            <h4>CAMPAIGN:</h4>
            <h2>All The Ways Janszen<br> Associates Can Help You</h2>
            <p>When you think of a Realtor, you may only think of buying and/or selling a home, but 
                this team wants you to know that they can also help with things like new construction 
                and commercial space. This campaign included social media posts and a flyer created for 
                their listing presentation.</p>
            <img src="../assets/marketing/realestate1.png">
            <img src="../assets/marketing/realestate2.png">
            <img src="../assets/marketing/realestate3.png">
            <img src="../assets/marketing/realestate4.png">
            <img src="../assets/marketing/realestate5.png">
        </section>
        <section class="right">
            <img src="../assets/marketing/realestateflyer.jpg"> 
        </section>
    </section>

    <section class="fallfest">
        <div class="fall-left">
            <img src="../assets/marketing/fallfestfb.jpg">
            <h4>CAMPAIGN:</h4>
            <h2>Annual Fall Fest</h2>
            <p>Janszen Associates' wanted to host a fall-themed event that specifically targeted their 
                past clients as a way to thank them for their business and referrals. This campaign 
                included social media posts, emails, and physical signage for the event.</p>
            <div class="bottom-left">
                <img src="../assets/marketing/fallfestpreview.jpg">
            
                <div class="fall-desc">
                <h3>FACEBOOK EVENT:</h3>
                <p>To drum up even more interest, I created a public Facebook event for the campaign and 
                sent invites to our client list, had the agents invite their friends and family, and 
                posted regularly in the event so that it stayed in peoples' feeds.</p>
                <h3>EMAIL CAMPAIGNS:</h3>
                <p>Since not all of their clients are on social media, I did email and post card (not pictured) 
                campaigns</p>
                <h3>FACEBOOK & INSTAGRAM POSTS:</h3>
                <p>For a successful campaign, I created multiple eye-catching graphics to and posted frequently 
                leading up to the event.</p>
                </div>
            </div>
        </div>

        <div class="fall-right">
            <img src="../assets/marketing/fallfestemail3.jpg">
            <img src="../assets/marketing/fallfestemail2.jpg">
        </div>
    </section>

    <section class="general">
        <div class="gen-left">
            <h4>CAMPAIGN:</h4>
            <h2>Status Updates</h2>
            <h3>FACEBOOK & INSTAGRAM POSTS:</h3>
            <p>For every single listing that the team would do every year, I created Coming Soon, 
                ust Listed, Open House (if applicable), and Closed social media posts to get their 
                listing in front of as many potential buyers as possible.</p>
                <img src="../assets/marketing/realestatepreview.jpg">
        </div>
        <div class="gen-right">
            <h4>CAMPAIGN:</h4>
            <h2>Janszen Associates Newsletter</h2>
            <h3>EMAIL NEWSLETTER:</h3>
            <p>I created and implemented a monthly email newsletter which included a market update, 
                highlights from past events, advertisements for upcoming events, and their current 
                listings.</p>
            <div class="new-img">
            <img src="../assets/marketing/newsletter.jpg">
            <img src="../assets/marketing/newsletter2.jpg">
            </div>
        </div>
    </section>

    <section class="seminar">
        <div class="sem-left">
            <img src="../assets/marketing/buysellfbevent.jpg">
            <img src="../assets/marketing/buysell4.jpg">
        </div>
        <div class="sem-right">
            <h4>CAMPAIGN:</h4>
            <h2>Buying/Selling Seminar</h2>
            <p>The real estate market can be confusing so to help, Janszen Associates' hosted a Home 
                Buying/Selling Seminar. This campaign included social media posts, emails, and physical 
                signage for the event.</p>
            <img src="../assets/marketing/buysell1.jpg">
            <img src="../assets/marketing/buysell2.jpg">
            <img src="../assets/marketing/buysell3.jpg">
            <h3>FACEBOOK EVENTS:</h3>
            <p>To drum up even more interest, I created a public Facebook event for the campaign and sent 
                invites to our client list, had the agents invite their friends and family, and posted 
                regularly in the event so that it stayed in peoples' feeds.</p>
            <h3>EMAIL CAMPAIGNS:</h3>
            <p>Since not all of their clients are on social media, I did email and post card 
                (not pictured) campaigns</p>
            <h3>FACEBOOK & INSTAGRAM POSTS:</h3>
            <p>For a successful campaign, I created multiple eye-catching graphics to and posted 
                frequently leading up to the event.</p>
                <img src="../assets/marketing/buysellsavedate.jpg">
                <img src="../assets/marketing/buysellsavedate2.jpg">
                <img src="../assets/marketing/buysellsavedate3.jpg">
        </div>
    </section>

    <section class="to-top"><a href="#"><img src="../assets/scroll-up.png"></a></section>

  </section>
</template>

<script>
export default {
    name: 'MarketingCampaign'
}
</script>

<style scoped>
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
.seminar{
    background-color: #9EB5BC;
    margin-top: 4rem;
    padding: 4rem 6rem;
    display: flex;
    gap: 4rem;
    justify-content: center;
}
.sem-left{
    display: flex;
    flex-direction: column;
}
.sem-left img{
    max-width:665px;
}
.sem-right img{
    max-width: 250px;
    padding-right: 10px;
}
.sem-right h3{
    margin-top: 2rem;
}
.sem-right h4{
    margin-top: 1rem;
}
.sem-right h2{
    margin-bottom: 2rem;
}
.sem-right p{
    max-width: 750px;
}
.gen-right{
    padding-top: 1.5rem;
}
.gen-right h3{
    margin-top: 3rem;
}
.gen-right p{
    max-width: 1100px;
    margin-bottom: 2rem;
}
.new-img {
    display: flex;
}
.new-img img{
    max-width: 550px;
}
.general{
    display: flex;
    gap: 4rem;
    justify-content: center;
    padding-top: 4rem;
}
.gen-left img{
    max-width: 500px;
}
.gen-left h3{
    margin-top: 3rem;
}
.gen-left{
    border: 4px solid #9EB5BC;
    padding: 3rem 1.5rem 0 1.5rem;
}
.gen-left p{
    max-width: 500px;
    margin-bottom: 4rem;
}
.bottom-left img{
    width: 570px;
}
.bottom-left{
    display: flex;
    margin-top: 2rem;
    gap: 1.5rem;
    align-items: center;
}
.fall-desc p{
    width: 400px;
    margin-bottom: 2.5rem;
}
.fallfest{
    display: flex;
    background-color: #ECEAE4;
    gap: 2rem;
    justify-content: space-around;
    padding: 4rem 10rem;
}
.fall-left{
    display: flex;
    flex-direction: column;
}
.fall-left p{
    margin-top: 1rem;
    max-width: 1000px;
}
.fall-left img {
    max-width: 1000px;
    margin-bottom: 3rem;
}
.fall-right{
    display: flex;
    flex-direction: column;
}
.fall-right img{
    max-width: 330px;
}
h3{
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 24px;
    color: #384C52;
}
h4{
    font-family: 'Share Tech Mono', monospace;
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 600;
    color: #384C52;
}
h2{
    font-family: 'Share Tech Mono', monospace;
    color: #142126;
}
p{
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 18px;
}
.all-ways{
    display: flex;
    margin-bottom: 1.5rem;
    padding: 4rem 10rem;
}
.left p{
    margin-bottom: 1.5rem;
    margin-top: 2rem;
    max-width: 870px;
}
.right img {
    max-width: 640px;
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
</style>