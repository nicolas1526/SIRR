"use strict";
var CU_SIR_PERSONAAPOYO_0001;
(function (CU_SIR_PERSONAAPOYO_0001) {
    class PersonaApoyoMain {
        constructor(evenContext) {
            this.evenContext = evenContext;
            this.formContext = ARN.Common.getFormContext(evenContext);
            this.dal = new CU_SIR_PERSONAAPOYO_0001.PersonaApoyoDal();
            this.new_persona_proceso = this.formContext.getControl("new_persona_proceso");
            this.new_nombres_apellidos = this.formContext.getControl("new_nombresyapellidos");
            this.new_telfono = this.formContext.getControl("new_telfono");
            this.new_cual_parentesco = this.formContext.getControl("new_cual_parentesco");
            this.new_cual_otra_persona_apoyo = this.formContext.getControl("new_cual_otra_persona_apoyo");
            this.new_fecha_nacimiento = this.formContext.getControl("new_fecha_nacimiento");
            this.new_fk_permanencia = this.formContext.getControl("new_permanencia_personadeapoyoid");
            this.new_edad_att = this.formContext.getAttribute("new_edad");
            this.new_fecha_nacimiento_att = this.formContext.getAttribute("new_fecha_nacimiento");
            this.new_name = this.formContext.getAttribute("new_name");
        }
        init() {
            this.verificarRutaFormulario();
            this.asignarPersonaProceso();
            this.new_nombres_apellidos.getAttribute().addOnChange(() => this.new_nombres_apellidos_onchage());
            this.new_telfono.getAttribute().addOnChange(() => this.new_telfono_onchage());
            this.new_cual_parentesco.getAttribute().addOnChange(() => this.new_cual_parentesco_onchage());
            this.new_cual_otra_persona_apoyo.getAttribute().addOnChange(() => this.new_cual_otra_persona_apoyo_onchage());
            this.new_fecha_nacimiento.getAttribute().addOnChange(() => this.new_fecha_nacimiento_onchage());
        }
        run() {
            this.init();
        }
        async asignarPersonaProceso() {
            const idPermanencia = ARN.Common.getLookupValue(this.new_fk_permanencia);
            const idPPR = await this.dal.obtenerIdPersonaProceso(idPermanencia);
            const nombrePPR = this.new_fk_permanencia.getAttribute().getValue()[0].name;
            ARN.Common.setLookupValue(this.new_persona_proceso, "contact", idPPR, nombrePPR);
            this.new_name.setValue(nombrePPR);
        }
        verificarRutaFormulario() {
            const formPermanencia = this.new_fk_permanencia.getAttribute().getValue();
            if (formPermanencia == null) {
                alert("La asignación de persona de apoyo debe realizarse ingresando a través del formulario de permanencia de la Persona en Proceso de Reintegración o Reincorporación.");
                Xrm.Page.ui.close();
            }
        }
        new_fecha_nacimiento_onchage() {
            const fechaNacimiento = this.new_fecha_nacimiento_att.getValue();
            const fechaActual = new Date();
            const diferencia = fechaActual.getTime() - fechaNacimiento.getTime();
            const edadEnMilisegundos = new Date(diferencia);
            const edad = Math.abs(edadEnMilisegundos.getUTCFullYear() - 1970);
            this.new_edad_att.setValue(edad);
        }
        new_nombres_apellidos_onchage() {
            if (this.new_nombres_apellidos.getAttribute().getValue().length >= 10) {
                ARN.Common.clearFieldNotification(this.formContext, this.new_nombres_apellidos);
            }
            else {
                ARN.Common.setFieldNotification(this.formContext, this.new_nombres_apellidos, "El campo nombre debe tener minimo 20 caracteres", "ERROR");
            }
        }
        new_cual_parentesco_onchage() {
            if (this.new_cual_parentesco.getAttribute().getValue().length >= 3 && this.new_cual_parentesco.getAttribute().getValue().length <= 15) {
                ARN.Common.clearFieldNotification(this.formContext, this.new_cual_parentesco);
            }
            else {
                ARN.Common.setFieldNotification(this.formContext, this.new_cual_parentesco, "El campo cual parentesco debe tener entre 3 y 15 caracteres", "ERROR");
            }
        }
        new_cual_otra_persona_apoyo_onchage() {
            if (this.new_cual_otra_persona_apoyo.getAttribute().getValue().length >= 5 && this.new_cual_otra_persona_apoyo.getAttribute().getValue().length <= 50) {
                ARN.Common.clearFieldNotification(this.formContext, this.new_cual_otra_persona_apoyo);
            }
            else {
                ARN.Common.setFieldNotification(this.formContext, this.new_cual_otra_persona_apoyo, "El campo cual parentesco debe tener entre 3 y 15 caracteres", "ERROR");
            }
        }
        new_telfono_onchage() {
            if (this.new_telfono.getAttribute().getValue().length >= 10 && this.new_telfono.getAttribute().getValue().length <= 13) {
                ARN.Common.clearFieldNotification(this.formContext, this.new_telfono);
            }
            else {
                ARN.Common.setFieldNotification(this.formContext, this.new_telfono, "El campo telefono debe tener entre 10 y 13 caracteres", "ERROR");
            }
        }
        configuracionCampoTipoProducto() {
        }
    }
    function personaApoyoMainOnLoad(evenContext) {
        new PersonaApoyoMain(evenContext).run();
    }
    CU_SIR_PERSONAAPOYO_0001.personaApoyoMainOnLoad = personaApoyoMainOnLoad;
})(CU_SIR_PERSONAAPOYO_0001 || (CU_SIR_PERSONAAPOYO_0001 = {}));
//# sourceMappingURL=new_persona_apoyo_main.js.map