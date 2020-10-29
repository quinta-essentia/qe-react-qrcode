echo "Build qe-react-qrcode"

rm -r dist
mkdir dist
cp package.public.json dist/package.json

./node_modules/.bin/babel ./src/components/blocks --out-dir dist --extensions ".js,.jsx" --env-name prod
./node_modules/.bin/babel ./index.js --out-file dist/index.js --env-name prod
