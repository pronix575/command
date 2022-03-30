import { Header } from "./components/Header";
import { HelpPage } from "./components/pages/HelpPage";
import { PreviewPage } from "./components/pages/PreviewPage";
import { ProjectsPage } from "./components/pages/ProjectsPage";
import { WorkWithUsPage } from "./components/pages/WorkWithUsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <PreviewPage />
      <HelpPage />
      <WorkWithUsPage />
      <ProjectsPage />
    </div>
  );
}

export default App;
