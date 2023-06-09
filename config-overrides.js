const {
    override,
    addWebpackAlias
} = require('customize-cra');
const path = require('path');
module.exports = override(
    addWebpackAlias({
        '@': path.resolve(__dirname, './src')
    }),
    (config, env) => {
        // 添加 react-snap 配置
        if (env === 'production') {
            const prerenderedPath = path.join(__dirname, 'build');
            config.output.path = prerenderedPath;
            config.plugins.push(
                new (require('react-snap'))({
                    // 配置要进行预渲染的路径
                    // 这里可以添加你希望预渲染的路径，如主页、内部页面等
                    // 可以使用正则表达式来匹配多个路径
                    // 这里的示例是将所有路径都进行预渲染
                    // 注意：这可能会增加构建时间和生成的文件大小
                    // 需要根据你的项目具体需求进行配置
                    source: 'build',
                    destination: prerenderedPath,
                    // 这里可以添加其他 react-snap 的配置选项
                })
            );
        }
        return config;
    }
)