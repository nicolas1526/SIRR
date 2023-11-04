namespace CU_SIR_INSTITUCIONAPOYO_0001 {
    export class InstitucionApoyoDal {
        public async obtenerDepartamento(idMunicipio: string): Promise<string> {
            const datosMunicipio = await ARN.WebApi.retrieve("new_municipio1", idMunicipio, { $select: "_new_departamentomunicipioid_value" });
            const idDepartamento = ARN.WebApi.getAttributeValue("string", datosMunicipio, "_new_departamentomunicipioid_value") as string;
            const datosDepartamento = await ARN.WebApi.retrieve("new_departamento", idDepartamento, { $select: "new_name" });
            return ARN.WebApi.getAttributeValue("string", datosDepartamento, "new_name") as string;
        }

        public async obtenerIdPersonaProceso(idPermanencia: string): Promise<string> {
            const datos = await ARN.WebApi.retrieve("new_permanencias", idPermanencia, { $select: "_new_persona_proceso_value" });
            const idPersonaProceso = ARN.WebApi.getAttributeValue("string", datos, "_new_persona_proceso_value") as string;
            return idPersonaProceso;
        }
    }
}

