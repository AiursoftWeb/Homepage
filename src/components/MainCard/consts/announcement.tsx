export const announcement =
  `
最近我们仍然专注于为数据中心增加 GPU 算力。这需要踩大量的坑。包括：搞定 vGPU License、设计 mdev 的 GPU 虚拟化方案、搞定 GPU 虚拟化的驱动问题、监控、分配、调度等。

## DevOps ? GitLab !

为了提供更加强大的 DevOps 功能并移除微软的 Azure DevOps 带来的严重功能缺失和 Hack 等对数据中心造成的复杂化，我们决定从数据中心中移除所有的 Windows 服务器，并全部使用 Linux 。

因此，我们使用了 GitLab 来替代 Azure DevOps。

我们的 DevOps 服务地址：[https://gitlab.aiursoft.com/](https://gitlab.aiursoft.com/)。考虑到 DevOps 对计算资源的性能要求，我们仍然局限于会员制：仅会员可以使用 DevOps 服务。

## AI ？

我们都不是 AI 的专家。因此我们在 AI 算力方面方面还在努力摸索。我们的目标是：提供一个稳定的、高性能的、高可用的 AI 算力平台，来给所有试图在我们数据中心里做 AI 的人提供支持。

关于我们踩坑的所有笔记，我都将汇总到 [Aiursoft 运维文档中心](https://docs.aiursoft.cn)。我们也欢迎大家一起来完善这个文档。

## AI 实验室

我们搞 AI 的主张之一，就是人人有丹炼！因此，我们构建了一个共享的实验室：

[https://lab.aiursoft.cn/](https://lab.aiursoft.cn/)

在实验室里，你可以享受到 GPU 资源。它已经预装了 Python 环境和 CUDA 环境，已经安装好了 NVIDIA 加速卡驱动。你可以免费试用它来训练、运行、测试你的 AI 应用程序！

致信 [anduin@aiursoft.com](mailto://anduin@aiursoft.com) 以获取实验室账号。

`;
