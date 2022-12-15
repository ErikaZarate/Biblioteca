const mBiblio = {
    queryGetBiblio: "SELECT * FROM Libros",
    queryGetPrest: "SELECT * FROM Prestamos",
    queryBiblioByClave : `SELECT * FROM Libros WHERE ClaveLib=?`,
    queryPrestByClave : `SELECT * FROM Prestamos WHERE ClaveLibP=?`,
    queryDeleteBiblioByClave : `UPDATE Libros SET Disponible='No' WHERE ClaveLib=?`,
    queryReactivarBiblioByClave : `UPDATE Libros SET Disponible='Si' WHERE ClaveLib=?`,
    queryBiblioExists : `SELECT ClaveLib FROM Libros WHERE ClaveLib = ?`,
    queryAddBiblio:`
    INSERT INTO Libros(
        ClaveLib,
        Titulo,
        Autor,
        Año_Publicación,
        FechaObt,
        Genero,
        Disponible,
        Cantidad_Disponible
    )VALUES(
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
    )`,
    queryAddPrest:`
    INSERT INTO Prestamos(
        Nombre,
        Apellidos,
        ClaveLibP,
        TituloP,
        Fecha_A,
        Dias_PSoli,
        Telefono
    )VALUES(
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
    )`,
    queryGetBiblioInfo : `SELECT ClaveLib, Titulo, Autor, Año_Publicación, FechaObt, Genero, Disponible, Cantidad_Disponible FROM Libros WHERE ClaveLib = ?`,
    queryUpdateByClaveLib : `
    UPDATE Libros SET
        Titulo=?,
        Autor= ?,
        Año_Publicacion= ?,
        Genero= ?,
        Disponible= ?
    WHERE ClaveLib= ?`,
}
const updateBiblio = (
    Titulo,
    Autor,
    Año_Publicacion,
    Genero,
    Disponible,
    ClaveLib
) => {
    return `UPDATE Libros SET
                Titulo = '${Titulo}',
                Autor = '${Autor}',
                Año_Publicacion = '${Año_Publicacion}',
                Genero = '${Genero}',
                Disponible = '${Disponible}'
            WHERE ClaveLib = '${ClaveLib}'`
}

module.exports = {mBiblio, updateBiblio}