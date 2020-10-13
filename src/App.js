import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import DataDisplay from './components/DataDisplay';

const App = () => {
  const [text, setText] = useState("");
  const response = ["Go to the store", "Wash the dishes", "Learn some code"];
  const [data, setData] = useState([]);

  const handleOnChange = (e) => {
    setText(e.target.value);
    // make fetch request for data here
    let newData = [];
    if (e.target.value.length > 0){
      newData = response.filter(string => string.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1);
    }
    setData(newData);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Search handleOnChange={(e) => handleOnChange(e)} text={text}/>
        <DataDisplay results={data}/>
      </header>
    </div>
  );
}

export default App;