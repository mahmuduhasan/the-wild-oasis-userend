import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./ui/Header";
import GlobalStyles from "../GlobalStyles";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cabin from "./pages/Cabin";
import ShowSingleCabin from "./features/cabin/ShowSingleCabin";
import Booking from "./pages/Booking";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cabins" element={<Cabin />} />
            <Route path="/cabins/:id" element={<ShowSingleCabin />} />
            <Route path="/cabins/:id/booking" element={<Booking />} />
          </Route>
          <Route path="/login" element={<p>I am login</p>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
