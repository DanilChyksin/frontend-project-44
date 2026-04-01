install:
	npm ci
prettier:
	npx prettier --write .

publish: 
	npm publish --dry-run
lint: 
	npx eslint .
lint-fix: 
	npx eslint --fix .
