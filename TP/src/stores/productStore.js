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
          image: new URL('../assets/image/p1.jpg',import.meta.url).href,
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
          image: new URL('../assets/image/p2.png',import.meta.url).href,
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
          image: new URL('../assets/image/p3.png',import.meta.url).href,
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
          image: new URL('../assets/image/p4.png',import.meta.url).href,
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
          image: new URL('../assets/image/p5.png',import.meta.url).href,
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
          image: new URL('../assets/image/p6.png',import.meta.url).href,
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
          image: new URL('../assets/image/p7.png',import.meta.url).href,
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
          image: new URL('../assets/image/p8.png',import.meta.url).href,
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
          image: new URL('../assets/image/p9.png',import.meta.url).href,
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
          image: new URL('../assets/image/p10.png',import.meta.url).href,
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