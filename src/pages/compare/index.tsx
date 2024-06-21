import { Card, CardTitle } from "@/components/ui/card";
import BarChart from "../../components/barChart";
import BrazilMap from "../../components/brazilMap";
import { GitPullRequestArrow } from "lucide-react";

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

const itensRegionais: itens[] = [
  {
    value: "Centro-Oeste",
    label: "Centro-Oeste",
  },
  {
    value: "Nordeste",
    label: "Nordeste",
  },
  {
    value: "Norte",
    label: "Norte",
  },
  {
    value: "Sudeste",
    label: "Sudeste",
  },
  {
    value: "Sul",
    label: "Sul",
  },
];

const Compare = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Card className="w-full h-20 rounded-none mb-4 flex px-4 items-center">
        <div className="w-[20%]">
          <CardTitle className="flex items-center gap-2">
            <GitPullRequestArrow />
            Compare
          </CardTitle>
        </div>

        <div className="flex gap-10">
          <div>
            <Select>
              <SelectTrigger className="bg-blue-600 text-white rounded-3xl gap-3">
                <SelectValue placeholder="Selecione a primeira região" />
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
          <div>
            <Select>
              <SelectTrigger className="bg-violet-700 text-white rounded-3xl gap-3">
                <SelectValue placeholder="Selecione a segunda região" />
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
      <div className="w-full flex flex-col items-center">
        <h1 className="text-xl font-bold">Indice FIEC de inovação</h1>
        <div className="w-full flex items-center justify-evenly">
          <div className="">
            <BrazilMap />
          </div>
          <div className="">
            <Card>
              <BarChart />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
