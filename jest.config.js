module.exports = {
    preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
    transform: {
        "^.+\\.vue$": "vue-jest"
    },
    coverageDirectory: "coverage",
    collectCoverageFrom: ["./src/modules/**/*.ts", "!./src/modules/index.ts", "!./src/modules/helper.ts"],
    collectCoverage: true
};
