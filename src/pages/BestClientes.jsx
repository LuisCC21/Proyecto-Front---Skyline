import { useEffect, useState } from "react";
import clienteAxios from "../config/clienteAxios";
import { TableClientes } from "../components/Table";
import { SkeletonTable } from "../components/SkeletonTable";

const columnsName = [
  "Nombre Completo",
  "Cantidad de Ventas",
  "Todal de Ventas",
];

export const BestClientes = () => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getClients = async () => {
    try {
      setIsLoading(true);
      const { data } = await clienteAxios("/clients/best-clients");

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
    <TableClientes tableItems={clients} columnsName={columnsName} title="Clientes Importantes"/>
  );
};
