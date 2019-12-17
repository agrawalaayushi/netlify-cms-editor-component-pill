# netlify-cms-editor-component-pill

This package provides a Pill component for [Netlify CMS](https://www.netlifycms.org/) editor widget ready to drop in your Netlify CMS projects.
Pill displays a label which hold small amount of information. This plugin uses [gatsby-remark-pills](https://github.com/agrawalaayushi/gatsby-remark-pills) to power its pill shortcode transformations to its corresponding html code.

---

## Requirements

1. Gatsby version >=2.17.15
2. Gatsby Transformer Remark Plugin >=2.6.36
3. Gatsby plugin gatsby-remark-pills 

---

## Installation

Run the following command using [npm](https://www.npmjs.com/):

```bash
npm install netlify-cms-editor-component-pill gatsby-remark-pills

```

---

## Usage

Add to your CMS.js inside Netlify CMS project

```js
import pill from 'netlify-cms-editor-component-pill';

CMS.registerEditorComponent(pill);
````

### Configuration

In your gatsby-config.js

```js
plugins: [
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
