import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import svgrPlugin from 'vite-plugin-svgr'


export default defineConfig({
    build:{
    outDir:'build',
    },
  plugins: [
    reactRefresh(),
    svgrPlugin({
        svgrOptions:{
            icon:true,
        },
    }),

],
server:{
    port:3000
},
})



