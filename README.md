# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

## 安裝webpack

在安裝時若遇到此問題是因為npm的bug導致
```
npm ERR! code ERESOLVE
npm ERR! Cannot read property 'length' of undefined
```
Temporary solutions:

* Use --legacy-peer-deps(以npm版本4到版本6的樣式安裝時，忽略所有peerDependencies)  
* Use Node.js 14.x / NPM 6.x

[參考網址](https://github.com/webpack/webpack-dev-server/issues/2851)
## 安裝webpack-dev-server

遇到一個問題如果使用要啟動server時使用
```
    "start": "cross-env NODE_ENV=development webpack serve",
```
會出現錯誤
```
Error: Cannot find module 'webpack-cli/bin/config-yargs'
Require stack:
- /Users/cyberbiz/Desktop/react/shopee_clone/node_modules/webpack-dev-server/bin/webpack-dev-server.js
```
解決方式：
使用`webpack serve`
[參考網址](https://stackoverflow.com/questions/40379139/cannot-find-module-webpack-bin-config-yargs)

如果又遇到一個問題

```
[webpack-cli] TypeError: validateOptions is not a function
```
那麼可以下 `npm update` 解決

## eslint

忽略某些語法不檢查可以在語法後面加上

```
var ignoreESLintLine = 0; // eslint-disable-line
// or
/* eslint-disable */
var a = 0;
var b = 1;
/* eslint-enable */
```

如果想要忽略整個專案請到 `.eslintignore` 填入檔案名稱

ex: 
```
build
dist
node_modules
public
src/IMHappyCode.js
!.eslintrc.js
```
