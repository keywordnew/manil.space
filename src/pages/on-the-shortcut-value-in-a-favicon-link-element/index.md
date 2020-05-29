---
title: On the shortcut value in a favicon link element
date: '2020-05-28'
spoiler: MDN said to avoid it. I looked for why.
---

MDN advises web authors to "not use (the shortcut link type) anymore".

To set up a favicon for a webpage, I used a link element. The [link element](https://beta.developer.mozilla.org/en-US/docs/Web/HTML/Element/link) is used to tell the browser where to find the file for the favicon.

The appropriate value for `rel` is "icon", like: 

`<link rel='icon'>`

The `rel` (relationship) attribute describes how the resource being linked is related to the current document. 

When the relationship is as an "icon" for a page, the browser knows to use the `media`, `type`, and `sizes` attributes to select the most appropriate icon.

I also have examples of a link element like this:

`<link rel='shortcut icon'>`

Use of the "shortcut" value preceeding "icon" was proprietary to Internet Explorer. While it's still supported for "historical reasons", it's definitely not necessary. MDN specifically recommends [not using it anymore](https://beta.developer.mozilla.org/en-US/docs/Web/HTML/Link_types).

All modern browsers look for a `favicon.ico` file at the root of a site. When a `<link>` with a `rel` value of `icon` is not specified, that is the behaviour to which they fall back.

https://www.canada.ca/favicon.ico

https://www.apple.com/favicon.ico

https://www.google.com/favicon.ico

I didn't really need to use `<link>` after all 🤷🏽‍♀️

Explicitly declaring the favicon [does make one difference](https://mathiasbynens.be/notes/rel-shortcut-icon). When declaring the favicon, the browser loads the favicon when it parses the `<link>`. When not specified, the browser shows the favicon only when the entire document has finished loading. This is useful if I want it to defer loading the favicon until after it has loaded the document and other assets.

---

🎹 _Here's a link to one of my favourite piece of music, to reward you for your patient reading: [Contact, by Daft Punk](https://www.youtube.com/watch?v=JI5noh4OyXc)._

📡 _This blog has an RSS feed: https://manil.space/rss.xml_

💬 _Thanks for reading all the way through! Let me know what you think. You can (at)me on [Mastodon](https://toot.cafe/@manil) or [Twitter](https://twitter.com/keywordnew)_.

🤝 _Looking for a consult? Request a connection using [this handy form](https://manil219750.typeform.com/to/tu4vPj). It's handy because you don't have to think of what to write in an email. Just fill out the form, I will email you ;-)_