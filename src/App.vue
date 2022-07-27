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

    body.loading::after {
        opacity: 0!important;
    }
    
    .btn {
        text-decoration: none!important;
        outline: none!important;
    }
    .btn:not(.btn-link) {
        text-transform: uppercase;
        border-radius: .75rem;
        box-shadow: -2px 4px 10px rgba(255, 0, 0, 0.75)!important;
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

    .btn-primary {
        background-color: #f00!important;
        border-color: #f00!important;
    }
    .btn-primary:hover {
        background-color: #c00!important;
        border-color: #c00!important;
    }
    .btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {
        background-color: #900!important;
        border-color: #900!important;
    }
    .btn-primary.disabled, .btn-primary:disabled {
        background-color: #555!important;
        border-color: #555!important;
    }

    .btn-link {
        color: #f00!important;
        box-shadow: unset!important;
    }
    .btn-link:hover {
        color: #c00!important;
    }
</style>