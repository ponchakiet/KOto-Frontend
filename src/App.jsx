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
import PostCreated from "./features/post/PostCreated";
import PostManagement from "./features/post/PostManagement";
import PostUpdateFormData from "./features/post/PostUpdateFormData";
import UserProfileData from "./features/auth/UserProfileData";
import SignIn from "./features/auth/sign-in/SignInForm";
import SignUp from "./features/auth/sign-up/SignUp";
import RealEstatePage from "./features/landing/RealEstatePage";
import Search from "./features/search/Search";

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
              <Route path="user/:userId" element={<RealEstatePage />} />
              <Route path="search" element={<Search />} />
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
              <Route
                path="vehicle/update/:vehicleId"
                element={<VehicleCreated />}
              />
              <Route path="create-vehicle/new" element={<VehicleCreated />} />
              <Route
                path="create-post"
                element={
                  <ProtectedRoute>
                    <PostCreated />
                  </ProtectedRoute>
                }
              />
              <Route path="my-ads" element={<PostManagement />} />
              <Route path="my-ads/:status" element={<PostManagement />} />
              <Route
                path="my-ads/update/:postId"
                element={<PostUpdateFormData />}
              />
              <Route
                path="user/setting/"
                element={
                  <ProtectedRoute>
                    <UserProfileData />
                  </ProtectedRoute>
                }
              />

              <Route path="auth/login" element={<SignIn />} />

              <Route path="auth/register" element={<SignUp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <Toaster position="top-right" autoClose={3000} />
    </QueryClientProvider>
  );
}

export default App;
