
import styles from "./App.module.css";
import {AboutMe} from "./components/NavBar/AboutMe/hero";
import {NavBar} from "./components/NavBar/NavBar";

function App() {
 

  return (
    <div className={styles.App}>
     <NavBar/>
     <Hero/>
    </div>
  )
}

export default App
