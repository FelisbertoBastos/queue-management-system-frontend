import { Button } from "../ui/button";

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
              <label className="label">Paciente</label>
            </div>

            <div className="field-body">
              <div className="field">
                <p className="control is-expanded">
                  <input className="input" type="text" placeholder="Nome" />
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label"></div>
            <div className="field-body">
              <div className="field is-expanded">
                <div className="control">
                  <input className="input" type="number" placeholder="Idade" />
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label"></div>
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
        </div>

        <div className="block">
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Exame</label>
            </div>

            <div className="field-body">
              <div className="field">
                <div className="control">
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
