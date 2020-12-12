import React from 'react'
import './App.css';
import { Typography } from 'antd';
import SearchSeries from './components/SearchSeries';

const { Title } = Typography;

function App() {  
  return (
    <div className="App">
        <div className="header">
        <Title className="appTitle">Series Searching App</Title>
        </div>
        <SearchSeries/>
    </div>
  );
}

export default App;
