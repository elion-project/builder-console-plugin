[![MIT License](https://img.shields.io/npm/l/@node-elion/builder-console-plugin.svg?)](https://www.npmjs.com/package/@node-elion/builder-console-plugin)
[![View this project on NPM](https://img.shields.io/npm/v/@node-elion/builder-console-plugin.svg)](https://npmjs.org/package/@node-elion/builder-console-plugin)
[![View this project on NPM](https://img.shields.io/npm/dm/@node-elion/builder-console-plugin.svg)](https://npmjs.org/package/@node-elion/builder-console-plugin)

# @node-elion/builder-console-plugin

> Ability to modify console output from app for projects, that based on `@node-elion/builder`

this package is part of the [Elion project](https://github.com/elion-project).

This package is a plugin and adds the ability to add prefixes and suffixes for console outputs in a project that is based on [@node-elion/builder](https://github.com/elion-project/builder) library.

## Installation

Install `@node-elion/builder-console-plugin` with npm

> This package is recommended to be installed as a dev dependency

```shell
npm i --save-dev @node-elion/builder-console-plugin
```

## Usage

Update `start` and `build` commands to be able to use `@node-elion/builder-console-plugin` package:

```json5
/* package.json */
{
    /*...*/
    "scripts": {
        "start": "ebi start -p @node-elion/builder-console-plugin",
        "build": "ebi build -p @node-elion/builder-console-plugin"
    }
    /*...*/
}
```

## Plugin configuration

### Supported console types
|   type    | description                     |
|:---------:|---------------------------------|
|   `log`   | `console.log` or `console.info` |
|  `warn`   | `console.warn`                  |
|  `error`  | `console.error`                 |
|  `debug`  | `console.debug`                 |
|  `time`   | `console.time`                  |
| `timeLog` | `console.timeLog`               |
| `timeEnd` | `console.timeEnd`               |
|  `trace`  | `console.trace`                 |


|       parameter |   type   | default | description                                                                                                                    |
|----------------:|:--------:|:-------:|:-------------------------------------------------------------------------------------------------------------------------------|
|        `prefix` | `string` | `null`  | prefix string for console output; works for all types as fallback                                                              |
|        `suffix` | `string` | `null`  | suffix string for console output; works for all types as fallback                                                              |
| `prefix-[type]` | `string` | `null`  | prefix string for console output of specific type. For example, `prefix-log` will be used for `console.log` and `console.info` |
| `suffix-[type]` | `string` | `null`  | suffix string for console output of specific type. For example, `suffix-log` will be used for `console.log` and `console.info` |

## Contributing

Contributions are always welcome!

See [CONTRIBUTING.md](./CONTRIBUTING.md) for ways to get started.

## License

[MIT](https://choosealicense.com/licenses/mit/)
