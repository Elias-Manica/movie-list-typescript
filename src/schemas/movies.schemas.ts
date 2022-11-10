import Joi from "joi";

const schemaMovie = Joi.object({
  name: Joi.string()
    .required()
    .empty("")
    .regex(/[a-zA-Z0-9]/),
  plataform: Joi.number().required().empty(""),
  genre: Joi.number().required().empty(""),
  statusmovie: Joi.number().required().empty(""),
  grade: Joi.number().empty(),
  note: Joi.string().empty(""),
});

export { schemaMovie };
