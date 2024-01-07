import { Field, Form, Formik } from "formik";
import { CalendarConsts } from "../../constants/calendar";
import { Button } from "../ui/button";
import { Patient } from "../../constants/patient";
import { Appointment } from "../../constants/appointment";

const initialValues = {
  patient: {
    name: "",
    age: "",
    sex: Patient.sexes[0].value,
    preference: false,
  },
  date: {
    day: "",
    month: CalendarConsts.MONTHS[0],
    year: CalendarConsts.YEARS_ALLOWED[0],
  },
  exam: Appointment.exams[0],
};

export const AppointmentForm = () => {
  const onSubmitHandler = (data: typeof initialValues) => {
    console.log(data);
  };

  return (
    <>
      <div className="block">
        <h1 className="is-size-4 has-text-centered">
          Formulário de Agendamento
        </h1>
      </div>

      <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
        <Form>
          <div className="block">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Nome</label>
              </div>

              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded">
                    <Field className="input" type="text" name="patient.name" />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Idade</label>
              </div>
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="control">
                    <Field className="input" type="number" name="patient.age" />
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Sexo</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <div className="select">
                      <Field as="select" name="patient.sex">
                        {Patient.sexes.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.text}
                          </option>
                        ))}
                      </Field>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Exame</label>
              </div>

              <div className="field-body">
                <div className="field">
                  <div className="control is-expanded">
                    <div className="select">
                      <Field as="select" name="exam">
                        {Appointment.exams.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </Field>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Data</label>
              </div>

              <div className="field-body">
                <div className="field has-addons">
                  <p className="control">
                    <input
                      className="input"
                      type="number"
                      placeholder="Dia"
                      min={1}
                      max={12}
                    />
                  </p>
                  <p className="control">
                    <span className="select">
                      <Field as="select" name="data.month">
                        {CalendarConsts.MONTHS.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </Field>
                    </span>
                  </p>
                  <p className="control">
                    <span className="select">
                      <Field as="select" name="data.year">
                        {CalendarConsts.YEARS_ALLOWED.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </Field>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="field">
              <div className="control">
                <label className="checkbox has-text-justified">
                  <Field type="checkbox" name="patient.preference" /> Paciente
                  se enquadra em algum dos casos de prioridade, sejam eles,{" "}
                  <b>portadores de deﬁciência física</b>, os <b>idosos</b> com
                  idade igual ou superior a sessenta e cinco anos, as{" "}
                  <b>gestantes</b>, as <b>lactantes</b> e as{" "}
                  <b>pessoas acompanhadas por crianças de colo</b>.
                </label>
              </div>
            </div>
          </div>

          <div className="block has-text-right">
            <Button
              type="submit"
              color="is-dark"
              higia
              text="Salvar"
              icon="fa-save"
            />
          </div>
        </Form>
      </Formik>
    </>
  );
};
