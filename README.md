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

## QA

Q：使用 create-react-app 4.0.1 创建一个项目，若之前全局安装过 create-react-app，需要先卸载掉之前安装的 create-react-app。发现使用 npm uninstall create-react-app -g 或者 yarn 卸载后，执行 npx create-react-app viking-fortunate --template typescript 依然会报同样的错误。
A：环境：Node v15.0.1，执行 npm install -g npm@latest 升级 npm 版本到 6.14.10，之前的版本是 6.14.6，再使用 npx 即可成功安装并初始化项目。
git issues：
（npx 与 npm 的版本是一样的，npx：包运行器，临时安装包，项目初始化成功以后，会将 create-react-app 删除，不会污染全局环境；npm：包管理器）

Q：执行 npm run start 后，App.tsx 文件代码报错 Could not find a declaration file for module 'react/jsx-runtime'。
A：create-react-app 4.0.1 默认安装的 typeScript 是 ^4.0.3 版本，固定版本为 4.1.2 后执行 npm install 后即可。
git issues：https://github.com/facebook/create-react-app/issues/10109

test
