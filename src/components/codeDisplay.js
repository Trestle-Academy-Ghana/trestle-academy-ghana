// src/components/MyAwesomeCodeSnippet.js
import React, { useEffect } from 'react';
import MarkdownIt from 'markdown-it';
import Prism from 'prismjs';

const md = new MarkdownIt({
  html: true,
  linkify: false,
});

const Code = ({ markdown }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div dangerouslySetInnerHTML={{ __html: md.render(markdown) }} />
  );
};

export default Code;
