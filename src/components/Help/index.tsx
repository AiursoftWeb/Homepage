/** @jsxImportSource @emotion/react */
import {
  CalculatorOutlined,
  InteractionOutlined,
  FieldTimeOutlined,
  GiftOutlined,
  TranslationOutlined
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
const e: HelpModel[] = [
  {
    id: 2,
    title: "住户小区",
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
        label: "蓝猫猫",
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
        label: "波波",
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
        value: "https://fissssssh.aiursoft.cn",
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
    title: "工具箱",
    children: [
      {
        label: "显示器 PPI 计算器",
        value: "https://anduin.aiursoft.cn/page/scale",
        icon: <CalculatorOutlined {...imgCss} />,
      },
      {
        label: "翻译器",
        value: "https://translate.aiursoft.cn",
        icon: <TranslationOutlined {...imgCss} />,
      },
      {
        label: "远程桌面连接",
        icon: <InteractionOutlined {...imgCss} />,
        content: remotely,
      },
      {
        label: "人时计算器",
        icon: <FieldTimeOutlined {...imgCss} />,
        value: "https://manhours.aiursoft.cn",
      },
      {
        label: "程序员做饭指南",
        icon: <GiftOutlined {...imgCss} />,
        value: "https://cook.aiursoft.cn",
      },
    ],
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
            {e[i].title}
          </Space>
        )}
        <div>
          {e[i].children.map((more) => {
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
