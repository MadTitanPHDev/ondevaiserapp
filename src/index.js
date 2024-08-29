import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { InfoProvider } from './components/context/PostContext';
// import { QueryClient, QueryClientProvider } from 'react-query';


// var idEloisa = 0

const root = ReactDOM.createRoot(document.getElementById('root'));
// const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    {/* <QueryClientProvider client={QueryClient} contextSharing> */}
      <InfoProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </InfoProvider>
    {/* </QueryClientProvider> */}
  </React.StrictMode>
);
