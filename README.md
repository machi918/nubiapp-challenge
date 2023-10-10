# NubiApp Coding Challenge ☁️

# Tabla de contenidos

- [Objetivos](#objetivos)
  - [Requerimientos](#requerimientos)
- [Instalación y ejecución en desarrollo](#instalación-y-ejecución-en-desarrollo)
- [Solución](#solución)
  - [General](#general)
  - [Interfaz de usuario](#interfaz-de-usuario)
  - [State - Redux](#state---redux)
  - [JWT y Persistencia](#jwt-y-persistencia)
  - [APIs](#apis)
  - [Manejo de errores](#manejo-de-errores)
  - [Dinamismo de la Navegación y opciones](#dinamismo-de-la-navegación-y-opciones)
  - [Configuración del Proyecto](#configuración-del-proyecto)
- [Librerías principales](#librerías-principales)
- [Mejoras Posibles](#mejoras-posibles)
- [Descarga el APK](#descarga)
- [Agradecimientos](#agradecimientos)
- [Licencia](#licencia)

## Objetivos

- Crear una app sencilla de 3 paginas en REACT NATIVE (un login, una pantalla de dashboard y una de movimientos)
- Crear un repositorio con codigo del challenge (público)
- Crear un .apk o .ipa

### Requerimientos

- Login (no es necesario validar datos, la api siempre te devolvera un jwt)
- Dashboard
- Servicios habilitados (dinamico segun "services" en el json)
- Menu (dinamico segun "navigation" en el json)
- Página de movimientos (dinamicos segun "movements" en el json)

## Instalación y ejecución en desarrollo

> **Nota**: Asegurate de primero haber seguido las instrucciones para el levantado del [ambiente de desarrollo de React Native](https://reactnative.dev/docs/environment-setup).

## 1er paso: Instalar dependencias

Primero, debemos instalar las dependencias corriendo, en la raíz del proyecto:

```bash
yarn
```

## 2do paso: Iniciar el servidor de **Metro**

Correr el siguiente comando en la raíz del proyecto:

```bash
yarn start
```

## 3er paso: Iniciar la aplicación

La aplicación va a buildear en modo desarrollo ya sea en un dispositivo físico o emulador. En una nueva terminal, ejecutar en la raíz del proyecto:

### Android

```bash
yarn android
```

## Solución

### General

### Interfaz de usuario

Su creación ha sido con las herramientas que **React Native** provee. Para evitar la reutilización de código en estilos o únicamente simplificarlo, se han creado, entre otros, los siguientes componentes:

- CenteredView: Wrapeo de View agregando "justifyContent: center" y "alignItems: center" por default
- Header: Contiene un título que se pasa por parámetro y una flecha que permite navegar hacia atrás.
- ScreenView: Wrapeo de una View agregando:
  - KeyboardAvoidingView: Manejo correcto del teclado.
  - useSafeAreaInsets: El componente que lo utilice, permitirá una correcta visualización del contenido en pantalla. (Ejemplo: Evitar el notch en iOS)

Además, se ha descargado y utilizado [Poppins](https://fonts.google.com/specimen/Poppins), en sus variantes BOLD, MEDIUM y REGULAR para las fuentes.

### State - Redux

Se ha optado por utilizar Redux en conjunto con Redux Toolkit.
Si bien ContextAPI se adapta perfectamente en el contexto del challenge, la inclusión de redux en su lugar logra una escalabilidad, lectura y simplificación mayor que la api de React.

Se han creado los siguientes slices:

- **userSlice**: Contiene la información del usuario
- **navigationSlice**: Contiene la información de navegación disponible
- **servicesSlice**: Contiene la información de servicios disponibles
- **globalConfigurationSlice**: Este puede contener configuración en ejecución, por ejemplo en este caso, tenemos es isLoading para prolongar el Splash Screen mostrando una animación de carga mientras se consulta el Endpoint o la data del dispositivo.

### JWT y Persistencia

Una vez que se consulta el [endpoint](#apis), este devuelve un JWT el cual es decodeado utilizando la librería [jwt-decode](https://github.com/auth0/jwt-decode). Esta no verifica el jwt con la key, existen algunas librerías compatibles que lo logran pero no poseen muchos algoritmos.

Además, para el guardado seguro del token, se utiliza la librería [react-native-sensitive-info](https://mcodex.dev/react-native-sensitive-info), el cual guarda la información en la keychain de iOS y keystore para cifrar/descifrar el key-value en Android.

### APIs

Se consume el recurso https://nubitestapi.free.beeceptor.com/login el cual devuelve un JWT a decodificar utilizando [AXIOS](https://axios-http.com/es/).

El utilizar esta librería es un overkill para el contexto de la aplicación, pero pretende una mejor escalabilidad de la solución. Además, contiene el uso de **interceptors** que son de gran utilidad.

Estos interceptors bajo el contexto del proyecto:

- En el request: traen el token de redux para utilizarlo (y aplicarlo como default) en la configuración de la instancia de Axios. (Si, no se utiliza, pero de nuevo, la idea es que su escalabilidad sea alta).
- En el response: En caso de errores, se crea una array con los request y que los mismos sean automáticamente consultados a modo de "retry". Con gusto explicaré esta sección en una entrevista.

### Manejo de errores

Además de los clásicos try - catch. Se ha incluído un manejo de errores, en caso de que, al renderizar algún componente y este falle, la aplicación no quede en blanco. Esto se le llama **Error Boundary**

Limitantes actuales propios de React (no captura):

- Event handlers.
- Código asyncrónico (Ej. setTimeout).
- Server side rendering.
- Errores que genere el propio componente de Error Boundary.
- Crasheos de librerías nativas.

Puede ver más información actualizada al respecto [aquí](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary) o legacy [aquí](https://legacy.reactjs.org/docs/error-boundaries.html).

### Dinamismo de la Navegación y opciones

Tal y como se detalló en [State - Redux](#state---redux), en los slices correspondientes se ha colocado la navegación y menús disponibles.

- En cuanto a la navegación, si el TabBar detecta que uno de los stacks (o screens) no se encuentra en el estado de navegación, este no renderiza la opción, evitando así su acceso.

- La opción de servicios del dashboard, renderiza las opciones las cuales lleguen del Endpoint (en conjunto con ciertas mejoras agregadas). Si las pantallas resultantes al seleccionar cada ícono difieren mucho, es recomendable definir estáticamente las mismas y que sean accedidas en caso de que la opción se renderice. Por el contrario, en caso de que sean simplemente opciones, la pantalla sea similar y solo depende de parámetros, React Navigation permite pasar params al navegar.

### Configuración del Proyecto

Algunas de las configuraciones relacionadas al proyecto:

- Se ha utilizado TypeScript.
- Estilos: Prettier.
- ESLint - además de las buenas prácticas que extiende, se incluye:
  - sort-imports
  - import/order
- Path alias en src --> @src/X

## Librerías principales

- [React Navigation](https://reactnavigation.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [axios](https://axios-http.com/es/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [jwt-decode](https://github.com/auth0/jwt-decode)
- [react-hook-form](https://react-hook-form.com/)
- [react-native-error-boundary](https://react-native-error-boundary.js.org/)
- [react-native-sensitive-info](https://mcodex.dev/react-native-sensitive-info/)
- [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen)
- [react-native-svg](https://github.com/software-mansion/react-native-svg)
- [yup](https://github.com/jquense/yup)

## Mejoras Posibles

- Para la Splash screen (estática), se ha utilizado "React native splash screen", sin embargo, por más de que sea una librería muy liviana y popular, esta no se encuentra muy activa en la actualidad y lleva un tiempo sin actualizarse. Existe una librería potente llamada [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash) la cual posee un CLI que, dado una icono, background, entre otros, genera automáticamente los splash screen, icons y demás para todo tipo de tamaños y dispositivos.

- Debido al corto alcance y lo reducido de la app, no se implementa al 100% manejador de estilos. Si bien la app, con unas simples modificaciones puede ser theme - responsive (dark & light), se definió continuar con light por defecto.

- Si bien no aplica en esta instancia, es posible guardado en el teléfono información no sensible y que no se actualice con frecuencia para evitar llamados innecesarios a la API. Da una sensación de velocidad de carga que decanta en una mejora de experiencia del usuario.

- API:
  - El campo "amount " posee un error de sintaxis. Si bien se entiende que es una prueba, el mejorar la respuesta de la api permitiría realizar un challenge más bajado a la realidad y lograr un productor mejor. Misma mejora aplica a los campos de navegación y servicios.
  - Al pegarle a un path de la URL que no existe, como por ejemplo, GET a https://nubitestapi.free.beeceptor.com/xxx la api debería devolver un error 404 (not found) o 401 (Unauthorized) en caso de corresponder. En la actualidad devuelve un 200 con el mensaje: "Hey ya! Great to see you here. Btw, nothing is configured for this request path. Create a rule and start building a mock API.".

## Descarga el APK

Para descargar el APK de la App, debes ir [AQUÍ](https://drive.google.com/file/d/1XSVjPf3l1XMxpGsu5SvNot2-D5p3DfVm).

Es posible que tengas que habilitar la instalación de apps no seguras dentro del dispositivo Android.

## Agradecimientos

Gracias por la oportunidad de realizar este Challenge. Cualquier feedback es altamente apreciado.

## Licencia

No poseo ninguno de los derechos asociados a la marca Nubi, TuNubi o NubiZ. Todas son parte de:

[Nubi S.A.](https://www.tunubi.com/)

Este challenge no será vendido ni publicado en ninguna Store.
