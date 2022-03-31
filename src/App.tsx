import { Header } from "./components/Header";
import { ContactUsPage } from "./components/pages/ContactUs";
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
      <ContactUsPage />
    </div>
  );
}

export default App;
