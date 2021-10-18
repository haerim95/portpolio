const withImages = require('next-images');
// module.exports = withImages();

const debug = process.env.NODE_ENV !== 'production';
const name = 'small-magic-project-deployment';

module.exports = {
  withImages,
  assetPrefix: !debug ? `/${name}/` : '',
};
