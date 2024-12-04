import { Button } from "../components/Button";

export const Inicio = () => {
  return (
    <div className="h-full w-full flex items-center justify-center ">
      <div className="flex ml:flex-row items-center justify-center ml:gap-x-8  flex-col gap-y-5">
        <Button name={"Ver Clientes"} route={"/clientes"} />
        <Button name={"Ver Ventas"} route={"/ventas"} />
        <Button name={"Ver Clientes Importantes"} route={"/best-clientes"} />
      </div>
    </div>
  );
};
