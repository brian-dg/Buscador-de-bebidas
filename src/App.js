import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

import RecetasProvider from './context/RecetasContext';



import CategoriasProvider from './context/CategoriasContext';


function App() {
  return (
      <CategoriasProvider>
      <RecetasProvider>
              <Header />

              <div className="container mt-5">
                  <div className="row">
                      <Formulario />
                  </div>

                  
              </div>

      </RecetasProvider>
      </CategoriasProvider>
  );
}

export default App;