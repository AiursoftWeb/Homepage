export const aiursoftAi =
  `# 使用 Aiursoft 运营的聊天机器人

[打开 Aiursoft Ai Chat](https://chat.aiursoft.cn)

## 模型介绍

[ChatGLM3](https://github.com/THUDM/ChatGLM3) 是一个开源的双语大模型。

ChatGLM3 是智谱AI和清华大学 KEG 实验室联合发布的新一代对话预训练模型。ChatGLM3-6B 是 ChatGLM3 系列中的开源模型，在保留了前两代模型对话流畅、部署门槛低等众多优秀特性的基础上，ChatGLM3-6B 引入了如下特性：

1. **更强大的基础模型：** ChatGLM3-6B 的基础模型 ChatGLM3-6B-Base 采用了更多样的训练数据、更充分的训练步数和更合理的训练策略。在语义、数学、推理、代码、知识等不同角度的数据集上测评显示，**ChatGLM3-6B-Base 具有在 10B 以下的基础模型中最强的性能**。
2. **更完整的功能支持：** ChatGLM3-6B 采用了全新设计的 [Prompt 格式](PROMPT.md)，除正常的多轮对话外。同时原生支持[工具调用](tool_using/README.md)（Function Call）、代码执行（Code Interpreter）和 Agent 任务等复杂场景。
3. **更全面的开源序列：** 除了对话模型 [ChatGLM3-6B](https://huggingface.co/THUDM/chatglm3-6b) 外，还开源了基础模型 [ChatGLM3-6B-Base](https://huggingface.co/THUDM/chatglm3-6b-base)、长文本对话模型 [ChatGLM3-6B-32K](https://huggingface.co/THUDM/chatglm3-6b-32k)。以上所有权重对学术研究**完全开放**，在填写[问卷](https://open.bigmodel.cn/mla/form)进行登记后**亦允许免费商业使用**。

## Aiursoft 运营的 ChatGLM3-6B 服务

Aiursoft 通过在本地服务器上部署了 ChatGLM3-6B ，并且完全使用本地的计算卡来运行。因此，在使用 ChatGLM3-6B 时，你的对话内容不会被上传到任何第三方服务，也不会被任何人查看。其隐私得到了非常好的保护。

Aiursoft 使用了目前能够买到的最好的显卡：NVIDIA RTX 4090 来计算对话，因此，对话速度将会非常快。

## 密码

目前我们为了避免过分的滥用，增加了一个很弱的密码。密码是：home。

这个服务仅仅面向真实的人类使用，请不要使用 API 。 未来我们会为其增加验证码以防止滥用。

`;
