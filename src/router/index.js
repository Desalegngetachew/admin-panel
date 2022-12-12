import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddProduct from '../components/AddProduct.vue'
import EditProduct from '../components/EditProduct.vue'
import ProductList from '../components/ProductList.vue'
import Dashboard from '../views/weredaDashboard.vue'
import BudgetForm from '../views/budgetForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path:"/admin",
      name:"admin",
      component:()=>import("../views/admin.vue"),
    },
    {
      path:"/adminWereda",
      name:"adminWereda",
      component:()=>import("../views/weredaDashboard.vue"),
    },
    {
      name: 'Create',
      path: '/create',
      component: AddProduct
    },
    {
      name: 'Edit',
      path: '/edit/:id',
      component: EditProduct
    },
    {
      name: 'productList',
      path: '/productList',
      component: ProductList
    },
    {
      name: 'dashboard',
      path: '/dashboard',
      component: Dashboard
    },
    {
      name: 'budgetForm',
      path: '/budgetForm',
      component: BudgetForm
    },
    {
      name: 'mazezForm',
      path: '/mazezForm',
      component: ()=>import( "../views/MazezForm.vue")
    },
    {
      name: 'mastawokiya',
      path: '/mastawokiya',
      component: ()=>import( "../views/Mastawokiya.vue")
    },
    {
      name: 'report',
      path: '/report',
      component: ()=>import( "../views/pdf.vue")
    },
    {
      name: 'pdff',
      path: '/pdff',
      component: ()=>import( "../views/pdf.vue")
    },
    

  ],
});

export default router;
