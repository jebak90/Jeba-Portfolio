import logo from './logo.svg';
import './App.css';
import TopBar from './components/topbar/Topbar';
import Header from './components/header/Header';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import ProjectsList from './components/projects/ProjectsList';
import Contact from './components/contact/Contact';


function App() {
  return (
    <>
      <TopBar/>
      <Header/>
      <About/>
      <Experience/>
      <ProjectsList/>
      <Contact/>
    </>
  );
}

export default App;
