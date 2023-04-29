/** @jsxImportSource @emotion/react */
import {
  MessageOutlined,
  FilePptOutlined,
  FileTextOutlined,
  VideoCameraOutlined,
  CodeOutlined,
  CustomerServiceOutlined,
  BankOutlined,
  DesktopOutlined,
  AlertOutlined,
  NotificationOutlined,
  PictureOutlined,
  CloudServerOutlined,
  AntDesignOutlined,
  NodeCollapseOutlined,
  CodepenOutlined
} from "@ant-design/icons";
import { IconFont } from "../../IconFont";
import * as icons from "../icons";
import { css } from "@emotion/react";
import { announcement } from "./announcement";
import { terraria } from "./terraria";
import { factorio } from "./factorio";
import { cssource } from "./cssource";
const imgCss = {
  css: css`
    width: 24px;
    height: 24px;
    margin-right: 12px;
    border-radius: 5px;
    @media (max-width: 768px) {
      width: 0.2rem;
      height: 0.2rem;
    }
  `,
};
const iconCss = { css: { marginRight: "12px" } };
export const info = [
  {
    id: 0,
    title: "公告",
    icon: <NotificationOutlined />,
    notice: announcement,
  },
  {
    id: 1,
    title: "实验室",
    icon: <AlertOutlined />,
    children: [
      {
        label: "ChatGPT",
        value: "https://chat.aiursoft.cn",
        icon: <MessageOutlined {...iconCss} />,
      },
      {
        label: "Stable Diffusion",
        value: "https://stable-diffusion.aiursoft.cn/",
        icon: <PictureOutlined {...iconCss} />,
      },
      {
        label: "IaaS 云计算",
        value: "https://iaas.aiursoft.cn/",
        icon: <CloudServerOutlined {...iconCss} />,
      },
      {
        label: "实验室手册",
        value: "https://docs.aiursoft.cn/",
        icon: <FileTextOutlined {...iconCss} />,
      },
      {
        label: "生命游戏",
        value: "https://gameoflife.aiursoft.cn/",
        icon: <AntDesignOutlined  {...iconCss} />,
      },
      {
        label: "三体模拟器",
        value: "https://three.aiursoft.cn/10/10/5/1/0.43/-0.18/0.45/0.22/0.13/0.94/-0.26/0.66/-0.94/-0.76/-0.22/-0.86/0.78/0.98/0.19/0.4/0.78/0.15/-0.25/-0.65/-0.5",
        icon: <NodeCollapseOutlined  {...iconCss} />,
      },
      {
        label: "AI 实验室",
        value: "https://lab.aiursoft.cn/",
        icon: <CodepenOutlined {...iconCss} />,
      },
    ],
  },
  {
    id: 2,
    title: "广场",
    icon: <IconFont type="icon-a-mubiaoguangchang" />,
    children: [
      {
        label: "开友者社区",
        value: "https://git.aiursoft.cn",
        icon: <CodeOutlined {...iconCss} />,
      },
      {
        label: "包中心",
        value: "https://nuget.aiursoft.cn",
        icon: <FilePptOutlined {...iconCss} />,
      },
      {
        label: "聊天室",
        value: "https://nextcloud.aiursoft.cn/index.php/call/jzxa5ba9",
        icon: <MessageOutlined {...iconCss} />,
      },
      {
        label: "文档馆",
        value: "https://wiki.aiursoft.cn",
        icon: <FileTextOutlined {...iconCss} />,
      },
      {
        label: "视频舞台",
        value: "https://videos.aiursoft.cn",
        icon: <VideoCameraOutlined {...iconCss} />,
      },
      {
        label: "图书馆",
        value: "https://books.aiursoft.cn",
        icon: <IconFont {...iconCss} type="icon-tushuguan" />,
      },
      {
        label: "音乐会",
        value: "https://musics.aiursoft.cn",
        icon: <CustomerServiceOutlined {...iconCss} />,
      },
      {
        label: "电视台",
        value: "https://live.aiursoft.cn",
        icon: <DesktopOutlined {...iconCss} />,
      },
      {
        label: "文件银行",
        value: "https://nextcloud.aiursoft.cn",
        icon: <BankOutlined {...iconCss} />,
      },
    ],
  },
  {
    id: 3,
    title: "游戏厅",
    icon: <IconFont type="icon-youxi" />,
    children: [
      {
        label: "Minecraft",
        value: "https://mc.aiursoft.cn",
        icon: <img src={icons.mc} {...imgCss} alt="" />,
      },
      {
        label: "Terraria",
        // value: "https://terraria.aiursoft.cn",
        icon: <img src={icons.tl} {...imgCss} alt="" />,
        content: terraria,
        md: true,
      },
      {
        label: "Factorio",
        // value: "https://factorio.aiursoft.cn",
        icon: <img src={icons.ft} {...imgCss} alt="" />,
        content: factorio,
        md: true,
      },
      {
        label: "CS:Source",
        // value: "https://cssource.aiursoft.cn",
        icon: <img src={icons.cs} {...imgCss} alt="" />,
        content: cssource,
        md: true,
      },
      {
        label: "Miku",
        value: "https://miku.aiursoft.cn",
        icon: <img src={icons.mk} {...imgCss} alt="" />,
      },
      {
        label: "扫雷",
        value: "https://minesweeper.aiursoft.cn",
        icon: <img src={icons.sl} {...imgCss} alt="" />,
      },
      {
        label: "2048",
        value: "https://2048.aiursoft.cn",
        icon: <img src={icons._2048} {...imgCss} alt="" />,
      },
      {
        label: "Hextris",
        value: "https://hextris.aiursoft.cn",
        icon: <img src={icons.russia} {...imgCss} alt="" />,
      },
      {
        label: "人生重开",
        value: "https://life.aiursoft.cn",
        icon: <img src={icons.restart} {...imgCss} alt="" />,
      },
    ],
  },
];
