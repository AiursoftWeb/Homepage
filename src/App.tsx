/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Layout, ConfigProvider, FloatButton, Popover, Space } from "antd";
import bg from "./static/bg.jpeg";
import title from "./label/fffef8.svg";
import titleIos from "./label/title.png";
import RightContent from "./components/RightContent";
import LeftContent from "./components/LeftContent";
import { flex } from "./utils/layout";
import MainCard from "./components/MainCard";
import { QuestionCircleOutlined } from "@ant-design/icons";
import Help from "./components/Help";
import { Footer } from "antd/es/layout/layout";
// import Search from "./components/Search";
import { IconFont } from "./components/IconFont";
import { useEffect } from "react";
import { auto as followSystemColorScheme } from "darkreader";
import { Helmet } from "react-helmet";
const { Header, Content } = Layout;
const ifMobile = window.matchMedia("(max-width: 768px)").matches;
const App = () => {
  useEffect(() => {
    followSystemColorScheme({
      brightness: 100,
      contrast: 90,
      sepia: 10,
    });
  }, []);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#9A9A9A",
          borderRadius: 6,
        },
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>首页 HomePage - Aiursoft</title>
        <link rel="index" href="https://www.aiursoft.cn" />
      </Helmet>
      <FloatButton.Group
        shape="square"
        css={css`
          right: 48px;
          @media (max-width: 768px) {
            right: 0.5rem;
          }
        `}
      >
        <Popover placement="leftBottom" content={<Help i={0} />}>
          <FloatButton icon={<IconFont type="icon-xiaoqu-xianxing" />} />
        </Popover>
        <Popover placement="leftBottom" content={<Help i={1} />}>
          <FloatButton icon={<QuestionCircleOutlined />} />
        </Popover>
      </FloatButton.Group>
      <Layout
        className="layout"
        css={css`
          min-height: 100vh;
          background-image: linear-gradient(
              to bottom,
              hsl(0, 0%, 100%, 1),
              hsl(0, 0%, 100%, 0)
            ),
            url(${bg});
          background-size: cover;
          min-width: 1280px;
          @media (prefers-color-scheme: dark) {
            background-image: none;
          }
          @media (max-width: 768px) {
            width: 100vw;
            min-width: 0;
            min-height: 100vh;
            height: auto;
          }
        `}
      >
        <Header css={headerCss}>
          <LeftContent />
          <RightContent />
        </Header>
        <Content
          css={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            minHeight: "30%",
          }}
        >
          <div
            css={[
              flex,
              {
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "30%",
              },
              css`
                @media (max-width: 768px) {
                  min-height: 20vh;
                }
              `,
            ]}
          >
            {ifMobile ? (
              <img
                src={titleIos}
                alt=""
                css={css`
                  width: 5.5rem;
                  margin-top: 1rem;
                `}
              />
            ) : (
              <img
                src={title}
                alt=""
                css={css`
                  width: 800px;
                `}
              />
            )}
            {/* <Search /> */}
          </div>
          <MainCard />
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "rgba(0,0,0,0)",
            color: "#666",
            // display:'flex',
          }}
        >
          <Space>
            <span>Aiursoft-Homepage ©2023 </span>
            <span>Created by HerbertLzx</span>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noreferrer"
            >
              苏ICP备2022030859号
            </a>
            <a
              href="https://tracer.aiursoft.cn/"
              target="_blank"
              rel="noreferrer"
              css={css`
                @media (max-width: 768px) {
                  display: none;
                }
              `}
            >
              服务器连接诊断
            </a>
          </Space>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};
export default App;
const headerCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0);
  padding-inline: 60;
  height: 50px;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.06);
  @media (prefers-color-scheme: dark) {
    box-shadow: none;
  }
  @media (max-width: 768px) {
    height: 0.8rem;
    padding: 0.2rem;
  }
`;
