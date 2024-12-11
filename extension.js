const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.replaceWithForLoop', function () {
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            const selection = editor.selection;
            const selectedText = editor.document.getText(selection);

            if (selectedText) {
                const forLoop = `for (int i = 0; i < ${selectedText}; ++i) {\n\t\n}`;
                editor.edit(editBuilder => {
                    editBuilder.replace(selection, forLoop);
                });
            } else {
                vscode.window.showInformationMessage('Пожалуйста, выделите переменную.');
            }
        }
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};