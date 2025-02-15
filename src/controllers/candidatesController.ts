import express, { Request, Response } from 'express'
import { Candidate } from "../models"

const candidatesController = {
    // GET /candidates
    index: async (req: Request, res: Response) => {
        try {
                const candidates = await Candidate.findAll()
                return res.json(candidates)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },  
    // POST /candidates
    save: async (req: Request, res: Response) => {
        const { name, bio, email, phone, openToWork } = req.body
        try {
            const candidate = await Candidate.create({
                name,
                bio,
                email,
                phone,
                openToWork
            })
            return res.status(201).json(candidate)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },
    // GET /candidates/:id
    show: async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            const candidate = await Candidate.findByPk(id, { include: 'jobs' })
            return res.json(candidate)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },
    // PUT /candidates/:id
    update: async (req: Request, res: Response) => {
        const { id } = req.params
        const { name, bio, email, phone, openToWork } = req.body
        try {
            const candidate = await Candidate.findByPk(id)
            if (candidate === null) {
                return res.status(404).json({ message: 'Candidate not found' })
            }
            candidate.name = name
            candidate.bio = bio
            candidate.email = email
            candidate.phone = phone
            candidate.openToWork = openToWork
            await candidate.save()
            return res.status(201).json(candidate)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(401).json({ message: err.message })
            }
        }
    },
    //DELETE /candidates/:id
    delete: async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            await Candidate.destroy({
                where: { id }
            })
    
            return res.status(204).send()
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    }
}

export { candidatesController }