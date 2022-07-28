<template>
     <div id="app">
        <navbar></navbar>
        <router-view/>
    </div>
</template>

<script>
    import Navbar from './components/Navbar';
    export default {
        components: {
            'navbar': Navbar,
        },
    };
</script>

<style>
    @font-face {
        font-family: GlacialIndifference;
        src: /* webpackIgnore: true */ url('/fonts/GlacialIndifference.woff2') format('woff2'),
            /* webpackIgnore: true */ url('/fonts/GlacialIndifference.woff') format('woff'),
            /* webpackIgnore: true */ url('/fonts/GlacialIndifference.ttf') format('truetype');
        font-display: swap;
    }
    @font-face {
        font-family: HammersmithOne;
        src: /* webpackIgnore: true */ url('/fonts/HammersmithOne-Regular.woff2') format('woff2'),
            /* webpackIgnore: true */ url('/fonts/HammersmithOne-Regular.woff') format('woff'),
            /* webpackIgnore: true */ url('/fonts/HammersmithOne-Regular.ttf') format('truetype');
        font-display: swap;
    }

    body {
        font-family: GlacialIndifference, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .btn {
        text-decoration: none!important;
        outline: none!important;
    }
    .btn:not(.btn-link) {
        text-transform: uppercase;
        border-radius: .75rem;
        /* box-shadow: -2px 4px 10px rgba(255, 0, 0, 0.75)!important; */
        outline: none!important;
        padding-top: .75rem;
        padding-bottom: .6rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        line-height: 1;
        font-size: .95rem;
    }
    .btn:active:not(.btn-link) {
        box-shadow: 0px 2px 4px rgba(255, 255, 0, 0.5)!important;
    }

    .btn-f {
        font-family: HammersmithOne, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        text-transform: none!important;
    }

    .btn-primary {
        background-color: #2474ed!important;
        border-color: #2474ed!important;
    }
    .btn-primary:hover {
        background-color: #408bfe!important;
        border-color: #408bfe!important;
    }
    .btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {
        background-color: #003480!important;
        border-color: #003480!important;
    }
    .btn-primary.disabled, .btn-primary:disabled {
        background-color: #555!important;
        border-color: #555!important;
    }

    .btn-link {
        color: #2474ed!important;
        box-shadow: unset!important;
    }
    .btn-link:hover {
        color: #003480!important;
    }
</style>