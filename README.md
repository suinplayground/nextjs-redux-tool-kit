This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Tutorial History

- [Tutorial](https://redux-toolkit.js.org/introduction/getting-started)

Install Redux Toolkit:

```shell
yarn add @reduxjs/toolkit react-redux
```

### Setting up your store and API service

- [Tutorial](https://redux-toolkit.js.org/tutorials/rtk-query)

Create an API service:

```typescript
// services/pokemons.ts
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { Pokemon } from './types'
type Pokemon = any;

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
    reducerPath: "pokemonApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query<Pokemon, string>({
            query: (name) => `pokemon/${name}`,
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi;
```

Add the service to your store:

```typescript
// store.ts
import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonApi } from "./services/pokemon";

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
```

Wrap your application with the `Provider`:

```tsx
// pages/_app.tsx
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
```

Use the query in a component:

```tsx
// pages/pokemon.ts
import { NextPage } from "next";
import { useGetPokemonByNameQuery } from "../services/pokemon";

const Pokemon: NextPage = (props) => {
    // Using a query hook automatically fetches data and returns query values
    const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
    // Individual hooks are also accessible under the generated endpoints:
    // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

    return (
        <div>
            <h1>Pokemon</h1>
            <p>
                <a href="https://redux-toolkit.js.org/tutorials/rtk-query">
                    see the tutorial
                </a>
            </p>
            <div>
                {error ? (
                    <>Oh no, there was an error</>
                ) : isLoading ? (
                    <>Loading...</>
                ) : data ? (
                    <>
                        <h3>{data.species.name}</h3>
                        <img src={data.sprites.front_shiny} alt={data.species.name} />
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default Pokemon;
```

### Code Generation + OpenAPI

- [Documentation](https://redux-toolkit.js.org/rtk-query/usage/code-generation)

Install @rtk-query/codegen-openapi and its dependencies:

```shell
yarn add -D @rtk-query/codegen-openapi esbuild esbuild-runner
```

Create an empty api using `createApi` like:

```typescript
// store/emptyApi.ts
// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// initialize an empty api service that we'll inject endpoints into later as needed
export const emptySplitApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "https://petstore.swagger.io/v2/" }),
    endpoints: () => ({}),
});
```

Generate a config file (json, js or ts) with contents like:

```typescript
// openapi-config.ts
import type { ConfigFile } from "@rtk-query/codegen-openapi";

// https://redux-toolkit.js.org/rtk-query/usage/code-generation#simple-usage
const config: ConfigFile = {
    schemaFile: "https://petstore3.swagger.io/api/v3/openapi.json",
    apiFile: "./store/emptyApi.ts",
    apiImport: "emptySplitApi",
    outputFile: "./store/petApi.ts",
    exportName: "petApi",
    hooks: true,
};

export default config;
```

and then call the code generator:

```shell
npx @rtk-query/codegen-openapi openapi-config.ts
```

This generates a new api file in the `store` directory.

Wrap your application with the `Provider`:

```tsx
// pages/_app.tsx
import type { AppProps } from "next/app";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { petApi } from "../store/petApi";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ApiProvider api={petApi}>
      <Component {...pageProps} />
    </ApiProvider>
  );
}

export default MyApp;
```

Use the query in a component:

```tsx
// pages/pet.ts
import { NextPage } from "next";
import { useFindPetsByStatusQuery } from "../store/petApi";

const Pet: NextPage = (props) => {
    const { data, error, isLoading } = useFindPetsByStatusQuery({
        status: "available",
    });

    return (
        <div>
            <h1>Petstore</h1>
            <p>
                <a href="https://redux-toolkit.js.org/rtk-query/usage/code-generation">
                    see the tutorial
                </a>
            </p>
            <div>
                {error ? (
                    <>Oh no, there was an error</>
                ) : isLoading ? (
                    <>Loading...</>
                ) : data ? (
                    <>
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default Pet;
```
