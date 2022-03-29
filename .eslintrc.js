module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["standard", "prettier"],
    plugins: ["json-format"],
    ignorePatterns: ["dist", "node_modules"],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: "module",
    },
    overrides: [
        {
            files: ["scripts/**/*"],
            rules: {
                "no-console": "off",
            },
        },
    ],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
        "block-scoped-var": "warn",
        "eol-last": ["warn", "always"],
        "comma-dangle": ["error", "always-multiline"],
        "guard-for-in": "error",
        "multiline-ternary": ["error", "always-multiline"],
        quotes: [
            "error",
            "double",
            { allowTemplateLiterals: true, avoidEscape: true },
        ],
        "space-before-function-paren": [
            "error",
            { anonymous: "never", asyncArrow: "always", named: "never" },
        ],
    },
};
