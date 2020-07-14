import React from 'react';
import logo from './logo.svg';
import List from './SourceList'
import News from './News'
import Content from './Content'
import './App.css';

function App() {
  return (
    <div class="row">
      <div className="col-md-4">
      <List />
      </div>
      <div className="col-md-4">
      <News/>
      </div>
      <div className="col-md-4">
      <Content/>
      </div>
    </div>
  );
}

export default App;
