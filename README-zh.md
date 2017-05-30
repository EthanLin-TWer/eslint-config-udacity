# Udacity 前端工程师纳米学位样式指南 - JavaScript

本仓库可以自动化执行 [Udacity Frontend Nanodegree Style Guide][] 要求的样式检查。无论你是需要提交纳米学位项目，或是帮忙 review 项目，你都可以使用这个仓库来做样式方面的自动化检查。

## 如何使用

![readme-instructors](./readme-instructors.gif)

### 软件需求

* 确保你有一个全局的 Node/NPM 或 yarn。如果没有，你可以在 [官网][Nodejs.org] 下载安装，或通过 [nvm][] 安装管理 node；若 NPM 已经安装，可使用 `npm i -g yarn` 安装 yarn
* 确保你的项目根目录下有一个 `package.json` 文件。如果没有，可使用 `npm init` 初始化一个

### 如何使用

安装以下依赖：

```bash
npm install --save-dev eslint eslint-config-udacity eslint-plugin-import
```

或

```bash
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

## 其他事项

> ⚠ 这份配置仍不是100%自动化、完善的。

目前，有一些规则还没有办法覆盖到，它们是以下4个规则，其中1个是必须的检查，3个是建议事项，并且也有些是代码逻辑上的问题（比如 DOM 操作与闭包），样式检查工具无法触及，仍然需要人工 review。

* [【必须】函数名字必须以 camelCase 开头][camel-case-naming]
* [【建议】避免 DOM 与闭包相连生成循环引用][nested-dom-closure]
* [【建议】鼓励代码注释][code-comments]
* [【建议】不鼓励使用 for ... in array 来循环数组][for-in-loop]

## License

MIT。

[Udacity Frontend Nanodegree Style Guide]: https://github.com/udacity/frontend-nanodegree-styleguide-zh/blob/master/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%88%E7%BA%B3%E7%B1%B3%E5%AD%A6%E4%BD%8D%E6%A0%B7%E5%BC%8F%E6%8C%87%E5%8D%97%20-%20JavaScript.md
[Nodejs.org]: https://nodejs.org/en/
[nvm]: https://github.com/creationix/nvm

[camel-case-naming]: https://github.com/udacity/frontend-nanodegree-styleguide-zh/blob/master/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%88%E7%BA%B3%E7%B1%B3%E5%AD%A6%E4%BD%8D%E6%A0%B7%E5%BC%8F%E6%8C%87%E5%8D%97%20-%20JavaScript.md#%E5%91%BD%E5%90%8D
[nested-dom-closure]: https://github.com/udacity/frontend-nanodegree-styleguide-zh/blob/master/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%88%E7%BA%B3%E7%B1%B3%E5%AD%A6%E4%BD%8D%E6%A0%B7%E5%BC%8F%E6%8C%87%E5%8D%97%20-%20JavaScript.md#%E9%97%AD%E5%8C%85
[code-comments]: https://github.com/udacity/frontend-nanodegree-styleguide-zh/blob/master/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%88%E7%BA%B3%E7%B1%B3%E5%AD%A6%E4%BD%8D%E6%A0%B7%E5%BC%8F%E6%8C%87%E5%8D%97%20-%20JavaScript.md#%E6%B3%A8%E9%87%8A
[for-in-loop]: https://github.com/udacity/frontend-nanodegree-styleguide-zh/blob/master/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%88%E7%BA%B3%E7%B1%B3%E5%AD%A6%E4%BD%8D%E6%A0%B7%E5%BC%8F%E6%8C%87%E5%8D%97%20-%20JavaScript.md#for-for-in-%E5%92%8C-foreach
