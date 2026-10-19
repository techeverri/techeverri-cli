#!/bin/sh
set -eu

cd "$(dirname "$0")"

if command -v vhs >/dev/null 2>&1; then
  vhs screenshot-light.tape
  vhs screenshot-dark.tape
else
  HOME_DIR=$(mktemp -d)
  trap 'rm -rf "$HOME_DIR"' EXIT

  docker run --rm \
    --user "$(id -u):$(id -g)" \
    -e HOME=/home/vhs \
    -v "$PWD:/vhs" \
    -v "$HOME_DIR:/home/vhs" \
    --entrypoint sh \
    ghcr.io/charmbracelet/vhs \
    -c 'vhs screenshot-light.tape && vhs screenshot-dark.tape'
fi
