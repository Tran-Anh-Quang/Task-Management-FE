import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./theme/darktheme";
import NavBar from "./page/navbar/NavBar";
import Home from "./page/home/Home";
import Auth from "./page/auth/Auth";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { fetchTasks } from "./redux/TaskSlice";
import { getUserProfile } from "./redux/AuthSlice";

function App() {
  const user = true;
  const dispatch = useDispatch();
  const { task, auth } = useSelector(store => store)

  useEffect(() => {
    dispatch(fetchTasks({}))
    dispatch(getUserProfile(auth.jwt || localStorage.getItem("jwt")));
  }, [auth.jwt]);

  return (
    <ThemeProvider theme={darkTheme}>

      {auth.user ? <div>
        <NavBar />
        <Home />
      </div> : <Auth />}



    </ThemeProvider>
  );
}

export default App;
