/** @jsxImportSource @emotion/react */
import { Card, Col, Modal, Row, Space } from "antd";
import { css } from "@emotion/react";
import { info } from "./consts/content";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import FuncList from "./component/FuncList";
import Notice from "./component/Notice";
type content = {
  label: string;
  content?: any;
  md: boolean;
};
const MainCard = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<content>({
    label: "",
    content: "",
    md: false,
  });
  const params = { setOpen, setContent };
  return (
    <div
      css={css`
        background-color: rgba(0, 0, 0, 0);
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
                  background-color: rgba(255, 255, 255, 0.6);
                  min-width: 460px;
                  @media (max-width: 768px) {
                    margin: 3vw;
                    min-width: 1rem;
                  }
                `}
                bodyStyle={{
                  flexDirection: "column",
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
                  <FuncList {...params} children={e.children} />
                ) : (
                  <Notice notice={e.notice} />
                )}
              </Card>
            </Col>
          );
        })}
      </Row>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        destroyOnClose
        footer={null}
        width={600}
        bodyStyle={{ minHeight: "300px" }}
      >
        {content.md ? (
          <ReactMarkdown children={content.content} />
        ) : (
          content.content
        )}
      </Modal>
    </div>
  );
};
export default MainCard;
