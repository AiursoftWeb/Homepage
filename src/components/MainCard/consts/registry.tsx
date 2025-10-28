export const registry =
  `## Aiursoft 包管理服务器

Aiursoft 为了加速常见开发人员下载各类 ubuntu, arch, docker, nuget 的包的速度，正在建设一系列对于官方源的镜像站点。

### Ubuntu

你可以立刻使用 Aiursoft 自建的 Apt 包管理服务器。

[https://mirror.aiursoft.com/](https://mirror.aiursoft.com/)

配置方法：

\`\`\`bash
echo "
deb http://mirror.aiursoft.com/ubuntu/ jammy main restricted universe multiverse
deb http://mirror.aiursoft.com/ubuntu/ jammy-updates main restricted universe multiverse
deb http://mirror.aiursoft.com/ubuntu/ jammy-backports main restricted universe multiverse
deb http://mirror.aiursoft.com/ubuntu/ jammy-security main restricted universe multiverse
" | sudo tee /etc/apt/sources.list
\`\`\`

> 注意上面 jammy 是你的 Ubuntu 发行版代号 (这里是22.04)，你需要根据你的版本修改。

然后直接正常使用 apt 命令即可。

目前只允许阅读，不允许上传。但是这个服务器配置了自动化 Mirror，任何官方的 Ubuntu 包都会自动同步到这个服务器上。

### Nuget

你可以立刻使用 Aiursoft 自建的 Nuget 包管理服务器：

[https://nuget.aiursoft.com/](https://nuget.aiursoft.com/)

如果你想在项目中使用它，请在 '.sln' 文件所在的目录放置文件 'nuget.config'，并在其中写入以下内容：

\`\`\`xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <packageSources>
        <clear />
        <add key="nuget" value="https://nuget.aiursoft.com/v3/index.json" />
    </packageSources>
</configuration>
\`\`\`

目前只允许阅读，不允许上传。但是这个服务器配置了自动化 Mirror，任何官方的 Nuget 包都会自动同步到这个服务器上。

### Docker

你可以立刻使用 Aiursoft 自建的 Docker 镜像服务器：

[https://hub.aiursoft.com/](https://hub.aiursoft.com/)

如果你想使用它，请直接让你的项目以它作为源头去拉取镜像即可。

例如:

\`\`\`bash
docker pull hub.aiursoft.com/aiursoft/tracer:latest
\`\`\`

目前只允许阅读，不允许上传。

### ImmortalWrt

你可以立刻使用 Aiursoft 自建的 ImmortalWrt 包管理服务器：

[https://immortalwrt.aiursoft.cn/](https://immortalwrt.aiursoft.cn/)

你可以使用这个作为 ImmortalWrt 的源头，直接在 ImmortalWrt 的 Web 界面上添加这个源头即可，或使用它来编译你的 ImmortalWrt 固件。

\`\`\`bash
sed -i "s/https:\/\/downloads.immortalwrt.org/https:\/\/immortalwrt.aiursoft.cn/g" ./repositories.conf
\`\`\`

目前只允许阅读，不允许上传。

### NPM

如果你想使用 Aiursoft 的 NPM 镜像服务器来加速你的项目，请执行以下命令：

\`\`\`bash
npm set registry https://npm.aiursoft.com/
\`\`\`

或者，你可以在你的项目根目录下创建一个新的 '.npmrc' 文件，放在 'package.json' 同级目录，并添加以下内容：

\`\`\`
registry=https://npm.aiursoft.com/
\`\`\`

之后，你运行 'npm install' 就会使用 Aiursoft 的 NPM 镜像服务器来下载依赖包。

目前只允许阅读，不允许上传。但是这个服务器配置了自动化 Mirror，任何官方的 NPM 包都会自动同步到这个服务器上。

`;
