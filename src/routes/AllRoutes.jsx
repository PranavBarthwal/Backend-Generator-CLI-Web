import { Route, Routes } from "react-router-dom";
import Landing from "../pages/landing/Landing";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
    </Routes>
  );
}

export default AllRoutes;