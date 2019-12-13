# netlify-cms-editor-component-pill

This package provide a Pill component for [Netlify CMS](https://www.netlifycms.org/) editor widget ready to drop in your Netlify CMS projects.
Pills reperesent an attribute or inform users about the status of an object.

---

## Installation

Run the following command using [npm](https://www.npmjs.com/):

```bash
npm install netlify-cms-editor-component-pill gatsby-remark-pills --save

```

---

## Requirements

1. Gatsby version >=2.17.15
2. Gatsby Transformer Remark Plugin >=2.6.36

````

---

## Usage

Add to your CMS.js inside Netlify CMS project

```js
import pill from 'netlify-cms-editor-component-pill';

CMS.registerEditorComponent(pill);
````

### Configuration

```js
// In your gatsby-config.js
plugins: [
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-pills`
        }
      ]
    }
  }
];
```
