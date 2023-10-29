# vuexy template for vue.js

- version 1.0.0
    - vuexy version 8.0.0

## scripts

### Project init

```bash
# install dependencies
yarn install 
```

### dev

```bash
# serve with hot reload at localhost:8080
yarn dev
```

### build and preview

```bash
# build for production and launch server
yarn build
yarn preview
```

## template structure

```
├── public
│   ├── ...
├── src
│   ├── assets
│   │   ├── ...
│   ├── components
│   │   ├── ... your view components
│   ├── layouts
│   │   ├── ... your layouts config
│   ├── navigation
│   │   ├── ... your navigation config
│   ├── pages
│   │   ├── ... your pages consists of views
|   ├── plugins
│   │   ├── fastapiClient.ts -> config your fastapi client
│   ├── router
│   │   ├── ... your router config
│   ├── store
|   |   ├── api.ts -> config your api for fastapi app by fastapiClient
│   │   ├── ... your pinia store config
│   ├── styles
│   │   ├── ...
│   ├── views
│   │   ├── ... your views consists of components
│   ├── App.vue
│   ├── main.ts
......



