module.exports = function () {
    return {
        name: "@custom/docusaurus-search-bar",

        injectHtmlTags: () => {
            return {
                headTags: [
                    {
                        tagName: "script",
                        attributes: {
                            src: `https://unpkg.com/@inkeep/widgets-embed@latest/dist/embed.js`,
                            type: "module",
                            defer: true,
                        },
                    },
                ],
            };
        },


        getThemePath() {
            return "./src/theme";
        },
        getSwizzleComponentList() {
            return ["SearchBar"];
        },
    };
};
