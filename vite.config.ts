import { thyseus } from '@thyseus/rollup-plugin-thyseus'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [thyseus()],
})
