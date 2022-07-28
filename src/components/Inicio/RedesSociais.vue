<template>
    <div id="redes-sociais" class="d-flex flex-column justify-content-center align-items-center w-100">
        <div class="d-flex flex-column justify-content-center align-items-center holder">
            <h2 class="mb-2 px-2 w-100">Nas redes</h2>
            <p class="px-2 mb-4">
                Para além da pesquisa, a equipe assume o papel social de levar educação científica à comunidade acadêmica e à população, trabalhando com divulgação científica, diversidade e inclusão. Assim, transporta ciência do laboratório para as mídias sociais e para o ano de 2022 projeta eventos acadêmicos e escolares, a fim de unir ensino, extensão e pesquisa.
            </p>

            <div class="d-flex flex-column posts">
                <div class="d-flex mb-1">
                    <a href="https://www.instagram.com/p/CSnG4yRAmtA/" target="_blank" rel="noopener" class="mr-1">
                        <v-img width="150" height="150" alt="K-Herc: bactérias para o bem" draggable="false" c="x-img-1"
                            src="@/assets/images/post1.jpg"
                            class="x-img-1-w"
                            />
                    </a>
                    <a href="https://www.instagram.com/p/CdmGBcurCzr/" target="_blank" rel="noopener">
                        <v-img width="150" height="150" alt="O que é biologia molecular / sintética? Conheça um pouco sobre a área da biologia que trabalhamos!" draggable="false" c="x-img-1"
                            src="@/assets/images/post2.jpg"
                            class="x-img-1-w"
                            />
                    </a>
                </div>
                
                <a href="https://www.instagram.com/p/Cd4NY9qLlrY/" target="_blank" rel="noopener">
                    <v-img width="304" height="304" alt="Conhecendo os desafios da biologia sintética: um pouco sobre como apresentamos a biologia sintética" draggable="false" c="x-img-2"
                        src="@/assets/images/post3.jpg"
                        class="x-img-2-w"
                        />
                </a>
            </div>
        </div>
    </div>
</template>

<style>
    #redes-sociais {
        padding-top: 3rem;
    }
    @media (min-width: 992px) {
        #redes-sociais {
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
    }
    .holder {
        max-width: 37rem;
    }
    .x-img-1-w, .x-img-2-w {
        position: static;
    }
    .x-img-1-w {
        width: 50%;
        height: 50%;
    }
    .x-img-1, .x-img-2 {
        width: 100%;
        height: auto;
    }
    a {
        width: 100%;
    }
    @media (min-width: 37rem) {
        p {
            font-size: 1.1rem;
        }
        .posts {
            padding-left: .5rem;
            padding-right: .5rem;
        }
    }
</style>