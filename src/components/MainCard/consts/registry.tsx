export const registry =
  `## Aiursoft 包管理服务器

Aiursoft 为了加速常见开发人员下载各类 docker、nuget 的包的速度，正在建设一系列对于官方源的镜像站点。

### Nuget

你可以立刻使用 Aiursoft 自建的 Nuget 包管理服务器：

[https://nuget.aiursoft.cn/](https://nuget.aiursoft.cn/)

如果你想在项目中使用它，请在 '.sln' 文件所在的目录放置文件 'nuget.config'，并在其中写入以下内容：

\`\`\`xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <packageSources>
        <clear />
        <add key="nuget" value="https://nuget.aiursoft.cn/v3/index.json" />
    </packageSources>
</configuration>
\`\`\`

目前只允许阅读，不允许上传。但是这个服务器配置了自动化 Mirror，任何官方的 Nuget 包都会自动同步到这个服务器上。

### Docker

你可以立刻使用 Aiursoft 自建的 Docker 镜像服务器：

[https://hub.aiursoft.cn/](https://hub.aiursoft.cn/)

如果你想使用它，请直接让你的项目以它作为源头去拉取镜像即可。

例如:

\`\`\`bash
docker pull hub.aiursoft.cn/aiursoft/tracer:latest
\`\`\`

目前只允许阅读，不允许上传。

### NPM

正在建设中...

`;