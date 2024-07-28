import { defineConfig } from 'vite';
import { resolve } from 'path'
import FullReload from 'vite-plugin-full-reload'
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  plugins: [
    handlebars({
        reloadOnPartialChange: true,
        partialDirectory: resolve(__dirname, 'src/html')
    }),

    FullReload('src/html/**/*', { delay: 0 })
  ]
});
