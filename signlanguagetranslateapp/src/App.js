import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Startup from "./views/startup/Startup";
import Profile from "./views/profile/Profile";
import Translate from "./views/translate/Translate";
import { Provider } from "./context/userProvider";
import { Header } from "./components/header/Header";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<Startup />} />
            <Route path="/Translate" element={<Translate />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
