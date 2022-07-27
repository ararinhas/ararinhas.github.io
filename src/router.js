import Vue from 'vue';
// import Router from 'vue-router';
import Router from '../utils/routershim';

import Inicio from './views/Inicio.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            id: 'inicio',
            name: 'Início',
            path: '/',
            parent: null,
            navbar: true,
            component: Inicio,
        },
        {
            id: 'glioblastoma',
            name: 'Glioblastoma',
            path: '/glioblastoma',
            parent: null,
            navbar: true,
            component: null,
        },
        {
            id: 'contato',
            name: 'Contato',
            path: '/contato',
            parent: null,
            navbar: true,
            component: null,
        },
        {
            id: 'historia',
            name: 'História',
            path: '/historia',
            parent: null,
            navbar: true,
            component: null,
        },
        {
            id: 'linha-do-tempo',
            name: 'Linha do tempo',
            path: '/linha-do-tempo',
            parent: null,
            navbar: true,
            component: null,
        },
        {
            id: 'redes-sociais',
            name: 'Redes sociais',
            path: '/redes-sociais',
            parent: null,
            navbar: true,
            component: null,
        },
        {
            id: 'apoie',
            name: 'Apoie',
            path: '/apoie',
            parent: null,
            navbar: true,
            component: null,
        },
        {
            id: 'entre-para-o-time',
            name: 'Entre para o time',
            path: '/entre-para-o-time',
            parent: null,
            navbar: true,
            component: null,
        },
    ]
})
