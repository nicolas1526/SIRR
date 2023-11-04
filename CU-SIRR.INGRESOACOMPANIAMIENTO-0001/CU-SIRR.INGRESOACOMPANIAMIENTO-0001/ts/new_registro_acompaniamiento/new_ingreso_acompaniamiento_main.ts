namespace CU_SIR_INGRESO_0001 {
    class IngesoAcompaniamientoMain {

        private readonly dal: CU_SIR_INGRESO_0001.IngesoAcompaniamientoDal;
        private readonly evenContext: Xrm.Events.EventContext;
        private readonly formContext: Xrm.FormContext;

        private readonly clasificadorDocumentosIdentidad = ["CÉDULA", "CONTRASEÑA", "HISTORIAL EXTRANJERO"];
        private readonly clasificadorDiscapacidad = ["CERTIFICADO DE DISCAPACIDAD"];
        private readonly clasificadorPertenenciaEtnica = ["PERTENENCIA ETNICA"];
        private readonly clasificadorHistoriaClinica = ["HISTORIA CLINICA"];

        private readonly new_personaenproceso: Xrm.Controls.LookupControl;
        private readonly new_anexo_certificado_discapacidad: Xrm.Controls.LookupControl;
        private readonly new_anexo_pertenencia_etnica: Xrm.Controls.LookupControl;
        private readonly new_anexo_persona_mayor: Xrm.Controls.LookupControl;
        private readonly new_anexo_enfermedad_altocosto: Xrm.Controls.LookupControl;
        private readonly new_mayor_50_control: Xrm.Controls.LookupControl;
        private readonly new_mayor_60_control: Xrm.Controls.LookupControl;
        private readonly new_verificacion_cedula_persona_mayor_control: Xrm.Controls.LookupControl;
        private readonly new_fecha_nacimiento_persona_apoyo: Xrm.Controls.LookupControl;
        private readonly new_verificacion_cedula_persona_mayor: Xrm.Attributes.Attribute;
        private readonly new_name: Xrm.Attributes.Attribute;     
        private readonly new_edad: Xrm.Attributes.Attribute;

        private readonly new_mayor_50: Xrm.Attributes.Attribute;
        private readonly new_mayor_60: Xrm.Attributes.Attribute;
        private readonly new_autoreconoce_discapacidad: Xrm.Controls.LookupControl;
        private readonly new_autorreconoce_pertenencia_etnica: Xrm.Controls.LookupControl;
        private readonly new_diagnosticado_enfermedad_altocosto: Xrm.Controls.LookupControl;
        private readonly new_personamayoringreso: Xrm.Attributes.Attribute;
        private readonly new_enfermedad_ingreso: Xrm.Attributes.Attribute;
        private readonly new_discapacidad_ingreso: Xrm.Attributes.Attribute;
        private readonly new_grupoetnicoingreso: Xrm.Attributes.Attribute;

        private readonly new_fecha_diligenciamiento: Xrm.Attributes.Attribute;
        private readonly new_curso_vida_persona_proceso: Xrm.Attributes.Attribute;
        private readonly new_fecha_nacimiento_persona_apoyo_att: Xrm.Attributes.Attribute;
        private readonly new_edad_persona_apoyo_att: Xrm.Attributes.Attribute;
        private readonly new_acepta_plan_acompaniamiento: Xrm.Controls.LookupControl;


        



        private new_conclusion_plan_acompaniamiento: Xrm.Controls.OptionSetControl;
        private new_conclusion_plan_acompaniamiento_options: Xrm.OptionSetValue[];

        constructor(evenContext: Xrm.Events.EventContext) {
            this.evenContext = evenContext;
            this.formContext = ARN.Common.getFormContext(evenContext);
            this.dal = new IngesoAcompaniamientoDal();
            this.new_personaenproceso = this.formContext.getControl("new_persona_en_proceso");
            this.new_anexo_certificado_discapacidad = this.formContext.getControl("new_anexo_certificado_discapacidad");
            this.new_anexo_pertenencia_etnica = this.formContext.getControl("new_anexo_pertenencia_etnica");
            this.new_anexo_persona_mayor = this.formContext.getControl("new_anexo_persona_mayor");
            this.new_anexo_enfermedad_altocosto = this.formContext.getControl("new_anexo_enfermedad_altocosto");
            this.new_verificacion_cedula_persona_mayor_control = this.formContext.getControl("new_verificacion_cedula_persona_mayor");
            this.new_mayor_60_control = this.formContext.getControl("new_60_persona_mayor");
            this.new_mayor_50_control = this.formContext.getControl("new_50_persona_mayor");
            this.new_autoreconoce_discapacidad = this.formContext.getControl("new_autoreconoce_discapacidad");
            this.new_autorreconoce_pertenencia_etnica = this.formContext.getControl("new_autorreconoce_pertenencia_etnica");
            this.new_diagnosticado_enfermedad_altocosto = this.formContext.getControl("new_diagnosticado_enfermedad_altocosto");
            this.new_personamayoringreso = this.formContext.getAttribute("new_personamayoringreso");
            this.new_enfermedad_ingreso = this.formContext.getAttribute("new_enfermedad_ingreso");
            this.new_discapacidad_ingreso = this.formContext.getAttribute("new_discapacidad_ingreso");
            this.new_grupoetnicoingreso = this.formContext.getAttribute("new_grupoetnicoingreso");

            this.new_fecha_nacimiento_persona_apoyo = this.formContext.getControl("new_fecha_nacimiento_persona_apoyo");
            this.new_name = this.formContext.getAttribute("new_name");
            this.new_edad = this.formContext.getAttribute("new_edad_persona_proceso");
            this.new_mayor_50 = this.formContext.getAttribute("new_50_persona_mayor");
            this.new_mayor_60 = this.formContext.getAttribute("new_60_persona_mayor");
            this.new_fecha_diligenciamiento = this.formContext.getAttribute("new_fecha_diligenciamiento");
            this.new_curso_vida_persona_proceso = this.formContext.getAttribute("new_curso_vida_persona_proceso");
            this.new_verificacion_cedula_persona_mayor = this.formContext.getAttribute("new_verificacion_cedula_persona_mayor");
            this.new_fecha_nacimiento_persona_apoyo_att = this.formContext.getAttribute("new_fecha_nacimiento_persona_apoyo");
            this.new_edad_persona_apoyo_att = this.formContext.getAttribute("new_edad_persona_apoyo");

            this.new_acepta_plan_acompaniamiento = this.formContext.getControl("new_acepta_plan_acompaniamiento");
            this.new_conclusion_plan_acompaniamiento = this.formContext.getControl("new_conclusion_plan_acompaniamiento");
        }

        

        private async new_personaenproceso_onchage() {
            const idPersona = ARN.Common.getLookupValue(this.new_personaenproceso);
            const nombrePPR = this.new_personaenproceso.getAttribute().getValue()[0].name;
            this.new_name.setValue(nombrePPR);
            await this.reglaEdad(idPersona);

        }

        public new_fecha_nacimiento_pa_onchage() {
            const fechaNacimiento = this.new_fecha_nacimiento_persona_apoyo_att.getValue();
            const fechaActual = new Date();
            const diferencia = fechaActual.getTime() - fechaNacimiento.getTime();
            const edadEnMilisegundos = new Date(diferencia);
            const edad = Math.abs(edadEnMilisegundos.getUTCFullYear() - 1970);
            this.new_edad_persona_apoyo_att.setValue(edad);
        }

        private async reglaEdad(idPersona: string) {
            if (typeof idPersona !== "undefined" && idPersona !== null) {
                const edad = await this.dal.obtenerEdadPersona(idPersona);
                this.new_edad.setValue(edad);

                this.regla_reconocimiento_persona_mayor(edad);

                if (edad >= 18 && edad <= 28) {
                    this.new_curso_vida_persona_proceso.setValue(100000000);
                } else if (edad >= 29 && edad <= 59) {
                    this.new_curso_vida_persona_proceso.setValue(100000001);
                } else if (edad >= 60) {
                    this.new_curso_vida_persona_proceso.setValue(100000002);
                } else {
                    this.new_curso_vida_persona_proceso.setValue(100000003);
                }
            } else {
                this.new_edad.setValue("");
                this.new_curso_vida_persona_proceso.setValue(null);
            }
            
        }

        private regla_reconocimiento_persona_mayor(edad: number) {
            const verificacionPersonaMayor: boolean = this.new_verificacion_cedula_persona_mayor.getValue();
            if (edad >= 60 && verificacionPersonaMayor) {
                ARN.Common.show(this.new_verificacion_cedula_persona_mayor_control, true);
                ARN.Common.hide(this.new_mayor_50_control);
                this.new_mayor_50.setValue(false);
                ARN.Common.show(this.new_mayor_60_control, true);
                this.new_mayor_60.setValue(true);
                ARN.Common.show(this.new_anexo_persona_mayor, true);  
            } else if (edad >= 60 && !verificacionPersonaMayor) {
                ARN.Common.show(this.new_verificacion_cedula_persona_mayor_control, true);
                ARN.Common.hide(this.new_mayor_50_control);
                this.new_mayor_50.setValue(false);
                ARN.Common.show(this.new_mayor_60_control, true);
                this.new_mayor_60.setValue(true);
                ARN.Common.hide(this.new_anexo_persona_mayor);
            } else if (edad >= 50 && verificacionPersonaMayor) {
                ARN.Common.show(this.new_verificacion_cedula_persona_mayor_control, true);
                ARN.Common.hide(this.new_mayor_60_control);
                this.new_mayor_60.setValue(false);
                ARN.Common.show(this.new_mayor_50_control, true);
                this.new_mayor_50.setValue(true);
                ARN.Common.show(this.new_anexo_persona_mayor, true);
            } else if (edad >= 50 && !verificacionPersonaMayor) {
                ARN.Common.show(this.new_verificacion_cedula_persona_mayor_control, true);
                ARN.Common.hide(this.new_mayor_60_control);
                this.new_mayor_60.setValue(false);
                ARN.Common.show(this.new_mayor_50_control, true);
                this.new_mayor_50.setValue(true);
                ARN.Common.hide(this.new_anexo_persona_mayor);
            } else {
                ARN.Common.hide(this.new_verificacion_cedula_persona_mayor_control);
                ARN.Common.hide(this.new_mayor_60_control);
                this.new_mayor_60.setValue(false);
                ARN.Common.hide(this.new_mayor_50_control);
                this.new_mayor_50.setValue(false);
                ARN.Common.hide(this.new_anexo_persona_mayor);
            }
        }

        private async new_verificacion_cedula_persona_mayor_control_onchange() {
            const idPersona = ARN.Common.getLookupValue(this.new_personaenproceso);
            await this.reglaEdad(idPersona);
        }

        private new_anexo_certificado_discapacidad_onchange(): void {
            ARN.Common.clearFieldNotification(this.formContext, this.new_anexo_certificado_discapacidad);
            this.errorClasificadorDocumental(this.new_anexo_certificado_discapacidad, this.clasificadorDiscapacidad)
                .then(() => this.errorPPRAsignadoDocumentoAdjunto(this.new_anexo_certificado_discapacidad));
        }

        private new_anexo_pertenencia_etnica_onchange(): void {
            ARN.Common.clearFieldNotification(this.formContext, this.new_anexo_pertenencia_etnica);
            this.errorClasificadorDocumental(this.new_anexo_pertenencia_etnica, this.clasificadorPertenenciaEtnica)
                .then(() => this.errorPPRAsignadoDocumentoAdjunto(this.new_anexo_pertenencia_etnica));
        }

        private new_anexo_persona_mayor_onchange(): void {
            ARN.Common.clearFieldNotification(this.formContext, this.new_anexo_persona_mayor);
            this.errorClasificadorDocumental(this.new_anexo_persona_mayor, this.clasificadorDocumentosIdentidad)
                .then(() => this.errorPPRAsignadoDocumentoAdjunto(this.new_anexo_persona_mayor));
        }

        private new_anexo_enfermedad_altocosto_onchange(): void {
            ARN.Common.clearFieldNotification(this.formContext, this.new_anexo_enfermedad_altocosto);
            this.errorClasificadorDocumental(this.new_anexo_enfermedad_altocosto, this.clasificadorHistoriaClinica)
                .then(() => this.errorPPRAsignadoDocumentoAdjunto(this.new_anexo_enfermedad_altocosto));
        }

        private errorClasificadorDocumental(control: Xrm.Controls.LookupControl, clasificadoresValidos: string[]): JQueryPromise<any> {
            let defer = $.Deferred();
            let controlValue = ARN.Common.getLookupValue(control);

            if (controlValue) {
                this.dal.obtenerClasificadorDocumental(controlValue)
                    .then(clasificador => {
                        var valido = clasificadoresValidos.filter(c => c === clasificador);
                        if (valido.length <= 0) {
                            ARN.Common.setFieldNotification(this.formContext, control, "El clasificador documental del documento adjunto no es válido. Por favor verifique", "ERROR");
                            defer.reject();
                        } else {
                            defer.resolve();
                        }
                    }).catch(() => defer.reject());
            } else {
                defer.resolve();
            }

            return defer.promise();
        }

        private errorPPRAsignadoDocumentoAdjunto(control: Xrm.Controls.LookupControl): JQueryPromise<any> {
            let defer = $.Deferred();
            let controlValue = ARN.Common.getLookupValue(control);
            let pprValue = ARN.Common.getLookupValue(this.new_personaenproceso);

            if (controlValue) {
                this.dal.obtenerPPrDocumentoAdjunto(controlValue)
                    .then(datosDocumento => {
                        if (datosDocumento.new_participantedocumentoadjuntoid) {
                            let idPPRDocumentoAdjunto = datosDocumento.new_participantedocumentoadjuntoid.contactid.toLowerCase();
                            let idPPRRegistroIngreso = pprValue.toLowerCase();

                            if (idPPRDocumentoAdjunto !== idPPRRegistroIngreso) {
                                ARN.Common.setFieldNotification(this.formContext, control, "El documento adjunto está relacionado con otro Participante. Por favor verifique.", "ERROR");
                                defer.reject();
                            } else {
                                defer.resolve();
                            }
                        } else {
                            defer.resolve();
                        }
                    }).catch(() => defer.reject());
            } else {
                defer.resolve();
            }

            return defer.promise();
        }

        private verificarRutaFormulario(): void {
            const ppr = this.new_personaenproceso.getAttribute().getValue();
            if (ppr == null) {
                alert("El registro del formulario ingreso debe realizarse ingresando a través del formulario de la Persona en Proceso de Reintegración o Reincorporación.");
                Xrm.Page.ui.close();
            }
        }

        private new_acepta_plan_acompaniamiento_onchange(): void {
            const tipoProducto = this.new_acepta_plan_acompaniamiento.getAttribute().getValue();
            this.new_conclusion_plan_acompaniamiento.clearOptions();
            if (tipoProducto) {
                this.new_conclusion_plan_acompaniamiento.getAttribute().setValue(100000000);
                this.new_conclusion_plan_acompaniamiento.addOption(this.new_conclusion_plan_acompaniamiento_options[1]);
                this.new_conclusion_plan_acompaniamiento.addOption(this.new_conclusion_plan_acompaniamiento_options[3]);
            }
            else {
                this.new_conclusion_plan_acompaniamiento.getAttribute().setValue(100000001);
                this.new_conclusion_plan_acompaniamiento.addOption(this.new_conclusion_plan_acompaniamiento_options[2]);
            }
        }

        private new_mayor_control_onchange() {
            const isPersonaMayor50 = this.new_mayor_50_control.getAttribute().getValue();
            const isPersonaMayor60 = this.new_mayor_60_control.getAttribute().getValue();
            if (isPersonaMayor50 || isPersonaMayor60) {
                this.new_personamayoringreso.setValue(true);
            } else {
                this.new_personamayoringreso.setValue(false);
            }
        }
        private new_autoreconoce_discapacidad_onchange() {
            const isPersonaDiscapacidad = this.new_autoreconoce_discapacidad.getAttribute().getValue();
            if (isPersonaDiscapacidad) {
                this.new_discapacidad_ingreso.setValue(true);
            } else {
                this.new_discapacidad_ingreso.setValue(false);
            }
        }
        private new_autorreconoce_pertenencia_etnica_onchange() {
            const isPersonaGrupoEtnico = this.new_autorreconoce_pertenencia_etnica.getAttribute().getValue();
            if (isPersonaGrupoEtnico) {
                this.new_grupoetnicoingreso.setValue(true);
            } else {
                this.new_grupoetnicoingreso.setValue(false);
            }
        }
        private new_diagnosticado_enfermedad_altocosto_onchange() {
            const isPersonaEnfermedad = this.new_diagnosticado_enfermedad_altocosto.getAttribute().getValue();
            if (isPersonaEnfermedad) {
                this.new_enfermedad_ingreso.setValue(true);
            } else {
                this.new_enfermedad_ingreso.setValue(false);
            }
        }

        private init(): void {
            //this.verificarRutaFormulario();
            this.new_acepta_plan_acompaniamiento_onchange;
            this.new_personaenproceso.getAttribute().addOnChange(() => this.new_personaenproceso_onchage());
            this.new_anexo_certificado_discapacidad.getAttribute().addOnChange(() => this.new_anexo_certificado_discapacidad_onchange());
            this.new_anexo_pertenencia_etnica.getAttribute().addOnChange(() => this.new_anexo_pertenencia_etnica_onchange());
            this.new_anexo_persona_mayor.getAttribute().addOnChange(() => this.new_anexo_persona_mayor_onchange());
            this.new_anexo_enfermedad_altocosto.getAttribute().addOnChange(() => this.new_anexo_enfermedad_altocosto_onchange());
            this.new_verificacion_cedula_persona_mayor_control.getAttribute().addOnChange(() => this.new_verificacion_cedula_persona_mayor_control_onchange());
            this.new_fecha_nacimiento_persona_apoyo.getAttribute().addOnChange(() => this.new_fecha_nacimiento_pa_onchage());
            this.new_acepta_plan_acompaniamiento.getAttribute().addOnChange(() => this.new_acepta_plan_acompaniamiento_onchange());
            this.new_mayor_50_control.getAttribute().addOnChange(() => this.new_mayor_control_onchange());
            this.new_mayor_60_control.getAttribute().addOnChange(() => this.new_mayor_control_onchange());
            this.new_autoreconoce_discapacidad.getAttribute().addOnChange(() => this.new_autoreconoce_discapacidad_onchange());
            this.new_autorreconoce_pertenencia_etnica.getAttribute().addOnChange(() => this.new_autorreconoce_pertenencia_etnica_onchange());
            this.new_diagnosticado_enfermedad_altocosto.getAttribute().addOnChange(() => this.new_diagnosticado_enfermedad_altocosto_onchange());
        }

        public run(): void {
            this.new_conclusion_plan_acompaniamiento_options = this.new_conclusion_plan_acompaniamiento.getOptions();
            this.new_fecha_diligenciamiento.setValue(new Date());
            ARN.Common.hide(this.new_mayor_60_control);
            ARN.Common.hide(this.new_mayor_50_control);
            this.init();
        }
    }

    export function IngesoAcompaniamientoOnLoad(evenContext: Xrm.Events.EventContext) {
        new IngesoAcompaniamientoMain(evenContext).run();
    }
}