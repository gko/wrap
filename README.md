# Wrap selection

This plugin allows you to wrap one or multiple selections with symbol/combination of symbols

## Usage

Select something → <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>P</kbd> → «Wrap selected text»

or

press <kbd>'</kbd>, <kbd>"</kbd>, <kbd>«</kbd>, <kbd>]</kbd>, <kbd><</kbd> or <kbd>)</kbd> — both opening or closing symbol would work

![features](https://github.com/gko/wrap/raw/master/features.gif)

### Predefined patterns

Through «Wrap selected text» you can also use multiple symbols, i.e.:
 - `{{` → `{{text}}`
 - `<!--` → `<!--text-->`
 - `<%` → `<%text%>`

### Custom user patterns
![user patterns](https://github.com/gko/wrap/raw/master/userDefined.gif)

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

And then you can do <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>P</kbd> → «Wrap selected text» → log:
```js
selection
```
will become
```js
console.log(`selection`, selection);
```

## Found a bug?
Create a ticket [here](https://github.com/gko/wrap/issues)
or insult me at mail[at]konstantin[dot]io
