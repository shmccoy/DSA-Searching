import React from 'react';
// import logo from './logo.svg';
import SearchContainer from './components/searchContainer'
import './App.css';

function App() {
  let data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5 ];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Which algorithm is faster?</h1>
        <h2>input a number for the algorithms to search for</h2>
        <SearchContainer data={data} />
        <div>
          <p>89, 30, 25, 32, 72, 70, 51, 42, 25, 24,</p>
          <p>53, 55, 78, 50, 13, 40, 48, 32, 26,  2,</p>
          <p>14, 33, 45, 72, 56, 44, 21, 88, 27, 68,</p>
          <p>15, 62, 93, 98, 73, 28, 16, 46, 87, 28,</p>
          <p>65, 38, 67, 16, 85, 63, 23, 69, 64, 91,</p>
          <p> 9, 70, 81, 27, 97, 82,  6, 88,  3,  7,</p>
          <p>46, 13, 11, 64, 76, 31, 26, 38, 28, 13,</p>
          <p>17, 69, 90,  1,  6,  7, 64, 43,  9, 73,</p>
          <p>80, 98, 46, 27, 22, 87, 49, 83,  6, 39,</p>
          <p>42, 51, 54, 84, 34, 53, 78, 40, 14,  5</p>
        </div>
      </header>
    </div>
  );
}

export default App;
