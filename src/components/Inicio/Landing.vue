<template>
    <div id="inicio" class="d-flex flex-column justify-content-center align-items-center w-100">
        <v-img width="275" height="275" alt="Logo" draggable="false"
                src="@/assets/images/logo.png"
                _2x="@/assets/images/logo@2x.png" :nowebp="true" />
        <h1 class="mb-0 mt-1">Ararinhas UFF</h1>
        <p class="text-center mb-0" style="max-width: 15rem">1° equipe de Biologia Sintética da Universidade Federal Fluminense</p>
    </div>
</template>

<style>
    #inicio {
        min-height: 100vh;
        min-height: calc(var(--vh, 1vh) * 100);
    }
</style>

<style scoped>
    h1 {
        text-transform: uppercase;
        font-size: 1.6rem;
        margin-top: -1rem;
        font-weight: 400;
        font-family: HammersmithOne, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
</style>