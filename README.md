# Discord Message Processor ## Client / Browser only
Discord Message Processor is a simple javascript function that converts a html message into a text.

## How to use it?
Just open up the devtools in your browser / client by perssing ctrl + shift + i then paste the function into the console, after that go back to Discord, copy a message id and type `formatMessage('paste your copied message here')`, press enter, and voila! here is your formatted message.

## Supported Components
Bold text (**)
Italic text (* or \_)
Underline text (__)
Spoilers (||)
Quotes (>)
Strikethrough text (\~~)
Inline code blocks (\` and \`\`)
Code blocks (\`\`\`)

## Not Supported Components
Colored / Language Code blocks
\`\`\`js
// js is awesome!
\`\`\`

Links (https:// or http://)

## Devtools Problem ## Client only problem
Discord recently had an update where they disabled the devtools, here is how to fix it.

Go to `%appdata%\discord` and open `settings.json` then add `  "DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true` before the last `}`.
After that, relaunch Discord and you can now open the devtools.

### Sponsors
Bitty - https://bittybot.cf/
