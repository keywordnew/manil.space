# [manil.space](https://manil.space/)

My personal blog. Forked from [overreacted.io](https://overreacted.io/), for reasons that include RSS support, default dark mode, reading time indicators...tl:dr is the prior art works well and it just looks really nice too. I especially love the URL to "Discuss on..." that helps people find other people to chat with. I think distributed conversations are one of the best uses of social media. 

Overreacted.io was in turn forked from [Gatsby blog starter](https://github.com/gatsbyjs/gatsby-starter-blog). Syntax theme based on [Sarah Drasner's Night Owl](https://github.com/sdras/night-owl-vscode-theme/) with small tweaks.

To run locally, `yarn`, then `yarn dev`, then open https://localhost:8000.

## Maintenance

1. Check upstream for updated infrastructure
2. `cherry-pick` relevant commits
3. Run `npm audit` to get a report of necessary fixes.
4. Run `npm audit fix` to begin applying fixes.

## Contributing Translations

You can translate any article on the website into your language!

Add a Markdown file with the translation to the corresponding article folder. For example `index.fr.md` in `src/pages/optimized-for-change/`.

If you're the first one to translate a post to your language, you'll need to add it to to the list in `./i18n.js`. See [this PR](https://github.com/gaearon/overreacted.io/pull/159) for an example. If your language needs special font characters, add it to the appropriate place in [this list](https://github.com/keywordnew/manil.space/blob/master/src/utils/i18n.js#L15).
