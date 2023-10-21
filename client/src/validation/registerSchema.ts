import * as Yup from "yup"

export const registerSchema = Yup.object().shape({
    email: Yup.string().required().min(3),
    fullName: Yup.string().required().min(3),
    username: Yup.string().required().min(4),
    password: Yup.string().required().min(6)
})