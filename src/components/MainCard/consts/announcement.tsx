export const announcement =
  `
## 全面容器化

为了方便维护、扩展、测试和部署，我们正在全面的将数据中心的所有服务容器化。这需要我们对整个数据中心进行声明式的重构。

我们使用了 Docker 来容器化所有的服务。并且使用了 Docker Swarm 来进行服务的编排。最终，我们将全部声明式的代码签入了 [GitLab](https://gitlab.aiursoft.cn/aiursoft/box)，并且使用了 GitLab CI/CD 来进行自动化的构建、测试、部署。

是的，现在整个工作已经全部完成了，对于用户来说是没有任何感知的。但是对于我们来说，这是一个巨大的进步。

## 信息安全的实践和检查

为了确保数据中心的安全，我们正在进行一系列的安全检查和实践。

我们启用了一系列的安全措施，包括但不限于：

* 开启 HSTS
* 强制使用 DNSSEC
* 强制使用全站 DNSCAA
* 通过了 SSLABS 的 A+ 评级

我们也启用了一系列体验相关的措施，包括但不限于：

* 开启了 基于 QUIC 的 HTTP/3
* 支持了 IPv6
* 使用 Brotli 压缩算法
* 使用了 BBR 来优化拥塞控制和 cake 来优化队列管理

当然，我们也对上面的检查项目重新梳理了一份 [Web 应用开发检查单](https://anduin.aiursoft.cn/post/2024/3/1/web-checklist) 供大家参考。

## 加速包管理

Aiursoft 为了加速常见开发人员下载各类 docker、nuget、apt、npm 的包的速度，正在建设一系列对于官方源的镜像站点。

立刻点击下方广场的 “包库” 按钮，体验一下吧！

## 跑它！ CppRunner！

总是有人问你怎么搭建开发环境？找到了一片碎片的代码想知道跑起来是什么结果？快速搓了一个函数不知道对不对？

是的！很多时候你懒得搭建开发环境，或者你只是想快速跑一下代码，看看结果。这个时候，就需要 CppRunner 了！别看它名字叫 CppRunner，它其实是一个通用的代码运行器，支持了常见的17种语言。

你可以在 [https://cpprunner.aiursoft.cn/](https://cpprunner.aiursoft.cn/) 体验一下。

以后快速徒手搓一些用来测试的代码有福了！希望它能帮助到你和你的朋友们提高效率，也能帮助无数初学者快速验证自己的代码。

**CppRunner 有奖骇入大赛**

CppRunner 是一个开源项目，我们很想挑战一下构造一个安全的远程代码执行环境。如果你能使用它实现：

* 访问主机的机密文件 "/etc/fstab"
* 向第三方服务器发出任何网络请求
* 使服务器宕机 （除了 DDOS）

你都算找到了它的一个安全漏洞！我们将立刻送上 2048 元奖金。请将漏洞发送到 [anduin@aiursoft.com](mailto://anduin@aiursoft.com)。请附加详细的复现步骤。

凭此通告，Aiursoft 授权所有人可以以任何方式骇入 CppRunner 服务器，并且此行为不会被视为违反 Aiursoft 的服务条款，也不会被视为违反任何法律。

## Gist 代码片段服务

我们部署了一款 Gist 服务。你可以在 [https://gist.aiursoft.cn/](https://gist.aiursoft.cn/) 体验一下。

Gist 是一个代码片段分享服务。你可以在这里分享你的代码片段，也可以在这里查看别人分享的代码片段。相比于又是我懒得创建一个完整的代码仓库，只是想快速归档一个我觉得写的有趣的小代码，Gist 是一个非常好的选择。

## ManHours 计算器

我们开发了一款人时计算器，可以快速帮你计算一个项目一共花了多长时间来开发。

只需要打开 [ManHours](https://manhours.aiursoft.cn)，将你的 Git 仓库的链接粘贴进去，就可以快速的计算出你的项目一共花了多少人时来开发。

你可以将计算的结果作为一个 Badge 粘贴到你的项目的 README 中，来展示你的项目的开发时间。

（注意：只支持公开仓库）

## 显示器 PPI 计算器

我们开发了一个显示器 PPI 计算器，可以帮助你快速计算显示器的 PPI 值。

这可以有效的帮助你选择显示器，或者计算显示器的 PPI 值。下次选购笔记本、台式机显示器时，可以买一台 PPI 是 96 整数倍的显示器来避免缩放问题啦~

输入你的分辨率和屏幕尺寸，就可以得到你的显示器 PPI 值，并且根据你输入的缩放比例计算出显示的文字大小。

快打开 [https://anduin.aiursoft.cn/page/scale](https://anduin.aiursoft.cn/page/scale) 体验一下吧！

## 远程桌面连接解决方案

为了方便大家快速帮助其他人解决问题，我们建设了一款不需要注册、不需要复杂配置的快速屏幕分享、远程桌面连接解决方案。

请在右侧点击“远程桌面连接”与好友体验一下吧！

我们在建设前，审核了它的全部开源代码，确保了此项目是无恶意逻辑的。

## Avoid Microsoft

考虑到 Windows 近期 [Bug 实在是太多了](https://borncity.com/win/2023/02/20/windows-server-2022-feb-2023-patchday-secure-boot-issues-also-on-bare-metal-systems/)，几次重大的事故均是由于 Windows 的 Bug 导致的。并且 Windows Server 很难使用开源的技术进行调度、监控和管理，我们正在全面的避免使用 Windows Server 和微软的周边方案。

未来，我们将只允许 Linux 服务器接入数据中心。并且只使用开源方案（除游戏服务器外）。做到五大原则:

* EverGreen (无过时软件和库)
* EverOpenSource (无闭源软件)
* EverKnown (无未知用途的设计)
* EverClean (无无意义的数据)
* EverReproducible (无不可复现的设计)

## ZFS

考虑到 ZFS 方案对于数据中心存储已经非常成熟，并且使用 ZFS 可以非常有效的得到安全、巨大、高速、方便快照、方便缓存的存储设备，我们正在重构数据中心的存储结构，全部放弃阵列卡 + ext4 的方案，转而使用 ZFS。  

## GPU

最近我们仍然专注于为数据中心增加 GPU 算力。这需要踩大量的坑。包括：搞定 vGPU License、设计 mdev 的 GPU 虚拟化方案、搞定 GPU 虚拟化的驱动问题、监控、分配、调度等。

## DevOps ? GitLab !

为了提供更加强大的 DevOps 功能并移除微软的 Azure DevOps 带来的严重功能缺失和 Hack 等对数据中心造成的复杂化，我们决定从数据中心中移除所有的 Windows 服务器，并全部使用 Linux 。

因此，我们使用了 GitLab 来替代 Azure DevOps。

我们的 DevOps 服务地址：[https://gitlab.aiursoft.cn/](https://gitlab.aiursoft.cn/)。考虑到 DevOps 对计算资源的性能要求，我们仍然局限于会员制：仅会员可以使用 DevOps 服务。

## AI ？

我们都不是 AI 的专家。因此我们在 AI 算力方面方面还在努力摸索。我们的目标是：提供一个稳定的、高性能的、高可用的 AI 算力平台，来给所有试图在我们数据中心里做 AI 的人提供支持。

关于我们踩坑的所有笔记，我都将汇总到 [Aiursoft 运维文档中心](https://docs.aiursoft.cn)。我们也欢迎大家一起来完善这个文档。

## AI 实验室

我们搞 AI 的主张之一，就是人人有丹炼！因此，我们构建了一个共享的实验室：

[https://lab.aiursoft.cn/](https://lab.aiursoft.cn/)

在实验室里，你可以享受到 GPU 资源。它已经预装了 Python 环境和 CUDA 环境，已经安装好了 NVIDIA 加速卡驱动。你可以免费试用它来训练、运行、测试你的 AI 应用程序！

致信 [anduin@aiursoft.com](mailto://anduin@aiursoft.com) 以获取实验室账号。

`;

