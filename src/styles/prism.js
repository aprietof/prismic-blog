import { css } from 'react-emotion';

const prism = css`
  code[class*='language-'],
  pre[class*='language-'] {
    color: #9cdcfe;
    background: none;
    font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter',
      'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', 'Courier New', Courier,
      monospace;
    font-size: 14px;
    line-height: 1.375;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    border-radius: 4px;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #1e1e1e;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #608b4e;
  }

  .token.punctuation {
    color: #ccc;
  }

  .token.tag,
  .token.namespace,
  .token.deleted {
    color: #4ec9b0;
  }

  .token.attr-name {
    color: #9cdcfe;
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.boolean {
    color: #569cd6;
  }
  .token.number {
    color: #b5cea8;
  }
  .token.function {
    color: #dcdcaa;
  }

  .token.property,
  .token.constant,
  .token.symbol {
    color: #f8c555;
  }

  .token.class-name {
    color: #4ec9b0;
  }

  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: #c586c0;
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: #ce9169;
  }

  .token.operator {
    color: #d4d4d4;
  }
  .token.entity,
  .token.url {
    color: #67cdcc;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: green;
  }
  /* TypeScript */
  .language-jsx .token:not(.keyword) + .token.keyword + .token.keyword + .token.keyword,
  .language-jsx
    .token:not(.keyword)
    + .token.keyword
    + .token.keyword
    + .token.keyword
    + .token.class-name
    + .token.keyword,
  .language-jsx .token.function-variable.function + .token.operator + .token.keyword {
    color: #569cd6;
  }
  /* JSX */
  .language-jsx .language-javascript {
    color: #9cdcfe;
  }
  .language-jsx .language-javascript .token.string {
    color: #ce9169;
  }
  .language-jsx .language-javascript .token.punctuation {
    color: #3f9cd6;
  }
  .language-jsx .language-javascript .script-punctuation + .token.punctuation + .token.punctuation {
    color: #d4d4d4;
  }
  .language-jsx
    .language-javascript
    .script-punctuation
    + .token.punctuation
    + .token.punctuation
    ~ .token.punctuation {
    color: #d4d4d4;
  }
  .language-jsx
    .language-javascript
    .script-punctuation
    + .token.punctuation
    + .token.punctuation
    ~ .token.punctuation
    + .token.punctuation {
    color: #3f9cd6;
  }
`;

export default prism;
