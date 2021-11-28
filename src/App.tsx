import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from 'react-router-dom';
import { RouterRoutes as Routes } from "./routes";
import { UserProvider } from "./DataContext";

export function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes />
          <GlobalStyle />
        </UserProvider>
      </BrowserRouter>
    </>
  );
}