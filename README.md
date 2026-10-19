[![CI](https://github.com/techeverri/techeverri-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/techeverri/techeverri-cli/actions/workflows/ci.yml) [![npm](https://img.shields.io/npm/v/techeverri)](https://www.npmjs.com/package/techeverri)

# techeverri

My npm card

[![techeverri npm card](./screenshot.svg)](https://www.npmjs.com/package/techeverri)

## Usage

```sh
npx techeverri
```

Requires Node.js 16+

## Development

Requires [Bun](https://bun.sh/)

```sh
bun install
bun run build
bun test
```

Other scripts are in `package.json`

Regenerate the screenshot with `bun run screenshot` (requires Go 1.24+)

Inspired by [bitandbang](https://github.com/bnb/bitandbang)'s card
