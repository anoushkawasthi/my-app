import ReactDOM from 'react-dom';
import React from 'react';
function App() {

    function handleClick() {
        console.log('Button clicked!');
    }
    return (
        <main className='container'>
            <img 
              src="https://picsum.photos/640/360"
              alt="Placeholder image from Picsum"
              />
              <button onClick={handleClick}>Click me</button>
              </main>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);