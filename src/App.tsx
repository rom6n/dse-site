import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/main_page";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
    <NavBar />
      <main className="">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
