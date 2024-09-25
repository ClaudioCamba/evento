import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { SignedInUserProvider } from './context/SignedInUser.jsx';
import App from './pages/App.jsx';

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
      <BrowserRouter>
        <SignedInUserProvider>
            <App />
        </SignedInUserProvider>
      </BrowserRouter>
  </StrictMode>,
)
