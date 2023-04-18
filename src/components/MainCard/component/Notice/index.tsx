/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import ReactMarkdown from "react-markdown";

const Notice: React.FC<{ notice: string }> = ({ notice }) => {
  return (
    <div
      css={css`
        padding-left: 10px;
        overflow-y: auto;
        text-overflow: ellipsis;
        height: 160px;
      `}
    >
      <ReactMarkdown children={notice} />
    </div>
  );
};
export default Notice;
