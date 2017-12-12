# Wrap selection

This plugin allows you to wrap one or multiple selections with symbol/combination of symbols

## Usage

Select something → ctrl+shift+p → «Wrap selected text»

or

press `'`, `"`, `«`, `]`, `<` or `)` — both opening or closing symbol would work

![features](https://github.com/gko/wrap/raw/master/features.gif)

### Predefined patterns

Through «Wrap selected text» you can also use multiple symbols, i.e.:
 - `{{` → `{{text}}`
 - `<!--` → `<!--text-->`
 - `<%` → `<%text%>`

### Custom user patterns

You can also do custom patterns through your settings:
``` json
{
	"wrapSelection.patterns": {
		"log": "console.log(`${text}`, ${text})",
		"promise": "new Promise((yeah, nah) => yeah(${text}))",
		"=>": "() => ${text}"
	}
}
```

And then you can do <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>p</kbd> → «Wrap selected text» → log:
```js
selection
```
will become
```js
console.log(`selection`, selection);
```
