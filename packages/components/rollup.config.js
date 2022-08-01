import path from 'path';
import packageJson from './package.json';
// import esbuild from 'rollup-plugin-esbuild';
import nodeResolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
// import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
// import eslint from '@rollup/plugin-eslint';
// import { getBabelOutputPlugin } from '@rollup/plugin-babel';
// import typescript from '@rollup/plugin-typescript';
import typescript from 'rollup-plugin-typescript2';

export default {
    input: path.resolve(__dirname, './src/index.tsx'),
    output: [
        {
            dir: path.resolve(__dirname, 'dist/esm'),
            format: 'esm'
        }
    ],
    // 关键属性，只有将其设置为 `true` 才能保证只编译、不打包
    preserveModules: true,
    plugins: [
        // getBabelOutputPlugin({
        //     exclude: ['node_modules/**', 'dist/**/*'],
        //     presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
        // }),

        babel({
            exclude: ['node_modules/**']
        }),

        typescript({ exclude: ['node_modules/**'] }),

        // eslint({
        //     exclude: ['node_modules/**']
        // }),

        // typescript(),

        // esbuild({
        //     include: /\.[jt]sx?$/,
        //     exclude: /node_modules/,
        //     sourceMap: false,
        //     jsxFactory: 'React.createElement',
        //     jsxFragment: 'React.Fragment',
        //     target: 'esnext',
        //     tsconfig: './tsconfig.json' // default
        // }),

        nodeResolve({
            extensions: ['.tsx', '.ts', '.jsx', '.js']
        }),

        json(),

        commonjs({
            include: ['node_modules/**']
        })

        // replace({
        //     'process.env.NODE_ENV': JSON.stringify('development')
        // })
    ],
    external: packageJson.peerDependencies
};
