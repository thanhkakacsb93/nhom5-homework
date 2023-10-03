import joi from "joi"

const SchemaLogninOrsignup = {
    body: {
        username:
            joi.string()
                .required()
                .unique(),
        passwould:
            joi.string()
                .regex(/^ [a - zA - Z0 - 9\W]{ 3, 30}$/)
    }

}
const ShemaTokenConfirmation = {
    Headers: {
        // x-accesstoken-configmation:{

    }
}
// }