#!/bin/bash

npm run build && npm version patch && npm publish --access public && git push && git push --tags
