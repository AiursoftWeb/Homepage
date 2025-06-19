/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Layout, ConfigProvider, Space, theme } from 'antd';
import bg from './static/bg.jpeg';
import RightContent from './components/RightContent';
import LeftContent from './components/LeftContent';
import MainCard from './components/MainCard';
import { Footer } from 'antd/es/layout/layout';
import { isDarkMode, DarkModeContext } from '@/utils/dark-mode';
import { useState } from 'react';
import { StrangeLogo } from '@/components/logos/strange-logo';
import { isMobile } from 'is-mobile';
const { Header, Content } = Layout;

const App = () => {

  const isMobileDevice = isMobile();
  const [isDark, setDark] = useState(isDarkMode());

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
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
            width: 100vw;
            ${isDark && `
              background-color: #000000d9;
              background-blend-mode: hue;
              `}
            @media (max-width: 768px) {
              width: 100vw;
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
              className='center'
              css={{
                minHeight: '20vh',
              }}
            >
              <StrangeLogo />
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
            <Space direction={isMobileDevice ? 'vertical' : 'horizontal'}>
              <span>Anduin's Nas ©2023 </span>
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
                Availability
              </a>
              <a
                href='https://tracer.aiursoft.cn/'
                target='_blank'
                rel='noreferrer'
              >
                Speed test
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
