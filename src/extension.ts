import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

  let disposable = vscode.commands.registerCommand('close-other-terminals.close', async (...[contextTerminal, selectedTerminals]) => {
    
    // selectedTerminals will be all selected terminals
    // contextTerminal is the terminal that was right-clicked on
    
    // !selectedTerminals when triggered by Command Palette
    
    const activeTerminal = vscode.window.activeTerminal;
    
    const allTerminals = vscode.window.terminals;
    
    for await (const terminal of allTerminals) {
      if (!selectedTerminals && terminal !== activeTerminal) terminal.dispose();
      else if (selectedTerminals && !selectedTerminals.includes(terminal)) terminal.dispose();
    }
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
