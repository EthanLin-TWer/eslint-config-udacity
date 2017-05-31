# Udacity Frontend Nanodegree Style Guide - JavaScript [![][Badges: Travis CI]][Links: Travis CI]

> READMEs in other languages:
>
> * [中文版](./README-zh.md)

This config checks for [Udacity Frontend Nanodegree Style Guide][] automatically. You can utilise this eslint config to check your projects before submit, or help check if a project meets [Udacity Frontend Nanodegree Style Guide][] as a reviewer.

## Get started

![readme-instructors](./readme-instructors.gif)

### prerequisite

* Make sure you have a globall Node/NPM or yarn installed. If not, you can download from [Nodejs.org][] and install Node/NPM, or use [nvm] to manage your Node installation; if NPM has been installed, you can run `npm i -g yarn` to install yarn globally
* Make sure there's a `package.json` under your project root. If not, you can initialise one by running `npm init`

### how to start

First, install these dependencies using NPM:


```bash
npm install --save-dev eslint eslint-config-udacity eslint-plugin-import
```

Using yarn:

```bash
yarn add --dev eslint eslint-config-udacity eslint-plugin-import
```

Then create a `.eslintrc.json` configuration file under your project root with the following content after you install the dependencies successfully:

```js
{
  "extends": "udacity"
}
```

You can achieve the same effect by running `echo '{ "extends": "udacity" }' > .eslintrc.json` under your project root:

Add the following npm `lint` scripts in your `package.json`:

```js
{
  ...
  "scripts": {
    "lint": "eslint ./**/*.js",
    ...
  }
}
```

Where `./**/*js` is the glob pattern of the location of your project files that need styling check, it can also be like `app/**/*.js` to match all *.js files recursively under the /apps folder, `src/*.js` to match all .js files in the /src folder, or you can even use `app/**/*.js src/*.js` combining the patterns to match multiple locations of your project.

Run `npm run lint`, and you should see the lint results!

## Others

> ⚠ This configuration is still not 100% perfect.

Some of the rules can't be covered by this eslint rule. Specifically, they're the following 4 rules, containing one required check and threes' are suggestion. Some of them(like be careful combining closure in DOM operation) are more like code logic lint, which is hard for eslint to check. In these cases, it requires careful manual check still.

* [\[required\] Function names should start with camelCase][camel-case-naming]
* [\[suggestion\] Avoid nested closure with DOM operation][nested-dom-closure]
* [\[suggestion\] Code comments are encouraged][code-comments]
* [\[suggestion\] Use for...in array loop is not recommended][for-in-loop]

## Contribution

1. fork the repo and submit your changes on a new branch
2. make sure you add tests if you are adding new rules/features, or at least provide reasons for not doing so
3. make sure the [build][Links: Travis CI] are all green before you submit a PR
4. raise a PR

## TODOLIST

See [TODOLIST.md](./TODOLIST.md).

## License

MIT

[Udacity Frontend Nanodegree Style Guide]: http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html
[Nodejs.org]: https://nodejs.org/en/
[nvm]: https://github.com/creationix/nvm

[camel-case-naming]: http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#naming
[nested-dom-closure]: http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#closures
[code-comments]: http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#comments
[for-in-loop]: http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop

[Badges: Travis CI]: https://travis-ci.org/linesh-simplicity/eslint-config-udacity.svg?branch=master
[Links: Travis CI]: https://travis-ci.org/linesh-simplicity/eslint-config-udacity