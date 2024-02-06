<template>
  <section class="marketing-page">

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




    <section class="general"></section>
    <section class="seminar"></section>


  </section>
</template>

<script>
export default {
    name: 'MarketingCampaign'
}
</script>

<style scoped>
.bottom-left img{
    width: 550px;
}
.bottom-left{
    display: flex;
    margin-top: 2rem;
    gap: 1.5rem;
    border: 2px solid red;
    align-items: flex-end;
}
.fall-desc p{
    width: 400px;
    margin-bottom: 2.5rem;
}
.fallfest{
    display: flex;
    background-color: #ECEAE4;
    padding: 4rem 6rem;
    gap: 2rem;
    justify-content: center;
}
.fall-left{
    display: flex;
    flex-direction: column;
}
.fall-left p{
    margin-top: 1rem;
    max-width: 870px;
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
}
h4{
    font-family: 'Share Tech Mono', monospace;
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 600;
}
h2{
    font-family: 'Share Tech Mono', monospace;
}
p{
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 18px;
}
.all-ways{
    padding: 2rem 10rem;
    display: flex;
    margin-bottom: 4rem;
    
}
.left p{
    margin-bottom: 1.5rem;
    margin-top: 2rem;
    max-width: 870px;
}
.right img {
    max-width: 640px;
}
</style>