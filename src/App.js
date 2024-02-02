import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNav from "./components/MyNav";
import GalleriaFilm from "./components/GalleriaFilm";
import MyFooter from "./components/MyFooter";
// import PaginaProfilo from "./components/PaginaProfilo";

function App() {
  return (
    <>
      <header>
        <MyNav />
      </header>
      <main>
        <GalleriaFilm />
      </main>
      <footer>
        <MyFooter />
      </footer>
      {/* Qui ho inserito la pagina profilo  */}
      {/* <PaginaProfilo /> */}
    </>
  );
}

export default App;
