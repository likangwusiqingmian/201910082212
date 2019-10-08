import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/pages/index/index";
import Home from "@/components/pages/home/home";
import Center from "@/components/pages/center/center";
import Text from "@/components/pages/text/text";
import Login from "@/components/pages/Login/Login";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/index",
    },
    {
      path: "/index",
      component: Index,
      meta: {
        showFoot: true
      }
    },
    {
      path: "/home",
      component: Home,
      meta: {
        showFoot: true
      }
    },
    {
      path: "/center",
      component: Center,
      meta: {
        showFoot: true
      }
    },
    {
      path: "/text",
      component: Text,
      //自定义标识符
      meta: {
        showFoot: true
      }
    },
    {
      path: "/login",
      component: Login
    }
  ]
});
