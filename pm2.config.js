const config = {
    apps: [
        {
            name: 'WEIXIN.IMCOCO_8996',
            script: './index.js', // 实际启动脚本
            cwd: './', // "当前工作路径"
            node_args: '--harmony', // node运行模式
            max_memory_restart: '50M',
            instances: '1',
            exec_mode: 'cluster',
            watch: false,
            error_file: './logs/pm2_errors.log', // 错误日志路径
            out_file: './logs/pm2_out.log', // 普通日志路径
            log_date_format: 'YYYY-MM-DD HH:mm Z', // 日期格式
            env: {
                NODE_ENV: 'production',
                PORT: 8996,
            }
        },
    ],
};

module.exports = config;
