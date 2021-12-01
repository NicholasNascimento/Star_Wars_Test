import { BrowserRouter } from 'react-router-dom';

import { RouterRoutes as Routes } from "./routes";
import { UserProvider } from "./DataContext";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
      <BrowserRouter>
        <UserProvider>
          <Routes />
          <GlobalStyle />
        </UserProvider>
      </BrowserRouter>
  );
}