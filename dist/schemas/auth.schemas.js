import Joi from "joi";
var schemaSignUp = Joi.object({
    name: Joi.string()
        .required()
        .max(250)
        .empty("")
        .regex(/[a-zA-Z0-9]/),
    email: Joi.string().required().max(250).empty("").email(),
    password: Joi.string()
        .required()
        .empty("")
        .regex(/[a-zA-Z0-9]/)
});
var schemaSignIn = Joi.object({
    email: Joi.string().required().max(250).empty("").email(),
    password: Joi.string()
        .required()
        .empty("")
        .regex(/[a-zA-Z0-9]/)
});
export { schemaSignUp, schemaSignIn };
