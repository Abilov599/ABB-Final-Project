import * as Yup from "yup"
export const loginSchema = Yup.object().shape({
    email: Yup.string().required().min(4),
    password: Yup.string().required().min(6)
})