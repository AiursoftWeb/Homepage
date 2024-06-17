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
  EditOutlined,
  NotificationOutlined,
  PictureOutlined,
  // CloudServerOutlined,
  AntDesignOutlined,
  NodeCollapseOutlined,
  GitlabOutlined,
  BookOutlined,
  CodepenOutlined
} from "@ant-design/icons";
import { IconFont } from "../../IconFont";
import * as icons from "../icons";
import { css } from "@emotion/react";
import { announcement } from "./announcement";
import { registry } from "./registry";
// import { terraria } from "./terraria";
// import { factorio } from "./factorio";
// import { cssource } from "./cssource";
import { minecraft } from "./minecraft";
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
export const info = [];
export const infoReal = [
  {
    id: 0,
    title: "Updates",
    icon: <NotificationOutlined />,
    notice: announcement,
  },
  {
    id: 1,
    title: "Lab",
    icon: <AlertOutlined />,
    children: [
      {
        label: "Aiursoft Chat",
        icon: <MessageOutlined {...iconCss} />,
        value: "https://chat.aiursoft.cn/",
      },
      // {
      //   label: "Aiursoft Wiki",
      //   icon: <EditOutlined {...iconCss} />,
      //   value: "https://docs.aiursoft.cn/",
      // },
      // {
      //   label: "AI 绘图",
      //   value: "https://paint.aiursoft.cn/",
      //   icon: <PictureOutlined {...iconCss} />,
      // },
      {
        label: "Game of life",
        value: "https://gameoflife.aiursoft.cn/",
        icon: <AntDesignOutlined  {...iconCss} />,
      },
      {
        label: "Three body",
        value: "https://three.aiursoft.cn/",
        icon: <NodeCollapseOutlined  {...iconCss} />,
      },
      {
        label: "GitLab",
        value: "https://gitlab.aiursoft.cn/",
        icon: <GitlabOutlined {...iconCss} />,
      },
      {
        label: "Gist",
        value: "https://gist.aiursoft.cn/",
        icon: <BookOutlined {...iconCss} />,
      },
      {
        label: "Code Runner",
        value: "https://cpprunner.aiursoft.cn/",
        icon: <CodepenOutlined {...iconCss} />,
      }
    ],
  },
  {
    id: 2,
    title: "Media",
    icon: <IconFont type="icon-a-mubiaoguangchang" />,
    children: [
      {
        label: "Nextcloud",
        value: "https://nextcloud.aiursoft.cn",
        icon: <BankOutlined {...iconCss} />,
      },
      {
        label: "Gitea",
        value: "https://git.aiursoft.cn",
        icon: <CodeOutlined {...iconCss} />,
      },
      {
        label: "Baget",
        //value: "https://nuget.aiursoft.cn",
        content: registry,
        icon: <FilePptOutlined {...iconCss} />,
      },
      {
        label: "Kiwix",
        value: "https://wiki.aiursoft.cn",
        icon: <FileTextOutlined {...iconCss} />,
      },
      {
        label: "Media CMS",
        value: "https://videos.aiursoft.cn",
        icon: <VideoCameraOutlined {...iconCss} />,
      },
      {
        label: "Kavita",
        value: "https://books.aiursoft.cn",
        icon: <IconFont {...iconCss} type="icon-tushuguan" />,
      },
      {
        label: "Koel",
        value: "https://musics.aiursoft.cn",
        icon: <CustomerServiceOutlined {...iconCss} />,
      },
      // {
      //   label: "电视台",
      //   value: "https://live.aiursoft.cn",
      //   icon: <DesktopOutlined {...iconCss} />,
      // }
    ],
  },
  {
    id: 3,
    title: "UDP Demos",
    icon: <IconFont type="icon-youxi" />,
    children: [
      {
        label: "Minecraft",
        // value: "https://mc.aiursoft.cn",
        icon: <img src={icons.mc} {...imgCss} alt="" />,
        content: minecraft,
      },
      // {
      //   label: "Terraria",
      //   // value: "https://terraria.aiursoft.cn",
      //   icon: <img src={icons.tl} {...imgCss} alt="" />,
      //   content: terraria,
      // },
      // {
      //   label: "Factorio",
      //   // value: "https://factorio.aiursoft.cn",
      //   icon: <img src={icons.ft} {...imgCss} alt="" />,
      //   content: factorio,
      // },
      // {
      //   label: "CS:Source",
      //   // value: "https://cssource.aiursoft.cn",
      //   icon: <img src={icons.cs} {...imgCss} alt="" />,
      //   content: cssource,
      // },
      {
        label: "Cat",
        value: "https://cat.aiursoft.cn",
        icon: <img src={icons.cat} {...imgCss} alt="" />,
      },
      {
        label: "Miku",
        value: "https://miku.aiursoft.cn",
        icon: <img src={icons.mk} {...imgCss} alt="" />,
      },
      {
        label: "Minesweeper",
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
        label: "Life Game",
        value: "https://life.aiursoft.cn",
        icon: <img src={icons.restart} {...imgCss} alt="" />,
      },
    ],
  },
];
