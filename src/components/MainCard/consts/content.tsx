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
} from "@ant-design/icons";
import { IconFont } from "../../IconFont";
import * as icons from "../icons";
import { css } from "@emotion/react";
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
    id: 1,
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
        value: "https://cssource.aiursoft.cn",
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