# useLockBodyScroll

> React hook to lock body scroll

> **Note:** This is using the new [React Hooks API](https://reactjs.org/docs/hooks-intro.html)
>
> You'll need to install `react`, `react-dom`, etc at `^16.8.0` or above

## Install

```sh
yarn add @alobato/use-lock-body-scroll
```

## Usage

```js
import useLockBodyScroll from '@alobato/use-lock-body-scroll'

export default memo(() => {
  if (hasBackdrop) useLockBodyScroll()
  ...
