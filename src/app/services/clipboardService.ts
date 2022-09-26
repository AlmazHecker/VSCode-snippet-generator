import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClipboardService {
  constructor() {}

  selectNode(node: HTMLElement) {
    const range = document.createRange();
    range.selectNodeContents(node);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
  }

  copyToClipboard(node: HTMLElement) {
    navigator.clipboard.writeText(node.innerHTML);
  }
}
