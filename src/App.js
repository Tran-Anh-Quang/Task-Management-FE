import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./theme/darktheme";
import NavBar from "./page/navbar/NavBar";
import Home from "./page/home/Home";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      
      <NavBar />
      <Home />

    </ThemeProvider>
  );
}

export default App;
