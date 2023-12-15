
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Stats from "./components/Stats";
import History from "./components/History";
import Videos from "./components/Videos";
import Details from "./components/Details";
import Home from "./components/Home";
import Nav from './components/Nav';

function App() {
  return (
      <>
            <Router>
                <Nav
                  logo = "Logo"
                />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="dashboard" element={<Dashboard />}>
                        <Route path="details" element={
                            <Details
                                name="mike smith"
                                location="London"

                            />
                            }
                        />
                        <Route path="stats" element={
                            <Stats/>
                            }
                        />
                        <Route path="history" element={<History/>}/>
                        <Route path="videos" element={<Videos/>}/>
                    </Route>
                </Routes>
            </Router>

    </>

  );
}

export default App;
