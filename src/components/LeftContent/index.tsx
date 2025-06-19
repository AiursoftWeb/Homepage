/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import logo from "@/static/logo.png";
import { Space } from "antd";
const LeftContent = () => {
  return (
    <Space className="center">
      <div
        css={css`
          background-image: url(${logo});
          width: 32px;
          height: 32px;
          background-size: contain;
          border-radius: 5px;
        `}
      />
      <div
        css={css`
          font-size: 18px;
          font-family: Helvetica;
          font-weight: 600;
          margin-left: 4px;
        `}
      >
        Anduin's Nas - Aiursoft
      </div>
    </Space>
  );
};
export default LeftContent;
