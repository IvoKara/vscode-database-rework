import * as vscode from 'vscode';
import { manager } from './Manager';

class CompletionColumnProvider implements vscode.CompletionItemProvider{

    constructor() { 
    }
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        return manager.getCompletionColumns(document, position);
    }
    // resolveCompletionItem(item: vscode.CompletionItem) {
    // // resolveCompletionItem(item: vscode.CompletionItem) {
    //     return item;
    // }
}

const completionColumnProvider = new CompletionColumnProvider();

export default completionColumnProvider;