module.exports = function () {
    return {
        name: "@custom/docusaurus-chat-button",

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
