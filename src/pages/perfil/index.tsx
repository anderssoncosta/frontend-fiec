import { Card, CardTitle } from "@/components/ui/card";
import BarChart from "../../components/barChart";
import { FileCog } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type itens = {
  value: string;
  label: string;
};

type card = {
  ano: string;
  posicao: number;
  valor: string;
  indicador: string;
  descricao: string;
};

const itensIndicador: itens[] = [
  {
    value: "teste 1",
    label: "teste 1",
  },
  {
    value: "teste 2",
    label: "teste 2",
  },
  {
    value: "teste 3",
    label: "teste 3",
  },
  {
    value: "teste 4",
    label: "teste 4",
  },
  {
    value: "teste 5",
    label: "teste 5",
  },
];

const itensCardCapacidade: card[] = [
  {
    ano: "2022",
    posicao: 1,
    valor: "Valor",
    indicador: "0,026",
    descricao: "Investimento Público em C&T",
  },
  {
    ano: "2022",
    posicao: 2,
    valor: "Valor",
    indicador: "0,021",
    descricao: "Investimento Público em C&T",
  },
  {
    ano: "2022",
    posicao: 3,
    valor: "Valor",
    indicador: "0,349",
    descricao: "Investimento Público em C&T",
  },
  {
    ano: "2022",
    posicao: 4,
    valor: "Valor",
    indicador: "0,566",
    descricao: "Investimento Público em C&T",
  },
  {
    ano: "2022",
    posicao: 5,
    valor: "Valor",
    indicador: "0,030",
    descricao: "Investimento Público em C&T",
  },
  {
    ano: "2022",
    posicao: 6,
    valor: "Valor",
    indicador: "0,287",
    descricao: "Investimento Público em C&T",
  },
];

const Perfil = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Card className="w-full h-20 rounded-none mb-4 flex px-4 items-center">
        <div className="w-[20%]">
          <CardTitle className="flex items-center gap-2">
            <FileCog />
            Perfil
          </CardTitle>
        </div>

        <div className="flex gap-10">
          <div>
            <Select>
              <SelectTrigger className="bg-blue-600 text-white rounded-3xl gap-3 w-52">
                <SelectValue placeholder="Região" />
              </SelectTrigger>
              <SelectContent>
                {itensIndicador.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>
      <div className="w-full flex items-center justify-evenly">
        <div className="w-1/2 flex flex-col p-5">
          <Card className="bg-blue-600 px-2">
            <p className="text-white">Capacidades</p>
          </Card>
          <div className="grid grid-cols-3 gap-4 p-4">
            {itensCardCapacidade.map(
              ({ ano, indicador, posicao, valor, descricao }) => (
                <Card className="w-48 flex flex-col gap-2">
                  <div className="flex justify-center items-center">
                    <CardTitle className="flex justify-center mt-[-10px] items-center gap-2 bg-gray-200 max-w-fit p-2 rounded-full">
                      <FileCog />
                    </CardTitle>
                  </div>
                  <div className="flex justify-evenly items-center">
                    <div className="flex flex-col items-center ">
                      <p className="text-blue-950">{ano}</p>
                      <span className="text-blue-950 font-bold">{`${posicao}°`}</span>
                    </div>
                    <div className="flex flex-col items-center bg-gray-100 rounded-sm p-2">
                      <p className="text-blue-950">{valor}</p>
                      <span className="text-blue-950 font-bold">
                        {indicador}
                      </span>
                    </div>
                  </div>
                  <div>
                    <Card className="bg-blue-500 px-3 py-1 rounded-lg">
                      <p className="text-xs text-white ">{descricao}</p>
                    </Card>
                  </div>
                </Card>
              )
            )}
          </div>
          <Card className="bg-cyan-400 px-2">
            <p className="text-white">Resultados</p>
          </Card>
          <div className="grid grid-cols-3 gap-4 p-4">
            {itensCardCapacidade.map(
              ({ ano, indicador, posicao, valor, descricao }) => (
                <Card className="w-48 flex flex-col gap-2">
                  <div className="flex justify-center items-center">
                    <CardTitle className="flex justify-center mt-[-10px] items-center gap-2 bg-gray-200 max-w-fit p-2 rounded-full">
                      <FileCog />
                    </CardTitle>
                  </div>
                  <div className="flex justify-evenly items-center">
                    <div className="flex flex-col items-center ">
                      <p className="text-blue-950">{ano}</p>
                      <span className="text-blue-950 font-bold">{`${posicao}°`}</span>
                    </div>
                    <div className="flex flex-col items-center bg-gray-100 rounded-sm p-2">
                      <p className="text-blue-950">{valor}</p>
                      <span className="text-blue-950 font-bold">
                        {indicador}
                      </span>
                    </div>
                  </div>
                  <div>
                    <Card className="bg-cyan-400 px-3 py-1 rounded-lg">
                      <p className="text-xs text-white ">{descricao}</p>
                    </Card>
                  </div>
                </Card>
              )
            )}
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col p-5">
          <Card>
            <CardTitle className="flex justify-center items-center gap-2 ">
              Ceará
            </CardTitle>
            <div className="flex justify-center items-center"></div>
            <div className="">
              <BarChart />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
