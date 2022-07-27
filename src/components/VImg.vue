<template>
    <picture>
        <source v-if="!t_src" type="image/webp" :srcset="_2x == null ? `${src}.webp` : `${_2x}.webp 2x, ${src}.webp 1x`" :media="mquery_src" />
        <source v-if="!t_src" :type="src.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg'" :srcset="_2x == null ? src : `${_2x} 2x, ${src} 1x`" :media="mquery_src" />

        <source v-if="src650w" type="image/webp" :srcset="_2x650w == null ? `${src650w}.webp` : `${_2x650w}.webp 2x, ${src650w}.webp 1x`" :media="mquery_650w" />
        <source v-if="src650w" :type="src650w.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg'" :srcset="_2x650w == null ? src650w : `${_2x650w} 2x, ${src650w} 1x`" :media="mquery_650w" />

        <source v-if="src992w" type="image/webp" :srcset="_2x992w == null ? `${src992w}.webp` : `${_2x992w}.webp 2x, ${src992w}.webp 1x`" :media="mquery_992w" />
        <source v-if="src992w" :type="src992w.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg'" :srcset="_2x992w == null ? src992w : `${_2x992w} 2x, ${src992w} 1x`" :media="mquery_992w" />
        
        <source v-if="src1280w" type="image/webp" :srcset="_2x1280w == null ? `${src1280w}.webp` : `${_2x1280w}.webp 2x, ${src1280w}.webp 1x`" :media="mquery_1280w" />
        <source v-if="src1280w" :type="src1280w.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg'" :srcset="_2x1280w == null ? src1280w : `${_2x1280w} 2x, ${src1280w} 1x`" :media="mquery_1280w" />
        
        <source v-if="src1600w" type="image/webp" :srcset="_2x1600w == null ? `${src1600w}.webp` : `${_2x1600w}.webp 2x, ${src1600w}.webp 1x`" :media="mquery_1600w" />
        <source v-if="src1600w" :type="src1600w.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg'" :srcset="_2x1600w == null ? src1600w : `${_2x1600w} 2x, ${src1600w} 1x`" :media="mquery_1600w" />
        
        <img :src="t_src ? t_src : src" :class="m_class" :style="s" v-bind="m_attrs" />
    </picture>
</template>
<script>
    import isWebpSupported from '../../utils/webp-supported';

    export default {
        props: [ 'c', 's', 'src', '_2x', 'thumb', 'src650w', '_2x650w', 'src992w', '_2x992w', 'src1280w', '_2x1280w', 'src1600w', '_2x1600w' ],
        inheritAttrs: false,
        computed: {
            m_class(){
                const r = Object.assign({}, this.classes);
                for(let c of (this.c || '').split(' ')){
                    c = c.trim();
                    if(c.length > 0)
                        r[c] = true;
                }
                return r;
            },
            m_attrs(){
                return Object.assign({}, this.attribs, this.$attrs);
            },
            mquery_src(){
                const mw = (this.src650w ? '649.98' : '') || (this.src992w ? '991.98' : '') || (this.src1280w ? '1279.98' : '') || (this.src1600w ? '1599.98' : '');
                return mw ? `(max-width: ${mw}px)` : '';
            },
            mquery_650w(){
                const mw = (this.src992w ? '991.98' : '') || (this.src1280w ? '1279.98' : '') || (this.src1600w ? '1599.98' : '');
                return '(min-width: 650px)' + (mw ? ` and (max-width: ${mw}px)` : '');
            },
            mquery_992w(){
                const mw = (this.src1280w ? '1279.98' : '') || (this.src1600w ? '1599.98' : '');
                return '(min-width: 992px)' + (mw ? ` and (max-width: ${mw}px)` : '');
            },
            mquery_1280w(){
                const mw = this.src1600w ? '1599.98' : '';
                return '(min-width: 1280px)' + (mw ? ` and (max-width: ${mw}px)` : '');
            },
            mquery_1600w(){
                return '(min-width: 1600px)';
            },
        },
        data(){
            return {
                attribs: {},
                classes: {},
                t_src: null,
            };
        },
        created(){
            if(this.thumb){
                this.t_src = this.thumb;
                this.classes['v-img-loading'] = true;
            }

            // allows parent's scoped css to affect child components
            let ref = this;
            while(ref && ref.$vnode){
                try { const _s = ref.$vnode.context.$options._scopeId; if(_s){this.attribs[_s] = '';} } catch{}
                ref = ref.$parent;
            }
        },
        mounted(){
            this.classes['v-img'] = true;
            this.forceUpdateClasses();

            if(this.thumb && this.src)
                this.lazyLoad();
        },
        methods: {
            forceUpdateClasses(){
                this.classes = JSON.parse(JSON.stringify(this.classes));
            },
            async lazyLoad(){
                if(window.matchMedia('(min-width: 992px)').matches){
                    this.t_src = null;
                    this.classes['v-img-loading'] = false;
                }
                else
                {
                    const webp = await isWebpSupported();
                    const retina = window.matchMedia('(-webkit-min-device-pixel-ratio: 2)').matches;

                    let src = null;
                    if(this._2x && retina)
                        src = this._2x + (webp ? '.webp' : '');
                    else
                        src = this.src + (webp ? '.webp' : '');

                    if(!src)
                        return;

                    const img = new Image();
                    img.onload = () => {
                        this.t_src = img.src;
                        this.classes['v-img-loading'] = false;
                    };
                    img.src = src;
                }
            }
        }
    }
</script>

<style>
    @media (max-width: 991.98px){
        /* .v-img {
            transition: filter .25s;
        } */
        .v-img-loading {
            filter: blur(20px);
        }
    }
</style>