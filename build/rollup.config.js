// /* eslint-disable */

import { terser } from "rollup-plugin-terser";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import multiInput from 'rollup-plugin-multi-input';
import pkg from "../package.json";
import replace from "@rollup/plugin-replace";
import generateDeclarations from 'rollup-plugin-generate-declarations';


const banner = `/*!
  * {persianTools} v${pkg.version} 🖖 (https://github.com/persian-tools/vue-persian-tools)
  * Forged by Mediv0
  * Released under the MIT License.
  * © 2021, Mediv0. (https://github.com/persian-tools/vue-persian-tools)
  */`;


const entry = ["src/index.ts", "src/directives/index.ts", "src/modules/index.ts"];
const packageName = "persianTools";

const configs = [
    {
        input: entry,
        minify: true,
        format: "es",
        browser: true,
        env: "production"
    },
];

function createEntry(config) {
    const c = {
        external: [/* "vue" */ "vue-demi", "@persian-tools/persian-tools"],
        input: config.input,
        plugins: [],
        output: {
            banner,
            // file: config.file,
            dir: "dist",
            format: "esm",
            globals: {
                // vue: "Vue",
                'vue-demi': 'VueDemi'
            }
        },
        onwarn: (msg, warn) => {
            if (!/Circular/.test(msg)) {
                warn(msg);
            }
        }
    };

    c.external.push(/@babel\/runtime/);

    c.plugins.push(generateDeclarations())

    c.plugins.push(replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }))

    if (config.format === "iife" || config.format === "umd") {
        c.output.name = c.output.name || "persianTools";
    }

    if (config.transpile !== false) {
        c.plugins.push(
            babel({
                babelHelpers: "bundled",
                extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
                exclude: "node_modules/**/*"
            })
        );
    }

    c.plugins.push(multiInput());

    c.plugins.push(
        resolve({
            extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"]
        })
    );

    c.plugins.push(commonjs());


    if (config.minify) {
        c.plugins.push(terser({ module: config.format === "es" }));
    }

    return c;
}

export default createEntry(configs[0])