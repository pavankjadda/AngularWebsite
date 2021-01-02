### Before upgrade
git add .
git commit -m "Before Upgrade"
git push origin development

### Upgrade
ng update --all --force
npm i typescript@4.0.5 --save
npm install
npm audit fix

### After upgrade
git add .
git commit -m "After Upgrade"
git push origin development
