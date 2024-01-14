export default function themeChatButton() {
    return {
      name: '@custom/docusaurus-chat-button',
  
      getThemePath() {
        return './src/theme';
      },
      getTypeScriptThemePath() {
        return './src/theme';
      },
    };
  }
  
  export function getSwizzleComponentList() {
    return ['Footer'];
  }