import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';

import RecetasProvider from './context/RecetasContext';
import CategoriasProvider from './context/CategoriasContext';
import ModalProvaider from './context/ModalContext';



function App() {
    return (
        <CategoriasProvider>
        <RecetasProvider>
        <ModalProvaider>
            <Header />

                <div className="container mt-5">
                    <div className="row">
                        <Formulario />
                    </div>

                    <ListaRecetas/>
                </div>

        </ModalProvaider>
        </RecetasProvider>
        </CategoriasProvider>
    );
}

export default App;