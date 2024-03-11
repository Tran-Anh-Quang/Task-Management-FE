import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./theme/darktheme";
import NavBar from "./page/navbar/NavBar";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      
      <NavBar />

    </ThemeProvider>
  );
}

export default App;
