import { Injectable } from '@angular/core';
import { CodeService } from './codeService';

export interface ISnippet {
  description: string;
  prefix: string;
  code: string;
}

export interface CodeSnippet {
  prefix: string;
  body: string[];
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class SnippetService {
  value: string = '';

  constructor(private codeService: CodeService) {}

  sendValue(value: ISnippet) {
    this.value = this.codeService.generateCodeSnippet(value);
  }
}
