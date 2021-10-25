---
tags:
  - Readme
  - Getting-Started
---

# Foam Template for Gatsby Theme Primer Wiki

**👋Another Foam template that use [gatsby-theme-primer-wiki](https://github.com/theowenyoung/gatsby-theme-primer-wiki), Welcome to your new Foam Knowledge Base!**

## Examples

- [Demo](https://demo-wiki.owenyoung.com) - ([Source](https://github.com/theowenyoung/gatsby-theme-primer-wiki/tree/main/example))
- [Everything I Know by Owen](https://wiki.owenyoung.com/) - ([Source](https://github.com/theowenyoung/wiki))
- [Foam Demo](https://demo-foam.owenyoung.com/) - ([Source](https://github.com/theowenyoung/foam-template-gatsby-theme-primer-wiki))
- [Obsidian Demo](https://demo-obsidian.owenyoung.com/) - ([Source](https://github.com/theowenyoung/obsidian-template-gatsby-theme-primer-wiki))
- [Gatsby Starter Demo](https://demo-gatsby-starter-primer-wiki.owenyoung.com/) - ([Source](https://github.com/theowenyoung/gatsby-starter-primer-wiki))

## Features

- Support Local search, full-text search.
- Support Graph Visualisation with canvas.
- Support Tags, Tags First, Generating tag pages, also connecting with graph visualisation.
- Support [Gitbook](https://docs.gitbook.com/integrations/github/content-configuration#summary) styled `SUMMARY.md` for custom sidebar.
- Support `[[WikiLink]]`, But you'd better use [Link Reference Definitions](https://foambubble.github.io/foam/features/link-reference-definitions) with extensions, `"foam.edit.linkReferenceDefinitions": "withExtensions"`
- Support Light/Dark Theme
- Custom Header Nav Items
- Nested sidebar
- Support Google Analytics
- Support Sitemap/Robot
- SEO optimization
- Support path prefix

## Principles

Here are my main ideas/principles in designing this theme.

1. No vendor lock-in. The less vendor features you use, the better you'll be able to migrate. `[[Wikilink]]` is the only non-markdown feature supported by default, but nonetheless, it is recommended to use the standard markdown syntax, or if you edit with [Foam](https://github.com/foambubble/foam), please use [Wikilink](https://foambubble.github.io/foam/wikilinks) with [Link Reference Definitions](https://foambubble.github.io/foam/features/link-reference-definitions). That give us the capability change our theme, or hosted place.
2. Use meta data instead of special characters. We should use `tags` as the document's metadata, not `#tag` in the plain text.
3. Use tags instead of categories. Minimal subfolders.

## Getting started

### For new wiki

This documentation assumes that you have a GitHub account and have [Visual Studio Code](https://code.visualstudio.com/) installed on your Linux/MacOS/Windows machine.

1. If you haven't yet, browse over to the main [Foam documentation](https://foambubble.github.io/foam) to get an idea of what Foam is and how to use it.
2. Press "Use this template" button at [foam-template-gatsby-theme-primer-wiki](https://github.com/theowenyoung/foam-template-gatsby-theme-primer-wiki/generate) (that's this repository!) to fork it to your own GitHub account. If you want to keep your thoughts to yourself, remember to set the repository private.
3. [Clone the repository to your local machine](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) and open it in VS Code.

   _Open the repository as a folder using the `File > Open...` menu item._

4. When prompted to install recommended extensions, click **Install all** (or **Show Recommendations** if you want to review and install them one by one)
5. Delete all `.md` files you don't need, Change Site settings at `.layouts/gatsby-config.js`, change your CNAME at `.layouts/static/CNAME`, change your icon at `.layouts/static/logo.png`, commit your changes, and push to github, change your page settings at Github, make sure you set the page branch to `gh-pages`, then when github actions runed, you can visit your site.

After setting up the repository, head to [[getting-started]] to get familiar with your new knowledge base!

To learn more about how to use **Foam**, read the [Recipes](https://foambubble.github.io/foam/recipes/recipes) bubbles of the Foam documentation workspace.

And remember that you can always join our [Foam community on Discord](https://foambubble.github.io/join-discord/g)!

### For exist wiki

### Exist Wiki

1. Clone this repo to your local machine

```bash
git clone https://github.com/theowenyoung/foam-template-gatsby-theme-primer-wiki.git
```

2. Copy `.layouts`, `.github` `.gitignore` to your wiki folder.

## Config

See [here](https://github.com/theowenyoung/gatsby-theme-primer-wiki#usage)

## Local Preview

```bash
cd .layouts
npm i
npm start
```


## Deploy

Deploy to Github Pages, see `.github/workflows/deploy.yml`,

### Path Prefix

If you want deploy your site with prefix path, 

1. change `gatsby-config.js` with:

```javascript
module.exports = {
  pathPrefix: `/blog`,
}
```

2. set your build script with `gatsby build --prefix-paths`,


3. Local Preview with `gatsby serve --prefix-paths`


Also see the original docs: <https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/path-prefix/#add-to-gatsby-configjs>

## Using Foam

We've created a few Bubbles (markdown documents) to get you started.

- [[inbox]] - a place to write down quick notes to be categorized later
- [[getting-started]] - learn how to use your Foam workspace
- [[todo]] - a place to keep track of things to do

In the `docs` directory you can find everything you need to learn the basics of Foam.

[//begin]: # "Autogenerated link references for markdown compatibility"
[getting-started]: getting-started.md "Getting Started"
[inbox]: inbox.md "Inbox"
[getting-started]: getting-started.md "Getting Started"
[todo]: todo.md "Todo"
[//end]: # "Autogenerated link references"
