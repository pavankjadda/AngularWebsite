# The personal website built with Angular

Website built using the latest Angular version

### How to deploy?
The project is deployed on GitHub Pages. To deploy, run the following command:
1. Build project using the following command and commit the changes
   ```shell script
   ng build --configuration production --output-path docs
   ```
2. Create new pull request to `gh-pages` branch or merge code into `gh-pages` branch
3. This step is optional. This will publish to [pavankjadda.github.io](https://github.com/pavankjadda/pavankjadda.github.io). Copy **dist/AngularWebsite** folder contents to pavankjadda.github.io project directory (in local machine)
   ```shell script
   cp -Rf docs/ /Users/pjadda/WebstormProjects/pavankjadda.github.io/
   cp /Users/pjadda/WebstormProjects/pavankjadda.github.io/index.html /Users/pjadda/WebstormProjects/pavankjadda.github.io/404.html
   ```
