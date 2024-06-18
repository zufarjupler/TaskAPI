import { query } from "../database/db.js"

export const getNotes = async(req,res)=>{
    try{
        const result = await query('Select * from notes')
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const insertNotes = async(req,res)=>{
    const {title,datetime,note}= req.body
    console.log(req.body);
    try {
        await query("INSERT INTO notes(title,datetime,note) values (?,?,?)", [title,datetime,note])
        return res.status(200).json({msg:"notes Ditambahkan"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const updateNotes = async(req,res)=>{
    const {title,datetime,note}= req.body
    const {id}=req.params
    try {
        await query("UPDATE notes SET title=?,datetime=?,note=? where id=?", [title,datetime,note, id])
        return res.status(200).json({msg:"Notes Diubah"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const deleteNotes = async(req,res)=>{
    const {id}=req.params
    try {
        await query("DELETE FROM notes where id=?", [id])
        return res.status(200).json({msg:"note Dihapus"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const getNotesById = async(req,res)=>{
    const {id}=req.params
    try{
        const result = await query('Select * from notes where id=?', [id])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const getNotesTest = async(req,res)=>{
    const {id, title,datetime,note} = req.query
    console.log(id, title,datetime,note)
    console.log("TERPANGGIL")
    try{
        const result = await query('Select * from notes where id=?', [id,title,datetime,note])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}