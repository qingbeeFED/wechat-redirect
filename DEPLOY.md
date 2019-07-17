# 💻部署DEMO站点 
通过[PM2](http://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/)或者[Docker](https://docs.docker.com/get-started/)部署demo站点到自己服务器上 **（推荐docker）**

#### nginx需要根据自己实际情况进行修改!（例如各种日志路径和include路径 否则部署肯定失败！）

### ✅Docker部署

Platform
  - linux

Requirements
  - nginx
  - docker
  - docker-compose

配置nginx服务
```bash
# 修改项目根目录的nginx.conf文件
server {
      listen 80 default_server;
      listen [::]:80 default_server;
      server_name wxredirect.jslab.fun; #这里需要配置成自己域名
      ...
      
server {
      listen 80;
      server_name api.jslab.fun; #这里需要配置成自己域名
```

```bash
# 项目根目录
docker-compose up -d
# 完成之后应该会有如下输出 ✅
Recreating wechat-redirect_web_1 ... done
# 启动nginx服务
nginx -s stop
nginx -c 项目根目录/nginx.conf
# demo网站部署完毕 👨🏼‍🍳
```

### ✅PM2部署
Platform
  - linux

Requirements
  - nginx
  - nodejs [[doc]](https://nodejs.org)

同样先配置nginx服务
```bash
# 修改项目根目录的nginx.conf文件
server {
      listen 80 default_server;
      listen [::]:80 default_server;
      server_name wxredirect.jslab.fun; #这里需要配置成自己域名

server {
      listen 80;
      server_name api.jslab.fun; #这里需要配置成自己域名
      ...
```

```bash
# 安装pm2
npm install -g pm2
# 编译前端代码
cd exmaple/front
npm install
npm run build
cd -  #回到项目根目录
npm install

# 启动pm2守护服务
pm2 start --env=production
# 成功之后pm2会输出类似如下信息
┌─────────────────┬────┬─────────┬─────────┬───────┬────────┬─────────┬────────┬──────┬───────────┬──────┬──────────┐
│ App name        │ id │ version │ mode    │ pid   │ status │ restart │ uptime │ cpu  │ mem       │ user │ watching │
├─────────────────┼────┼─────────┼─────────┼───────┼────────┼─────────┼────────┼──────┼───────────┼──────┼──────────┤
│ WX REDIRECT API │ 0  │ 1.0.0   │ cluster │ 14585 │ online │ 0       │ 0      │ 0.2% │ 48.6 MB   │ root │ disabled │
│ WX REDIRECT API │ 1  │ 1.0.0   │ cluster │ 14594 │ online │ 0       │ 0      │ 0.2% │ 49.6 MB   │ root │ disabled │
└─────────────────┴────┴─────────┴─────────┴───────┴────────┴─────────┴────────┴──────┴───────────┴──────┴──────────┘
```
启动nginx服务

```bash
nginx -s stop
nginx -c 项目根目录/nginx.conf
```
