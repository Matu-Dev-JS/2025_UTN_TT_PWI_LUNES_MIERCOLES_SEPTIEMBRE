# Crear Repositorio (esto se hace una vez)

git init


# Añadir Archivos/Cambios

git add .


# Versionar el cambio

git commit -m 'mensaje descriptivo del cambio'


# Esto solo hay que hacerlo una vez 
# Renombrar la rama master a main

git branch -M main


## Esto solo hay que hacerlo una vez
## Conectar nuestro repositorio local con el repositorio remoto

git remote add origin direccion-del-repo.git

# Para enviar el ultimo commit a nuestro repositorio remoto

git push -u origin main



## SI QUERES ACTUALIZAR TU REPOSITORIO REMOTO

git add .

git commit -m 'descripcion'

git push