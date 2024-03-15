import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./theme/darktheme";
import NavBar from "./page/navbar/NavBar";
import Home from "./page/home/Home";
import Auth from "./page/auth/Auth";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      
      {/* <NavBar />
      <Home /> */}
      <Auth />

    </ThemeProvider>
  );
}

export default App;
