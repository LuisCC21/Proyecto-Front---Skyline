import { useEffect, useState } from "react";
import clienteAxios from "../config/clienteAxios";
import { TableClientes } from "../components/Table";
import { SkeletonTable } from "../components/SkeletonTable";

const columnsName = [
  "Nombre Completo",
  "Dirección",
  "Localidad",
  "Telefono",
  "Email",
  "Fecha de Nacimiento",
];

export const Clientes = () => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getClients = async () => {
    try {
      setIsLoading(true);
      const { data } = await clienteAxios("/clients");

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
    <TableClientes
      tableItems={clients}
      columnsName={columnsName}
      pagination={true}
      title="Clientes"
    />
  );
};
