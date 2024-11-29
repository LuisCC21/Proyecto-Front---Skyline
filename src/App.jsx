import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Inicio } from "./pages/Inicio";
import { BestClientes } from "./pages/BestClientes";
import { Ventas } from "./pages/Ventas";
import { Clientes } from "./pages/Clientes";
import { Estadisticas } from "./pages/Estadisticas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="/best-clientes" element={<BestClientes />} />
          <Route path="/ventas" element={<Ventas />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/estadisticas" element={<Estadisticas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
