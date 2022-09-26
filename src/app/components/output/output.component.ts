import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'src/app/services/clipboardService';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})
export class OutputComponent implements OnInit {
  constructor(public clipboardService: ClipboardService) {}

  placeholderObject = {
    prefix: '',
    body: [
      "import React from 'react'",
      "import PropTypes from 'prop-types'",
      "import styled from '@emotion/styled'",
      '',
      'const Announcements = () => {',
      '   return <Container>Announcements</Container>',
      '}',
      '',
      'export default Announcements',
      '',
      'Announcements.propTypes = {}',
      'Announcements.defaultProps = {}',
      '',
      "const Container = styled('div')``",
      '',
    ],
    description: '',
  };

  placeholder = `"":${JSON.stringify(this.placeholderObject, null, 4)}`;

  copySnippet(snippet: HTMLElement) {
    this.clipboardService.selectNode(snippet);
    this.clipboardService.copyToClipboard(snippet);
  }

  onSnippetFocus(snippet: HTMLElement) {
    this.clipboardService.selectNode(snippet);
  }

  ngOnInit(): void {}
}
