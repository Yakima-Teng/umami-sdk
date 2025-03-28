# umami-sdk

<p align="center">
  <img src="./public/logo.svg" alt="logo">
</p>

> Umami is a simple, fast, privacy-focused alternative to Google Analytics.

This is a browser client SDK for umami, writing in Typescript.

## Before using

**Before using this client sdk, please ensure that you have added your tracking code in your frontend project.** It is something like this:

```html

<html lang="en">
<head>
  <title>umami.js</title>
  <!-- ... -->
  <script async defer data-website-id="<your-website-id>" data-auto-track="false" src="https://cloud.umami.is/script.js"></script>
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

Then you can use it as specified below.

### trackEvent

```typescript
import * as umami from 'umami-sdk'

// just report a custom event name
umami.trackEvent('header-login-button')

// or together with some event data
umami.trackEvent('header-login-button', { hello: 'world' })
```

### aopTrackEvent

```typescript
// 采用 AOP 的方式来封装一个高阶函数，避免手动到处在函数里添加 trackEvent 代码，实现优雅的埋点
import * as umami from "umami-sdk";
const add = (a: number, b: number) => a + b

// this will call add(1, 2), and report event of `event-name` with optional event data
umami.aopTrackEvent('event-name', add, { /* 可选的 event data */ })(1, 2)
```

### trackPayload

```typescript
import * as umami from 'umami-sdk'

// if you want to track pageview, just pass an empty object
umami.trackPayload({})

// if you want to customize the payload default value, you can pass a callback
umami.trackPayload((props) => {
    return {
        ...props,
    }
})

// actually, trackEvent is a sugar for trackPayload
umami.trackPayload({
  name: 'event-name',
  data: { /* event data */ }
})
```

### identifySession

```typescript
import * as umami from 'umami-sdk'

umami.identifySession({ email: 'bob@aol.com' })
```

## License

[MIT](./LICENSE).
