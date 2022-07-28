<template>
    <div id="pesquisador" class="d-flex flex-column justify-content-center align-items-center w-100">
        <div class="d-flex flex-column holder">
            <h2 class="mb-1">Pesquisador?</h2>
            <div class="mbox-1">
                Contribua conosco<br>
                <b>Seja um mentor</b>
            </div>

            <div class="mbox-2">
                Como uma equipe formada por alunos, necessitamos de mentores que possam nos guiar por diferentes caminhos. Nossa equipe, atualmente, possui pesquisadores que colaboram nesse aspecto em diferentes instituições do país. Um mentor auxilia os alunos a tomarem decisões, a pegarem atalhos e a direcionarem o projeto assertivamente com reuniões esporádicas. Os mentores podem estar associados a diferentes linhas de pesquisa, desde que estejam de acordo com o necessário para o projeto (as diferentes frentes de atuação da equipe).
            </div>
        </div>
    </div>
</template>

<style>
    #pesquisador {
        padding-top: 2.1rem;
    }
    @media (min-width: 992px) {
        #pesquisador {
            padding-top: 4rem;
        }
    }
</style>

<style scoped>
    h2 {
        text-transform: uppercase;
        font-size: 1.95rem;
        margin-bottom: -.4rem;
        padding-left: 1rem;
    }
    .holder {
        max-width: 25rem;
        position: relative;
    }
    .mbox-1 {
        position: relative;
        left: -1.5rem;
        background: #eee;
        font-size: 1.65rem;
        line-height: 1.1;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 200;
        padding: 2.5rem;
        padding-top: .35rem;
        padding-bottom: .35rem;
    }
    .mbox-2 {
        margin: .25rem;
        margin-top: 1rem;
        padding: 1rem;
        border: 1px dashed #C1C1C1;
        border-radius: 20px;
        font-size: .95rem;
    }
    @media (min-width: 375px) {
        .mbox-2 {
            font-size: 1rem;
        }
    }
    @media (min-width: 992px) {
        .holder {
            max-width: 28rem;
        }
        .mbox-2 {
            font-size: 1.1rem;
        }
    }
</style>