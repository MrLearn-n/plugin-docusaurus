export default function themeSearchBar() {
  return {
    name: '@custom/docusaurus-search-bar',

    getThemePath() {
      return './src/theme';
    },
    getTypeScriptThemePath() {
      return './src/theme';
    },
  };
}

export function getSwizzleComponentList() {
  return ['SearchBar'];
}
