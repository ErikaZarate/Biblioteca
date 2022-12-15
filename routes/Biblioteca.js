const {Router} = require("express")
const {getBiblio, deleteBibliobyClave, addBiblio, updateBiblioByClaveLib, getBiblioByClave, getPrestamo, addPrest, reactivarBibliobyClave, getlibandprest} = require("../controllers/Biblioteca")
const router = Router()

//http://localhost:4000/api/Biblio
//Get
router.get("/", getBiblio)
router.get("/prest", getPrestamo)
router.get("/libp/:ClaveLib", getlibandprest)
router.get("/lib/:ClaveLib", getBiblioByClave)
//Delete
router.delete("/", deleteBibliobyClave)
//Post
router.post("/", addBiblio)
router.post("/prest", addPrest)
//Put
router.put("/", updateBiblioByClaveLib)
router.put("/act", reactivarBibliobyClave)

module.exports = router