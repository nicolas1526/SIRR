"use strict";
var CU_SIR_PRODUCTOAPOYO_0001;
(function (CU_SIR_PRODUCTOAPOYO_0001) {
    class ProductoApoyoDal {
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
        async obtenerProductosPermanencia(idPermanenecia) {
            let tiposDeApoyo = [];
            const datoMovilidad = await ARN.WebApi.retrieve("new_permanencias", idPermanenecia, { $select: "new_requiereproductosdeapoyoparalamovilidad" });
            const datoVision = await ARN.WebApi.retrieve("new_permanencias", idPermanenecia, { $select: "new_requiereproductosdeapoyoparalavisin" });
            const datoAudicion = await ARN.WebApi.retrieve("new_permanencias", idPermanenecia, { $select: "new_requiereproductosdeapoyoparalaaudicin" });
            const datoComunicacion = await ARN.WebApi.retrieve("new_permanencias", idPermanenecia, { $select: "new_requiereproductosdeapoyoparalacomunicacin" });
            const datoAlimentacion = await ARN.WebApi.retrieve("new_permanencias", idPermanenecia, { $select: "new_requiereproductosdeapoyoparalaalimentacin" });
            const datoBanioAseo = await ARN.WebApi.retrieve("new_permanencias", idPermanenecia, { $select: "new_requiereproductosdeapoyoparaelbaoaseo" });
            const datoVestimenta = await ARN.WebApi.retrieve("new_permanencias", idPermanenecia, { $select: "new_requiereproductosdeapoyoparalavestimenta" });
            const datoDormitorio = await ARN.WebApi.retrieve("new_permanencias", idPermanenecia, { $select: "new_requiereproductosdeapoyoparaeldormitorio" });
            const datoRehabilitacion = await ARN.WebApi.retrieve("new_permanencias", idPermanenecia, { $select: "new_requiereproductosdeapoyoparalarehabilitac" });
            const datoEducacion = await ARN.WebApi.retrieve("new_permanencias", idPermanenecia, { $select: "new_requiereproductosdeapoyoparalaeducacin" });
            const datoArte = await ARN.WebApi.retrieve("new_permanencias", idPermanenecia, { $select: "new_requiereproductosdeapoyoparaelartedeporte" });
            const datoOcupacion = await ARN.WebApi.retrieve("new_permanencias", idPermanenecia, { $select: "new_requiereproductosdeapoyoparalaocupacinotr" });
            const datoVivienda = await ARN.WebApi.retrieve("new_permanencias", idPermanenecia, { $select: "new_requiereproductosdeapoyoparalavivienda" });
            const movilidad = ARN.WebApi.getAttributeValue("boolean", datoMovilidad, "new_requiereproductosdeapoyoparalamovilidad");
            const vision = ARN.WebApi.getAttributeValue("boolean", datoVision, "new_requiereproductosdeapoyoparalavisin");
            const audicion = ARN.WebApi.getAttributeValue("boolean", datoAudicion, "new_requiereproductosdeapoyoparalaaudicin");
            const comunicacion = ARN.WebApi.getAttributeValue("boolean", datoComunicacion, "new_requiereproductosdeapoyoparalacomunicacin");
            const alimentacion = ARN.WebApi.getAttributeValue("boolean", datoAlimentacion, "new_requiereproductosdeapoyoparalaalimentacin");
            const aseo = ARN.WebApi.getAttributeValue("boolean", datoBanioAseo, "new_requiereproductosdeapoyoparaelbaoaseo");
            const vestimenta = ARN.WebApi.getAttributeValue("boolean", datoVestimenta, "new_requiereproductosdeapoyoparalavestimenta");
            const dormitorio = ARN.WebApi.getAttributeValue("boolean", datoDormitorio, "new_requiereproductosdeapoyoparaeldormitorio");
            const rehabilitacion = ARN.WebApi.getAttributeValue("boolean", datoRehabilitacion, "new_requiereproductosdeapoyoparalarehabilitac");
            const educacion = ARN.WebApi.getAttributeValue("boolean", datoEducacion, "new_requiereproductosdeapoyoparalaeducacin");
            const arte = ARN.WebApi.getAttributeValue("boolean", datoArte, "new_requiereproductosdeapoyoparaelartedeporte");
            const ocupacion = ARN.WebApi.getAttributeValue("boolean", datoOcupacion, "new_requiereproductosdeapoyoparalaocupacinotr");
            const vivienda = ARN.WebApi.getAttributeValue("boolean", datoVivienda, "new_requiereproductosdeapoyoparalavivienda");
            if (movilidad) {
                tiposDeApoyo = [...tiposDeApoyo, 100000000];
            }
            if (vision) {
                tiposDeApoyo = [...tiposDeApoyo, 100000001];
            }
            if (audicion) {
                tiposDeApoyo = [...tiposDeApoyo, 100000002];
            }
            if (comunicacion) {
                tiposDeApoyo = [...tiposDeApoyo, 100000003];
            }
            if (alimentacion) {
                tiposDeApoyo = [...tiposDeApoyo, 100000004];
            }
            if (aseo) {
                tiposDeApoyo = [...tiposDeApoyo, 100000005];
            }
            if (vestimenta) {
                tiposDeApoyo = [...tiposDeApoyo, 100000006];
            }
            if (dormitorio) {
                tiposDeApoyo = [...tiposDeApoyo, 100000007];
            }
            if (rehabilitacion) {
                tiposDeApoyo = [...tiposDeApoyo, 100000008];
            }
            if (educacion) {
                tiposDeApoyo = [...tiposDeApoyo, 100000009];
            }
            if (arte) {
                tiposDeApoyo = [...tiposDeApoyo, 100000010];
            }
            if (ocupacion) {
                tiposDeApoyo = [...tiposDeApoyo, 100000011];
            }
            if (vivienda) {
                tiposDeApoyo = [...tiposDeApoyo, 100000012];
            }
            return tiposDeApoyo;
        }
    }
    CU_SIR_PRODUCTOAPOYO_0001.ProductoApoyoDal = ProductoApoyoDal;
})(CU_SIR_PRODUCTOAPOYO_0001 || (CU_SIR_PRODUCTOAPOYO_0001 = {}));
//# sourceMappingURL=new_producto_apoyo_dal.js.map