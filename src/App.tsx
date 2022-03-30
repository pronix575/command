import { Header } from "./components/Header";
import { HelpPage } from "./components/pages/HelpPage";
import { PreviewPage } from "./components/pages/PreviewPage";

function App() {
  return (
    <div className="App">
      <Header />
      <PreviewPage />
      <HelpPage />
    </div>
  );
}

export default App;
