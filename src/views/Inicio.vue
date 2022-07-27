<template>
    <div class="template d-flex flex-column align-items-center">
        <landing />
        <glioblastoma />
    </div>
</template>

<script>
    import Landing from '../components/Inicio/Landing';
    import Glioblastoma from '../components/Inicio/Glioblastoma';

    export default {
        components: {
            'landing': Landing,
            'glioblastoma': Glioblastoma,
        },
    }
</script>

<style scoped>
    .template {
        min-width: 100%;
        max-width: 100%;
        min-height: calc(100vh - 42px);
        /* margin-top: 42px!important; */
        overflow: hidden;
    }
    @media (min-width: 992px) {
        .template {
            min-height: calc(100vh - 70px);
            /* margin-top: 70px!important; */
        }
    }
</style>

<style>
    #inicio {
        padding-top: 42px!important;
    }
    @media (min-width: 992px) {
        #inicio {
            padding-top: 70px!important;
        }
    }
</style>