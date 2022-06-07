const express = require('express')
const contactsModel= require ("../models/contactsSchema")
const router = express.Router()

// * Create a Router
// const router = express.Router()
// //add requests to router
// router.get("/", (req,res)=>{
//     res.status(200).json({
//         contacts: [{name:"apple"}]
//     })
// })
//* GET Contacts
router.get('/', async (req, res) => {
    try {
        const contacts = await contactsModel.find()
        res.status(200).json(contacts)
    } catch (error) {
        console.log(error)
    }
 })
 //* GET Contacts by id
router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const contacts = await contactsModel.findById(id)
        res.status(200).json(contacts)
    } catch (error) {
        console.log(error)
    }
 })
 //POST contacts
 router.post('/', async (req, res) => {
    const contactsData = req.body 
    try {
        const contacts = await contactsModel.create(contactsData)
        res.status(200).json(contacts)
    } catch (error) {
        console.error(error)
        res.status(400).json('Bad request!!!!!')
    }
 })
 //* UPDATE TODO BY ID
router.put('/:id', async (req, res) => {
    const id = req.params.id
    const newContactsData = req.body
     try {
         //* find the todo by the id
         const contacts = await contactsModel.findByIdAndUpdate(id, newContactsData, {new: true})
         res.status(200).json(contacts)
     } catch (error) {
         console.log(error)
     }
})
//! DELETE A TODO
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const contacts = await contactsModel.findByIdAndDelete(id)
        res.status(200).json({msg: 'Contact was deleted!'})
    } catch (error) {
        console.log(error);
    }
})

module.exports=router

