This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


# Palitos - Projeto Next.js

Este projeto é uma aplicação Next.js para o site "Original Produtos - Palitos de Churrasco".

## Estrutura do Projeto

### Diretórios e Componentes

- **/public**: Contém as imagens estáticas usadas no projeto.
- **/pages**: Contém as páginas da aplicação Next.js. O arquivo `index.js` é a página inicial.
- **/components**: Contém os componentes reutilizáveis do projeto, organizados em diretórios próprios com seus arquivos CSS modules.

### Por que usar CSS Modules?(Nao adicionado ainda)

Usar CSS modules para cada componente oferece várias vantagens:
- **Escopo Local**: O CSS é aplicado apenas ao componente correspondente, evitando conflitos de estilo.
- **Manutenção**: Facilita a manutenção do código, pois o CSS está diretamente relacionado ao componente.
- **Reutilização**: Componentes com estilos encapsulados podem ser facilmente reutilizados em outros projetos ou partes do aplicativo sem medo de colidir com outros estilos.

Por enquanto todos estilos estão no styles/globals.css

### Comparação com o HTML Antigo

No repositório, você encontrará um arquivo HTML antigo. É interessante compará-lo com o novo código, pois ajuda a entender como os componentes foram modularizados e otimizados no projeto Next.js.

## Subindo o Projeto Localmente

### Passo a Passo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. **Instale as dependências:**
    ```bash
    npm install
    ```
3. **Inicie o Local Host**
```bash
npm run dev
```
