import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // will match everything and put it under `$route.params.pathMatch`
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: ()=>import('../views/NotFound.vue') },
    {path:'/', component: ()=>import('../views/HomeView.vue')},
    {path:'/categories/:categoryId',component:()=>import('../views/CategoriesView.vue')},
    {path:'/products/:productId',component:()=>import('@/views/ProductsView.vue')},
  ]
})

export default router;
