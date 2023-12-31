// components
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Country from "./pages/Country";
import NotFound from "./pages/NotFound";
import AppProvider from "./context/AppProvider";

// styles
import "./styles/index.scss";

// other
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Router>
          <main className="app-container">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/country/:code" element={<Country />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Router>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
