// rollup.config.js
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'

export default {
    input: 'build/main.js',
    output: {
        file: 'dist/index.mjs'
    },
    plugins: [
        nodeResolve({ jsnext: true }), // npmモジュールを`node_modules`から読み込む
        commonjs(), // CommonJSモジュールをES6に変換
        terser()
    ]
}

// EOF
