<p align="center">
  <img width="128" src="https://i.imgur.com/sY8LqKi.png">
  <br><br>
  <img src="https://david-dm.org/nurdism/electron-nuxt-boilerplate/status.svg" alt="Dependencies Status">
  <img src="https://david-dm.org/nurdism/electron-nuxt-boilerplate/dev-status.svg" alt="Dev Dependencies Status">
  <img src="https://img.shields.io/github/tag/nurdism/electron-nuxt-boilerplate.svg" alt="Github Tag">
  <img src="https://img.shields.io/github/downloads/nurdism/electron-nuxt-boilerplate/latest/total.svg" alt="Downloads">
  <a href="https://discord.gg/Kzkd6V3" ><img src="https://discordapp.com/api/guilds/428366869993488401/widget.png" alt="Chat on discord"><a/>
</p>

# electron-nuxt-boilerplate

A starter project template that combines [Nuxt.js](https://github.com/nuxt/nuxt.js) with [Electron](https://electronjs.org/).

## Screenshot

![Electron Boilerplate Demo](https://i.imgur.com/sRFJaCs.gif)

## Install

* **Note: requires a node version >= 8 and an npm version >= 4.**

First, clone the repo via git:

```bash
git clone --depth=1 https://github.com/nurdism/electron-nuxt-boilerplate.git your-project-name
```

And then install dependencies with yarn.

```bash
$ cd your-project-name
$ yarn
```
**Note**: If you can't use [yarn](https://github.com/yarnpkg/yarn), run `npm install`.

## Run

Start the app in the `dev` environment.

```bash
$ npm run dev
```

## Packaging

To package apps for the local platform:

```bash
$ npm run package
```

To package apps for all platforms:

First, refer to [Multi Platform Build](https://www.electron.build/multi-platform-build) for dependencies.

Then,
```bash
$ npm run package-all
```

To package apps with options:

```bash
$ npm run package -- --[option]
```

## How to add modules to the project

You will need to add other modules to this boilerplate, depending on the requirements of your project. For example, you may want to add [node-postgres](https://github.com/brianc/node-postgres) to communicate with PostgreSQL database, or
[material-ui](http://www.material-ui.com/) to reuse react UI components.

⚠️ Please read the following section before installing any dependencies ⚠️

### Module Structure

This boilerplate uses a [two package.json structure](https://github.com/electron-userland/electron-builder/wiki/Two-package.json-Structure). This means, you will have two `package.json` files.

1. `./package.json` in the root of your project
1. `./src/package.json` inside `src` folder

### Which `package.json` file to use

**Rule of thumb** is: all modules go into `./package.json` except native modules. Native modules go into `./app/package.json`.

1. If the module is native to a platform (like node-postgres) or otherwise should be included with the published package (i.e. bcrypt, openbci), it should be listed under `dependencies` in `./src/package.json`.
2. If a module is `import`ed by another module, include it in `dependencies` in `./package.json`.   See [this ESLint rule](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md). Examples of such modules are `material-ui`, `redux-form`, and `moment`.
3. Otherwise, modules used for building, testing and debugging should be included in `devDependencies` in `./package.json`.

## How to keep your project updated with the boilerplate

If your application is a fork from this repo, you can add this repo to another git remote:

```sh
git remote add upstream https://github.com/nurdism/electron-nuxt-boilerplate.git
```

Then, use git to merge some latest commits:

```sh
git pull upstream master
```

## Maintainers

- [Nurdism](https://github.com/nurdism)

## License
MIT © [Nurdism](https://github.com/nurdism)
