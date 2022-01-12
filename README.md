# Bug

Dynamically imported react-ace does not load when built with swcMinify (in Next.js 12.0.8).

## To reproduce

1. `yarn`
2. `yarn build`
3. `yarn start`
4. Open <http://localhost:3000>

## Behavior

Just shows that the code is loading.

## Expected behavior

Should show code editor after loading very briefly.

(Can see that if you run `yarn dev` instead, or disable [swcMinify](https://nextjs.org/docs/upgrading#swc-replacing-terser-for-minification) in [next.config.js](./next.config.js#L2) before you build the code).
