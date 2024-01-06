import { AppointmentStatus as AppointmentStatusEnum } from "../../model/appointment-status";

interface AppointmentStatusProps {
  status: AppointmentStatusEnum;
}

export const AppointmentStatus = ({ status }: AppointmentStatusProps) => {
  let tagClass = "tag ";
  let tagText = "";

  switch (status) {
    case AppointmentStatusEnum.WAITING:
      tagClass += "is-primary";
      tagText = "Aguardando";
      break;
    case AppointmentStatusEnum.CANCELED:
      tagClass += "is-danger";
      tagText = "Cancelado";
      break;
    case AppointmentStatusEnum.CALLED:
      tagClass += "is-warning";
      tagText = "Chamado";
      break;
    case AppointmentStatusEnum.IN_CARE:
      tagClass += "is-link";
      tagText = "Em atendimento";
      break;
    case AppointmentStatusEnum.COMPLITED:
      tagClass += "is-success";
      tagText = "Concluído";
      break;
    case AppointmentStatusEnum.UNDEFINED:
      tagClass += "is-light";
      tagText = "Indefinido";
      break;
  }

  return <span className={tagClass}>{tagText}</span>;
};
