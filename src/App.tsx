import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export default function App() {
  return (
    <div className="bg-[#e1e1e1]">
      <RouterProvider router={router} />
    </div>
  );
}
