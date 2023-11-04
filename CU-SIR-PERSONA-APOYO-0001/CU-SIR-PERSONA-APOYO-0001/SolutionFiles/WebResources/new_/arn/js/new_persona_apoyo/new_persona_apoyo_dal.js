"use strict";
var CU_SIR_PERSONAAPOYO_0001;
(function (CU_SIR_PERSONAAPOYO_0001) {
    class PersonaApoyoDal {
        async obtenerIdPersonaProceso(idPermanencia) {
            const datos = await ARN.WebApi.retrieve("new_permanencias", idPermanencia, { $select: "_new_persona_proceso_value" });
            const idPersonaProceso = ARN.WebApi.getAttributeValue("string", datos, "_new_persona_proceso_value");
            return idPersonaProceso;
        }
    }
    CU_SIR_PERSONAAPOYO_0001.PersonaApoyoDal = PersonaApoyoDal;
})(CU_SIR_PERSONAAPOYO_0001 || (CU_SIR_PERSONAAPOYO_0001 = {}));
//# sourceMappingURL=new_persona_apoyo_dal.js.map