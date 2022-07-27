const _options = { routes: [] };

export default class Router {
    static install(Vue, options){
        Vue.prototype.$router = { options: _options };

        Vue.component('router-view', {
            render: function (createElement){
                return createElement(_options.routes.find(x => x.path === '/' && !!x.component).component);
            }
        });
    }

    constructor(options){
        Object.assign(_options, options);
    }
}