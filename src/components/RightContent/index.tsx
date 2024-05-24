/** @jsxImportSource @emotion/react */
import { Space, Button, Popover } from "antd";
import Help from "../Help";
import { IconFont } from "../IconFont";
import light from '@/label/light.svg';
import moon from '@/label/moon.svg';
import { isDarkMode, setDarkMode, DarkModeContext } from '@/utils/dark-mode';
import { useContext } from "react";

const RightContent = () => {

  const setDark = useContext(DarkModeContext);

  const isDark = isDarkMode();

  const handleTriggerDarkMode = () => {
    setDarkMode(!isDark);
    setDark(!isDark);
  }

  return (
    <>
      <Space>
        <Button className="center" icon={<img src={isDark ? light : moon} alt="light" />}
          onClick={handleTriggerDarkMode}
          type="text">
        </Button>

        <Popover placement="bottomRight" content={<Help i={0} title={false} />}>
          <Button icon={<IconFont type="icon-xiaoqu-xianxing" />} type="text">
            Blogs
          </Button>
        </Popover>
        <Popover placement="bottomRight" content={<Help i={1} title={false} />}>
          <Button icon={<IconFont type="icon-xiaoqu-xianxing" />} type="text">
            Toolbox
          </Button>
        </Popover>
      </Space >
    </>
  );
};
export default RightContent;
