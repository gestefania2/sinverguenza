import React from 'react';
import Router from './routes/Index';
import { ColorProvider } from './components/navbar/Navbar';

function App() {
    return (
        <div className="App">
            <ColorProvider>
                <Router />
            </ColorProvider>
        </div>
    );
}

export default App;