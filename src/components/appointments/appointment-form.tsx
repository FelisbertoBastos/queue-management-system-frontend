import { CalendarConsts } from "../../constants/calendar";
import { Button } from "../ui/button";

const YEARS_ALLOWED = [2024, 2025];

export const AppointmentForm = () => {
  return (
    <>
      <div className="block">
        <h1 className="is-size-4 has-text-centered">
          Formulário de Agendamento
        </h1>
      </div>

      <form>
        <div className="block">
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Nome</label>
            </div>

            <div className="field-body">
              <div className="field">
                <p className="control is-expanded">
                  <input className="input" type="text" />
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
                  <input className="input" type="number" />
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
                    <select>
                      <option>Masculino</option>
                      <option>Feminino</option>
                    </select>
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
                    <select>
                      <option>Raio X</option>
                      <option>Tomografia</option>
                    </select>
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
                    <select>
                      {CalendarConsts.MONTHS.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </span>
                </p>
                <p className="control">
                  <span className="select">
                    <select>
                      {YEARS_ALLOWED.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
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
                <input type="checkbox" /> Paciente se enquadra em algum dos
                casos de prioridade, sejam eles,{" "}
                <b>portadores de deﬁciência física</b>, os <b>idosos</b> com
                idade igual ou superior a sessenta e cinco anos, as{" "}
                <b>gestantes</b>, as <b>lactantes</b> e as{" "}
                <b>pessoas acompanhadas por crianças de colo</b>.
              </label>
            </div>
          </div>
        </div>

        <div className="block has-text-right">
          <Button color="is-dark" higia text="Salvar" icon="fa-save" />
        </div>
      </form>
    </>
  );
};
