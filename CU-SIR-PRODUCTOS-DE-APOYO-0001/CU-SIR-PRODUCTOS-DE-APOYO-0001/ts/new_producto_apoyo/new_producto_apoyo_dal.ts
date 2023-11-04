namespace CU_SIR_PRODUCTOAPOYO_0001 {
    export class ProductoApoyoDal {
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

        public async obtenerProductosPermanencia(idPermanenecia: string): Promise<number[]> {
            let tiposDeApoyo: number[] = [];
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

           

            const movilidad = ARN.WebApi.getAttributeValue("boolean", datoMovilidad, "new_requiereproductosdeapoyoparalamovilidad") as boolean;
            const vision = ARN.WebApi.getAttributeValue("boolean", datoVision, "new_requiereproductosdeapoyoparalavisin") as boolean;
            const audicion = ARN.WebApi.getAttributeValue("boolean", datoAudicion, "new_requiereproductosdeapoyoparalaaudicin") as boolean;
            const comunicacion = ARN.WebApi.getAttributeValue("boolean", datoComunicacion, "new_requiereproductosdeapoyoparalacomunicacin") as boolean;
            const alimentacion = ARN.WebApi.getAttributeValue("boolean", datoAlimentacion, "new_requiereproductosdeapoyoparalaalimentacin") as boolean;
            const aseo = ARN.WebApi.getAttributeValue("boolean", datoBanioAseo, "new_requiereproductosdeapoyoparaelbaoaseo") as boolean;
            const vestimenta = ARN.WebApi.getAttributeValue("boolean", datoVestimenta, "new_requiereproductosdeapoyoparalavestimenta") as boolean;
            const dormitorio = ARN.WebApi.getAttributeValue("boolean", datoDormitorio, "new_requiereproductosdeapoyoparaeldormitorio") as boolean;
            const rehabilitacion = ARN.WebApi.getAttributeValue("boolean", datoRehabilitacion, "new_requiereproductosdeapoyoparalarehabilitac") as boolean;
            const educacion = ARN.WebApi.getAttributeValue("boolean", datoEducacion, "new_requiereproductosdeapoyoparalaeducacin") as boolean;
            const arte = ARN.WebApi.getAttributeValue("boolean", datoArte, "new_requiereproductosdeapoyoparaelartedeporte") as boolean;
            const ocupacion = ARN.WebApi.getAttributeValue("boolean", datoOcupacion, "new_requiereproductosdeapoyoparalaocupacinotr") as boolean;
            const vivienda = ARN.WebApi.getAttributeValue("boolean", datoVivienda, "new_requiereproductosdeapoyoparalavivienda") as boolean;
            
            if (movilidad) {
                tiposDeApoyo = [...tiposDeApoyo, 100000000]
            }
            if (vision) {
                tiposDeApoyo = [...tiposDeApoyo, 100000001]
            }
            if (audicion) {
                tiposDeApoyo = [...tiposDeApoyo, 100000002]
            }
            if (comunicacion) {
                tiposDeApoyo = [...tiposDeApoyo, 100000003]
            }
            if (alimentacion) {
                tiposDeApoyo = [...tiposDeApoyo, 100000004]
            }
            if (aseo) {
                tiposDeApoyo = [...tiposDeApoyo, 100000005]
            }
            if (vestimenta) {
                tiposDeApoyo = [...tiposDeApoyo, 100000006]
            }
            if (dormitorio) {
                tiposDeApoyo = [...tiposDeApoyo, 100000007]
            }
            if (rehabilitacion) {
                tiposDeApoyo = [...tiposDeApoyo, 100000008]
            }
            if (educacion) {
                tiposDeApoyo = [...tiposDeApoyo, 100000009]
            }
            if (arte) {
                tiposDeApoyo = [...tiposDeApoyo, 100000010]
            }
            if (ocupacion) {
                tiposDeApoyo = [...tiposDeApoyo, 100000011]
            }
            if (vivienda) {
                tiposDeApoyo = [...tiposDeApoyo, 100000012]
            }

            return tiposDeApoyo;
        }
    }
}

