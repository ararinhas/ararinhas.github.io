<template>
    <div id="ano-2022" class="d-flex flex-column justify-content-center align-items-center w-100">
        <h2 class="px-2 w-100 text-center">Ararinhas em 2022</h2>
        
        <div class="d-flex flex-column">
            <div class="holder">
                <div class="d-flex align-items-center">
                    <v-img width="64" height="64" alt="" draggable="false"
                        src="@/assets/images/2022_1.png"
                        _2x="@/assets/images/2022_1@2x.png" />
                    <div class="mbox">
                        <span>Novas modelagens com dinâmica molecular e docking</span>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <v-img width="64" height="64" alt="" draggable="false"
                        src="@/assets/images/2022_2.png"
                        _2x="@/assets/images/2022_2@2x.png" />
                    <div class="mbox">
                        <span>Montagem e preparação para testes <i>in vitro</i></span>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <v-img width="64" height="64" alt="" draggable="false"
                        src="@/assets/images/2022_3.png"
                        _2x="@/assets/images/2022_3@2x.png" />
                    <div class="mbox">
                        <span>Busca por financiamento para despesas do iGEM e do projeto</span>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <v-img width="64" height="64" alt="" draggable="false"
                        src="@/assets/images/2022_4.png"
                        _2x="@/assets/images/2022_4@2x.png" />
                    <div class="mbox">
                        <span>Montagem de novos genomas cromossômicos e plasmidiais</span>
                    </div>
                </div>
                <div class="d-flex align-items-center" v-if="show_all">
                    <v-img width="64" height="64" alt="" draggable="false"
                        src="@/assets/images/2022_5.png"
                        _2x="@/assets/images/2022_5@2x.png" />
                    <div class="mbox">
                        <span>Pesquisa e validação na literatura dos métodos utilizados</span>
                    </div>
                </div>
                <div class="d-flex align-items-center" v-if="show_all">
                    <v-img width="64" height="64" alt="" draggable="false"
                        src="@/assets/images/2022_6.png"
                        _2x="@/assets/images/2022_6@2x.png" />
                    <div class="mbox">
                        <span>Busca por parcerias em ligas para estimular inclusão</span>
                    </div>
                </div>
                <div class="d-flex align-items-center" v-if="show_all">
                    <v-img width="64" height="64" alt="" draggable="false"
                        src="@/assets/images/2022_7.png"
                        _2x="@/assets/images/2022_7@2x.png" />
                    <div class="mbox">
                        <span>Abordagem sobre biologia sintética nas escolas</span>
                    </div>
                </div>
                <div class="d-flex align-items-center" v-if="show_all">
                    <v-img width="64" height="64" alt="" draggable="false"
                        src="@/assets/images/2022_8.png"
                        _2x="@/assets/images/2022_8@2x.png" />
                    <div class="mbox">
                        <span>Organização de eventos científicos universitários</span>
                    </div>
                </div>
            </div>

            <div class="btn btn-outline-primary" @click="show_all = !show_all">
                <span v-if="!show_all">Ver mais</span>
                <span v-else>Ver menos</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            show_all: false,
        };
    }
}
</script>

<style>
    #ano-2022 {
        padding-top: 2rem;
        background: #000;
        color: #fff;
    }
    @media (min-width: 992px) {
        #ano-2022 {
            padding-top: 5rem;
        }
    }
</style>

<style scoped>
    h2 {
        /* text-transform: uppercase; */
        font-size: 1.85rem;
        line-height: 1;
        max-width: 20.5rem;
        margin-bottom: 1rem;
    }
    .mbox {
        border-radius: 1.31rem;
        border: 1px #fff solid;
        width: 12rem;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: .5rem;
        font-size: 1.1rem;
    }
    .btn {
        min-width: 100%;
    }
    .holder {
        display: grid;
        grid-template-columns: 100%;
        row-gap: .5rem;
        margin-bottom: .5rem;
    }
    @media (min-width: 992px) {
        .mbox {
            width: 12rem;
            height: 8rem;
        }
        .holder {
            grid-template-columns: calc(50% - .5rem) calc(50% - .5rem);
            row-gap: 1rem;
            column-gap: 1rem;
            margin-bottom: 1rem;
        }
    }
</style>