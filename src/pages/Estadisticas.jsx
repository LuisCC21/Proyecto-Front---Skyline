import { useEffect, useState } from "react";
import clienteAxios from "../config/clienteAxios";
import { BarChart } from "../components/BarChart";
import { DonutChart } from "../components/DonutChart";

export const Estadisticas = () => {
  const [products, setProducts] = useState([]);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);

  const getClients = async () => {
    try {
      setLoading(true);
      const { data } = await clienteAxios("/sales/best-products");
      const series = data.map((product) => product.Cantidad_Ventas);
      const categories = data.map((product) => product.Tipo_Producto);

      setProducts([series, categories]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
      setProducts([]);
    }
  };

  const getLocations = async () => {
    try {
      setLoading(true);
      const { data } = await clienteAxios("/clients/clients-locations");
      const series = data.map((location) => location.Cantidad_Clientes);
      const categories = data.map((location) => location.Localidad);

      setLocations([series, categories]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
      setLocations([]);
    }
  };

  useEffect(() => {
    getClients();
    getLocations();
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-y-20 lg:gap-x-48 items-center justify-center">
        {locations.length > 0 ? (
          <div className="flex flex-col items-center justify-center mt-20">
            <h4 className="mb-5 font-semibold">Mejores Productos</h4>
            <BarChart data={products} />
          </div>
        ) : (
          <p>No hay Productos disponibles</p>
        )}

        {locations.length > 0 ? (
          <div className="flex flex-col items-center justify-center ">
            <h4 className="mb-5 font-semibold">Localidades más Comunes</h4>
            <DonutChart data={locations} />
          </div>
        ) : (
          <p>No hay datos de localidades disponibles</p>
        )}
      </div>
    </>
  );
};
