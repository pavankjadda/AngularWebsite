### Before upgrade
git add .
git commit -m "Before Upgrade"
git push origin development

### Upgrade
ng update --all --force
npm install zone.js@0.9.1 typescript@3.5.3 --save
npm install

### After upgrade
git add .
git commit -m "After Upgrade"
git push origin development
