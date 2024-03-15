import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {QueryClientProvider,QueryClient} from "react-query";
import {BrowserRouter as Router} from "react-router-dom";
const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            refetchOnWindowFocus:false,
            staleTime:5*30*600,
            retry:0
        }
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
        <Router>
            <App />
        </Router>
    </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
