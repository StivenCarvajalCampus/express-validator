import { check } from "express-validator";
export const GetAll = [
    check ("nombre")
    .notEmpty().withMessage("El nombre es obligatorio")
    .isString().withMessage("El nombre tiene que ser un string")
    .matches(/^[a-zA-Z]+$/).withMessage("Solo letras"),

    check("Apellido")
    .notEmpty().withMessage("El apellido es obligatorio")
]