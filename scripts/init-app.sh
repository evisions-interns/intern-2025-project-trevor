#!/bin/bash

pnpm create t3-app@latest install

rm -rf ./install/.git

cp -r ./install/. .

rm -rf ./install