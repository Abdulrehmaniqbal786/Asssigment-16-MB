import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import ChatRoom from "./pages/ChatRoom";
import Login from "./pages/Login";
import { PrivateRoute } from "./routes/PrivateRoute";
import Sim_Login from "./pages/Sim_Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Sim_Login />} />
        <Route path="/Signup" element={<Signup />} />

        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <ChatRoom />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
