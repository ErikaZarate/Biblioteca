const {request, response} = require("express")
const pool = require("../db/connection")
const {mBiblio, updateBiblio} = require("../models/Biblioteca");


//Obtener datos de la biblioteca
const getBiblio = async (req=request, res=response) => {
    let conn;
    try{
        conn = await pool.getConnection()
        const Biblio = await conn.query(mBiblio.queryGetBiblio,(error)=>{throw new error})
        if(!Biblio){
            res.status(404).json({msg:"No se encontraron registros"})
            return
        }
        res.json({Biblio})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}
//Obtener datos de la biblioteca
const getPrestamo = async (req=request, res=response) => {
    let conn;
    try{
        conn = await pool.getConnection()
        const Prest = await conn.query(mBiblio.queryGetPrest,(error)=>{throw new error})
        if(!Prest){
            res.status(404).json({msg:"No se encontraron registros"})
            return
        }
        res.json({Prest})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}
//Obtener datos de un libro por clave
const getBiblioByClave = async (req = request, res = response) =>{
    const {ClaveLib} = req.params
    let conn;
    try{ 
        conn = await pool.getConnection()
        const [Biblio] = await conn.query(mBiblio.queryBiblioByClave,[ClaveLib],(error)=>{throw new error})
        if (!Biblio){
            res.status(404).json({msg: `No se encontró registro con clave ${ClaveLib}`})
            return
        }
        res.json({Biblio})
    } catch (error){
        console.log(error)
        res.status(500).json({error})
    } finally{
        if(conn){
            conn.end()
        }
    }
}
const getlibandprest = async (req = request, res = response) =>{
    const {ClaveLib} = req.params
    let conn;
    try{ 
        conn = await pool.getConnection()
        const [Biblio] = await conn.query(mBiblio.queryBiblioByClave,[ClaveLib],(error)=>{throw new error})
        if (!Biblio){
            res.status(404).json({msg: `No se encontró registro con clave ${ClaveLib}`})
            return
        }const [Prest] = await conn.query(mBiblio.queryPrestByClave,[ClaveLib],(error)=>{throw new error})
        if (!Prest){
            res.status(404).json({msg: `No se encontró registro con clave ${ClaveLib}`})
            return
        }
        res.json({Biblio, Prest})
    } catch (error){
        console.log(error)
        res.status(500).json({error})
    } finally{
        if(conn){
            conn.end()
        }
    }
}
//Quitar disponibilidad de un libro por su Clave
const deleteBibliobyClave = async (req = request, res = response) =>{
    const {ClaveLib} = req.query
    let conn;
    try{ 
        conn = await pool.getConnection()
        const {affectedRows} = await conn.query(mBiblio.queryDeleteBiblioByClave,[ClaveLib],(error)=>{throw new error})
        
        if (affectedRows === 0){
            res.status(404).json({msg: `No se pudo eliminar el registro con clave ${ClaveLib}`})
            return
        }
        res.json({msg: `Se elimino satisfactoriamente el registro con el Clave ${ClaveLib}`})
    } catch (error){
        console.log(error)
        res.status(500).json({error})
    } finally{
        if(conn){
            conn.end()
        }
    }
}
const reactivarBibliobyClave = async (req = request, res = response) =>{
    const {ClaveLib} = req.query
    let conn;
    try{ 
        conn = await pool.getConnection()
        const {affectedRows} = await conn.query(mBiblio.queryReactivarBiblioByClave,[ClaveLib],(error)=>{throw new error})
        
        if (affectedRows === 0){
            res.status(404).json({msg: `No se pudo reactivar el registro con clave ${ClaveLib}`})
            return
        }
        res.json({msg: `Se reactivo satisfactoriamente el registro con clave ${ClaveLib}`})
    } catch (error){
        console.log(error)
        res.status(500).json({error})
    } finally{
        if(conn){
            conn.end()
        }
    }
}
//Añadir un nuevo libro
const addBiblio = async (req = request, res = response) =>{
    const {
        ClaveLib,
        Titulo,
        Autor,
        Año_Publicación,
        FechaObt,
        Genero,
        Disponible,
        Cantidad_Disponible
    } = req.body
    if (
        !ClaveLib ||
        !Titulo||
        !Autor ||
        !Año_Publicación ||
        !FechaObt ||
        !Genero ||
        !Disponible
    ){ res.status(400).json({msg:"Falta informaciòn del usuario"})}
    
    let conn;
    try{ 
        conn = await pool.getConnection()
        //No exista el usuario antes de insertar
        const [Biblio]=await conn.query(mBiblio.queryBiblioExists,[ClaveLib])
        if (Biblio){
            res.status(403).json({msg:`El usuario ${ClaveLib} ya se encuentra registrado`})
            return
        }

        const {affectedRows} = await conn.query(mBiblio.queryAddBiblio,[
            ClaveLib,
            Titulo,
            Autor,
            Año_Publicación,
            FechaObt,
            Genero,
            Disponible,
            Cantidad_Disponible
        ],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo agregar el registro del usuario ${ClaveLib}`})
            return
        }
        res.json({msg:`Se agregp satisfactoriamente el registro con el usuario ${ClaveLib}`})
    } catch (error){
        console.log(error)
        res.status(500).json({error})
    } finally{
        if(conn){
            conn.end()
        }
    }
}
const addPrest = async (req = request, res = response) =>{
    const {
        Nombre,
        Apellidos,
        ClaveLibP,
        TituloP,
        Fecha_A,
        Dias_PSoli,
        Telefono
    } = req.body
    if (
        !Nombre||
        !Apellidos ||
        !ClaveLibP ||
        !TituloP||
        !Fecha_A ||
        !Dias_PSoli ||
        !Telefono 
    ){ res.status(400).json({msg:"Falta informaciòn del prestamo"})}
    
    let conn;
    try{ 
        conn = await pool.getConnection()

        const {affectedRows} = await conn.query(mBiblio.queryAddPrest,[
            Nombre,
            Apellidos,
            ClaveLibP,
            TituloP,
            Fecha_A,
            Dias_PSoli,
            Telefono
        ],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo agregar el registro del prestamo ${ClaveLibP}`})
            return
        }
        res.json({msg:`Se agregp satisfactoriamente el registro con clave ${ClaveLibP}`})
    } catch (error){
        console.log(error)
        res.status(500).json({error})
    } finally{
        if(conn){
            conn.end()
        }
    }
}
//Actualizar información del libro
const updateBiblioByClaveLib = async (req = request, res = response) =>{
    const {
        ClaveLib,
        Titulo,
        Autor,
        Año_Publicación,
        FechaObt,
        Genero,
        Disponible,
        Cantidad_Disponible
    } = req.body

    if (
        !ClaveLib ||
        !Titulo||
        !Autor ||
        !Año_Publicación ||
        !Genero ||
        !Disponible 

    ){
        res.status(400).json({msg:"Falta informacion del usuario"})
        return
    }

    let conn;
    try {
        conn = await pool.getConnection()
        const [Biblio]=await conn.query(mBiblio.queryGetBiblioInfo,[ClaveLib])
        if (!Biblio){
            res.status(403).json({msg: `El usuario ${ClaveLib} no se encuentra registrado`})
        }
        const {affectedRows} = await conn.query(updateBiblio(
            Titulo,
            Autor,
            Año_Publicación,
            Genero,
            Disponible,
            ClaveLib
        ),(error)=>{throw new error})
        if (affectedRows === 0) {
            res.status(404).json({msg:`No se pudo actualizar el registro del usuario ${ClaveLib}`})
            return
        }
        res.json({msg: `El usuario ${ClaveLib} se actualizo correctamente.`})
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

module.exports = {getBiblio, getPrestamo, getBiblioByClave, getlibandprest,deleteBibliobyClave, reactivarBibliobyClave, addBiblio, addPrest, updateBiblioByClaveLib}