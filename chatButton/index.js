module.exports = function () {
    return {
        name: "@custom/docusaurus-chat-button",

        getThemePath() {
            return "./src/theme";
        },
        getSwizzleComponentList() {
            return ["SearchBar"];
        },
    };
};
