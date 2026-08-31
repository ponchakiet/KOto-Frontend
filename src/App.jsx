import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import AppLayout from "./ui/AppLayout";
import PostDetailPage from "./pages/PostDetailPage";
import VehiclePage from "./pages/VehiclePage";
import ProtectedRoute from "./ui/ProtectedRoute";
import VehicleList from "./features/vehicle/VehicleList";
import VehicleCreatedPage from "./pages/VehicleCreatedPage";
import VehicleCreated from "./features/vehicle/VehicleCreated";

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
      <ReactQueryDevtools />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<HomePage />} />
              <Route path="post/:postId" element={<PostDetailPage />} />
              <Route path="vehicle/:vehicleId" element={<VehiclePage />} />
              <Route
                path="vehicle"
                element={
                  <ProtectedRoute>
                    <VehicleList />
                  </ProtectedRoute>
                }
              />

              <Route
                path="create-vehicle"
                element={
                  <ProtectedRoute>
                    <VehicleCreatedPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="create-vehicle/draft/:draftId"
                element={
                  <ProtectedRoute>
                    <VehicleCreated />
                  </ProtectedRoute>
                }
              />
              <Route path="asset/update/:assetId" element={<VehicleCreated />} />
              <Route path="create-vehicle/new" element={<VehicleCreated />} />
              
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <Toaster position="top-right" autoClose={3000} />
    </QueryClientProvider>
  );
}

export default App;
