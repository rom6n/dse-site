import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/main_page";
import BackButton from "./components/backButton";

function App() {
  return (
    <>
      <main className="">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </main>
      <BackButton />
    </>
  );
}

export default App;
