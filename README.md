# Homepage do Ararinhas

O projeto foi desenvolvido em Vue 2. É um site estático hospedado aqui mesmo no GitHub pages. O código-fonte fica na branch `src` e na branch `main` fica o site buildado.


## Para desenvolver:

- Troque para a branch `src`.
- Após isso execute `npm install` para instalar os pacotes necessários (Node.js 16 ou superior é  necessário)
- Por fim, execute `npm run serve` para iniciar o dev server com hot reload. A página estará acessível
em [http://localhost:8080](http://localhost:8080).


## Para buildar para produção:

- Na branch `src` execute `npm run build`
- O projeto será buildado e o resultado ficará na pasta `dist`
- Mova a pasta `dist` para fora da pasta do repositório
- Troque para a branch `main`
- Delete todos os arquivos dentro da pasta do repositório exceto este `README.md`
- Mova todos os arquivos da pasta `dist` para a raiz do repositório
- Se tudo estiver certo terá um arquivo `index.html` na raiz do repositório, se não tiver você fez algo de errado
- Commite o resultado e dê `push`

Após alguns minutos o site estará atualizado no ar.


## Tecnologias

- [Node.js 16+](https://nodejs.org/)
- [Vue.js 2](https://v2.vuejs.org/)
- [Bootstrap 4](https://getbootstrap.com/docs/4.6/)
- [bootstrap-vue](https://bootstrap-vue.org/)
- [fontello](https://fontello.com/)
- [faviconit](http://faviconit.com/)
- [transfonter](https://transfonter.org/)
- [vue-scrollto](https://www.npmjs.com/package/vue-scrollto)


## Windows

Para o desenvolvimento do projeto foi utilizado o macOS 12.4. Com certeza funciona em distros Linux atualizadas, dado que estas também são POSIX. Entretanto, não foi testado no Windows. Caso precise utilizar com Windows e tenha problemas, tente utilizar o [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install).