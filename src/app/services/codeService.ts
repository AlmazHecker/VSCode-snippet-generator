import { Injectable } from '@angular/core';
import { CodeSnippet, ISnippet } from './snippetService';

@Injectable({
  providedIn: 'root',
})
export class CodeService {
  constructor() {}

  public generateCodeSnippet(snippet: ISnippet): string {
    const codeSnippet: CodeSnippet = {
      prefix: snippet.prefix,
      body: snippet.code.split('\n'),
      description: snippet.description,
    };
    console.log(codeSnippet);

    return `"":${JSON.stringify(codeSnippet, null, 4)}`;
  }
}
