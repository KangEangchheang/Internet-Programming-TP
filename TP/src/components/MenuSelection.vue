<template>
    <div style="padding:.5rem 0;min-width:100%;display: flex; justify-content: space-between;position: relative;">
        <hr style="width: 110vw;position: absolute;top:0;left:-5vw;"/>
        <div class="MenuSelection">
            <div class="browCat">
                <MenuItem title="Browse All Category" :icon="this.app" fww="600"/>
                <img src="../assets/icons/Vector.svg" alt="hi"/>
            </div>  
            <div style="display:flex;gap:1.5rem;">
                <MenuItem title="Hot Deals" fww="600" :icon="hot" class="meni" @click="redirect"/>
                <MenuItem title="Home" fww="600" icon="null" class="meni" @click="$router.push('/')" />
                <MenuItem class="menuitem meni" title="Foods" :icon="drop" fww="600" style="flex-direction: row-reverse;" @click="redirect"/>
                <MenuItem class="menuitem meni" title="Vegetables" :icon="drop" fww="600" style="flex-direction: row-reverse;" @click="redirect"/>
                <MenuItem class="meni" title="Drink" fww="600" icon="null" @click="redirect"/>
                <MenuItem class="meni" title="Cookie" fww="600" icon="null" @click="redirect"/>
                <MenuItem class="menuitem meni" title="Meat & Seafood" :icon="drop" fww="600" style="flex-direction: row-reverse;" @click="redirect"/>
                <MenuItem class="meni" title="Bakery" fww="600" icon="null" @click="redirect"/>
            </div>
        </div>
        <div style="display:flex;gap:.5rem;width: 12.2rem;">
            <img class="headset" src="../assets/icons/fi-rs-headset 1.svg"/>
            <div style="">
                <h1 style="margin:0;color:var(--tpgreen);font-size: 20px;width: 100%;text-align: end;font-weight: 600;">099 777 888</h1>
                <p style="font-size: 14px; width: 100%;">24/7 Support Center</p>
            </div>
        </div>
        <hr style="width: 110vw;position: absolute;bottom:0;left:-5vw"/>
    </div>
</template>
<script>
import { useRouter } from 'vue-router';
import MenuItem from './MenuItem.vue';

    export default{
    components: { MenuItem, MenuItem },
    data(){
        return{
            app : new URL('../assets/icons/fi-rs-apps.svg', import.meta.url).href,
            hot: new URL('../assets/icons/fi-rs-flame 1.svg',import.meta.url).href,
            drop: new URL('../assets/icons/01 align center.svg',import.meta.url).href,
        }
    },
    setup(){
        const router = useRouter();
        return {
            redirect(){
                router.push(`/categories/${Math.floor(Math.random() * 10) + 1}`)
            }
        }
    }
}
</script>
<style scoped>
.meni:hover{
    cursor: pointer;
}
.headset{
    scale: 0.7;
}
.MenuSelection{
    display:flex;
    gap:.5rem;
    align-items: center;
    justify-content: start;
}
hr{
    color:gray;
    opacity: 0.2;
}
    .menuitem > img{
        width:12px;
    }
    .browCat{
        gap:.5rem;
        padding:.4rem 1rem;
        background-color:#3BB77E;
        border-radius: 4px;
        font-weight: 600;
        color:white;
        display: flex;
    }
    .browCat>img{
        color:white;
    }
</style>