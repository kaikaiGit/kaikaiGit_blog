# personal_blog

JK Wu's personal blog based on Vue3 + TS + element-plus + Pinia + Sass + iconfont + github Page...

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### [github Page](https://kaikaigit.github.io/kaikaiGit_blog/)

```sh
git subtree push --prefix dist origin gh-pages
```
