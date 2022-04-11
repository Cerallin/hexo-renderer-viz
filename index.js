const renderer = require('./lib/renderer');

const config = Object.assign({
  enable: false,
  src_ext: 'dot',
}, hexo.config.renderer_viz);

if (config.enable)
  hexo.extend.renderer.register(config.src_ext, 'svg', renderer(config));