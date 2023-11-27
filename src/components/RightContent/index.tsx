/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import { Space, Button, Popover } from "antd";
// import { flex } from "../../utils/layout";
import Help from "../Help";
import { IconFont } from "../IconFont";
const RightContent = () => {
  return (
    <>
      <Space>
        {/* <Search
          css={flex}
          placeholder="输入关键字搜索"
          onSearch={() => {}}
          style={{ width: 200, alignSelf: "center", marginRight: 20 }}
        /> */}
        <Popover placement="bottomRight" content={<Help i={0} title={false} />}>
          <Button icon={<IconFont type="icon-xiaoqu-xianxing" />} type="text">
            住户小区
          </Button>
        </Popover>
        <Popover placement="bottomRight" content={<Help i={1} title={false} />}>
          <Button icon={<IconFont type="icon-xiaoqu-xianxing" />} type="text">
            工具箱
          </Button>
        </Popover>
      </Space>
    </>
  );
};
export default RightContent;
