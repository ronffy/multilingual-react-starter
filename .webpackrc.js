const path  = require('path');

const LOCALE_CODE = process.env.LOCALE_CODE;

const prod = process.env.NODE_ENV !== 'development';

export default {
  entry: `./src/index_${LOCALE_CODE}.js`,
  outputPath: path.resolve(__dirname, 'dist', LOCALE_CODE),
  publicPath: prod ? `/${LOCALE_CODE}/` : '/',
  define: {
    "process.env.LOCALE_CODE": LOCALE_CODE,
  }
}
