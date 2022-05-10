import * as vscode from 'vscode';
import { manager } from './Manager';

class CompletionAliasProvider implements vscode.CompletionItemProvider{

    constructor() { 
    }
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        return manager.getCompletionAlias(document, position);
    }
    // resolveCompletionItem(item: vscode.CompletionItem) {
    // // resolveCompletionItem(item: vscode.CompletionItem) {
    //     return item;
    // }
}

const completionAliasProvider = new CompletionAliasProvider();

export default completionAliasProvider;
