import { defineStore } from 'pinia';
export const useProductStore = defineStore('productStore',{
    state:()=>({
        promoitem:[
        { id: 1, color: "#F0E8D5", buttonColor: "#3BB77E", text: "Everyday Fresh & Clean with Our Products",imagePath: new URL('../assets/image/Cms-04.png', import.meta.url).href },
        { id: 2, color: "#F3E8E8", buttonColor: "#3BB77E", text: "Make your Breakfast Healthy and Easy", imagePath: new URL('../assets/image/Cat-01 1.png', import.meta.url).href },
        { id: 3, color: "#E7EAF3", buttonColor: "#FDC040", text: "The best Organic Products Online", imagePath: new URL('../assets/image/Cms-03 1.png', import.meta.url).href },
      ],
        catitems:[
        { id: 1, color: "rgb(163, 230, 53,", title:"Cake & Milk", imagePath: new URL('../assets/image/cat-13.png',import.meta.url).href},
        { id: 2, color: "rgb(251, 146, 60,", title:"Peach", imagePath: new URL('../assets/image/cat-11.png', import.meta.url).href },
        { id: 3, color: "rgb(74, 222, 128,", title: "Oganic Kiwi", imagePath: new URL('../assets/image/cat-12.png', import.meta.url).href },
        { id: 4, color: "rgb(225, 29, 72,", title: "Red Apple",  imagePath: new URL('../assets/image/cat-9.png', import.meta.url).href },
        { id: 5, color: "rgb(202, 138, 4,", title: "Snack", imagePath: new URL('../assets/image/cat-3.png', import.meta.url).href },
        { id: 6, color: "rgb(124, 58, 237,", title: "Black plum", imagePath: new URL('../assets/image/cat-4.png', import.meta.url).href },
        { id: 7, color: "rgb(34, 197, 94,", title: "Vegetables", imagePath: new URL('../assets/image/cat-1.png', import.meta.url).href },
        { id: 8, color: "rgb(245, 158, 11,", title: "Headphone", imagePath:  new URL('../assets/image/cat-15.png', import.meta.url).href },
        { id: 9, color: "rgb(132, 204, 22,", title: "Cake & Milk",  imagePath: new URL('../assets/image/cat-14.png', import.meta.url).href },
        { id: 10, color: "rgb(124, 58, 237,", title: "Orange", imagePath: new URL('../assets/image/cat-7.png', import.meta.url).href }
      ],
        proditems:[
        {
          id: 1,
          tag: "-17%",
          image: "https://s3-alpha-sig.figma.com/img/17d8/db7f/3d627d5dff7a21f5589732970e0ecc60?Expires=1700438400&Signature=lbAQf1WGZ9xbKYvSowOyd7FiQxs2KwTahg4wKib~~04mjRZtpbYYHSxwICv0rDhKbfyFiPbvcd9ypsRHaVoWMnqmArO3u7lkpI2XuqnjLu0WVnGEGkyqM1OuiCVBby-r2mQ0EjYiBM2kHiq5tryyoJ9XqHVVxMVA0yAh0ZErkIGG8imBjQDvFmyKS7eoZBYS8kaI1CK348~IeLNLVDQTKpBDgF5-4yM8xPUyvsdSopCU-R5qP9~c0uWRT2JJbOx6FUYskAAVt5POVOhcSW5CVEsY2oigRpvGQQmH0gEZLL~nCZjbNMvTLmT9RyNGZXCfqba8gYRUehYbb12xaxok9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          category: 1,
          name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
          rate: 4,
          description: "500 gram",
          sellPrice: "15",
          discountPercentage: 17,
          discountPrice: 0
        },
        {
          id: 2,
          tag: "Hot",
          image: "https://s3-alpha-sig.figma.com/img/2460/9b48/1186872b4c861e65b3ad6f46536a194f?Expires=1700438400&Signature=AkJ~ST9RXdFK5p40QhQl1FmbYRaaD3BxHLRAfnjYXoCL5vUlw5NUrlANZrUnpAgOLN5VbuVFdJOksK5okKGlUSlfCSlFXGRuPnpfsYL9QAzPM~87CJCtPLe8Db5vnVQYqmL-4QqJtF6zhwhIyOQdsrTU0xpJnkUIEVhj3~QQ9sDq-p3BWofIohIlt5VPFec3nfhbrHi~4H~El9BA9Fpq3kPTAploU7ao8vk6XeZSPBncaSAfNZvXcbdPG7zJ50mkloN5mgSvfccqKXNOHPDt5BzGfyEBStJxU4Z8WasGm5IQ~qd7bPh1STjJZzoR~P7TSUtKXYw1ru1Bl644t7WDbQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          category: 3,
          name: "All Natural Italian-Style Chicken Meatballs",
          rate: 4,
          description: "500 gram",
          sellPrice: "10",
          discountPercentage: 0,
          discountPrice: 0
        },
        {
          id: 3,
          tag: "Sale",
          image: "https://s3-alpha-sig.figma.com/img/8b45/4a65/7d09e0d193461fe0cf5fe4d9cba8cad9?Expires=1700438400&Signature=kQKqjFrnyDNVCO903ScnzPa3OiBgrNhGWnjjfxxytF0xFTHzJAgnxMO32WYbXecjv6PjvjIkA~HLB7-fS8mRWYnWS1GZ8b9v6DodhKLs13Tc~5ULELQ6VD3PubWeEdSQGUGtN5YW11tBFrZOlvF0GtGzVrw~Og3SJ4qjEyPcA16U8wQc9ay0d4ipwI~YktnDE3HvQ32Bd3ZPCJmljkN24uJsp0vlVcoGi8cr0BuSVFtaMM3s0J-~DM8C8O0O3fgQ8j3kO768gXJFPTQic0onM9ftrn6jveQeuJd5fBjCO919trL73ErqJIygdulfKfzYJOJS4TiziCGbpAqWDu-J4w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          category: 3,
          name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
          rate: 4,
          description: "500 gram",
          sellPrice: "5",
          discountPercentage: 0,
          discountPrice: 0
        },
        {
          id: 4,
          tag: "",
          image: "https://s3-alpha-sig.figma.com/img/40ab/8386/1edbcb39cf2b176a6b5084a096d0c9a4?Expires=1700438400&Signature=WKDQ~r2iTp6cHBRVoHMdTINAt7y77AQMJuphTYKrFSxL~4gg7P~t-63VY4Z4wQVm1jXibKP1gHInrFhknQvzPc6-qzOvgTfSSVuu4WKJm9haYip8atQom8QTZZ2DZBAX0NMZXWsCRW-rTXJd7YvMmqe2GKyVWVaGwaKl5K36FRxN03KXNxWhLDK6ys1~rRHLxu1TT8Nhp3ruAADQo2WiyhL1RiYyhExbsmoVJfLgaSyo1Tn8XqPC-fikV9dLFckgsnx6cqJnU0B7M4sdP03rTMYpRESySBuKv3ggMNjd4ZENWoR4mLy8n7Wlw5rAm~WkU58S80oXeL4RKjb7XtGiNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          category: 4,
          name: "Foster Farms Takeout Crispy Classic Buffalo Wings",
          rate: 4,
          description: "500 gram",
          sellPrice: "1",
          discountPercentage: 0,
          discountPrice: 0
        },
        {
          id: 5,
          tag: "",
          image: "https://s3-alpha-sig.figma.com/img/2d48/0a8f/210cdb0f5871f9d6dc633450452ab720?Expires=1700438400&Signature=CYwkEnpONmOQTbnAKDN8WMIQthSNraenRwja93PKXHpZmSjet18~0igrwcVfAuvSJMRC7fICPttRmNRa7FjnOpmLLyO8duBGtuwIhV7xaboYxtnUBjyHPO7MlCNUHdIQ8Ny8j0hSsUSKmTSv077cgAgqdAc8kukJr6wr18f~rtYmnQGfiSZVZ0CNRQ3oJQrlGNJ5K2KR7B8lVy9f4rNXZO8YHAgq7TGf8Sktzj3PyFO289EFK~BqV-eTBji5P9os9ddaUe66Oy3hrhJ7RNUOtbbaCmoj~n5SGejqgW5BXqcZYE9a4QfV6k0cxEAVn0AnKvymwi1FhpZWOAOBPNExog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          category: 4,
          name: "Blue Diamond Almonds Lightly Salted Vegetables",
          rate: 4,
          description: "500 gram",
          sellPrice: "25",
          discountPercentage: 0,
          discountPrice: 0
        },
        {
          id: 6,
          tag: "",
          image: "https://s3-alpha-sig.figma.com/img/4c35/37e0/b383c32aa0cf53ae7651240f5bb90bbf?Expires=1700438400&Signature=LWWupW3sHrZV3K4V4GFxtcAqQu~nmbCLy6H8XkNyhHoAEoE3nu9mp9QdfziqJMAMS~W1B4d6QiDpcq2HPQ0y28jggcmwf1UPOjmj21FyX~DJ6urMCPr5sV6Bk1TVeLc7Y5U64bXybmM1rVgq4dEhUDhYiVtJp~ZTk1TeINfyGW35N~y6er1R-Sjo-HZWddzR6iOypwjOY4wto5G0DhxknGkRd2CfVnW9AA7d1ItWIw8h3pux2u2QQ4IX8KJGGaWQrs-3sm-z-g87LCd-2TIjJ1kID8k3p9sh4HR04L6FuCECEDove-P8B1JP-d2eBzZvaQXLejKiLGYRGb7ghGVuCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          category: 2,
          name: "Chobani Complete Vanilla Greek Yogurt",
          rate: 4,
          description: "500 gram",
          sellPrice: "15",
          discountPercentage: 0,
          discountPrice: 0
        },
        {
          id: 7,
          tag: "Sale",
          image: "https://s3-alpha-sig.figma.com/img/2190/48fe/84dbf34790f69cce601604ba8d38d582?Expires=1700438400&Signature=LSldov3zHQVrAC2yL6tRp9LZIax1bfNkBvgbNa7w~-Kzzvs5-gAVAqCqGQncLri3jNA0u~zGxjxpK3DxyxV0at-87RDoCoD8kIZiIS9TdZsWEEmm7eJ6qf4UCBm0K-K0TkVNACygwg-Wltj2iyQ5W4L3yNoO5QCAkpMi9Bc6L1FM1DzIlxvcR22DDylE0JmxcQA3yGCLjOQpPcEjV3HntpC1a1osHskxqtBXw6jU4tqczN~vfLKdnosGHbuWX3OsO2dqAIz2kVoXFmWLA0GSOoySmk5axAJjoE8YBhZnz1VApaA~ITSQkeR8KShtH8FdFtiWTAzl8gJ4tvf~SCwAGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          category: 2,
          name: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
          rate: 3,
          description: "500 gram",
          sellPrice: "700",
          discountPercentage: 0,
          discountPrice: 0
        },
        {
          id: 8,
          tag: "",
          image: "https://s3-alpha-sig.figma.com/img/b276/d8b7/833567cc5ca946f1cf51704fd32be2e4?Expires=1700438400&Signature=L8v0C~RyrwA1ncmulknWS-zUeJqPYhnXhKovfc7i-24J2t3pDn6FGUD6k3pAivs2P341oHGb0LxPl5QqFGy~Jduwiibtwxan3zcOAPS6WxRaWahLotkVX0ElGbtTw544MwuUHXznLmUZw2cXDQkbE1AYZ26DZo1vASnlIolZGj3IeKUGLoeSs12R~QoKOqbWF00I5mMvZEJLID-qcwsiZz38yohs~1xq5k2wXbwG0qdKLwPQCnEXadDCC8j6qPzAWchr7EDP4ZbhKw7vobgukrP3KbWrwNu5NC0MOpM~PuUNPwRxY~AjS-pZUv1P3PynDnXCoNJ-p9KKsEfkpqcx4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          category: 7,
          name: "Encore Seafoods Stuffed Alaskan Salmon",
          rate: 5,
          description: "500 gram",
          sellPrice: "5",
          discountPercentage: 0,
          discountPrice: 0
        },
        {
          id: 9,
          tag: "",
          image: "https://s3-alpha-sig.figma.com/img/53b7/049c/d4d87292c3766771cdc858ab456c1e20?Expires=1700438400&Signature=bBUzfRRkAYavGDecj7J7Z7KrRkfrJ~cUlX9jsUrLUA-CqmNq~pabnnzAwq7Y-vHQQt7tpoRPcCQ0lzQzk0ADJOGCnqCnHTjj3EklkqZ~v4o3jlrwmmtqhe6fwqOo-wE0l3ix6MHf3vggfYZewksCovOcR5ZkkmpRQlmDhEHez56vCUY54lJ2mOzGOo98xz72fQEMkWPwOQKHwO-v3KHKgUJIxEaNX~GzGiZCYxw-qvbNLUVDx2BqKB~BQZ5ZHBg1BI619mTnDuCbgX3aqi-bdsP-q~JiNyto-CGQAwlnvh~tj5ZU0kl2SfSFpYYvaQGv5JCJhTvBcrLA3zOpgQ3GlQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          category: 6,
          name: "Gorton’s Beer Battered Fish Fillets with soft paper",
          rate: 4,
          description: "500 gram",
          sellPrice: "9",
          discountPercentage: 0,
          discountPrice: 0
        },
        {
          id: 10,
          tag: "",
          image: "https://s3-alpha-sig.figma.com/img/6667/38db/f36fd0ac0722f68e84acd3769588855f?Expires=1700438400&Signature=Qc17jJ~cvda~4ucerYC1hG0XHZ5HupaIHl6PKQ-zfSebxiohtBrxr3pNn38TCrRxjX9UZvFt7TveGV6sVXC68cvcKchSrBf8bIvoQu9-7WbYnz-YBzw4Lvk5wuiHcx1SyMddxpscf5gs6mORZgG1rd~V8pKas~J0g7kiJ4t8CTxeBWzgkRgHqQZnxcFHoKs8Yl4LZ-4kL~qUpPgCG0tCbbP41XJNeqcPNwuTSZYmleb1Xn-MdMunMvFYKL-k9hoyz~FyOVOBLAi0h7Rh-nU7lHmD7dmDtBnhQQJ-rIKoY9RkUnOQj44YNTFEYR70ci0gg466~Ufjf-8mjEy9CRxnJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          category: 6,
          name: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
          rate: 3,
          description: "500 gram",
          sellPrice: "30",
          discountPercentage: 0,
          discountPrice: 0
        },
      ]
    }),
    getters:{
        
    }
    
})