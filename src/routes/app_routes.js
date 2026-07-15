import express, { Router } from 'express'
export const appRoutes = Router()
appRoutes.get("/",(req,res) => {
    res.send("app is running in server")
})