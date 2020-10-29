echo "Build qe-react-qrcode"

rm -r dist
mkdir dist
cp package.public.json dist/package.json

./node_modules/.bin/babel ./elements --out-dir dist/elements --extensions ".js,.jsx" --env-name prod
./node_modules/.bin/babel ./form --out-dir dist/form --extensions ".js,.jsx" --env-name prod
./node_modules/.bin/babel ./services --out-dir dist/services --extensions ".js,.jsx" --env-name prod
./node_modules/.bin/babel ./utilities --out-dir dist/utilities --extensions ".js,.jsx" --env-name prod
./node_modules/.bin/babel ./index.js --out-file dist/index.js --env-name prod

./node_modules/.bin/copyfiles "./elements/**/*.png" dist
./node_modules/.bin/copyfiles "./form/**/*.png" dist

./node_modules/.bin/copyfiles "./elements//**/*.d.ts" dist
./node_modules/.bin/copyfiles "./form/**/*.d.ts" dist