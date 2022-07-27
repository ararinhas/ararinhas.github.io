<template>
    <div id="glioblastoma" class="d-flex justify-content-center align-items-center w-100">
        <div class="d-flex justify-content-center align-items-center holder-1">
            <v-img width="110" height="110" c="img-1" alt="Glioblastoma" draggable="false"
                src="@/assets/images/glioblastoma.png" />
            <div class="d-flex flex-column pl-2">
                <h3 class="mb-0">Ararinhas UFF</h3>
                <p class="mb-0">Somos uma equipe de Biologia Sintética que desenvolve um projeto de um biofármaco para o tratamento de glioblastoma.</p>
            </div>
        </div>

        <div class="mbox-holder">
            <div class="d-flex flex-column mbox mr-auto mt-5 mb-5">
                <div class="header p-3 px-5 m-3 mr-4">
                    <h2>Glioblastoma</h2>
                </div>
                <p class="pl-5 ml-4 pr-4 mb-0 pb-4">
                    Glioblastoma é um tipo de tumor formado pelo crescimento exagerado das células na região do cérebro, gerando um tumor maligno.
                </p>
            </div>
        </div>
    </div>
</template>

<style>
    #glioblastoma {
        flex-direction: column;
    }
    @media (min-width: 992px) {
        #glioblastoma {
            flex-direction: row-reverse;
            padding-right: 1rem;
        }
    }
</style>

<style scoped>
    .holder-1 {
        width: 100%;
    }
    h2,h3 {
        text-transform: uppercase;
        font-size: 1.2rem;
        font-weight: 400;
        font-family: HammersmithOne, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    h2 {
        font-size: 1.85rem;
        margin-bottom: -.4rem;
    }
    p {
        font-size: .9rem;
        max-width: 12.5rem;
    }
    .mbox {
        transform:rotate(15deg);
        margin-left: -2.85rem;
        position: relative;
        background: #eee;
    }
    .mbox .header {
        background: #D9D9D9;
    }
    .mbox p{
        font-size: 1rem;
        max-width: 36rem;
    }
    .mbox-holder{
        margin-right: auto;
    }
    @media (min-width: 992px) {
        .holder-1 {
            width: auto;
        }
        .mbox-holder{
            overflow: hidden;
            padding-top: 1.5rem;
            padding-right: 1rem;
            padding-bottom: 2rem;
            margin-right: 0;
            margin-right: 3rem;
            margin-top: -1.5rem;
        }
        h3 {
            font-size: 1.5rem;
        }
        p {
            font-size: 1.25rem;
            min-width: 17rem;
            max-width: 17rem;
        }
        .img-1 {
            width: 160px;
            height: 160px;
        }
    }
</style>