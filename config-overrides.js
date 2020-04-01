const {
  addBabelPlugin,
  override,
  fixBabelImports,
  addLessLoader
} = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: './src',
      rootPathPrefix: '~/'
    }
  ]),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#075e54', '@border-radius-base': 'none' }
  })
);
