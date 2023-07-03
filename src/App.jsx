import { Routes, Route, Navigate } from "react-router-dom";
import { Tweets } from "./pages/tweets";
import { Users } from "./pages/users";
// import { Link } from "react-router-dom/dist";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/tweets" element={<Tweets />} />

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;
