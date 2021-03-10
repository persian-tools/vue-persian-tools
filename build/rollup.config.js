// /* eslint-disable */

import { terser } from "rollup-plugin-terser";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import pkg from "../package.json";
import replace from "@rollup/plugin-replace";


const banner = `/*!
  * {persianTools} v${pkg.version} 🖖 (https://github.com/persian-tools/vue-persian-tools)
  * Forged by Mediv0
  * Released under the MIT License.
  * © 2021, Mediv0. (https://github.com/persian-tools/vue-persian-tools)
  */`;


  const entry = "src/index.ts";
const packageName = "persianTools";

const configs = [
    {
        input: entry,
        file: `dist/${packageName}.esm-browser.js`,
        format: "es",
        browser: true,
        env: "development"
    },
    {
        input: entry,
        file: `dist/${packageName}.esm-browser.prod.js`,
        minify: true,
        format: "es",
        browser: true,
        env: "production"
    },
    {
        input: entry,
        file: `dist/${packageName}.esm-bundler.js`,
        format: "es",
        env: "development"
    },
    {
        input: entry,
        file: `dist/${packageName}.global.js`,
        format: "iife",
        env: "development"
    },
    {
        input: entry,
        file: `dist/${packageName}.global.prod.js`,
        format: "iife",
        minify: true,
        env: "production"
    },
    {
        input: entry,
        file: `dist/${packageName}.cjs.js`,
        format: "cjs",
        env: "development"
    }
];

function createEntry(config) {
    const c = {
        external: [/* "vue" */ "vue-demi", "@persian-tools/persian-tools"],
        input: config.input,
        plugins: [],
        output: {
            banner,
            file: config.file,
            format: config.format,
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

function createEntries() {
    return configs.map(c => createEntry(c));
}

export default createEntries();