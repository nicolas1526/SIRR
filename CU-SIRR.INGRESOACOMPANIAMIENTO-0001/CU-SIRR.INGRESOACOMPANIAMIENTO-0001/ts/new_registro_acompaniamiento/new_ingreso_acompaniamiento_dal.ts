namespace CU_SIR_INGRESO_0001 {
    export class IngesoAcompaniamientoDal {

        public async obtenerEdadPersona(idPersona: string): Promise<number> {
            const datosPersona = await ARN.WebApi.retrieve("contact", idPersona, { $select: "birthdate" });
            const fechaNacimiento = ARN.WebApi.getAttributeValue("date", datosPersona, "birthdate") as Date;
            return this.calcularEdad(fechaNacimiento);
        }

        private calcularEdad(fechaNacimiento: Date): number {
            const hoy = new Date();
            const diferencia = hoy.getTime() - fechaNacimiento.getTime();
            const edadEnMilisegundos = new Date(diferencia);
            const edad = Math.abs(edadEnMilisegundos.getUTCFullYear() - 1970);
            return edad;
        }

        public obtenerClasificadorDocumental(idDocumentoAdjunto: string): JQueryPromise<string> {
            let defer: JQueryDeferred<string> = $.Deferred();

            ARN.WebApi.retrieve("new_documentoadjunto", idDocumentoAdjunto, {
                "$expand": "new_clasificadordocumentalid($select=new_name)",
                "$select": "new_clasificadordocumentalid"
            }).then(data =>
                defer.resolve(data.new_clasificadordocumentalid.new_name)
            ).catch(e => {
                defer.reject(e);
                window.console.error(e);
            });

            return defer.promise();
        }

        public obtenerPPrDocumentoAdjunto(idDocumentoAdjunto: string): JQueryPromise<DatosDocumentoAdjunto> {
            let defer: JQueryDeferred<DatosDocumentoAdjunto> = $.Deferred();

            ARN.WebApi.retrieve("new_documentoadjunto", idDocumentoAdjunto, {
                "$expand": "new_participantedocumentoadjuntoid($select=contactid, fullname)",
                "$select": "new_participantedocumentoadjuntoid"
            }).then((result: DatosDocumentoAdjunto) => {
                defer.resolve(result);
            }).catch(error => {
                defer.reject(error);
            });

            return defer.promise();
        }
    }
}

