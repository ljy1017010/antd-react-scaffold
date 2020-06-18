import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import Main from './src/main';
import ErrorBondary from './src/components/ErrorBoundary';

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <ErrorBondary>
      <Main />
    </ErrorBondary>
  </ConfigProvider>,
  document.getElementById('root')
);
