// components-pages
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
//style
import "./styles/index.scss";
// other
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();

function App() {
  return (
    <main className="app-container">
      <QueryClientProvider client={queryClient}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </main>
  );
}

export default App;
