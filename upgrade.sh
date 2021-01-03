### Before upgrade
git add .
git commit -m "Before Upgrade"
git push origin development

### Upgrade
npm update
npm i typescript@4.0.5 --save
npm audit fix

### After upgrade
git add .
git commit -m "After Upgrade"
git push origin development
