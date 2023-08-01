import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Collections from "./pages/Collections";
import Form from "./pages/Form/Form";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/my-account" element={<Form />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
