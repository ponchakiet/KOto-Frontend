import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./ui/AppLayout";
import PostDetailPage from "./pages/PostDetailPage";
import PostCreatedPage from "./pages/PostCreatedPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      cacheTime: 5 * 60 * 1000,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="posts/:postId" element={<PostDetailPage />} />
            <Route path="create" element={<PostCreatedPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" autoClose={3000} />
    </QueryClientProvider>
  );
}

export default App;
