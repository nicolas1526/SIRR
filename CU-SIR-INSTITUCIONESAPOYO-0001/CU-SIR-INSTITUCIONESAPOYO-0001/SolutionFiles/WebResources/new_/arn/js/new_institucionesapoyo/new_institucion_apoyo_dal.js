"use strict";
var CU_SIR_INSTITUCIONAPOYO_0001;
(function (CU_SIR_INSTITUCIONAPOYO_0001) {
    class InstitucionApoyoDal {
        async obtenerDepartamento(idMunicipio) {
            const datosMunicipio = await ARN.WebApi.retrieve("new_municipio1", idMunicipio, { $select: "_new_departamentomunicipioid_value" });
            const idDepartamento = ARN.WebApi.getAttributeValue("string", datosMunicipio, "_new_departamentomunicipioid_value");
            const datosDepartamento = await ARN.WebApi.retrieve("new_departamento", idDepartamento, { $select: "new_name" });
            return ARN.WebApi.getAttributeValue("string", datosDepartamento, "new_name");
        }
        async obtenerIdPersonaProceso(idPermanencia) {
            const datos = await ARN.WebApi.retrieve("new_permanencias", idPermanencia, { $select: "_new_persona_proceso_value" });
            const idPersonaProceso = ARN.WebApi.getAttributeValue("string", datos, "_new_persona_proceso_value");
            return idPersonaProceso;
        }
    }
    CU_SIR_INSTITUCIONAPOYO_0001.InstitucionApoyoDal = InstitucionApoyoDal;
})(CU_SIR_INSTITUCIONAPOYO_0001 || (CU_SIR_INSTITUCIONAPOYO_0001 = {}));
//# sourceMappingURL=new_institucion_apoyo_dal.js.map