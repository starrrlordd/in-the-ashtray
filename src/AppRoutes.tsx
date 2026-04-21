import { Route, Routes } from "react-router-dom";

import Homepage from "./components/Homepage";
import Arts from "./pages/Arts";
import ItaPost from "./pages/ItaPost";

//Define the type for the ITA_POST prop
interface Post {
  id: number;
  createdAt: string;
  userId: string;
  header: string;
  previewContent: string;
  fullContent: string[];
}

interface AppRoutesProps {
  ITA_POST: Post[];
}

const AppRoutes: React.FC<AppRoutesProps> = ({ ITA_POST }) => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/arts" element={<Arts />} />
      <Route path="/post/:id" element={<ItaPost posts={ITA_POST}/>} />
    </Routes>
  );
};

export default AppRoutes;
