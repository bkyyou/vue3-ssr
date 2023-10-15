import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

console.log(process.argv);
const argv = process.argv;
let buildConifg = {};
if (argv.includes('--ssr')) {
  buildConifg.lib = {
    entry: 'src/entry-server',
    formats: ['cjs']
  };
  // buildConifg.ssr = true;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    //设置别名
    alias: {
        '@': path.resolve(__dirname, 'src')
    }
},
  build: {
    ...buildConifg
  }
})
