<template>
    <div id="linha-do-tempo" class="d-flex flex-column justify-content-center align-items-center w-100">
        <h2 class="px-2 w-100 text-center">Linha do tempo</h2>

        <v-img width="320" height="355" alt="Linha do tempo Ararinhas" draggable="false" c="x-img" :nowebp="true"
            src="@/assets/images/timeline_650w.png"
            _2x="@/assets/images/timeline_650w@2x.png"
            src650w="@/assets/images/timeline_992w.png"
            _2x650w="@/assets/images/timeline_992w@2x.png"
            />
    </div>
</template>

<style>
    #linha-do-tempo {
        margin-top: 1rem;
        padding-top: 2rem;
        background: #000;
        color: #fff;
    }
    @media (min-width: 992px) {
        #linha-do-tempo {
            padding-top: 5rem;
        }
    }
</style>

<style scoped>
    h2 {
        text-transform: uppercase;
        font-size: 1.85rem;
        line-height: 1;
        max-width: 20.5rem;
        margin-bottom: 1.5rem;
    }
    .x-img {
        width: calc(100vw - 1rem);
        height: auto;
    }
    @media (min-width: 992px) {
        .x-img {
            width: 62rem;
            height: 68.75rem;
        }
        h2 {
            text-transform: uppercase;
            font-size: 2.5rem;
            margin-bottom: 2rem;
        }
    }
</style>