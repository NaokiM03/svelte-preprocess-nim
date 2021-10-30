# svelte-preprocess-nim

> A Svelte Preprocessor to compile [nim](https://github.com/nim-lang/Nim)

## Install

```
$ npm install -D svelte-preprocess-nim
```

## Usage

### Preprocessors

**_Example:_** `svelte.config.js`

```js
// svelte.config.js
const sveltePreprocess = require("svelte-preprocess");
const { transformSync } = require("svelte-preprocess-nim");

module.exports = {
  preprocess: sveltePreprocess({
    nim({ content, filename, attributes }) {
      const { code } = transformSync(content, {});
      return { code };
    },
  }),
};
```

### `.svelte` files

```svelte
// App.svelte
<script src="./App.nim">
</script>

<div class="App" />

<style>
</style>
```

OR

```svelte
// App.svelte
<script lang="nim">
import std/jsconsole

console.log("Hello, nim!")
</script>

<div class="App" />

<style>
</style>
```

**_NOTES:_** To use the editor's language support, you need to select the former.

## License

MIT © [NaokiM03](https://github.com/NaokiM03)
