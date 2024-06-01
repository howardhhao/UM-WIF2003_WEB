import Joi from "joi";

export const titleSchema = Joi.string().required();
export const contentSchema = Joi.string().required();
export const postIdSchema = Joi.string().required();
export const userIdSchema = Joi.string().required();

export const addPostSchema = Joi.object({
  // ! Should be removed for production
  id: Joi.string().required(),
  title: titleSchema,
  content: contentSchema,
});

export const modifyPostSchema = Joi.object({
  postId: postIdSchema,
  title: titleSchema,
  content: contentSchema,
});

export const deletePostSchema = Joi.object({
  postId: postIdSchema,
});

export const likePostSchema = Joi.object({
  postId: postIdSchema,
  userId: userIdSchema,
});
