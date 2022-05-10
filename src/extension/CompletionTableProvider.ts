import * as vscode from 'vscode';
import { manager } from './Manager';

class CompletionTableProvider implements vscode.CompletionItemProvider{

    constructor() { 
    }
    provideCompletionItems() {
        return manager.getCompletionTable();
    }
    // resolveCompletionItem(item: vscode.CompletionItem) {
    // // resolveCompletionItem(item: vscode.CompletionItem) {
    //     return item;
    // }
}

const completionTableProvider = new CompletionTableProvider();

export default completionTableProvider;
