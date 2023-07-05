import { Routes, Route, Navigate } from "react-router-dom";
import { TweetsPage } from "./pages/Tweets";
import { Users } from "./pages/Users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users/:userId/tweets" element={<TweetsPage />} />

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;
