declare namespace ARN {
    /**
     * Rutinas comunes para Dynamics CRM
     * */
    export namespace Common {
        /**
         * Extiende las propiedades de un objeto a otro
         * @param defaults el objeto base
         * @param options las propiedades a extender
         * @returns El objeto con las propiedades extendidas
         */
        function extend(defaults: object, options: object): object;
        /**
         * Muestra la fecha en formato dd/mm/aaaa
         * @param dateVal
         * La fecha
         * @returns
         * La fecha en formato dd/mm/aaaa
         */
        function dateFormat(dateVal: Date): string;
        /**
         * Removes whitespace characters from the beginning and end of a string.
         * @param str
         * The string to trim.
         * @returns
         * A new string representing the calling string stripped of whitespace from both ends.
         */
        function trimString(str: string): string;
        /**
         * Obtiene el contexto del formulario
         * @param executionContext el contexto de ejecución
         */
        function getFormContext(executionContext: Xrm.Events.EventContext): Xrm.FormContext;
        /**
         * Obtiene el Contexto Global
         * */
        function getGlobalContext(): Xrm.GlobalContext;
        /**
         * Collection of non-entity data on the form.
         * Items in this collection are of the same type as the attributes collection, but they are not attributes of the form entity.
         * In V9 this is only available in the Unified Client
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes External Link: Attributes (Client API reference)}
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/collections External Link: Collections (Client API reference)}
         * @see {@link Attributes}
         */
        function getQueryStringParameters(executionContext: Xrm.Events.EventContext): any;
        /**
         * Obtiene el Id del Usuario actual
         **/
        function getUserId(): string;
        /**
         * Obtiene el nombre del usuario actual
         * */
        function getUserName(): string;
        /**
         * Otiene los identificadores de los roles del usuario actual
         * */
        function getUserRoles(): string[];
        /**
         * Opens an entity form or a quick create form.
         */
        function openEntityForm(entityFormOptions: Xrm.Navigation.EntityFormOptions, formParameters?: Xrm.Utility.FormOpenParameters): Promise<Xrm.Navigation.OpenFormResult | any>;
        /**
         * Opens an HTML web resource.
         * @param webResourceName Name of the HTML web resource.
         * @param windowOptions (Optional) Window options for opening the web resource.
         *                                                 It is advised to use encodeURIcomponent() to encode the value.
         */
        function openWebResource(webResourceName: string, windowOptions?: Xrm.Navigation.OpenWebresourceOptions, data?: string): void;
        /**
         * Muestra un cuadro de diálogo de alerta que contiene un mensaje y un botón
         * @param alertStrings
         * Las cadenas que se usan en el cuadro de diálogo de alerta. El objeto contiene los siguientes atributos:
         *   - confirmButtonLabel: cadena (opcional). Etiqueta del botón Confirmar. Si no especifica la etiqueta del botón, se usa OK como etiqueta del botón.
         *   - text: cadena. Mensaje que se muestra en el cuadro de diálogo de alerta.
         * @param alertOptions
         * Las opciones de alto y ancho para el cuadro de diálogo de alerta. El objeto contiene los siguientes atributos:
         *   - height: número (opcional). Alto del cuadro de diálogo de alerta, en píxeles.
         *   - width: número (opcional). Ancho del cuadro de diálogo de alerta, en píxeles.
         * @returns Promesa indicando el cierre de la ventana de alerta
         */
        function openAlertDialog(alertStrings: Xrm.Navigation.AlertStrings, alertOptions?: Xrm.Navigation.DialogSizeOptions): JQueryPromise<unknown>;
        /**
         * Muestra un cuadro de diálogo de confirmación que contiene un mensaje y dos botones.
         * @param confirmStrings
         * Las cadenas que se usan en el cuadro de diálogo de confirmación. El objeto contiene los siguientes atributos:
         *   - cancelButtonLabel: cadena (opcional). Etiqueta del botón Cancelar. Si no especifica la etiqueta del botón Cancelar, se usa Cancel como etiqueta del botón.
         *   - confirmButtonLabel: cadena (opcional). Etiqueta del botón Confirmar. Si no especifica la etiqueta del botón Confirmar, se usa OK como etiqueta del botón.
         *   - subtitle: cadena (opcional). Subtitulo que se muestra en el cuadro de diálogo de confirmación.
         *   - text: cadena. Mensaje que se muestra en el cuadro de diálogo de confirmación.
         *   - title: cadena (opcional). Título que se muestra en el cuadro de diálogo de confirmación.
         * @param confirmOptions
         * Las opciones de alto y ancho para el cuadro de diálogo de confirmación. El objeto contiene los siguientes atributos:
         *   - height: número (opcional). Alto del cuadro de diálogo de confirmación, en píxeles.
         *   - width: número (opcional). Ancho del cuadro de diálogo de confirmación, en píxeles.
         * @returns Promesa indicando si se hizo clic en el botón confirmar
         */
        function openConfirmDialog(confirmStrings: Xrm.Navigation.ConfirmStrings, confirmOptions?: Xrm.Navigation.DialogSizeOptions): JQueryPromise<boolean>;
        /**
         * Determina la URL del servidor de informes de acuerdo al nombre del host del servidor del CRM
         * */
        function getReportServerUrl(): string;
        /**
         * Intenta ejecutar una aplicación. En caso de que falle, intenta cargar las dependencias indicadas y ejecutarla de nuevo
         * @param executionContext El contexto de ejecución del formulario de Dynamics CRM
         * @param fn El método para ejecutar al aplicación
         * @param dependencies las dependencias de la aplicación
         */
        function tryRunApp(executionContext: Xrm.Events.EventContext, fn: () => any, dependencies?: string[]): JQueryPromise<any>;
        /**
         * Oculta un control del formulario
         * @param control
         * El control que se quiere ocultar
         */
        function hide(control: Xrm.Controls.StandardControl): void;
        /**
         * Muestra un control del formulario
         * @param control
         * El control que se quiere mostrar.
         * @param isRequired
         * (Opcional) Indica que si el control es requerido. El valor por defecto es false.
         * @param isDisabled
         * (Opcional) Indica que si el control se muestra deshabilitado. El valor por defecto es false.
         * @param defaultValue
         * (Opcional) El valor por defecto del control.
         */
        function show(control: Xrm.Controls.StandardControl, isRequired: boolean, isDisabled?: boolean, defaultValue?: string | number | Xrm.LookupValue[] | Date | boolean | number[] | null): void;
        /**
         * Obtiene el valor del identificador en un Lookup
         * @param formControl
         * El control del lookup
         * @returns
         * El identificador del valor actual del Lookup
         */
        function getLookupValue(formControl: Xrm.Controls.LookupControl): string | null;
        /**
         * Establece el valor de un control del tipo Lookup
         * @param formControl
         * El control del lookup.
         * @param entityType
         * Tipo de la entidad.
         * @param id
         * El identificador del valor del lookup.
         * @param name
         * El nombre que se muestra en el lookup.
         */
        function setLookupValue(formControl: Xrm.Controls.LookupControl, entityType: string, id: string, name: string): void;
        /**
         * Establece el valor válido de un Picklist
         * @param formControl
         * El control Picklist
         * @param value
         * El valor del Picklist
         */
        function setPickListValue(formControl: Xrm.Controls.OptionSetControl, value: number): void;
        /**
         * Muestra un mensaje que bloquea la UI mientras se realiza un proceso en segundo plano hasta que se llame a la instrucción closeProgressIndicator()
         * @param message
         * (Opcional)
         */
        function showProgressIndicator(message: string): void;
        /**
         * Cierra un mensaje que bloquea la UI cuando se llama a la instrucción showProgressIndicator(string message)
         */
        function closeProgressIndicator(): void;
        /**
         * Limpia las notificaciones de un control
         * @param formContext
         * El contexto del formulario de Dynamics CRM
         * @param formControl
         * El control
         * @param key
         * Opcional, Identificador único del mensaje
         */
        function clearFieldNotification(formContext: Xrm.FormContext, formControl: Xrm.Controls.StandardControl, key?: string): void;
        /**
         * Muestra un mensaje de notificación
         * @param formContext
         * El contexto del formulario de Dynamics CRM
         * @param formControl
         * El control
         * @param message
         * El mensaje de la notificación
         * @param level
         * El nivel del mensaje, que define cómo se mostrará. Especifique uno de los siguientes valores:
         * ERROR : Notificación usará el icono de error del sistema.
         * WARNING : Notificación usará el icono de advertencia del sistema.
         * INFO : Notificación usará el icono de información del sistema.
         * @param actions
         * Los comandos de notificación disponibles en la UI
         * @param key
         * Opcional, Identificador único del mensaje
         */
        function setFieldNotification(formContext: Xrm.FormContext, formControl: Xrm.Controls.StandardControl, message: string, level: Xrm.FormNotificationLevel, actions?: Xrm.Controls.ControlNotificationAction[], key?: string): void;
        /**
         * Obtiene la versión de la API Web de Dynamics CRM
         * */
        function getApiVersion(): string;
        /**
         * Obtiene la URL de la API Web de Dynamics CRM
         * */
        function getApiUrl(): string;
        function ajaxRequest(settings?: JQuery.AjaxSettings): JQuery.jqXHR;
        /**
         * Determina si el usuario actual tiene un rol especificado
         * @param roleName
         * El nombre del rol
         */
        function userHasRole(roleName: string): JQueryPromise<boolean>;
    }
    /**
     * Interface base para la definición de Objetos de Acceso a Datos (DAL)
     * */
    interface IDALBase {
        globalContext: Xrm.GlobalContext;
        siteUrl: string;
        apiVersion: string;
        apiURL: string;
        userHasRole(roleName: string): Promise<boolean>;
        ajaxRequest(settings?: JQuery.AjaxSettings): JQuery.jqXHR;
        fetchXMLRequest(entitySetName: string, fetchXML: string): JQuery.jqXHR;
        odataRequest(entitySetName: string, settings?: ODataSettings): JQuery.jqXHR;
    }
    /**
     *
     * */
    interface ODataSettings {
        select: string;
        filter?: string;
        expand?: string;
        orderby?: string;
        top?: number;
        skip?: number;
    }
    /**
     * Clase base para la definición de Objectos de Acceso a Datos (DAL)
     * */
    export class DalBase implements IDALBase {
        _globalContext: Xrm.GlobalContext;
        _siteUrl: string;
        _apiVersion: string;
        _apiURL: string;
        /**
         * Constructor de la clase
         * */
        constructor();
        /**
         * Obtiene el Objeto de Contexto Global de Dynamics CRM 365
         * */
        get globalContext(): Xrm.GlobalContext;
        /**
         * Obtiene la dirección URL del Sitio
         * */
        get siteUrl(): string;
        /**
         * Obtiene la versión de la API de Dynamics CRM 365
         * */
        get apiVersion(): string;
        /**
         * Obtiene la dirección URL de la API de Dynamics CRM 365
         * */
        get apiURL(): string;
        /**
         * Realiza una llamada asincrónica a un servicio web.
         * @param settings
         * los parámetros de la llamada
         */
        ajaxRequest(settings?: JQuery.AjaxSettings): JQuery.jqXHR;
        /**
         * Realiza una consulta mediante FetchXML
         * @param entitySetName: Nombre logico, en plural de la entidad
         * @param fetchXML: Consulta FetchXML
         */
        fetchXMLRequest(entitySetName: string, fetchXML: string): JQuery.jqXHR;
        /**
         *
         * @param entitySetName: Nombre logico, en plural de la entidad
         * @param settings: Configuración de la consulta ODATA
         */
        odataRequest(entitySetName: string, settings?: ODataSettings): JQuery.jqXHR;
        /**
         * Determina si el usuario actual tiene un rol especificado
         * @param roleName
         * El nombre del rol
         */
        userHasRole(roleName: string): JQueryPromise<boolean>;
    }
    /**
     * Interface base para la definición de objetos de la capa de negocio (BL)
     * */
    interface IAppBase {
        executionContext: Xrm.Events.EventContext;
        globalContext: Xrm.GlobalContext;
        formContext: Xrm.FormContext;
        hide(control: Xrm.Controls.StandardControl): void;
        show(control: Xrm.Controls.StandardControl, isRequired: boolean, isDisabled?: boolean, defaultValue?: string | number | Xrm.LookupValue[] | Date | boolean | number[] | null): void;
        getLookupValue(control: Xrm.Controls.LookupControl): string | null;
        setLookupValue(control: Xrm.Controls.LookupControl, entityType: string, id: string, name: string): void;
        setPickListValue(control: Xrm.Controls.OptionSetControl, value: number): void;
        showProgressIndicator(message: string): void;
        closeProgressIndicator(): void;
        clearFieldNotification(control: Xrm.Controls.StandardControl, key?: string): void;
        setFieldNotification(control: Xrm.Controls.StandardControl, message: string, level: Xrm.FormNotificationLevel, actions?: object, key?: string): void;
    }
    export interface IApp extends IAppBase {
        run(): void;
    }
    /**
     * Clase base para la definición de objetos de la capa de aplicación
     * */
    export class AppBase implements IAppBase {
        _executionContext: Xrm.Events.EventContext;
        _globalContext: Xrm.GlobalContext;
        _formContext: Xrm.FormContext;
        _progressIndicatorDefaultMessage: string;
        /**
         * Constructor
         * @param {Xrm.Events.EventContext} executionContext
         * El objeto del Contexto de Ejecución de Dynamics CRM 365
         */
        constructor(executionContext: Xrm.Events.EventContext);
        get executionContext(): Xrm.Events.EventContext;
        /**
         * Obtiene el objeto de Contexto Global de Dynamics CRM 365
         * */
        get globalContext(): Xrm.GlobalContext;
        /**
         * Obtiene el objeto de Contexto del Formulario de Dynamics CRM 365
         * */
        get formContext(): Xrm.FormContext;
        /**
         * Oculta un control del formulario
         * @param control
         * El control que se quiere ocultar
         */
        hide(control: Xrm.Controls.StandardControl): void;
        /**
         * Muestra un control del formulario
         * @param control
         * El control que se quiere mostrar.
         * @param isRequired
         * (Opcional) Indica que si el control es requerido. El valor por defecto es false.
         * @param isDisabled
         * (Opcional) Indica que si el control se muestra deshabilitado. El valor por defecto es false.
         * @param defaultValue
         * (Opcional) El valor por defecto del control.
         */
        show(control: Xrm.Controls.StandardControl, isRequired: boolean, isDisabled?: boolean, defaultValue?: string | number | Xrm.LookupValue[] | Date | boolean | number[] | null): void;
        /**
         * Obtiene el valor del identificador en un Lookup
         * @param formControl
         * El control del lookup
         * @returns
         * El identificador del valor actual del Lookup
         */
        getLookupValue(formControl: Xrm.Controls.LookupControl): string | null;
        /**
         * Establece el valor de un control del tipo Lookup
         * @param formControl
         * El control del lookup.
         * @param entityType
         * Tipo de la entidad.
         * @param id
         * El identificador del valor del lookup.
         * @param name
         * El nombre que se muestra en el lookup.
         */
        setLookupValue(formControl: Xrm.Controls.LookupControl, entityType: string, id: string, name: string): void;
        /**
         * Establece el valor válido de un Picklist
         * @param formControl
         * El control Picklist
         * @param value
         * El valor del Picklist
         */
        setPickListValue(formControl: Xrm.Controls.OptionSetControl, value: number): void;
        /**
         * Muestra un mensaje que bloquea la UI mientras se realiza un proceso en segundo plano hasta que se llame a la instrucción closeProgressIndicator()
         * @param message
         * (Opcional)
         */
        showProgressIndicator(message: string): void;
        /**
         * Cierra un mensaje que bloquea la UI cuando se llama a la instrucción showProgressIndicator(string message)
         */
        closeProgressIndicator(): void;
        /**
         * Limpia las notificaciones de un control
         * @param formControl
         * El control
         * @param key
         * Opcional, Identificador único del mensaje
         */
        clearFieldNotification(formControl: Xrm.Controls.StandardControl, key?: string): void;
        /**
         * Muestra un mensaje de notificación
         * @param formControl
         * El control
         * @param message
         * El mensaje de la notificación
         * @param level
         * El nivel del mensaje, que define cómo se mostrará. Especifique uno de los siguientes valores:
         * ERROR : Notificación usará el icono de error del sistema.
         * WARNING : Notificación usará el icono de advertencia del sistema.
         * INFO : Notificación usará el icono de información del sistema.
         * @param actions
         * Los comandos de notificación disponibles en la UI
         * @param key
         * Opcional, Identificador único del mensaje
         */
        setFieldNotification(formControl: Xrm.Controls.StandardControl, message: string, level: Xrm.FormNotificationLevel, actions?: Xrm.Controls.ControlNotificationAction[], key?: string): void;
    }
    export namespace WebApi {
        export type RetrieveRecordOptions = {
            "$select": string;
            "$expand"?: string;
        };
        export type RetrieveMultipleODataOptions = {
            "$filter": string;
            "$select": string;
            "$expand"?: string;
            "$top"?: number;
            "$orderby"?: string;
        };
        export type RetrieveMultipleFetchXmlOptions = {
            "fetchXml": string;
        };
        export type RetrieveResponse = {
            [key: string]: any;
        };
        export type RetrieveMultipleResponse = {
            value: Array<RetrieveResponse>;
        };
        type valueType = "boolean" | "number" | "string" | "date" | "object";
        /**
         * Obtiene el valor del atributo de una entidad con el tipo espeficicado.
         * @param valueType El tipo del valor del atributo
         * @param entity Los datos de la entidad
         * @param attributeName El nombre lógico del atributo
         */
        export function getAttributeValue(valueType: valueType, entity: RetrieveResponse, attributeName: string): boolean | number | string | Date | RetrieveResponse;
        /**
         * Obtiene el valor del atributo con alias de una entidad.
         * @param valueType El tipo del valor del atributo
         * @param entity Los datos de la entidad
         * @param entityAlias El nombre del alias
         * @param attributeLogicalName El nombre lógico del atributo
         */
        export function getAliasedValue(valueType: valueType, entity: RetrieveResponse, entityAlias: string, attributeLogicalName: string): boolean | number | string | Date | RetrieveResponse;
        /**
         * Obtiene el valor formateador del atributo de una entidad.
         * @param entity Los datos de la entidad
         * @param attributeLogicalName El nombre lógico del atributo
         */
        export function getAttributeFormattedValue(entity: RetrieveResponse, attributeLogicalName: string): string;
        /**
         * Obtiene el valor del atributo con alias de una entidad.
         * @param entity Los datos de la entidad
         * @param entityAlias El nombre del alias
         * @param attributeLogicalName El nombre lógico del atributo
         */
        export function getAliasedFormattedValue(entity: RetrieveResponse, entityAlias: string, attributeLogicalName: string): string;
        /**
         * Recupera un registro de la entidad solicitada
         * @param entityLogicalName Nombre lógico de la entidad
         * @param id El identificador del registro
         * @param options Las opciones de devolución de datos de la entidad
         */
        export function retrieve(entityLogicalName: string, id: string, options: RetrieveRecordOptions): Promise<RetrieveResponse>;
        /**
         * Recupera una colección de registros de la entidad solicitada
         * @param entityLogicalName Nombre lógico de la entidad
         * @param options Las opciones de devolución de datos de la entidad
         */
        export function retrieveMultiple(entityLogicalName: string, options: RetrieveMultipleODataOptions | RetrieveMultipleFetchXmlOptions): Promise<RetrieveMultipleResponse>;
        export {};
    }
    export {};
}
