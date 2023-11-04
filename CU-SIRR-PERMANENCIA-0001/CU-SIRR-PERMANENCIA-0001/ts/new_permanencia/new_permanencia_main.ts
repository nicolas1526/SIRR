namespace CU_SIR_PERMANENCIA_0001 {
    class PermanenciaMain {

        private readonly dal: CU_SIR_PERMANENCIA_0001.PermanenciaDal;
        private readonly evenContext: Xrm.Events.EventContext;
        private readonly formContext: Xrm.FormContext;

        private readonly new_personaenproceso: Xrm.Controls.LookupControl;
        private readonly new_ingresocapazcidades: Xrm.Controls.LookupControl;
        private readonly new_fecha_diligenciamiento: Xrm.Attributes.Attribute;
        private readonly new_name: Xrm.Attributes.Attribute;

        constructor(evenContext: Xrm.Events.EventContext) {
            this.evenContext = evenContext;
            this.formContext = ARN.Common.getFormContext(evenContext);
            this.dal = new PermanenciaDal();
            this.new_personaenproceso = this.formContext.getControl("new_persona_proceso");
            this.new_ingresocapazcidades = this.formContext.getControl("new_ingresocapazcidades");
            this.new_fecha_diligenciamiento = this.formContext.getAttribute("new_fecha_diligenciamiento");
            this.new_name = this.formContext.getAttribute("new_name");
        }

        public run(): void {
            this.init();
        }

        private init(): void {
            this.verificarRutaFormulario();
            this.asignarPersonaProceso();
            this.new_fecha_diligenciamiento.setValue(new Date());
        }
        
        private verificarRutaFormulario(): void {
            const ppr = this.new_ingresocapazcidades.getAttribute().getValue();
            if (ppr == null) {
                alert("El registro del formulario de permanencia debe realizarse ingresando a través del formulario de ingreso.");
                Xrm.Page.ui.close();
            }
        }

        private async asignarPersonaProceso() {
            const idIngreso = ARN.Common.getLookupValue(this.new_ingresocapazcidades);
            const idPPR = await this.dal.obtenerIdPersonaProceso(idIngreso);
            const nombrePPR = this.new_ingresocapazcidades.getAttribute().getValue()[0].name;
            ARN.Common.setLookupValue(this.new_personaenproceso, "contact", idPPR, nombrePPR);
            this.new_name.setValue(nombrePPR);
        }

        
    }

    export function permanenciaOnLoad(evenContext: Xrm.Events.EventContext) {
        new PermanenciaMain(evenContext).run();
    }
}