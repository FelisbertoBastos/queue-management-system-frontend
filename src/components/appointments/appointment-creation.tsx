import { useState } from "react";
import { Modal } from "../ui/modal";
import { AppointmentForm } from "./appointment-form";
import { Button } from "../ui/button";

export const AppointmentCreation = () => {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  const openAppointmentForm = () => {
    setShowAppointmentForm(true);
  };

  const closeAppointmentForm = () => {
    setShowAppointmentForm(false);
  };

  return (
    <>
      <Button
        color="is-dark"
        higia
        onClick={openAppointmentForm}
        icon="fa-notes-medical"
        text="Agendar"
      />

      <Modal show={showAppointmentForm} onClose={closeAppointmentForm}>
        <AppointmentForm />
      </Modal>
    </>
  );
};
