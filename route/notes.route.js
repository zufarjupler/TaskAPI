import express from 'express'
import { deleteNotes, getNotes, getNotesById, insertNotes, updateNotes } from '../controller/notes.controller.js'

const router = express.Router()

router.get('/note', getNotes)
router.get('/note/:id', getNotesById)
router.post('/note/create', insertNotes)
router.put('/note/:id', updateNotes)
router.delete('/note/:id', deleteNotes)


export default router