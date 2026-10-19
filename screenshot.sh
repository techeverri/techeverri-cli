#!/bin/sh
set -eu

cd "$(dirname "$0")"

ROOT=$(pwd)
BIN="$ROOT/node_modules/.cache/freeze-bin"
BUN=$(command -v bun)
mkdir -p "$(dirname "$BIN")"

go -C tools build -o "$BIN" github.com/charmbracelet/freeze

"$BIN" \
  --config "$ROOT/freeze.json" \
  --theme catppuccin-mocha \
  --background "#11111b" \
  --execute "\"$BUN\" \"$ROOT/bin/cli.js\"" \
  --output "$ROOT/screenshot-dark.svg" \
  < /dev/null

"$BIN" \
  --config "$ROOT/freeze.json" \
  --theme catppuccin-latte \
  --background "#dce0e8" \
  --execute "\"$BUN\" \"$ROOT/bin/cli.js\"" \
  --output "$ROOT/screenshot-light.svg" \
  < /dev/null
