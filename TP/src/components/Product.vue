<template>
    <div class="card">
        <div style="margin: 1.5rem 0; position: relative;">
            <div class="tag" v-if="tag == 'Hot'" :style="{backgroundColor: color[1]}">{{ tag }}</div>
            <div class="tag" v-else-if="tag == 'Sale'" :style="{backgroundColor: color[2]}">{{ tag }}</div>
            <div class="tag" v-else-if="tag.length == 0" :style="{backgroundColor: color[4]}">{{ tag }}</div>
            <div class="tag" v-else :style="{ backgroundColor: '#3BB77E' }">{{ tag }}</div>
        </div>
        <img :src="image"/>
        <div style="padding:1rem;display:flex;flex-direction: column; font-size: 12px;">
            <p1 style="font-weight: bold;opacity: 0.5;">Hodo Foods</p1>
            <p2 style="font-weight: bold;font-size: 14px;">{{ name }}</p2>
            <div style="display:flex; gap:0.5rem; align-items:center;">
                <div style="display:flex;gap:0.1rem">
                    <!-- star rating -->
                    <div style="color:#FDC040; font-size:14px;" v-for="i in rate">★</div>
                    <div style="color:#7E7E7E;font-size:14px;" v-for="i in (5-rate)">★</div>
                </div>
                <p3>{{ rate.toFixed(1) }}</p3>
            </div>
            <p3>{{ description }}</p3>
            <div style="display:flex; justify-content:space-between;flex-wrap:wrap;">
                <div v-if="discountPercentage > 0" style="display: flex; gap:0.2rem; align-items:end;">
                    <p4 style="color:#3BB77E;">${{ (sellPrice - (sellPrice * (discountPercentage / 100))).toFixed(2) }}</p4>
                    <p5>${{ (sellPrice * 1).toFixed(2) }}</p5>
                </div>
                <p4 v-else>${{ (sellPrice * 1).toFixed(2) }}</p4>
                <div >
                    <button :class="{'clicked':buttonClicked,'notClicked':!buttonClicked}" style="padding:0.1rem 0.9rem; border-radius:4px" @click="handleButtonClick">
                        <div v-if="buttonClicked" style="display:flex;align-items:center;">
                            <p style="margin-right:1rem;">{{ 1 }}</p>
                            <div style="display:flex; flex-direction:column; justify-content:space-between;">
                                <p11 style="height:10px;">^</p11>
                                <p11 style="font-size:10px;">v</p11>
                            </div>
                        </div>
                        <div v-else>Add +</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{

        props:{
            tag:String,
            image: String,
            category: Number,
            name: String,
            rate: Number,
            description: String,
            sellPrice: Number,
            discountPercentage: Number,
            discountPrice: Number
        },
        methods:{
            handleButtonClick(){
                this.buttonClicked = !this.buttonClicked;
            }
        },
        data(){
            return{
                color:['#3BB77E','#FD6E6E','#FDC040'],
                buttonClicked:false,
            }
        }
    }
</script>
<style>
    .notClicked {
        border:none; 
        background:rgb(59, 183, 126,0.2);
        font-weight: bold;
        color: rgb(59, 183, 126);
        cursor:pointer;
    }
    .clicked {
        border:1px solid rgb(59, 183, 126,0.8); 
        background:none;
        font-weight: bold;
        color: rgb(59, 183, 126);
        cursor:pointer;
    }
    .card p4 {
        font-size: 16px;
        font-weight: bold;
        color:#606468;
    }
    .card p5{
        color:#606468;
        font-size:12px;
        font-weight: bold;
        text-decoration: line-through;
    }
    .tag{
        font-size: 12px;
        color:white;
        font-weight: bold;
        position: absolute;
        border-radius: 0 30px 30px 0;
        left:-0.5px;
        padding:0.2rem 0.7rem;
        
    }
    .card >img{
        width:70%;
        height:50%;
        background-repeat: no-repeat;
        background-size: contain;
        align-self: center;
    }
    .card{
        width: 100%;
        display:flex;
        flex-direction: column;
        gap:0.2rem;
        border:1px solid rgba(84, 84, 84, 0.65);
        border-radius: 10px;
    }
</style>