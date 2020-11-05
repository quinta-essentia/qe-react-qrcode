all: examples/bundle.js

lib:
	mkdir -p lib

lib/index.js: lib src/qrCode.jsx .babelrc
	./node_modules/.bin/babel src -d lib

examples/bundle.js: lib/index.js examples/index.js webpack.config.js
	./node_modules/.bin/webpack

clean:
	rm -rf lib examples/bundle.js