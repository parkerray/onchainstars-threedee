set -e
npm run build
cd dist
echo > .nojekyll
echo 'www.parkerscode.com/onchainstars-threedee' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

cd -