import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Subscriptions from '@/views/Subscriptions';
import Search from '@/views/Search';
import Settings from '@/views/Settings';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/subscriptions',
      name: 'subscriptions',
      component: Subscriptions,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
  ]
})
