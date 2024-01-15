function listenerFunction({ inkeepConfig, componentType }) {
    if (!inkeepConfig) {
        throw new Error(
            "Configuration Error: inkeepConfig is missing in the Docusaurus configuration file."
        );
    }
    const isChatButtonType = componentType === "ChatButton";

    const inkeepWidgetContainer = document.getElementById(
        !isChatButtonType ? "inkeepSearchBar" : "inkeepChatButton"
    );

    if (isChatButtonType) {
        inkeepWidgetContainer.style.position = "absolute";
        const backToTopButtonOffset =
            inkeepConfig.chatButtonType === "ICON_TEXT_SHORTCUT"
                ? "6.8rem"
                : "5.4rem";
        const backToTopButton = document.querySelector(
            ".theme-back-to-top-button"
        );
        if (backToTopButton) {
            backToTopButton.style.bottom = backToTopButtonOffset;
        }
    }

    const currentTheme = document.documentElement.dataset.theme;

    const config = {
        componentType,
        targetElement: inkeepWidgetContainer,
        properties: {
            ...inkeepConfig,
            baseSettings: {
                ...inkeepConfig.baseSettings,
                colorMode: {
                    forcedColorMode: currentTheme,
                },
                theme: {
                    ...(inkeepConfig.baseSettings?.theme || {}),
                    components: {
                        SearchBarTrigger: {
                            defaultProps: {
                                size: "shrink",
                            },
                        },
                        ...(inkeepConfig.baseSettings?.theme?.components || {}),
                    },
                },
            },
            modalSettings: inkeepConfig.modalSettings,
            searchSettings: inkeepConfig.searchSettings,
            aiChatSettings: inkeepConfig.aiChatSettings,
        },
    };

    const inkeepWidget = Inkeep().embed(config);

    const observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
            if (mutation.attributeName === "data-theme") {
                let colorMode = mutation.target.dataset.theme;
                inkeepWidget.render({
                    ...config.properties,
                    properties: {
                        baseSettings: {
                            ...config.properties.baseSettings,
                            colorMode: {
                                forcedColorMode: colorMode,
                            },
                        },
                    },
                });
            }
        }
    });

    observer.observe(document.documentElement, { attributes: true });

    return observer.disconnect.bind(observer)
}

module.exports = {
    listenerFunction,
};
