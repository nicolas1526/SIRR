declare namespace CU_SIR_INGRESO_0001 {
    export type retrieveMultipleResponse<T> = {
        value: T[]
    }

    export type DatosDocumentoAdjunto = {
        new_participantedocumentoadjuntoid: {
            contactid: string,
            fullname: string
        }
    }
}