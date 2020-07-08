###

echo "Building project ..."
ng build --prod --output-path docs

echo "Copying dist folder contents to pavankjadda.github.io project directory..."
cp -Rf "$HOME"/WebstormProjects/AngularWebsite/docs/ "$HOME"/WebstormProjects/pavankjadda.github.io/
echo "Copied dist folder contents to pavankjadda.github.io project directory..."

echo "Coping index.html to 404.html..."
cp "$HOME"/WebstormProjects/pavankjadda.github.io/index.html "$HOME"/WebstormProjects/pavankjadda.github.io/404.html
echo "Copied index.html to 404.html"

echo "Moving to pavankjadda.github.io project directory and committing code.."
cd "$HOME"/WebstormProjects/pavankjadda.github.io/ && git add . && git commit -m "Latest Update" && git push origin master
echo "Pushed code to pavankjadda.github.io Github"
