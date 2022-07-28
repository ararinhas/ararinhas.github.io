<template>
    <div id="entre-para-o-time" class="d-flex flex-column justify-content-center align-items-center w-100">
        <div class="d-flex flex-column holder px-2">
            <h2>Entre para o time</h2>
            <div class="item-holder-w d-flex flex-column align-items-center">
                <div class="item-holder">
                    <div class="item">
                        <h3>LABS</h3>
                        <p class="mb-0">laboratórios</p>
                    </div>
                    <div class="item">
                        <h3>DESIGN</h3>
                        <p class="mb-0">graphic design</p>
                    </div>
                    <div class="item">
                        <h3>HP</h3>
                        <p class="mb-0">human practices</p>
                    </div>
                </div>
            </div>
            <p class="x-text">
                O Ararinhas se divide em 3 áreas de trabalho:
                <br><br>
                No Laboratório, a equipe utiliza os conhecimentos em técnicas em biologia molecular para trabalhar com a bactéria, o tumor e as células do Sistema Nervoso. Trabalhando no <i>background</i> e na parte prática, ainda no laboratório, há o trabalho com biologia computacional, modelando e dando base à pesquisa <i>in vivo</i>.
                <br><br>
                Na área de Design, a equipe trabalha em conjunto com as outras duas, utilizando técnicas de ilustração para comunicar a ciência, de modo acessível para todos os públicos, assim como auxiliar na construção de painéis, de posters, e do site do projeto.
                <br><br>
                Por fim, na área de Human Practices, a equipe se ramifica em diferentes linhas: empresarial, lidando com marketing e arrecadação de fundos; divulgação científica, atuando na construção de eventos educativos e científicos; e postagens nas redes sociais e inclusão, formando parcerias com outros projetos e estimulando a difusão da LIBRAS pelo nosso.
            </p>
        </div>
    </div>
</template>

<style>
    #entre-para-o-time {
        padding-top: 2.5rem;
    }
    @media (min-width: 992px) {
        #entre-para-o-time {
            padding-top: 4rem;
        }
    }
</style>

<style scoped>
    h2 {
        text-transform: uppercase;
        font-size: 1.85rem;
        margin-bottom: -.2rem;
        text-align: center;
    }
    h3 {
        font-size: 2.5rem;
        margin-bottom: -1rem;
    }
    .holder {
        max-width: 28rem;
    }
    .item {
        position: relative;
    }
    .item::before {
        position: absolute;
        z-index: -1;
        border-radius: 100%;
        background: #eee;
        margin: auto;
        width: 4rem;
        height: 4rem;
        content: ' ';
        display: flex;
    }
    .item-holder {
        display: grid;
        grid-template-columns: 100%;
        row-gap: 1rem;
    }
    .item-holder-w {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
    }
    @media (min-width: 992px) {
        h2 {
            font-size: 2.5rem;
            margin-bottom: -.5rem;
        }
        .holder {
            max-width: 36rem;
        }
        .item {
            margin: auto;
        }
        .item-holder {
            grid-template-columns: auto auto auto;
            column-gap: 1rem;
            width: 100%;
        }
        .item-holder-w {
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
        }
        .x-text {
            font-size: 1.1rem;
        }
    }
</style>