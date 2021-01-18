
import {RequestHandler } from 'express'
import Item from './Item';


export const createItem: RequestHandler = async (req, res) => {
   
    const itemFound = await Item.findOne({ name: req.body.name })
    if (itemFound)
        return res.status(303).json({ message: "Item already exists" });
    const newItem = new Item(req.body);
    const savedItem = await newItem.save()
    res.json(savedItem);
};

export const getItem: RequestHandler = async (req, res) => {
    console.log(req.params.id)
    const itemFound = await Item.findById(req.params.id)
    console.log(itemFound)
    if (!itemFound) return res.status(204);
    return res.json(itemFound)
};

export const getItems: RequestHandler = async (req, res) => {
    const items = await Item.find()
    try {
        return res.json(items)
    } catch (error) {
        return res.json(error)
    }
};

export const deleteItem: RequestHandler = async (req, res) => {
    const itemFound = await Item.findByIdAndDelete(req.params.id)
    if (!itemFound) return res.status(204).json({ message: "resource not found" })
    return res.json({ message: "item was deleted" })
};
export const updateItem: RequestHandler = async (req, res) => {
    const itemFound = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!itemFound) return res.status(204).json();
    return res.json(itemFound);
};