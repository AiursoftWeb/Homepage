/** @jsxImportSource @emotion/react */
import {
  CalculatorOutlined,
  InteractionOutlined,
  FieldTimeOutlined,
  GiftOutlined,
  TranslationOutlined,
  CodepenOutlined,
  FileTextOutlined,
  FileImageOutlined
} from "@ant-design/icons";
import { remotely } from "../MainCard/consts/remotely";
import { Modal, Space } from "antd";
import * as icons from "../MainCard/icons";
import { IconFont } from "../IconFont";
import { HelpModel } from './model';
import openDetailModal from '@/utils/detail-modal';

const imgCss = {
  css: { width: "24px", height: "24px", marginRight: "12px", borderRadius: 2 },
};

const navbar: HelpModel[] = [
  {
    id: 2,
    title: "Blogs",
    icon: <IconFont type="icon-xiaoquguanli" />,
    children: [
      {
        label: "AnduinXue",
        value: "https://anduin.aiursoft.cn",
        icon: <img src={icons.anduin} {...imgCss} alt="" />,
      },
      {
        label: "杨过",
        value: "https://gxhao.aiursoft.cn",
        icon: <img src={icons.yang} {...imgCss} alt="" />,
      },
      {
        label: "Gbiner",
        value: "https://gbiner.aiursoft.cn",
        icon: <img src={icons.gb} {...imgCss} alt="" />,
      },
      {
        label: "Rest",
        value: "https://rest.aiursoft.cn",
        icon: <img src={icons.rest} {...imgCss} alt="" />,
      },
      {
        label: "JimMoen",
        value: "https://jimmoen.aiursoft.cn",
        icon: <img src={icons.jim} {...imgCss} alt="" />,
      },
      {
        label: "Kitlau",
        value: "https://kitlau.aiursoft.cn",
        icon: <img src={icons.kit} {...imgCss} alt="" />,
      },
      {
        label: "EdgeNeko",
        value: "https://edgeneko.aiursoft.cn",
        icon: <img src={icons.edgeneko} {...imgCss} alt="" />,
      },
      {
        label: "Dvorak",
        value: "https://dvorak.aiursoft.cn",
        icon: <img src={icons.dvorak} {...imgCss} alt="" />,
      },
      {
        label: "lyx",
        value: "https://lyx.aiursoft.cn",
        icon: <img src={icons.lyx} {...imgCss} alt="" />,
      },
      {
        label: "anois",
        value: "https://anois.aiursoft.cn/",
        icon: <img src={icons.anois} {...imgCss} alt="" />,
      },
      {
        label: "shubuzuo",
        value: "https://shubuzuo.aiursoft.cn",
        icon: <img src={icons.shubuzuo} {...imgCss} alt="" />,
      },
      {
        label: "Xinboo",
        value: "https://xinboo.aiursoft.cn",
        icon: <img src={icons.xinboo} {...imgCss} alt="" />,
      },
      {
        label: "RDF",
        value: "https://rdf.aiursoft.cn",
        icon: <img src={icons.rdf} {...imgCss} alt="" />,
      },
      {
        label: "fissssssh",
        value: "https://fissssssh.aiursoft.com",
        icon: <img src={icons.fissssssh} {...imgCss} alt="" />,
      },
      {
        label: "Aimer Neige",
        value: "https://aimer.aiursoft.cn",
        icon: <img src={icons.aimer} {...imgCss} alt="" />,
      },
      {
        label: "cody",
        value: "https://cody.aiursoft.cn",
        icon: <img src={icons.cody} {...imgCss} alt="" />,
      },
    ],
  },
  {
    id: 3,
    title: "Toolbox",
    children: [
      {
        label: "File Transfer",
        value: "https://drive.aiursoft.cn",
        icon: <FileImageOutlined {...imgCss} />,
      },
      {
        label: "IP Address Calculator",
        value: "https://ip.aiursoft.cn/",
        icon: <CalculatorOutlined {...imgCss} />,
      },
      {
        label: "Display PPI Calculator",
        value: "https://anduin.aiursoft.cn/page/scale",
        icon: <CalculatorOutlined {...imgCss} />,
      },
      {
        label: "Piano note calculator",
        value: "https://pianonote.aiursoft.cn",
        icon: <CalculatorOutlined {...imgCss} />,
      },
      {
        label: "Translate",
        value: "https://translate.aiursoft.cn",
        icon: <TranslationOutlined {...imgCss} />,
      },
      {
        label: "Remote Desktop",
        icon: <InteractionOutlined {...imgCss} />,
        content: remotely,
      },
      {
        label: "Repo Manhours",
        icon: <FieldTimeOutlined {...imgCss} />,
        value: "https://manhours.aiursoft.com",
      },
      {
        label: "Code Runner",
        icon: <CodepenOutlined {...imgCss} />,
        value: "https://cpprunner.aiursoft.com",
      },
      {
        label: "Nuget Registry",
        icon: <CodepenOutlined {...imgCss} />,
        value: "https://nuget.aiursoft.com",
      },
      {
        label: "Docker Registry",
        icon: <CodepenOutlined {...imgCss} />,
        value: "https://hub.aiursoft.com",
      },
      {
        label: "npm Registry",
        icon: <CodepenOutlined {...imgCss} />,
        value: "https://npm.aiursoft.com",
      },
      {
        label: "APT Registry",
        icon: <CodepenOutlined {...imgCss} />,
        value: "https://mirror.aiursoft.com",
      },
    ],
  },
  {
    id: 4,
    title: "Books",
    children: [
      {
        label: "How to cook",
        icon: <GiftOutlined {...imgCss} />,
        value: "https://cook.aiursoft.cn",
      },
      {
        label: "Wikipedia",
        icon: <FileTextOutlined {...imgCss} />,
        value: "https://wiki.aiursoft.cn",
      },
      {
        label: "OI",
        icon: <FileTextOutlined {...imgCss} />,
        value: "https://oi.aiursoft.cn",
      },
      {
        label: "CTF",
        icon: <FileTextOutlined {...imgCss} />,
        value: "https://ctf.aiursoft.cn",
      }
    ]
  }
];
const Help: React.FC<{ i: number; title?: boolean }> = ({
  i,
  title = true,
}) => {
  const [modal, contextHolder] = Modal.useModal();

  return (
    <>
      {contextHolder}

      <div css={{ padding: 10, minWidth: 150 }}>
        {title && (
          <Space
            css={{
              fontSize: 20,
              color: "#666",
              fontWeight: 600,
              marginBottom: 20,
            }}
          >
            {navbar[i].title}
          </Space>
        )}
        <div>
          {navbar[i].children.map((more) => {
            return (
              <div key={more.label}>
                <a
                  className="center"
                  href={more?.value}
                  onClick={() => {
                    if (!more?.value) {
                      openDetailModal(modal, more.label, more.content);
                    }
                  }}
                  target="_blank"
                  css={[
                    {
                      color: "#777",
                      height: 30,
                      fontSize: 16,
                      justifyContent: "flex-start",
                    },
                  ]}
                  rel="noreferrer"
                >
                  {more?.icon ? (
                    more?.icon
                  ) : (
                    <svg style={{ width: 21, height: 1 }} />
                  )}
                  {more.label}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Help;
