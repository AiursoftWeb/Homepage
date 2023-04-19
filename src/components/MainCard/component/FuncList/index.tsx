/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Col, Row } from "antd";
import { flex } from "@/utils/layout";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
type funcList = {
  setContent: React.Dispatch<any>;
  setOpen: React.Dispatch<any>;
  children: (
    | {
        label: string;
        value: string;
        icon: EmotionJSX.Element;
        content?: undefined;
        md?: undefined;
      }
    | {
        label: string;
        icon: EmotionJSX.Element;
        content: string;
        md: boolean;
        value?: undefined;
      }
  )[];
};
const FuncList: React.FC<funcList> = ({ setContent, setOpen, children }) => {
  return (
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
      {children.map((more) => {
        return (
          <Col span={children?.length > 6 ? 8 : 12} key={more.label}>
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
  );
};
export default FuncList;
