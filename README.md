# Osvita-Code Web programming

### Клонувати dev гілку з назвою git clone https://github.com/test-osvita-code-v2/web.git --brach dev web-dev
### Поруч клонувати main гілку з назвою git clone https://github.com/test-osvita-code-v2/web.git --brach main web

### Зайти у папку web-dev, npm install, зробити потрібні зміни
```bash
npm run build
git checkout dev
git add .
git commit -m "deploy"
git push origin dev
```

### з'явиться папка dist, з неї копіювати увесь зміст та замінити ним вміст папки web яка клоньована з main, перейти у папку web та запушити усі зміни 
```bash
git checkout main
git add .
git commit -m "deploy"
git push origin main
```



