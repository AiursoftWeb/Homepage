/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Col, Row } from 'antd';
import { flex } from '@/utils/layout';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import openDetailModal from '@/utils/detail-modal';

type funcList = {
  children: (
    | {
      label: string;
      value: string;
      icon: EmotionJSX.Element;
      content?: undefined;
    }
    | {
      label: string;
      icon: EmotionJSX.Element;
      content: string;
      value?: undefined;
    }
  )[];
};
const FuncList: React.FC<funcList> = ({ children }) => {
  return (
    <Row
      gutter={12}
      css={css`
        padding-left: 15px;
        margin-top: 10px;
        @media (max-width: 768px) {
          padding-left: 0;
        }
      `}
    >
      {children.map((more) => {
        return (
          <Col span={children?.length > 6 ? 8 : 12} key={more.label}>
            <a
              key={more.label}
              href={more?.value}
              onClick={() => {
                if (!more?.value) {
                  openDetailModal(more.label, more.content);
                }
              }}
              target='_blank'
              css={[
                flex,
                {
                  color: '#777',
                  height: 50,
                  fontSize: 18,
                  justifyContent: 'flex-start',
                },
                css`
                  @media (max-width: 768px) {
                    height: 0.5rem;
                    font-size: 0.2rem;
                  }
                `,
              ]}
              rel='noreferrer'
            >
              {more?.icon ? (
                more?.icon
              ) : (
                <svg style={{ width: 21, height: 1 }} />
              )}
              <span
                css={css`
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                `}
              >
                {more.label}
              </span>
            </a>
          </Col>
        );
      })}
    </Row>
  );
};
export default FuncList;
