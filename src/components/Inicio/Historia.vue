<template>
    <div id="historia" class="d-flex flex-column justify-content-center align-items-center w-100">

        <div class="d-flex flex-column">
            <h2 class="mb-2 px-2 w-100">Ararinhas desenvolve</h2>

            <div class="d-flex holder">
                <div class="d-flex flex-column text-1">
                    <p class="px-2 mb-5">
                        A equipe do Ararinhas foi criada para competir no iGEM Design League, onde criou o projeto K-Herc, o qual pesquisa formas de manipular molecularmente a Salmonella para combater o glioblastoma.
                        <br><br>
                        O K-Herc foi o primeiro projeto de pesquisa desenvolvido pela equipe e foi utilizado no ano de 2021 no iGEM da América Latina. 
                        <br><br>
                        No ano de 2022 a equipe mantém a linha de pesquisa e aperfeiçoa os resultados obtidos <i>in silico</i> e inicia os testes <i>in vitro</i>.
                    </p>
                </div>

                <div class="d-flex flex-column text-2">
                    <h3 class="mb-2 px-2 w-100">K-Herc</h3>
                    <p class="px-2 mb-5">
                        O projeto trabalha com métodos de modificar geneticamente as funções da <i>Salmonella sp.</i>, para que ela possa injetar <b>caspase-3</b> no tumor, fazendo com que ele entre em apoptose. Para isso, a equipe utiliza métodos de predição em bioinformática e outras informações na literatura visando avançar para experimentos <i>in vitro</i>.
                    </p>
                </div>

                <div class="d-flex flex-column">
                    <h3 class="d-none">iGEM Design League</h3>

                    <v-img width="224" height="109" alt="iGEM Design League" draggable="false"
                            src="@/assets/images/igem-dl.png" class="x-img mb-4 pr-3" />

                    <p class="px-2 text-igem">
                        O International Genetically Engineered Machine - iGEM é a <span class="highlight">maior competição de biologia sintética do mundo</span> e é organizada anualmente pela iGEM Foundation.
                        <br><br>
                        Nela, equipes formadas por estudantes de ensino médio, graduação ou pós graduação <b>apresentam seus projetos de biologia sintética</b>, em um ambiente muito intenso de troca acadêmica, competitividade saudável e de divulgação científica.
                    </p>
                </div>
            </div>

        </div>
    </div>
</template>

<style>
    #historia {
        padding-top: 3rem;
    }
    @media (min-width: 992px) {
        #historia {
            padding-top: 5rem;
        }
    }
</style>

<style scoped>
    h2 {
        text-transform: uppercase;
        font-size: 1.85rem;
        margin-bottom: -.4rem;
        line-height: 1;
        max-width: 20.5rem;
    }
    h3 {
        font-size: 1.55rem;
        margin-bottom: -.7rem;
        max-width: 20.5rem;
    }
    p {
        max-width: 20.5rem;
    }
    b {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 90%;
    }
    .highlight {
        background: #FFEF5B;
    }
    .holder {
        flex-direction: column;
    }
    .x-img {
        margin-left: auto;
        margin-right: auto;
    }
    @media (min-width: 992px) {
        .holder {
            flex-direction: row;
            background: #efefef;
            padding: 2rem;
        }
        .text-1, .text-2 {
            margin-right: 1rem;
        }
        h2 {
            max-width: 100%;
            text-align: center;
        }
        .x-img {
            margin-left: 0;
        }
    }

    @media (min-width: 1085px) {
        .holder {
            border-radius: 1.31rem;
        }
    }
</style>