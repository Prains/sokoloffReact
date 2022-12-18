import Advantage from "./components/Advantage";
import Cargo from "./components/Cargo";
import Catalog from "./components/Catalog";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Cargo />
      <Header />
      <Main />
      <Advantage />
      <Catalog />
      <Contacts />
    </div>
  );
}

export default App;
