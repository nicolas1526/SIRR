"use strict";
var CU_SIR_INGRESO_0001;
(function (CU_SIR_INGRESO_0001) {
    class IngesoAcompaniamientoDal {
        async obtenerEdadPersona(idPersona) {
            const datosPersona = await ARN.WebApi.retrieve("contact", idPersona, { $select: "birthdate" });
            const fechaNacimiento = ARN.WebApi.getAttributeValue("date", datosPersona, "birthdate");
            return this.calcularEdad(fechaNacimiento);
        }
        calcularEdad(fechaNacimiento) {
            const hoy = new Date();
            const diferencia = hoy.getTime() - fechaNacimiento.getTime();
            const edadEnMilisegundos = new Date(diferencia);
            const edad = Math.abs(edadEnMilisegundos.getUTCFullYear() - 1970);
            return edad;
        }
        obtenerClasificadorDocumental(idDocumentoAdjunto) {
            let defer = $.Deferred();
            ARN.WebApi.retrieve("new_documentoadjunto", idDocumentoAdjunto, {
                "$expand": "new_clasificadordocumentalid($select=new_name)",
                "$select": "new_clasificadordocumentalid"
            }).then(data => defer.resolve(data.new_clasificadordocumentalid.new_name)).catch(e => {
                defer.reject(e);
                window.console.error(e);
            });
            return defer.promise();
        }
        obtenerPPrDocumentoAdjunto(idDocumentoAdjunto) {
            let defer = $.Deferred();
            ARN.WebApi.retrieve("new_documentoadjunto", idDocumentoAdjunto, {
                "$expand": "new_participantedocumentoadjuntoid($select=contactid, fullname)",
                "$select": "new_participantedocumentoadjuntoid"
            }).then((result) => {
                defer.resolve(result);
            }).catch(error => {
                defer.reject(error);
            });
            return defer.promise();
        }
    }
    CU_SIR_INGRESO_0001.IngesoAcompaniamientoDal = IngesoAcompaniamientoDal;
})(CU_SIR_INGRESO_0001 || (CU_SIR_INGRESO_0001 = {}));
//# sourceMappingURL=new_ingreso_acompaniamiento_dal.js.map