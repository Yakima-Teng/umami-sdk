# umami-sdk

<p align="center">
  <img src="./public/logo.svg" alt="logo">
</p>

> Umami is a simple, fast, privacy-focused alternative to Google Analytics.

This is a Typescript SDK for umami, using in browser.

## Before using

**Before using this client sdk, please ensure that you have added your tracking code in your frontend project.** It is something like this:

```html

<html lang="en">
<head>
  <title>umami.js</title>
  <!-- ... -->
  <script async defer data-website-id="<your-website-id>" src="<https://your-website.com>/umami.js"></script>
  <!-- ... -->
</head>
<body>
<!-- ... -->
</body>
</html>
```

For more information, please refer to the [official documentation](https://umami.is/docs).

## How to use

First, install the package:

```bash
npm install -S umami-sdk
```

Then you can use it like this:

```typescript
import { trackEvent } from 'umami-sdk'

// just report a custom event name
trackEvent('header-login-button')

// or together with some event data
trackEvent('header-login-button', { hello: 'world' })
```

## License

[MIT](./LICENSE).
