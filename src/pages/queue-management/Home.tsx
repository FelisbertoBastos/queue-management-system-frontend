import { Calendar } from "../../components/calendar";
import { Topbar } from "../../components/topbar";

export const Home = () => {
  return (
    <>
      <Topbar />
      <div className="container mt-4">
        <h1 className="title">Gerenciamento de Fila</h1>

        <div className="columns">
          <div className="column is-4">
            <Calendar />
          </div>
          <div className="column"></div>
        </div>
      </div>
    </>
  );
};
