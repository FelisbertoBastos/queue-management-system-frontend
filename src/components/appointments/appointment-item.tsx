import { AppointmentStatus as AppointmentStatusEnum } from "../../model/appointment-status";
import { AppointmentStatus } from "./appointment-status";

interface AppointmentItemProps {
  patientName: string;
  status: AppointmentStatusEnum;
}

export const AppointmentItem = ({
  patientName,
  status,
}: AppointmentItemProps) => {
  return (
    <div className="box">
      <div className="columns">
        <div className="column">{patientName}</div>
        <div className="column is-narrow">
          <span className="icon">
            <i className="far fa-edit"></i>
          </span>
        </div>
        <div className="column is-narrow">
          <AppointmentStatus status={status} />
        </div>
      </div>
    </div>
  );
};
