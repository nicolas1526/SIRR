"use strict";
var CU_SIR_PRODUCTOAPOYO_0001;
(function (CU_SIR_PRODUCTOAPOYO_0001) {
    class ProductoApoyoMain {
        constructor(evenContext) {
            this.evenContext = evenContext;
            this.formContext = ARN.Common.getFormContext(evenContext);
            this.dal = new CU_SIR_PRODUCTOAPOYO_0001.ProductoApoyoDal();
            this.new_persona_proceso = this.formContext.getControl("new_persona_proceso");
            this.new_fk_permanencia = this.formContext.getControl("new_fk_permanencia_producto_apoyoid");
            this.new_tipo_producto_apoyo = this.formContext.getControl("new_tipodeproductodeapoyo");
            this.new_tipo_producto_apoyo_control = this.formContext.getControl("new_tipodeproductodeapoyo");
            this.new_describa_producto_apoyo = this.formContext.getControl("new_describaelproductodeapoyo");
            this.new_describa_producto_control_apoyo = this.formContext.getControl("new_describaelproductodeapoyo");
            this.new_cual_producto_apoyo = this.formContext.getControl("new_cual_producto_apoyo");
            this.cual_prueba = this.formContext.getAttribute("new_cual_producto_apoyo");
            this.new_cuentaconelproductodeapoyoquerequiere = this.formContext.getControl("new_cuentaconelproductodeapoyoquerequiere");
            this.new_indiqueelestadoenqueseencuentra = this.formContext.getControl("new_indiqueelestadoenqueseencuentra");
            this.new_especificaciones = this.formContext.getControl("new_wspecificaciones");
            this.new_name = this.formContext.getAttribute("new_name");
        }
        run() {
            this.init();
        }
        async init() {
            this.verificarRutaFormulario();
            this.asignarPersonaProceso();
            this.new_describa_producto_apoyo_options = this.new_describa_producto_apoyo.getOptions();
            this.new_tipo_producto_apoyo_options = this.new_tipo_producto_apoyo.getOptions();
            ARN.Common.showProgressIndicator("Cargando ...");
            this.tipoProductoApoyoOnLoad();
            ARN.Common.closeProgressIndicator();
            this.new_tipo_producto_apoyo_onchange();
            this.new_cual_producto_apoyo.getAttribute().addOnChange(() => this.new_cual_producto_apoyo_onchage());
            this.new_especificaciones.getAttribute().addOnChange(() => this.new_especificaciones_onchage());
            this.new_tipo_producto_apoyo.getAttribute().addOnChange(() => this.new_tipo_producto_apoyo_onchange());
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
                alert("La asignación de institución de apoyo debe realizarse ingresando a través del formulario de permanencia de la Persona en Proceso de Reintegración o Reincorporación.");
                Xrm.Page.ui.close();
            }
        }
        async tipoProductoApoyoOnLoad() {
            this.new_tipo_producto_apoyo_control.clearOptions();
            const idPermanencia = ARN.Common.getLookupValue(this.new_fk_permanencia);
            const typoApoyoPermanencia = await this.dal.obtenerProductosPermanencia(idPermanencia);
            typoApoyoPermanencia.forEach(valueTipo => {
                this.new_tipo_producto_apoyo_options.forEach(option => {
                    if (valueTipo == option.value) {
                        console.log(option);
                        this.new_tipo_producto_apoyo.addOption(option);
                    }
                });
            });
        }
        new_tipo_producto_apoyo_onchange() {
            const tipoProducto = this.new_tipo_producto_apoyo.getAttribute().getValue();
            this.new_describa_producto_control_apoyo.clearOptions();
            switch (tipoProducto) {
                case 100000000:
                    //Productos de apoyo para la movilidad
                    this.new_describa_producto_apoyo_options.forEach(option => {
                        if (option.value <= 100000022) {
                            this.new_describa_producto_control_apoyo.addOption(option);
                        }
                    });
                    break;
                case 100000001:
                    //Productos de apoyo para la visión
                    this.new_describa_producto_apoyo_options.forEach(option => {
                        if (option.value > 100000022 && option.value <= 100000026) {
                            this.new_describa_producto_control_apoyo.addOption(option);
                        }
                    });
                    break;
                case 100000002:
                    //Productos de apoyo para la audición
                    this.new_describa_producto_apoyo_options.forEach(option => {
                        if (option.value > 100000026 && option.value <= 100000030) {
                            this.new_describa_producto_control_apoyo.addOption(option);
                        }
                    });
                    break;
                case 100000003:
                    //Productos de apoyo para la comunicación
                    this.new_describa_producto_apoyo_options.forEach(option => {
                        if (option.value > 100000030 && option.value <= 100000038) {
                            this.new_describa_producto_control_apoyo.addOption(option);
                        }
                    });
                    break;
                case 100000004:
                    //Productos de apoyo para la alimentación
                    this.new_describa_producto_apoyo_options.forEach(option => {
                        if (option.value > 100000038 && option.value <= 100000044) {
                            this.new_describa_producto_control_apoyo.addOption(option);
                        }
                    });
                    break;
                case 100000005:
                    //Productos de apoyo para el baño/aseo
                    this.new_describa_producto_apoyo_options.forEach(option => {
                        if (option.value > 100000044 && option.value <= 100000051) {
                            this.new_describa_producto_control_apoyo.addOption(option);
                        }
                    });
                    break;
                case 100000006:
                    //Productos de apoyo para la vestimenta
                    this.new_describa_producto_apoyo_options.forEach(option => {
                        if (option.value > 100000051 && option.value <= 100000056) {
                            this.new_describa_producto_control_apoyo.addOption(option);
                        }
                    });
                    break;
                case 100000007:
                    //Productos de apoyo para el dormitorio
                    this.new_describa_producto_apoyo_options.forEach(option => {
                        if (option.value > 100000056 && option.value <= 100000064) {
                            this.new_describa_producto_control_apoyo.addOption(option);
                        }
                    });
                    break;
                case 100000008:
                    //Productos de apoyo para la rehabilitación
                    this.new_describa_producto_apoyo_options.forEach(option => {
                        if (option.value > 100000064 && option.value <= 100000072) {
                            this.new_describa_producto_control_apoyo.addOption(option);
                        }
                    });
                    break;
                case 100000009:
                    //Productos de apoyo para la educación
                    this.new_describa_producto_apoyo_options.forEach(option => {
                        if (option.value > 100000072 && option.value <= 100000077) {
                            this.new_describa_producto_control_apoyo.addOption(option);
                        }
                    });
                    break;
                case 100000010:
                    //Productos de apoyo para el arte/deporte
                    this.new_describa_producto_apoyo_options.forEach(option => {
                        if (option.value > 100000077 && option.value <= 100000079) {
                            this.new_describa_producto_control_apoyo.addOption(option);
                        }
                    });
                    break;
                case 100000011:
                    //Productos de apoyo para la ocupación o trabajo
                    this.new_describa_producto_apoyo_options.forEach(option => {
                        if (option.value > 100000079 && option.value <= 100000083) {
                            this.new_describa_producto_control_apoyo.addOption(option);
                        }
                    });
                    break;
                case 100000012:
                    //Productos de apoyo para la vivienda
                    this.new_describa_producto_apoyo_options.forEach(option => {
                        if (option.value > 100000083 && option.value <= 100000088) {
                            this.new_describa_producto_control_apoyo.addOption(option);
                        }
                    });
                    break;
            }
        }
        new_cual_producto_apoyo_onchage() {
            if (this.new_cual_producto_apoyo.getAttribute().getValue().length >= 10) {
                ARN.Common.clearFieldNotification(this.formContext, this.new_cual_producto_apoyo);
            }
            else {
                ARN.Common.setFieldNotification(this.formContext, this.new_cual_producto_apoyo, "El campo ¿Cual? debe tener minimo 10 caracteres", "ERROR");
            }
        }
        new_especificaciones_onchage() {
            if (this.new_especificaciones.getAttribute().getValue().length >= 10) {
                ARN.Common.clearFieldNotification(this.formContext, this.new_especificaciones);
            }
            else {
                ARN.Common.setFieldNotification(this.formContext, this.new_especificaciones, "El campo Describa - Especificaciones debe tener minimo 10 caracteres", "ERROR");
            }
        }
        configuracionCampoTipoProducto() {
        }
    }
    function productoApoyoMainOnLoad(evenContext) {
        new ProductoApoyoMain(evenContext).run();
    }
    CU_SIR_PRODUCTOAPOYO_0001.productoApoyoMainOnLoad = productoApoyoMainOnLoad;
})(CU_SIR_PRODUCTOAPOYO_0001 || (CU_SIR_PRODUCTOAPOYO_0001 = {}));
//# sourceMappingURL=new_producto_apoyo_main.js.map