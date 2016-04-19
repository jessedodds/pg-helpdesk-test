# ![Barebones](http://jaydenseric.com/shared/barebones-logo.svg)

![Version](https://img.shields.io/badge/version-4.0.0-orange.svg?style=flat-square)
![Github issues](https://img.shields.io/github/issues/jaydenseric/Barebones.svg?style=flat-square)
![Github stars](https://img.shields.io/github/stars/jaydenseric/Barebones.svg?style=flat-square)

A barebones boilerplate for getting started on a bespoke front end.

- Back end agnostic.
- Simple ES6 class module component architecture with some (easily removed) examples.
- [NPM](https://npmjs.com) dependancies and tools.
- [webpack](https://webpack.github.io) for builds.
- ES6 via [Babel](https://babeljs.io) with [babel-polyfill](https://babeljs.io/docs/usage/polyfill) and [DOM4](https://github.com/WebReflection/dom4).
- [ESLint](http://eslint.org) JS linting with tweaked [Standard Style](http://standardjs.com) rules.
- [stylelint](http://stylelint.io) CSS linting with tweaked [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) rules.
- [PostCSS](https://github.com/postcss/postcss) and [CSSNext](http://cssnext.io) take care of vendor prefixes and allow cutting edge CSS syntax. A faster, standards aligned alternative to preprocessors such as Sass.
- Handle icons the modern way with polyfilled [SVG symbols and external references](https://css-tricks.com/svg-use-with-external-reference-take-2).
- Includes [http-server](https://github.com/indexzero/http-server) as an optional zero-config dev server.
- IE 11 and modern browser support. IE 9+ may work without guarantee.
- [MIT license](https://en.wikipedia.org/wiki/MIT_License).

## Setup

For development tools and building:

1. Install the latest [Node.js and NPM](https://nodejs.org).
2. Run `npm install` within the project root directory in Terminal.
3. Run `npm run build:watch`.
4. Run `npm start` in another tab. Tada!

Ensure your editor supports:

- [EditorConfig](http://editorconfig.org).
- Live linting, respecting `package.json` config.
  - [ESLint](http://eslint.org) for JS. Atom users install [linter-eslint](https://atom.io/packages/linter-eslint) and optionally [standard-formatter](https://atom.io/packages/standard-formatter).
  - [stylelint](http://stylelint.io) for CSS. Atom users install [linter-stylelint](https://atom.io/packages/linter-stylelint).

After studying the example components:

1. Delete them by removing the body content of `/index.html`, the `@import` in `/app/index.css` and every component directory except for `/components/app`.
2. Customize the `/index.html` metadata.
3. Customize the `/app` global assets.
4. Edit `/package.json` and `/readme.md` to be about your project.

## Structure

- `/components` contains a sub-directory for each component, holding source JS, styles and media. While you may nest component folders, I prefer to keep mine flat.
- `/components/app` is the top component for the entire site and is the JS and CSS entrypoint; from here components are recursively imported and initialized. Import polyfills here.
- `/bundle` is the compiled JS, CSS and sourcemaps.

## Scripts

| Command               | Purpose                                         |
|:----------------------|:------------------------------------------------|
| `npm run lint:js`     | Lint JS (see `eslintConfig` in `package.json`). |
| `npm run lint:css`    | Lint CSS (see `stylelint` in `package.json`).   |
| `npm run clean`       | Delete `/bundle`.                               |
| `npm run build`       | Compile JS and CSS to `/bundle`.                |
| `npm run build:watch` | Build, rebuilding on source file changes.       |
| `npm start`           | Start a dev server and open in browser.         |

## Tips

- Use NPM to manage 3rd party dependencies.
- Use [JSDoc](http://usejsdoc.org) when writing JS.
- Don't reset, normalize or otherwise declare styles globally; all variables and rules should be scoped to a component. `html` and `body` are an exception as they form the top `app` component.
- See [Fix.css](https://github.com/jaydenseric/Fix) for taming common elements.
- Don't vendor prefix CSS rules that are on a standards track; [Autoprefixer](https://github.com/postcss/autoprefixer) will take care of it.
- Avoid adding already minified assets for better sourcemap assisted debugging.
