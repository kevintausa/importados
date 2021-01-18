
import {RequestHandler } from 'express'
import Entry from './entry';


export const createEntry: RequestHandler = async (req, res) => {
    console.log(req.body)
    const entryFound = await Entry.findOne({ name: req.body.productId })
    if (entryFound)
        return res.status(303).json({ message: "Item already exists" });
    const newEntry = new Entry(req.body);
    const savedEntry = await newEntry.save()
    res.json(savedEntry);
};

export const getEntry: RequestHandler = async (req, res) => {
    const entryFound = await Entry.findById(req.params.id)
    if (!entryFound) return res.status(204);
    return res.json(entryFound)
};

export const getEntries: RequestHandler = async (req, res) => {
    const entry = await Entry.find()
    try {
        return res.json(entry)
    } catch (error) {
        return res.json(error)
    }
};

export const deleteEntry: RequestHandler = async (req, res) => {
    const entryFound = await Entry.findByIdAndDelete(req.params.id)
    if (!entryFound) return res.status(204).json({ message: "resource not found" })
    return res.json({ message: "item was deleted" })
};
export const updateEntry: RequestHandler = async (req, res) => {
    const entryFound = await Entry.findByIdAndUpdate(req.params, req.body, { new: true })
    if (!entryFound) return res.status(204).json();
    return res.json(entryFound);
};
