import BookList from "./components/BookList";
import NavBar from "./components/NavBar";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <NavBar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
