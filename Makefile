setup:
	cd example && npm install
go:
	cd example && npm run dev
build:
	npm run build
publish:
	npm run build && npm publish
