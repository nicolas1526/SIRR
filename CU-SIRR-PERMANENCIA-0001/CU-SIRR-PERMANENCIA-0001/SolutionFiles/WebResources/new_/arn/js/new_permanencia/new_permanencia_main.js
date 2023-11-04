"use strict";
var CU_SIR_PERMANENCIA_0001;
(function (CU_SIR_PERMANENCIA_0001) {
    class PermanenciaMain {
        constructor(evenContext) {
            this.evenContext = evenContext;
            this.formContext = ARN.Common.getFormContext(evenContext);
            this.dal = new CU_SIR_PERMANENCIA_0001.PermanenciaDal();
            this.new_personaenproceso = this.formContext.getControl("new_persona_proceso");
            this.new_ingresocapazcidades = this.formContext.getControl("new_ingresocapazcidades");
            this.new_fecha_diligenciamiento = this.formContext.getAttribute("new_fecha_diligenciamiento");
            this.new_name = this.formContext.getAttribute("new_name");
        }
        run() {
            this.init();
        }
        init() {
            this.verificarRutaFormulario();
            this.asignarPersonaProceso();
            this.new_fecha_diligenciamiento.setValue(new Date());
        }
        verificarRutaFormulario() {
            const ppr = this.new_ingresocapazcidades.getAttribute().getValue();
            if (ppr == null) {
                alert("El registro del formulario de permanencia debe realizarse ingresando a través del formulario de ingreso.");
                Xrm.Page.ui.close();
            }
        }
        async asignarPersonaProceso() {
            const idIngreso = ARN.Common.getLookupValue(this.new_ingresocapazcidades);
            const idPPR = await this.dal.obtenerIdPersonaProceso(idIngreso);
            const nombrePPR = this.new_ingresocapazcidades.getAttribute().getValue()[0].name;
            ARN.Common.setLookupValue(this.new_personaenproceso, "contact", idPPR, nombrePPR);
            this.new_name.setValue(nombrePPR);
        }
    }
    function permanenciaOnLoad(evenContext) {
        new PermanenciaMain(evenContext).run();
    }
    CU_SIR_PERMANENCIA_0001.permanenciaOnLoad = permanenciaOnLoad;
})(CU_SIR_PERMANENCIA_0001 || (CU_SIR_PERMANENCIA_0001 = {}));
//# sourceMappingURL=new_permanencia_main.js.map