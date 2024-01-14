module.exports = function () {
    return {
        name: "@custom/docusaurus-search-bar",

        getThemePath() {
            return "./src/theme";
        },
        getSwizzleComponentList() {
            return ["SearchBar"];
        },
    };
};
