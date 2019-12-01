###

echo "Building project ..."
ng build --prod --output-path docs --base-href pavankjadda.github.io

echo "Copying dist folder contents to pavankjadda.github.io project directory"
cp -Rf dist/AngularWebsite/ /Users/pjadda/WebstormProjects/pavankjadda.github.io/

echo "Copy index.html to 404.html"
cp /Users/pjadda/WebstormProjects/pavankjadda.github.io/index.html /Users/pjadda/WebstormProjects/pavankjadda.github.io/404.html
