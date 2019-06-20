echo '部署前端'
cd ./example/front
cnpm i
npm run build
echo '前端部署完成'

echo '启动node服务器'
cd ./../../
pm2 restart pm2.config.js