install:
	npm ci

brain-games:
	node bin/brain-games.js
prettier:
	npx prettier --write .

publish: 
	npm publish --dry-run
lint: 
	npx eslint .
lint-fix: 
	npx eslint --fix .
