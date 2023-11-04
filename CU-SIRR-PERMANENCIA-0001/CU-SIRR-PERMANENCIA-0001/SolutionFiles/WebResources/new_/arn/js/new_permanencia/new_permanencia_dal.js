"use strict";
var CU_SIR_PERMANENCIA_0001;
(function (CU_SIR_PERMANENCIA_0001) {
    class PermanenciaDal {
        async obtenerIdPersonaProceso(idIngreso) {
            const datos = await ARN.WebApi.retrieve("new_ingreso_acompaniamiento", idIngreso, { $select: "_new_persona_en_proceso_value" });
            const idPersonaProceso = ARN.WebApi.getAttributeValue("string", datos, "_new_persona_en_proceso_value");
            return idPersonaProceso;
        }
    }
    CU_SIR_PERMANENCIA_0001.PermanenciaDal = PermanenciaDal;
})(CU_SIR_PERMANENCIA_0001 || (CU_SIR_PERMANENCIA_0001 = {}));
//# sourceMappingURL=new_permanencia_dal.js.map