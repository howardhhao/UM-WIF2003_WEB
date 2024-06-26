import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const createSecretToken = (userId) => {
  return jwt.sign({ _id: userId }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

export const setTokenCookie = (res, token) => {
  res.cookie("token", token, {
    withCredentials: true,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    secure: true,
    sameSite: "Strict",
  });
};
