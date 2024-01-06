import { AppointmentStatus } from "../../model/appointment-status";
import { AppointmentItem } from "./appointment-item";

const appointments = [
  {
    id: 1,
    patient: { name: "José de Alguquerque", age: 84, gender: "M" },
    status: AppointmentStatus.CALLED,
  },
  {
    id: 2,
    patient: { name: "Maria do Rośario Pereira", age: 38, gender: "F" },
    status: AppointmentStatus.WAITING,
  },
];

export const AppointmentList = () => {
  return (
    <div>
      {appointments.map((item) => (
        <AppointmentItem
          key={item.id}
          patientName={item.patient.name}
          status={item.status}
        />
      ))}
    </div>
  );
};
