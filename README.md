[![CI](https://github.com/techeverri/techeverri-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/techeverri/techeverri-cli/actions/workflows/ci.yml) [![npm](https://img.shields.io/npm/v/techeverri)](https://www.npmjs.com/package/techeverri)

# techeverri

My npm card

| Dark                                                                            | Light                                                                             |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [![dark mode](./screenshot-dark.png)](https://www.npmjs.com/package/techeverri) | [![light mode](./screenshot-light.png)](https://www.npmjs.com/package/techeverri) |

## Usage

```sh
npx techeverri
```

Requires Node.js 22+

## Development

Requires [Bun](https://bun.sh/)

```sh
bun install
bun run build
bun test
```

Other scripts are in `package.json`

Regenerate the screenshots with `bun run screenshot` (requires VHS or Docker)

Inspired by [bitandbang](https://github.com/bnb/bitandbang)'s card
