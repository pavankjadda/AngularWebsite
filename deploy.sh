###

echo "Building project ..."
ng build --prod --output-path docs

echo "Copying dist folder contents to pavankjadda.github.io project directory"
cp -Rf "$HOME"/WebstormProjects/AngularWebsite/docs "$HOME"/WebstormProjects/pavankjadda.github.io/

echo "Copy index.html to 404.html"
cp "$HOME"/WebstormProjects/pavankjadda.github.io/index.html "$HOME"/WebstormProjects/pavankjadda.github.io/404.html
