# Hexo-renderer-viz

## Installation

```sh
npm install hexo-renderer-viz
```

## Usage

Insert these lines into your `_config.yml`:

```yml
viz_renderer:
  enable: true
  src_ext: dot # default extension name of src file
```

Then, any files end with `.dot` in `@/source/` will be rendered as SVG pictures.