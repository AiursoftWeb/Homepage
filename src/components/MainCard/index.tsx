/** @jsxImportSource @emotion/react */
import { Card, Col, Modal, Row, Space } from "antd";
import { flex } from "@/utils/layout";
import { css } from "@emotion/react";
import { info } from "./consts/content";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
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
  return (
    <div
      css={[
        {
          marginTop: "90px",
          backgroundColor: "rgba(0,0,0,0)",
          minWidth: "1000px",
          width: "70%",
        },
        css`
          @media (max-width: 768px) {
            width: 90vw;
            min-width: 1rem;
            padding-bottom: 1rem;
          }
        `,
      ]}
    >
      <Row>
        {info.map((e) => {
          return (
            <Col lg={12} sm={24} key={e.id}>
              <Card
                key={e.id}
                bordered={false}
                css={[
                  {
                    margin: 20,
                    backgroundColor: "rgba(255,255,255,0.6)",
                    minWidth: 460,
                  },
                  css`
                    @media (max-width: 768px) {
                      margin: 3vw;
                      min-width: 1rem;
                    }
                  `,
                ]}
                bodyStyle={{
                  flexDirection: "column",
                }}
              >
                <Space
                  css={css`
                    font-size: 28px;
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
                <Row
                  css={css`
                    padding-left: 15px;
                    margin-top: 10px;
                    @media (max-width: 768px) {
                      margin-top: 10;
                      padding-left: 0;
                    }
                  `}
                >
                  {e.children.map((more) => {
                    return (
                      <Col span={8} offset={0} key={more.label}>
                        <a
                          key={more.label}
                          href={more?.value}
                          onClick={() => {
                            if (!more?.value) {
                              setContent({
                                label: more.label,
                                content: more.content,
                                md: more?.md || false,
                              });
                              setOpen(true);
                            }
                          }}
                          target="_blank"
                          css={[
                            flex,
                            {
                              color: "#777",
                              height: 50,
                              fontSize: 18,
                              justifyContent: "flex-start",
                            },
                            css`
                              @media (max-width: 768px) {
                                height: 0.5rem;
                                font-size: 0.2rem;
                              }
                            `,
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
                      </Col>
                    );
                  })}
                </Row>
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
