import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/main_page";
import BackButton from "./components/backButton";
import RequestPage from "./components/contactsBlock";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <NavBar />
      <main className="pb-3">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/request" element={<RequestPage />} />
        </Routes>
      </main>
      <BackButton />
    </>
  );
}

export default App;
