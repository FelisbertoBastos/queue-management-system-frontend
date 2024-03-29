import { Calendar } from "../../components/calendar";
import { AppointmentList } from "../../components/appointments/appointment-list";
import { Topbar } from "../../components/topbar";
import { AppointmentCreation } from "../../components/appointments/appointment-creation";

export const Home = () => {
  return (
    <>
      <Topbar />

      <div className="container mt-4">
        <h1 className="title">Gerenciamento de Fila</h1>

        <div className="columns">
          <div className="column is-4">
            <Calendar />

            <AppointmentCreation />
          </div>
          <div className="column">
            <AppointmentList />
          </div>
        </div>
      </div>
    </>
  );
};
