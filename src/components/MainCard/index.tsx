/** @jsxImportSource @emotion/react */
import { Card, Col, Row, Space } from 'antd';
import { css } from '@emotion/react';
import { info } from './consts/content';
import FuncList from './component/FuncList';
import Notice from './component/Notice';
const MainCard = () => {
  return (
    <div
      css={css`
        opacity: 0.7;
        min-width: 1000px;
        width: 70%;
        @media (max-width: 768px) {
          width: 90vw;
          min-width: 1rem;
          padding-bottom: 1rem;
        }
      `}
    >
      <Row>
        {info.map((e) => {
          return (
            <Col lg={12} sm={24} key={e.id}>
              <Card
                key={e.id}
                bordered={false}
                css={css`
                  margin: 10px;
                  min-width: 460px;
                  min-height: 250px;
                  @media (max-width: 768px) {
                    margin: 3vw;
                    min-height: 0;
                    min-width: 1rem;
                  }
                `}
                bodyStyle={{
                  flexDirection: 'column',
                }}
              >
                <Space
                  css={css`
                    font-size: 24px;
                    color: #666;
                    font-weight: 600;
                    @media (max-width: 768px) {
                      font-size: 0.3rem;
                    }
                  `}
                >
                  {e.icon}
                  {e.title}
                </Space>
                {e.children ? (
                  <FuncList children={e.children} />
                ) : (
                  <Notice notice={e.notice} />
                )}
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default MainCard;
