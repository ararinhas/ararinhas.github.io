<template>
    <div id="apoie" class="d-flex flex-column justify-content-center align-items-center w-100 pb-2">
        <div class="d-flex flex-column justify-content-center align-items-center holder">
            <h2 class="mb-2 px-2 w-100">Apoie a gente</h2>
            <p class="px-2 mb-4">
                Divulgação e agradecimento nos posts e reuniões serão feitas para <b>todos os níveis de patrocínio</b>.
            </p>

            <div class="d-flex align-items-center item-holder">
                <div class="mcircle mc-1">
                    <h4>Incentivo<br>científico</h4>
                    <span class="valor">R$ 500</span>
                </div>

                <span class="ml-auto mr-3">
                    <img src="@/assets/images/apoie-1.svg" width="95" height="84" alt="" />
                </span>
            </div>

            <div class="d-flex flex-reverse-row align-items-center item-holder">
                <div class="mcircle mc-2">
                    <h4>Nível<br><b>Bronze</b></h4>
                    <span class="valor">R$ 1000</span>
                </div>

                <span class="mr-auto ml-4">
                    <img src="@/assets/images/apoie-2.svg" width="80" height="80" alt="" />
                </span>
            </div>

            <div class="mbox p-2 mb-4">
                <span>+ logo estampada em tamanho pequeno no uniforme da equipe</span>
            </div>

            <div class="d-flex align-items-center item-holder">
                <div class="mcircle mc-3">
                    <h4>Nível<br><b>Prata</b></h4>
                    <span class="valor">R$ 2000</span>
                </div>

                <span class="ml-auto mr-4 pr-2">
                    <img src="@/assets/images/apoie-3.svg" width="64" height="86" alt="" />
                </span>
            </div>

            <div class="mbox p-2">
                <span>+ nome da empresa na nossa wiki</span><br>
                <span>+ benefícios anteriores</span>
            </div>

            <div class="d-flex flex-reverse-row align-items-center item-holder">
                <div class="mcircle mc-4">
                    <h4>Nível<br><b>Ouro</b></h4>
                    <span class="valor">R$ 3000</span>
                </div>

                <span class="mr-auto ml-4">
                    <img src="@/assets/images/apoie-4.svg" width="79" height="64" alt="" />
                </span>
            </div>

            <div class="mbox p-2">
                <span>+ logo com destaque na nossa wiki</span><br>
                <span>+ logo estampada em tamanho médio no uniforme da equipe</span>
            </div>

            <a href="https://api.whatsapp.com/send/?phone=5521974301018" target="_blank" class="px-2 d-flex w-100 mt-4">
                <div class="btn btn-f btn-primary w-100">Apoie agora</div>
            </a>
        </div>
    </div>
</template>

<style>
    #apoie {
        padding-top: 3rem;
    }
    @media (min-width: 992px) {
        #apoie {
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
        max-width: 20rem;
    }
    h4, b {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    b {
        font-weight: 700;
        font-size: 90%;
    }
    .item-holder {
        position: relative;
        height: 15rem;
        width: 100%;
    }
    .mcircle b {
        font-size: 125%;
    }
    .mcircle {
        width: 15rem;
        height: 15rem;
        border-radius: 100%;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .mcircle .valor {
        font-family: HammersmithOne, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 2.5rem;
    }
    h4 {
        text-transform: uppercase;
        line-height: 1.1;
        font-size: 1.35rem;
        font-weight: 400;
    }
    .mbox {
        background: rgba(255, 255, 255, 0.5);
        margin-top: -3rem;
        position: relative;
        width: 100%;
    }
    .mc-1 {
        left: -3rem;
        background: rgba(255, 187, 208, 0.08);
        border: .25rem dashed #FFBBD0;
        align-items: flex-start;
        text-align: left;
        padding-left: 4rem;
    }
    .mc-2 {
        right: -3rem;
        background: rgba(255, 202, 164, 0.2);
        border: 4px dashed #FFCAA4;
        align-items: flex-end;
        text-align: right;
        padding-right: 4rem;
    }
    .mc-3 {
        left: -3rem;
        background: rgba(216, 216, 216, 0.32);
        border: 4px dashed #D7D7D7;
        align-items: flex-start;
        text-align: left;
        padding-left: 4rem;
    }
    .mc-3 .valor {
        font-size: 2.2rem;
    }
    .mc-4 {
        right: -3rem;
        background: rgba(255, 228, 176, 0.43);
        border: 4px dashed #FFD481;
        align-items: flex-end;
        text-align: right;
        padding-right: 4rem;
    }
    .mc-4 .valor {
        font-size: 2.3rem;
    }
    .btn {
        font-size: 1.1rem;
    }
    a {
        text-decoration: none!important;
        color: inherit!important;
    }
    @media (min-width: 992px) {
        h2 {
            font-size: 2.3rem;
            margin-bottom: -.4rem;
        }
        p {
            font-size: 1.2rem;
        }
        .holder {
            max-width: 23rem;
        }
    }
</style>