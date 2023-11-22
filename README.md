# Close other Terminals

This vscode extension adds a command to the editor tabs' context menu: `Close other Terminals`  

![Close other Terminals demo](https://github.com/ArturoDent/close-other-terminals/blob/main/images/closeOtherTerminals.gif?raw=true)

## Extension Commands

This extension contributes the following command:

* `close-other-terminals.close`: Close other Terminals

You can select any number of terminals (with the <kbd>Shift</kbd> key), right-click on one of them, and any non-selected terminals will be closed.

You can also use the command `Close other Terminals` from the Command Palette.  In that case, all terminals other than the currently active terminal will be closed.  

And you can create a keybinding to run the command (in your `keybindings.json`) like this:

```jsonc
{
  "key": "alt+k",
  "command": "close-other-terminals.close",
  
  "when": "terminalFocus"   // omit this to have it work in an editor
  // see below to use terminalFocus when clause 
}
```

If you want that `when` clause, make sure to add `close-other-terminals.close` to the following setting:

```plaintext
Terminal > Integrated: Commands to Skip Shell
```

## Known Issues

## Release Notes

0.0.3 Made Command Palette command work.  
