﻿namespace CU_SIR_INSTITUCIONAPOYO_0001 {
    class InstitucionApoyoMain {

        private readonly dal: CU_SIR_INSTITUCIONAPOYO_0001.InstitucionApoyoDal;
        private readonly evenContext: Xrm.Events.EventContext;
        private readonly formContext: Xrm.FormContext;


        private readonly new_personaenproceso: Xrm.Controls.LookupControl;
        private readonly new_nombre_programa: Xrm.Controls.LookupControl;
        private readonly new_nombre_institucion: Xrm.Controls.LookupControl;
        private readonly new_municipio: Xrm.Controls.LookupControl;
        private readonly new_departamento: Xrm.Controls.LookupControl;
        private readonly new_caracter: Xrm.Controls.LookupControl;
        private readonly new_zona: Xrm.Controls.LookupControl;
        private readonly new_hospedaje: Xrm.Controls.LookupControl;
        private readonly new_tipo_relogioso: Xrm.Controls.LookupControl;
        private readonly new_tipo_alimentario: Xrm.Controls.LookupControl;
        private readonly new_tipo_funcional: Xrm.Controls.LookupControl;
        private readonly new_tipo_educacion: Xrm.Controls.LookupControl;
        private readonly new_tipo_culturales: Xrm.Controls.LookupControl;
        private readonly new_tipo_salud: Xrm.Controls.LookupControl;
        private readonly new_tipo_economico: Xrm.Controls.LookupControl;
        private readonly new_estado_apoyo: Xrm.Controls.LookupControl;
        private readonly new_fecha_fin: Xrm.Controls.LookupControl;
        private readonly new_permanencia_institucionapoyoid: Xrm.Controls.LookupControl;
        private readonly new_name: Xrm.Attributes.Attribute;
        private readonly new_fecha_fin_att: Xrm.Attributes.Attribute;
        private readonly new_departamento_att: Xrm.Attributes.Attribute;


        constructor(evenContext: Xrm.Events.EventContext) {
            this.evenContext = evenContext;
            this.formContext = ARN.Common.getFormContext(evenContext);
            this.dal = new InstitucionApoyoDal();
            this.new_personaenproceso = this.formContext.getControl("new_persona_en_proceso");
            this.new_nombre_programa = this.formContext.getControl("new_nombre_programa");
            this.new_nombre_institucion = this.formContext.getControl("new_nombre_institucion");
            this.new_municipio = this.formContext.getControl("new_municipio");
            this.new_departamento = this.formContext.getControl("new_departamento");
            this.new_caracter = this.formContext.getControl("new_caracter");
            this.new_zona = this.formContext.getControl("new_zona");
            this.new_hospedaje = this.formContext.getControl("new_hospedaje");
            this.new_tipo_relogioso = this.formContext.getControl("new_tipo_relogioso");
            this.new_tipo_alimentario = this.formContext.getControl("new_tipo_alimentario");
            this.new_tipo_funcional = this.formContext.getControl("new_tipo_funcional");
            this.new_tipo_educacion = this.formContext.getControl("new_tipo_educacion");
            this.new_tipo_culturales = this.formContext.getControl("new_tipo_culturales");
            this.new_permanencia_institucionapoyoid = this.formContext.getControl("new_permanencia_institucionapoyoid");
            this.new_tipo_salud = this.formContext.getControl("new_tipo_salud");
            this.new_tipo_economico = this.formContext.getControl("new_tipo_economico");
            this.new_estado_apoyo = this.formContext.getControl("new_estado_apoyo");
            this.new_fecha_fin = this.formContext.getControl("new_fecha_fin");
            this.new_fecha_fin_att = this.formContext.getAttribute("new_fecha_fin");
            this.new_departamento_att = this.formContext.getAttribute("new_departamento");
            this.new_name = this.formContext.getAttribute("new_name");
        }

        private init(): void {
            this.verificarRutaFormulario();
            this.asignarPersonaProceso();
            this.ocultarCampos();
            this.new_nombre_institucion.getAttribute().addOnChange(() => this.new_nombre_institucion_onchage());
            this.new_nombre_programa.getAttribute().addOnChange(() => this.new_nombre_programa_onchage());
            this.new_estado_apoyo.getAttribute().addOnChange(() => this.new_estado_apoyo_onchange());
            this.new_municipio.getAttribute().addOnChange(() => this.new_municipio_onchange());
        }

        public run(): void {
            this.init();
        }

        private new_estado_apoyo_onchange(): void {
            const estado = this.new_estado_apoyo.getAttribute().getValue();
            if (estado) {
                this.new_fecha_fin_att.setValue(new Date());
                ARN.Common.show(this.new_fecha_fin, true,true);
            } else {
                ARN.Common.hide(this.new_fecha_fin);
            }
        }

        private async new_municipio_onchange() {
            const idMunicipio = ARN.Common.getLookupValue(this.new_municipio);
            const nombreDepartamento = await this.dal.obtenerDepartamento(idMunicipio);
            this.new_departamento_att.setValue(nombreDepartamento);
        }

        private new_nombre_programa_onchage(): void  {
            if (this.new_nombre_programa.getAttribute().getValue().length >= 10) {
                ARN.Common.clearFieldNotification(this.formContext, this.new_nombre_programa)
            } else {
                ARN.Common.setFieldNotification(this.formContext, this.new_nombre_programa, "El nombre del programa debe tener minimo 10 caracteres", "ERROR");
            }
        }

        private new_nombre_institucion_onchage(): void  {
            if (this.new_nombre_institucion.getAttribute().getValue().length >= 10) {
                ARN.Common.show(this.new_nombre_programa, true);
                ARN.Common.show(this.new_municipio, true);
                ARN.Common.show(this.new_caracter, true);
                ARN.Common.show(this.new_zona, true);
                ARN.Common.show(this.new_hospedaje, true);
                ARN.Common.show(this.new_tipo_relogioso, true);
                ARN.Common.show(this.new_tipo_alimentario, true);
                ARN.Common.show(this.new_tipo_funcional, true);
                ARN.Common.show(this.new_tipo_educacion, true);
                ARN.Common.show(this.new_tipo_culturales, true);
                ARN.Common.show(this.new_tipo_salud, true);
                ARN.Common.show(this.new_tipo_economico, true);
                ARN.Common.show(this.new_estado_apoyo, true);
                ARN.Common.show(this.new_fecha_fin, true);
                ARN.Common.show(this.new_departamento, true, true);
                ARN.Common.clearFieldNotification(this.formContext, this.new_nombre_institucion)
            } else {
                ARN.Common.setFieldNotification(this.formContext, this.new_nombre_institucion, "El nombre de la institución debe tener minimo 10 caracteres", "ERROR");
                this.ocultarCampos();
            } 
        }

        private ocultarCampos(): void {
            ARN.Common.hide(this.new_nombre_programa);
            ARN.Common.hide(this.new_municipio);
            ARN.Common.hide(this.new_caracter);
            ARN.Common.hide(this.new_zona);
            ARN.Common.hide(this.new_hospedaje);
            ARN.Common.hide(this.new_tipo_relogioso);
            ARN.Common.hide(this.new_tipo_alimentario);
            ARN.Common.hide(this.new_tipo_funcional);
            ARN.Common.hide(this.new_tipo_educacion);
            ARN.Common.hide(this.new_tipo_culturales);
            ARN.Common.hide(this.new_tipo_salud);
            ARN.Common.hide(this.new_tipo_economico);
            ARN.Common.hide(this.new_estado_apoyo);
            ARN.Common.hide(this.new_fecha_fin);
            ARN.Common.hide(this.new_departamento);
        }

        private async asignarPersonaProceso() {
            const idPermanencia = ARN.Common.getLookupValue(this.new_permanencia_institucionapoyoid);
            const idPPR = await this.dal.obtenerIdPersonaProceso(idPermanencia);
            const nombrePPR = this.new_permanencia_institucionapoyoid.getAttribute().getValue()[0].name;
            ARN.Common.setLookupValue(this.new_personaenproceso, "contact", idPPR, nombrePPR);
            this.new_name.setValue(nombrePPR);
        }

        private verificarRutaFormulario(): void {
            const formPermanencia = this.new_permanencia_institucionapoyoid.getAttribute().getValue();
            if (formPermanencia == null) {
                alert("La asignación de institución de apoyo debe realizarse ingresando a través del formulario de permanencia de la Persona en Proceso de Reintegración o Reincorporación.");
                Xrm.Page.ui.close();
            }
        }

        


       
    }

    export function institucionApoyoMainOnLoad(evenContext: Xrm.Events.EventContext) {
        new InstitucionApoyoMain(evenContext).run();
    }
}