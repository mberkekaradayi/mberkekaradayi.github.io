#!/usr/bin/env bash
set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

git config core.hooksPath .githooks
chmod +x .githooks/pre-push

echo "Git hooks enabled for this repo (core.hooksPath=.githooks)"
echo "Pushes to main will run: npm run lint && npm run typecheck in mbk/"
