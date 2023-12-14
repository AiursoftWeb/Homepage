/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Layout, ConfigProvider, Space, theme } from 'antd';
import bg from './static/bg.jpeg';
import titleIos from './label/title.png';
import RightContent from './components/RightContent';
import LeftContent from './components/LeftContent';
import { flex } from './utils/layout';
import MainCard from './components/MainCard';
import { Footer } from 'antd/es/layout/layout';
import { Helmet } from 'react-helmet';
import { isDarkMode, DarkModeContext } from '@/utils/dark-mode';
import { useState } from 'react';
import { StrangeLogo } from '@/components/logos/strange-logo';
const { Header, Content } = Layout;
const ifMobile = window.matchMedia('(max-width: 768px)').matches;

const App = () => {

  const [isDark, setDark] = useState(isDarkMode());

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Helmet>
        <meta charSet='utf-8' />
        <title>首页 HomePage - Aiursoft</title>
        <link rel='index' href='https://www.aiursoft.cn' />
      </Helmet>
      <DarkModeContext.Provider value={setDark}>
        <Layout
          className='layout'
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
            ${isDark && `
              background-color: #000000d9;
              background-blend-mode: hue;
              `}
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
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              minHeight: '30%',
            }}
          >
            <div
              css={[
                flex,
                {
                  flexDirection: 'column',
                  justifyContent: 'space-between',
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
                  alt='Aiursoft'
                  css={css`
                    width: 5.5rem;
                    margin-top: 1rem;
                  `}
                />
              ) : (
                <StrangeLogo />
              )}
            </div>
            <MainCard />
          </Content>
          <Footer
            style={{
              textAlign: 'center',
              backgroundColor: 'rgba(0,0,0,0)',
              color: '#666',
            }}
          >
            <Space direction={ifMobile ? 'vertical' : 'horizontal'}>
              <span>Aiursoft-Homepage ©2023 </span>
              <span>Created by HerbertLzx</span>
              <a
                href='https://beian.miit.gov.cn/'
                target='_blank'
                rel='noreferrer'
              >
                苏ICP备2022030859号
              </a>
              <a
                href='https://stats.uptimerobot.com/ynrA5c73EN'
                target='_blank'
                rel='noreferrer'
              >
                可用性报告
              </a>
              <a
                href='https://tracer.aiursoft.cn/'
                target='_blank'
                rel='noreferrer'
              >
                服务器连接诊断
              </a>
            </Space>
          </Footer>
        </Layout>
      </DarkModeContext.Provider>
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
  @media (max-width: 768px) {
    height: 0.8rem;
    padding: 0.2rem;
  }
`;
