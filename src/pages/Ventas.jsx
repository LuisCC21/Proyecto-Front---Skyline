import { useState, useEffect } from "react";
import clienteAxios from "../config/clienteAxios";
import { TableClientes } from "../components/Table";
import { SkeletonTable } from "../components/SkeletonTable";

const columnsName = [
  "Nombre_Cliente",
  "Tipo_Producto",
  "Unidades",
  "Canal_Venta",
  "Pais",
  "Precio_Unitario",
  "Coste_Unitario",
  "Fecha_Envio",
  "Fecha_Pedido",
  "Importe_venta_Total",
  "Importe_Coste_Total",
];

export const Ventas = () => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getClients = async () => {
    try {
      setIsLoading(true);
      const { data } = await clienteAxios("/sales");

      setClients(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
      setClients([]);
    }
  };

  useEffect(() => {
    getClients();
  }, []);

  return isLoading ? (
    <SkeletonTable />
  ) : (
    <TableClientes tableItems={clients} columnsName={columnsName} title="Ventas Recientes"/>
  );
};
