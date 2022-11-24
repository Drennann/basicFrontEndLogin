import { useState } from "react";
import { userData } from "./interfaces/interfaces";
import Login from "./screens/Login";
import Profile from "./screens/Profile";

function App() {
  const [user, setUser] = useState<userData>({});

  return user?.data ? (
    <Profile user={user} setUser={setUser} />
  ) : (
    <Login setUser={setUser} user={user} />
  );
}

export default App;
