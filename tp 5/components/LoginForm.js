/* El formulario se deberá renderizar al ingresar a cualquier ruta si el usuario no está autenticado, conteniendo los
campos:
● Email.
● Password.
● Botón de “Enviar”
Al hacer click en “Enviar”, se deberá validar que ambos campos no estén vacíos, y mostrar un mensaje al usuario si
lo estuviesen. (poner require en los forms) Caso contrario, se deberá realizar una petición POST a la siguiente url (http://challenge-react.alkemy.org/), con los campos email y
password en el BODY.
Los datos válidos para obtener un token son:
● Email: challenge@alkemy.org
● Password: react
Se debe mostrar algún tipo de feedback al usuario mientras se está procesando la petición, no permitiendo que
vuelva a accionar el botón de login hasta obtener una respuesta. (un boton de cargando deshabilitado?)
En el caso de obtener un error de la API, se deberá mostrar una alerta (catch (e)), mientras que si es satisfactorio deberá
redirigir al Home y almacenar el token obtenido en el contextState. Para realizar las validaciones no es necesario
utilizar ninguna librería. */