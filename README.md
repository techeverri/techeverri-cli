[![CI](https://github.com/techeverri/techeverri-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/techeverri/techeverri-cli/actions/workflows/ci.yml) [![npm](https://img.shields.io/npm/v/techeverri)](https://www.npmjs.com/package/techeverri)

# Tomas Echeverri

My terminal business card — run `npx techeverri`

| Dark                                                                            | Light                                                                             |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [![dark mode](./screenshot-dark.svg)](https://www.npmjs.com/package/techeverri) | [![light mode](./screenshot-light.svg)](https://www.npmjs.com/package/techeverri) |

## Usage

```sh
npx techeverri
```

Print a QR code for https://techeverri.dev:

```sh
npx techeverri --qr
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

Regenerate the screenshots with `bun run screenshot` (requires Go 1.24+)

Inspired by [bitandbang](https://github.com/bnb/bitandbang)'s card
