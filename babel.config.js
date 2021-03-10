const dev = {
    presets: ["@vue/cli-plugin-babel/preset"]
};
const prod = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    esmodules: true
                }
            }
        ],
        "@babel/preset-typescript"
    ]
};

// NODE_ENV test for jest
module.exports = process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test" ? dev : prod;
