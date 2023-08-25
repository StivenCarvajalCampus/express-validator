import { Router } from "express";
import { GetAll } from "";
import { validationResult } from "express-validator";
export const userV1 = Router();
userV1.use(GetAll, (req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty())return res.status(400).json(errors)

    let {nombre:nom}=req.body;
    let json = {nom};
    res.status(200).json(json);
})