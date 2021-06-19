import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "semantic-ui-react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Container>
        <HomePage />
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
