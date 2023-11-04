# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.


### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Start en or es server

```
Start the development server for one locale, e.g., English (en):
npm run start -- --locale en

When you want to switch to another locale, stop the current development server and then start the server for the desired locale, e.g., Spanish (es):

npm run start -- --locale es
```

### Use write-translation scripts

```
Docusaurus provides a script called write-translations that can be used to generate or update translation files for your documentation and other content. write-translations is primarily used for managing translations of strings and text fragments within your Docusaurus project. It focuses on internationalizing non-Markdown content like static text, UI labels, and strings that are not part of your documentation or blog posts.

This command will generate translation files in the i18n directory of your Docusaurus project. Each locale will have its own translation file (e.g., en.json, es.json, etc.). These files contain the text that needs to be translated.

Use Cases: Use write-translations for internationalizing elements such as buttons, labels, error messages, and other non-documentation-specific text. It's more suitable for managing text used in your website's user interface or for displaying localized content based on the user's language preference.
```

### Markdown-Based Translations (Content Localization)

```
Markdown-based translations are used for translating the actual content of your documentation, blog posts, and other Markdown files. This approach allows you to provide alternate versions of your content in different languages.

You maintain separate Markdown files for each supported language, typically organized within language-specific folders (e.g., en for English, es for Spanish). Each Markdown file contains the translated content for that specific language.

```

### Markdown-Based Translations vs Write-translations

```

In summary, write-translations is primarily focused on managing non-Markdown text and string translations for elements such as UI labels and static text, while Markdown-based translations are used for translating the actual content of your documentation and blog posts.

To create a fully localized and multilingual website, you may use both approaches in combination: use write-translations for UI elements and strings, and use Markdown-based translations to provide content in multiple languages. This allows you to offer a complete and seamless multilingual experience to your users.

```


