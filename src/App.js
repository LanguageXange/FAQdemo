import "./App.css";
import FAQ from "./FAQ/FAQ.component";
import SideBar from "./SideBar/SideBar.component";
import NavBar from "./NavBar/NavBar.component";
import HelpBox from "./HelpBox/HelpBox.component";
import { data } from "./FAQ/dataset";
import { Container } from "./App.style";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <SideBar />
        <FAQ data={data} />
        <HelpBox />
      </Container>
    </div>
  );
}

export default App;
