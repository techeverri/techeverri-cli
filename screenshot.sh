#!/bin/sh
set -eu

cd "$(dirname "$0")"

ROOT=$(pwd)
BIN="$ROOT/node_modules/.cache/freeze-bin"
BUN=$(command -v bun)
mkdir -p "$(dirname "$BIN")"

go -C tools build -o "$BIN" github.com/charmbracelet/freeze

"$BIN" \
  --execute "\"$BUN\" \"$ROOT/bin/cli.js\"" \
  --output "$ROOT/screenshot.svg" \
  --window \
  --theme dracula \
  < /dev/null
