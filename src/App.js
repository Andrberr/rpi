import './App.css';
import MainPage from "./pages/MainPage";
import { HashRouter,  Route, Routes} from "react-router-dom";
import Navigation from "./NavigationPart/Navigation";
import List_of_arch from "./pages/List_of_arch";
import ArchitectInfo from "./pages/ArchitectInfo";
import React from 'react';
function App() {
  return (
      <React.StrictMode>
          <HashRouter >
              <Routes >
                  <Route path="" element={<Navigation />}>
                      <Route path="" element={<MainPage />} />
                      <Route path="*" element={<List_of_arch />}/>
                      <Route path="architects/:id" element={<ArchitectInfo />} />
              </Route>
              </Routes>
          </HashRouter>
      </React.StrictMode>
  );
}

export default App;
