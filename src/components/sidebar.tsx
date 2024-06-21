import Icon from "@/assets/icon";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import LOGOFIEC from "@/assets/fiec-logo.png";
import ORGIND from "@/assets/org-ind-fiec.png";
import AGENFIEC from "@/assets/agencia-fiec.png";
import INVFIEC from "@/assets/inv-fiec.png";
import FIEC from "@/assets/fiec.png";
import {
  BarChartBig,
  ClipboardList,
  FileCog,
  GitPullRequestArrow,
} from "lucide-react";

const SideBar = () => {
  return (
    <aside className="flex gap-3 min-h-screen max-h-screen w-fit bg-blue-800">
      <div className="w-52 flex flex-col justify-between">
        <div className="flex justify-center items-center">
          <div>
            <img src={LOGOFIEC} alt="Logo" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Button className="w-full mt-4 justify-start bg-transparent rounded-s-3xl rounded-e-none hover:bg-white hover:text-blue-950">
            <Link to="/" className="flex items-center gap-2 w-full">
              <BarChartBig />
              Ranking
            </Link>
          </Button>
          <Button className="w-full mt-4 justify-start bg-transparent rounded-s-3xl rounded-e-none hover:bg-white hover:text-blue-950">
            <Link to="/perfil" className="flex items-center gap-2 w-full">
              <FileCog />
              Perfil
            </Link>
          </Button>
          <Button className="w-full mt-4 justify-start bg-transparent rounded-s-3xl rounded-e-none hover:bg-white hover:text-blue-950">
            <Link to="/compare" className="flex items-center gap-2 w-full">
              <GitPullRequestArrow />
              Compare
            </Link>
          </Button>
        </div>
        <div className="flex justify-center items-center flex-col p-4 gap-3">
          <div>
            <img src={INVFIEC} alt="Logo" className="max-w-36" />
          </div>
          <div>
            <img src={FIEC} alt="Logo" className="max-w-36" />
          </div>
          <div>
            <img src={AGENFIEC} alt="Logo" className="max-w-36" />
          </div>
          <div>
            <img src={ORGIND} alt="Logo" className="mmax-w-36" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
