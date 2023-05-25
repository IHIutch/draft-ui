/** @type {import('prettier').Config} */

module.exports = {
  semi: false,
  singleQuote: true,
  //
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '',
    '^[@/]',
    '^[./]',
    '',
    '^(?!.*[.]css$)[./].*$',
    '.css$',
  ],
  importOrderBuiltinModulesToTop: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
}
