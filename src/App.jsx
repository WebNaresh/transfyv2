import TestState from "./State/Test/TestState";
import { BrowserRouter } from "react-router-dom";
import Route from "./Route";
import UseEffectState from "./State/UseEffect/UseEffectState";
import UseState from "./State/UseState/UseState";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TopNavaigation from "./Component/TopNavigation/TopNavaigation";
import "./app.css";
// import Footer from "./utils/Footer/Footer";
import MaterialState from "./State/Material/MaterialState";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ApiState from "./State/ApiHandler/ApiState";
import AppProgress from "./Component/Backdrop/Backdrop";
import ChatzState from "./State/Chatz/ChatzState";
import AppAlert from "./utils/Alert/Alert";
import SocketState from "./State/SocketHandler/SocketState";
import TopLoadingBar from "./utils/TopLoadingBar/TopLoadingBar";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  //   {
  // // extra-small
  // xs: 0,
  // // small
  // sm: 600,
  // // medium
  // md: 900,
  // // large
  // lg: 1200,
  // // extra-large
  // xl: 1536,
  // }
  return (
    <GoogleOAuthProvider clientId="94683515394-hmvlt9807662a50ott2jiro8ukitq6n0.apps.googleusercontent.com">
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <UseState>
            <TestState>
              <ApiState>
                <MaterialState>
                  <ChatzState>
                    <SocketState>
                      <UseEffectState>
                        <TopLoadingBar />
                        <TopNavaigation />
                        <AppProgress />
                        <AppAlert />
                        <Route />
                        {/* <Footer /> */}
                      </UseEffectState>
                    </SocketState>
                  </ChatzState>
                </MaterialState>
              </ApiState>
            </TestState>
          </UseState>
        </BrowserRouter>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
