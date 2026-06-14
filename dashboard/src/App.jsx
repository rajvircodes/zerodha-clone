import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
    <RouterProvider router={router} />;
  <Toaster
  position="top-right"
/>
    </>
  )
}

export default App;