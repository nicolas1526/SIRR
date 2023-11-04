namespace CU_SIR_PERSONAAPOYO_0001 {
    export class PersonaApoyoDal {
        public async obtenerIdPersonaProceso(idPermanencia: string): Promise<string> {
            const datos = await ARN.WebApi.retrieve("new_permanencias", idPermanencia, { $select: "_new_persona_proceso_value" });
            const idPersonaProceso = ARN.WebApi.getAttributeValue("string", datos, "_new_persona_proceso_value") as string;
            return idPersonaProceso;
        }
    }
}

