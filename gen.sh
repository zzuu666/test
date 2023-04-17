#!/usr/bin/env bash

DOMAIN=github.com
ORIGIN=origin
REPO=NotJHSN/test
DEFAULT_BRANCH=master
TOTAL=5

set -ex

function create_pr() {
  git checkout $DEFAULT_BRANCH
  git branch -D "$2" || echo branch not found
  git checkout -b "$2" $ORIGIN/$DEFAULT_BRANCH
  date >>"$2".txt
  git add .
  git commit -m "test: update $2.txt"
  git push -f "$1" "$2"
}

if [ -n "$2" ]; then
  TOTAL=$2
fi

INIT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
git fetch $ORIGIN $DEFAULT_BRANCH
git checkout $DEFAULT_BRANCH
git rebase $ORIGIN/$DEFAULT_BRANCH
for ((i = 1; i <= TOTAL; i++)); do
  create_pr $ORIGIN "pr$i"
done
git checkout $INIT_BRANCH

set +x
for ((i = 1; i <= TOTAL; i++)); do
  echo "https://$DOMAIN/$REPO/pull/new/pr$i"
done
