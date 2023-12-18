export const announcement =
  `
## 服务新上: Gist

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

