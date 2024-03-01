module.exports = {
  // api: {
  //   output: {
  //     target: './apps/vite/src/lib/swr-client',
  //     schemas: './apps/vite/src/lib/swr-client/models',
  //     mode: 'tags-split',
  //     mock: true,
  //     client: 'swr',
  //     clean: true,
  //     indexFiles: true,
  //     prettier: true,
  //   },
  //   input: {
  //     target: './apps/document/api/open-api.yaml',
  //   },
  // },
  tanctack: {
    output: {
      workspace: './apps/vite/src/lib/tanctack-client/',
      target: '.',
      schemas: './models',
      mode: 'tags-split',
      mock: true,
      client: 'react-query',
      clean: true,
      indexFiles: true,
      override: {
        coerceTypes: true,
        query: {
          useQuery: false,
          useInfinite: false,
          useSuspenseQuery: true,
          useSuspenseInfiniteQuery: true,
          version: 5,
        },
      },
    },
    input: {
      target: './apps/document/api/open-api.yaml',
    },
    hooks: {
      afterAllFilesWrite: 'biome format --write',
    },
  },
  // zod: {
  //   output: {
  //     target: './apps/vite/src/lib/zod-schema',
  //     schemas: './apps/vite/src/lib/zod-schema/models',
  //     mode: 'tags-split',
  //     client: 'zod',
  //     clean: true,
  //     indexFiles: true,
  //   },
  //   input: {
  //     target: './apps/document/api/open-api.yaml',
  //   },
  //   hooks: {
  //     afterAllFilesWrite: 'biome check --apply',
  //   },
  // },
};
