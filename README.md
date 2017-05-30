# Udacity 前端工程师纳米学位样式指南 - JavaScript

本仓库可以自动化执行 [Udacity Frontend Nanodegree Style Guide][] 要求的样式检查。无论你是需要提交纳米学位项目，或是帮忙 review 项目，你都可以使用这个仓库来做样式方面的自动化检查。

## 如何使用

### 软件需求

* 确保你有一个全局的 Node/NPM 或 yarn。如果没有，你可以在 [官网][Nodejs.org] 下载安装，或通过 [nvm][] 安装管理 node；若 NPM 已经安装，可使用 `npm i -g yarn` 安装 yarn
* 确保你的项目根目录下有一个 `package.json` 文件。如果没有，可使用 `npm init` 初始化一个

### 如何使用

安装以下依赖：

```js
npm install --save-dev eslint eslint-config-udacity eslint-plugin-import
```

或

```js
yarn add --dev eslint eslint-config-udacity eslint-plugin-import
```

依赖安装完成后，手动在根目录下添加一个 `.eslintrc.json` 文件，并写入以下内容：

```js
{
  "extends": "udacity"
}
```

你也可使用 `echo '{ "extends": "udacity" }' > .eslintrc.json` 完成上述写入操作。

在 `package.json` 文件的 `scripts` 段中添加以下一行：

```js
{
  ...
  "scripts": {
    "lint": "eslint ./**/*.js",
    ...
  }
}
```

其中，`./**/*.js` 可替换为你的项目下需要 lint 的文件路径，比如 `app/**/*.js`、`src/*.js`、`app/*.js src/*.js` 等。

运行 `npm run lint` 命令即可。

## License

MIT。

[Udacity Frontend Nanodegree Style Guide]: http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html
[Nodejs.org]: https://nodejs.org/en/
[nvm]: https://github.com/creationix/nvm