// 'use client';
import ConfigProvider from 'antd/es/config-provider';
import FloatButton from 'antd/es/float-button/FloatButton';
import Popover from 'antd/es/popover';
import Image from 'next/image';
import Space from 'antd/es/space';
import { Layout } from 'antd';
import { Footer, Header } from 'antd/es/layout/layout';
export default function Home() {
  return (
    <div className='bg-main-bg h-screen bg-cover min-w-screen sm:min-w-1280'>
      <div className='flex items-center justify-between bg-transparent md:ps-4 md:pe-4 md:h-12 shadow-xl shadow-gray-100 dark:shadow-none h-12 ps-1 pe-1 '>
        {/* <LeftContent />
          <RightContent /> */}
      </div>

      <Space
        direction={'horizontal'}
        className='flex items-center justify-center w-screen text-[#666] text-opacity-50 text-sm'
      >
        <span>Aiursoft-Homepage ©2023 </span>
        <span>Created by HerbertLzx</span>
        <a
          href='https://beian.miit.gov.cn/'
          target='_blank'
          rel='noreferrer'
          className='text-blue-400 hover:text-blue-300'
        >
          苏ICP备2022030859号
        </a>
        <a
          href='https://stats.uptimerobot.com/ynrA5c73EN'
          target='_blank'
          rel='noreferrer'
          className='text-blue-400 hover:text-blue-300'
        >
          可用性报告
        </a>
        <a
          href='https://tracer.aiursoft.cn/'
          target='_blank'
          rel='noreferrer'
          className='text-blue-400 hover:text-blue-300'
        >
          服务器连接诊断
        </a>
      </Space>
    </div>
  );
}
