namespace CU_SIR_PERMANENCIA_0001 {
    export class PermanenciaDal {
        public async obtenerIdPersonaProceso(idIngreso: string): Promise<string> {
            const datos = await ARN.WebApi.retrieve("new_ingreso_acompaniamiento", idIngreso, { $select: "_new_persona_en_proceso_value" });
            const idPersonaProceso = ARN.WebApi.getAttributeValue("string", datos, "_new_persona_en_proceso_value") as string;
            return idPersonaProceso;
        }
       
    }
}

