# Wrap selection

This plugin allows you to wrap one or multiple selections with symbol/combination of symbols.
You can find it in [marketplace](https://marketplace.visualstudio.com/items?itemName=konstantin.wrapSelection)

## Installation

Launch VS Code Quick Open (<kbd>Ctrl</kbd>+<kbd>P</kbd>), paste the following command, and press enter:
```bash
ext install konstantin.wrapSelection
```

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

### Custom keyboard shortcuts

Once you have defined a custom pattern, you can set up a keyboard shortcut to invoke it quickly.

First, navigate to  `keybindings.json` with <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>P</kbd> → «Preferences: Open Keyboard Shortcuts (JSON)».

Then, add an entry with your desired shortcut as `"key"` and with your pattern as  `"args"`.  For example:

``` json
    {
        "key": "ctrl+alt+l",
        "command": "wrapSelection.pattern",
        "args":  "log",
        "when": "editorHasSelection && editorTextFocus" 
    }
```







## Found a bug?
Create a ticket [here](https://github.com/gko/wrap/issues)
or insult me at mail[at]konstantin[dot]io
