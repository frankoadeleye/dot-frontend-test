import VotingPage from "src/pages/voting";
import theme from "src/utils/contants/theme";
import GlobalStyles from "src/utils/contants/global-styles";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <VotingPage />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
