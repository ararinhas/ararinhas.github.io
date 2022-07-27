<template>
    <div id="contato" class="d-flex flex-column justify-content-center align-items-center w-100">
        <h2 class="mb-1">Contato</h2>
        <div class="mbox mb-2">
            <div class="d-flex x-item" v-for="c in contatos" :key="c.text">
                <icon class="x-icon" :name="c.icon" />
                <div class="d-flex flex-column">
                    
                    <p class="mb-0 x-text"><a :href="c.href" target="_blank">{{ c.text }}</a></p>
                    <p class="mb-0 x-hint text-muted" v-if="c.hint">{{ c.hint }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from '../Icon.vue';
export default {
    components: {
        'icon': Icon,
    },
    data(){
        return {
            contatos: [
                { icon: 'envelope', text: 'ararinhasuff@gmail.com', href: 'mailto:ararinhasuff@gmail.com', hint: null },
                { icon: 'phone', text: '(21) 97430-1018', href: 'https://api.whatsapp.com/send/?phone=5521974301018', hint: 'Louíse Castro, Líder' },
                { icon: 'phone', text: '(21) 2629-2291', href: 'tel:2126292291', hint: 'Luiz Mors, Orientador' },
            ]
        };
    }
}
</script>

<style>
    #contato {
        padding-top: 2.1rem;
    }
    @media (min-width: 992px) {
        #contato {
            padding-top: 4rem;
        }
    }
</style>

<style scoped>
    h2 {
        text-transform: uppercase;
        font-size: 1.85rem;
        margin-bottom: -.4rem;
    }
    .mbox {
        background: #eee;
        border-radius: 1.31rem;
        padding: 1rem;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
    }
    .x-item {
        margin-bottom: 1rem;
    }
    .x-item:last-child {
        margin-bottom: 0;
    }
    .x-icon {
        font-size: 1.4rem;
        margin-right: .75rem;
    }
    .x-text {
        font-size: 1.4rem;
    }
    .x-text a {
        text-decoration: none!important;
        color:inherit!important;
    }
    .x-hint {
        margin-top: -.25rem;
        font-size: 1rem;
    }
</style>