- He eliminado la carpeta "node_modules" tendrá que hacer npm install
- En el Backend, al ejecutar el php artisan serve podra realizar el "migrate"
- Al ejecutar el Front le va a salir vacio, y no podra registrar cargos ni departamentos hasta que no exista un usuario, no puse un usuario por defecto, entonces
- podria ejecutar en el sql server lo siguiente, es el script que he estado haciendo pruebas

-   INSERT INTO departamentos (codigo, nombre, activo, idUsuario) VALUES 
							('DEP-001', 'CONTABILIDAD', 1, 1),
							('DEP-002', 'RRHH', 1, 3),
							('DEP-003', 'MARKETING', 1, 2)


  INSERT INTO cargos(codigo, nombre, activo, idUsuario) VALUES 
							('CAR-001', 'CONTADOR', 1, 1),
							('CAR-002', 'RECLUTADORA', 1, 3),
							('CAR-003', 'MARKENTING', 1, 2)

  INSERT INTO usuarios (usuario, primerNombre, segundoNombre, primerApellido, segundoApellido, idDepartamento, idCargo) VALUES
					('user1', 'Fred', 'Andres', 'Guzman', 'Nolan', 1, 1),
					('user2', 'Marissa', 'Juliana', 'Arcentales', 'Jimenez', 1,2),
					('user3', 'Luisa', 'Sandra', 'Lopez', 'Monseyour', 1,1)

- El method PUT funciona pero con postman, no me quiso trabajar en la app, es lo unico que faltó, queria intentarlo otra vez pero se me movian mas cosas.
- En la app trabaja el GET, POST, DELETE
