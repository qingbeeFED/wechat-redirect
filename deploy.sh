echo '部署前端'
cd ./example/front

echo '安装前端依赖...'
npm i

echo 'build前端...'
npm run build
echo '前端部署完成'

cd ./../../
echo '安装服务端依赖...'
npm i

echo '启动node服务器'
pm2 restart pm2.config.js