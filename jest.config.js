module.exports = {
    preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
    transform: {
        "^.+\\.vue$": "vue-jest"
    },
    coverageDirectory: "coverage",
    collectCoverageFrom: ["./src/modules/**/*.ts", "!src/modules/**/*.skip.ts", "!./src/modules/index.ts"],
    collectCoverage: true
};
