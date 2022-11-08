import "./App.css";
import { Container } from "./components/Container/Container";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <div className='page'>
      <Navbar />
      <div className='main'>
        <Container />
      </div>
      <Footer />
    </div>
  );
}

export default App;
