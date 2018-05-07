/* eslint global-require: 0 */
import Vue from 'vue';
import VueRouter from 'vue-router';



// 加载 vue-router
Vue.use(VueRouter);

/**
 * 路由规则，各页面 vm 均采用异步组件方式实现
 * see:
 * http://webpack.github.io/docs/code-splitting.html#defining-a-split-point
 * https://github.com/vuejs/vue-router/issues/215
 *
 * and here we use CommonJS syntax, see:
 * http://www.it165.net/pro/html/201603/62608.html
 * http://webpack.github.io/docs/code-splitting.html#named-chunks
 */
const router = new VueRouter({
    routes: [{
        path: '/',
        redirect: {
            name: 'demo'
        }
    }, {
        path: '/demo',
        name: 'demo',
        component(resolve) {
            require.ensure(['../../views/demo/index.vue'], () => {
                resolve(require('../../views/demo/index.vue'));
            }, 'static/views/demo/index');
        }
    }, {
        path: '/recharge-des',
        name: 'recharge-des',
        component(resolve) {
            require.ensure(['../../views/recharge-des/index.vue'], () => {
                resolve(require('../../views/recharge-des/index.vue'));
            }, 'static/views/recharge-des/index');
        }
    }, {
        path: '/about-us',
        name: 'about-us',
        component(resolve) {
            require.ensure(['../../views/about-us/index.vue'], () => {
                resolve(require('../../views/about-us/index.vue'));
            }, 'static/views/about-us/index');
        }
    }, {
        path: '/apply-refund',
        name: 'apply-refund',
        component(resolve) {
            require.ensure(['../../views/apply-refund/index.vue'], () => {
                resolve(require('../../views/apply-refund/index.vue'));
            }, 'static/views/apply-refund/index');
        }
    }, {
        path: '/fail-reporting',
        name: 'fail-reporting',
        component(resolve) {
            require.ensure(['../../views/fail-reporting/index.vue'], () => {
                resolve(require('../../views/fail-reporting/index.vue'));
            }, 'static/views/fail-reporting/index');
        }
    }, {
        path: '/feedback',
        name: 'feedback',
        component(resolve) {
            require.ensure(['../../views/feedback/index.vue'], () => {
                resolve(require('../../views/feedback/index.vue'));
            }, 'static/views/feedback/index');
        }
    }, {
        path: '/questionnaire',
        name: 'questionnaire',
        component(resolve) {
            require.ensure(['../../views/questionnaire/index.vue'], () => {
                resolve(require('../../views/questionnaire/index.vue'));
            }, 'static/views/questionnaire/index');
        }
    }, {
        path: '/trouble-shooting',
        name: 'trouble-shooting',
        component(resolve) {
            require.ensure(['../../views/trouble-shooting/index.vue'], () => {
                resolve(require('../../views/trouble-shooting/index.vue'));
            }, 'static/views/trouble-shooting/index');
        }
    }]
});

router.beforeEach((to, from, next) => {
    // 系统初始化逻辑
    next();
});

router.afterEach(() => {
    // 切换页面后将屏幕滚动至顶端
    window.scrollTo(0, 0);
});

export default router;
