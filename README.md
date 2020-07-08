# Angular Website

Website rebuilt using Angular 

### How to deploy?
1. Build project using the following command
    ```shell script
    ng build --prod --output-path docs 
    ```
2. Copying **dist/AngularWebsite** folder contents to pavankjadda.github.io project directory (in local machine)
    ```shell script
    cp -Rf docs/ /Users/pjadda/WebstormProjects/pavankjadda.github.io/
    cp /Users/pjadda/WebstormProjects/pavankjadda.github.io/index.html /Users/pjadda/WebstormProjects/pavankjadda.github.io/404.html
    ```
