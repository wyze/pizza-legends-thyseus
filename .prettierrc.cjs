/** @type {import("prettier").Config} */
module.exports = {
  bracketSpacing: true,
  semi: false,
  singleQuote: true,

  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],

  // Import plugin
  importOrderParserPlugins: ['typescript', 'decorators'],
  importOrder: ['^node:', '<THIRD_PARTY_MODULES>', '^~', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
