#!/bin/sh
set -eu

cd "$(dirname "$0")"

ROOT=$(pwd)
BIN="$ROOT/node_modules/.cache/freeze-bin"
mkdir -p "$(dirname "$BIN")"

go -C tools build -o "$BIN" github.com/charmbracelet/freeze

"$BIN" \
  --config "$ROOT/freeze.json" \
  --theme catppuccin-mocha \
  --background "#11111b" \
  --output "$ROOT/screenshot-dark.svg" \
  < "$ROOT/bin/card"

"$BIN" \
  --config "$ROOT/freeze.json" \
  --theme catppuccin-latte \
  --background "#dce0e8" \
  --output "$ROOT/screenshot-light.svg" \
  < "$ROOT/bin/card"
