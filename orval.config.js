module.exports = {
  api: {
    output: {
      target: './apps/vite/src/lib/swr-client',
      schemas: './apps/vite/src/lib/swr-client/models',
      mode: 'tags-split',
      mock: true,
      client: 'swr',
      clean: true,
      indexFiles: true,
      prettier: true,
    },
    input: {
      target: './apps/document/api/open-api.yaml',
    },
  },
  tanctack: {
    output: {
      target: './apps/vite/src/lib/tanctack-client',
      schemas: './apps/vite/src/lib/tanctack-client/models',
      mode: 'tags-split',
      mock: true,
      client: 'react-query',
      clean: true,
      indexFiles: true,
      prettier: true,
    },
    input: {
      target: './apps/document/api/open-api.yaml',
    },
  },
};
