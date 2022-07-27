<template>
    <div class="navbar-holder">
        <div class="x-navbar" :class="{ 'x-navbar-collapsed': !visible }">

            <div class="d-flex w-100 align-items-center">
                <div class="d-flex flex-grow-1 justify-content-center d-lg-none">
                    <div class="x-nav-item-always" v-for="page in pages_always" :key="page.pos" @click="gotoPage(page)">{{ page.name }}</div>
                </div>
                <div class="d-lg-none x-nav-toggle pr-2 py-2 ml-auto" @click="visible = true">
                    <icon name="bars" class="icon" />
                </div>
            </div>

            <div class="x-nav-drawer">
                <div class="d-lg-none x-nav-toggle px-2 py-2" @click="visible = false">
                    <icon name="times" class="icon" />
                </div>

                <div class="x-navbar-nav">
                    <div class="x-nav-item" v-for="page in pages" :key="page.pos" @click="gotoPage(page)">{{ page.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    const VueScrollTo = require('vue-scrollto');
    import Icon from './Icon.vue';

    export default {
        components: {
            'icon': Icon,
        },
        data(){
            return {
                pages: [],
                visible: false,
            }
        },
        computed: {
            pages_always(){
                return this.pages.filter(x => x.always_show);
            }
        },
        mounted(){
            let i = 0;
            this.pages = this.$router.options.routes.filter(x => x.navbar).map(x => {
                x.pos = i++;
                return x;
            });
        },
        methods: {
            gotoPage(page){
                this.visible = false;
                if(page.path && page.path.startsWith('http://') || page.path.startsWith('https://'))
                    location.href = page.path;
                else
                    VueScrollTo.scrollTo(document.getElementById(page.id));
            },
        }
    }
</script>
<style scoped>
    .icon {
        font-size: 1.5rem;
    }

    .navbar-holder {
        min-width: 100%;
        min-height: 42px;
        position: fixed;
        top: 0;
        z-index: 1000;
        background: #FFF;
    }

    .x-nav-toggle {
        outline: none!important;
        cursor: pointer;
        text-align: right;
    }

    @media (min-width: 992px) {
        .navbar-holder {
            display: flex;
            justify-content: center;
            min-height: 70px;
        }
    }
</style>

<style>
    .x-navbar, .x-navbar * {
        user-select: none;
    }

    .x-navbar {
        position: absolute;
        min-width: 100%;
        top: 0;
    }
    
    .x-navbar-nav {
        width: 100%;
        padding-top: 1rem;
        padding-bottom: 0.75rem;
        padding-left: 2rem;
        display: flex;
        flex-direction: column;
    }

    .x-nav-item {
        color: #000;
        text-align: left;
        font-size: 1.75rem;
        padding: 0.5rem;
        font-weight: 600;
        cursor: pointer;
    }

    .x-nav-item-always {
        color: #000;
        text-align: left;
        font-size: .875rem;
        padding: 0.3rem;
        font-weight: 600;
        text-transform: uppercase;
        cursor: pointer;
    }

    .x-nav-drawer {
        background: #FFF;
        position: absolute;
        top: 0;
        width: 100%;
        max-width: 100%;
        min-height: 100vh;
        transition: transform 0.25s;
        transform: translateX(0);
    }

    .x-navbar-collapsed .x-nav-drawer {
        transform: translateX(100%);
        box-shadow: unset;
    }

    @media (min-width: 992px) {    
        .x-navbar-collapsed .x-nav-drawer {
            transform: unset;
        }

        .x-nav-drawer {
            background: transparent;
            position: absolute;
            top: 0;
            width: 100%;
            min-height: unset;
            transition: unset;
        }
            
        .x-navbar-nav {
            padding-top: 1rem;
            padding-bottom: 1rem;
            padding-left: 0;
            flex-direction: row;
            justify-content: center;
        }

        .x-navbar {
            min-width: auto;
            width: 100%;
            max-width: 70rem;
        }

        .x-nav-item {
            text-align: center;
            padding: 0;
            padding-left: 0.8rem;
            padding-right: 0.8rem;
            margin-left: 0;
            margin-right: 0;
            position: relative;
            font-size: 1.25rem;
        }

        .x-nav-item:hover::after {
            position: absolute;
            left: 0;
            width: calc(100% - .5rem);
            height: 100%;
            border-bottom: #000 2px solid;
            margin-left: .25rem;
            content: "";
        }
    }
</style>