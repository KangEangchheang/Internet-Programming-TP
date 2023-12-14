<template>
    <div class="showcase">
        <div class="backgroundimagbanner"></div>
        <div class="backgroundimagbannercolor"></div>
        <div class="showcasetitle">
            <h1>
                Don't miss amazing grocery deals
            </h1>
            <h2>Sign up for daily newsletter</h2>
            <div style="display:flex;">
                <div class="subsinput">
                    <img style="width: 24px;" src="../assets/icons/fi-rs-paper-plane 1.svg"/>
                    <input type="text" placeholder="Your email address"/>
                    <CustomButton color="var(--tpgreen)" title="Subscribe" style="border-radius: 100px;position:inherit;font-size: 16px; padding:0.5rem 2rem;"/>
                </div>
            </div>
        </div>
        <div class="bannerpic">
        </div>    
    </div>
</template>
<script>
    import CustomButton from './CustomButton.vue'
    export default{
        name:"Showcase",
        components:{
            CustomButton,
        }

    }
</script>
<style>
.backgroundimagbanner{
    background-image: url('../assets/image/shwocaseban.png');
    background-size: cover;
    background-position: center;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    z-index: -1;
}
.backgroundimagbannercolor{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: antiquewhite;
    z-index: -2;
    border-radius: 15px;
}
.subsinput{
    display:flex;
    gap:0.2rem;
    border-radius: 100px;
    background-color: white; 
    padding-left:1rem;
    margin-top: 2rem;
}
.subsinput input{
    border:none;
    border-radius: 50%;
    background-color: none;
    color:gray;
    padding:0.5rem 0;
    padding-right:8rem;
    font-size: 14px;
}
    .showcasetitle{
        display: flex;
        flex-direction: column;
        gap:2rem;
        width: 50%;
        padding: 2rem 3.5rem;
    }
    .showcase{
        display: flex;
        width: 100%;
        border-radius: 10px;
        position: relative;
    }
    .showcase h1{
        font-size: 64px;
        line-height: 68px;
        margin:0;
        width:100%;
    }
    .bannerpic{
        background-image: url('../assets/image/showcasepic.png');
        max-width: 60%;
        width:50%;
        background-position: center;
        background-size: cover;
    }
    .showcase h2{
        color:#7E7E7E;
        font-size:22px;
        font-weight: 500;
    }
</style>