<template>
    <div class="template d-flex flex-column align-items-center">
        <landing />
        <glioblastoma />
        <contato />
        <historia />
        <linha-do-tempo />
        <ano-2022 />
        <redes-sociais />
        <apoie />
        <pesquisador />
        <entre-para-o-time />
    </div>
</template>

<script>
    import Landing from '../components/Inicio/Landing';
    import Glioblastoma from '../components/Inicio/Glioblastoma';
    import Contato from '../components/Inicio/Contato';
    import Historia from '../components/Inicio/Historia';
    import LinhaDoTempo from '../components/Inicio/LinhaDoTempo';
    import Ano2022 from '../components/Inicio/Ano2022';
    import RedesSociais from '../components/Inicio/RedesSociais';
    import Apoie from '../components/Inicio/Apoie';
    import Pesquisador from '../components/Inicio/Pesquisador';
    import EntreProTime from '../components/Inicio/EntreProTime';

    export default {
        components: {
            'landing': Landing,
            'glioblastoma': Glioblastoma,
            'contato': Contato,
            'historia': Historia,
            'linha-do-tempo': LinhaDoTempo,
            'ano-2022': Ano2022,
            'redes-sociais': RedesSociais,
            'apoie': Apoie,
            'pesquisador': Pesquisador,
            'entre-para-o-time': EntreProTime,
        },
    }
</script>

<style scoped>
    .template {
        min-width: 100%;
        max-width: 100%;
        min-height: calc(100vh - 50px);
        overflow: hidden;
    }
    @media (min-width: 992px) {
        .template {
            min-height: calc(100vh - 70px);
        }
    }
</style>

<style>
    #inicio {
        padding-top: 50px!important;
    }
    @media (min-width: 992px) {
        #inicio {
            padding-top: 70px!important;
        }
    }
    h2,h3 {
        font-weight: 400;
        font-family: HammersmithOne, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
</style>