import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'src/app/services/clipboardService';
import { SnippetService } from 'src/app/services/snippetService';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})
export class OutputComponent implements OnInit {
  constructor(
    public clipboardService: ClipboardService,
    public snippetService: SnippetService
  ) {}

  copySnippet(snippet: HTMLElement) {
    this.clipboardService.selectNode(snippet);
    this.clipboardService.copyToClipboard(snippet);
  }

  onSnippetFocus(snippet: HTMLElement) {
    this.clipboardService.selectNode(snippet);
  }

  ngOnInit(): void {}
}
