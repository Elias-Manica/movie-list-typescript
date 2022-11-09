import Joi from "joi";

const schemaSignUp = Joi.object({
  name: Joi.string()
    .required()
    .max(200)
    .empty("")
    .regex(/[a-zA-Z0-9]/),
  email: Joi.string().required().max(100).empty("").email(),
  password: Joi.string()
    .required()
    .empty("")
    .regex(/[a-zA-Z0-9]/),
});

export { schemaSignUp };
