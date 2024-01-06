import { AppointmentStatus as AppointmentStatusEnum } from "../../model/appointment-status";

interface AppointmentStatusProps {
  status: AppointmentStatusEnum;
}

export const AppointmentStatus = ({ status }: AppointmentStatusProps) => {
  let tagClass = "tag ";
  let tegText = "";

  switch (status) {
    case AppointmentStatusEnum.WAITING:
      tagClass += "is-primary";
      tegText = "Aguardando";
      break;
    case AppointmentStatusEnum.CANCELED:
      tagClass += "is-danger";
      tegText = "Cancelado";
      break;
    case AppointmentStatusEnum.CALLED:
      tagClass += "is-warning";
      tegText = "Chamado";
      break;
    case AppointmentStatusEnum.IN_CARE:
      tagClass += "is-link";
      tegText = "Em atendimento";
      break;
    case AppointmentStatusEnum.COMPLITED:
      tagClass += "is-success";
      tegText = "Concluído";
      break;
  }

  return <span className={tagClass}>{tegText}</span>;
};
