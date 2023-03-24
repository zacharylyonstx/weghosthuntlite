import react from 'react'
import type { FC } from 'react';
import 'antd/dist/reset.css';
// import "@ant - design/flowchart/dist/index.css";
import './App.css';
import MainPage from './pages/MainPage'
import { Button, ConfigProvider } from 'antd';
import React from 'react';

const App: FC = () => (
  <div className="App">
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
        },
      }}
    >
      <MainPage />
    </ConfigProvider>
  </div>
);

export default App;
