import dotenv from "dotenv";
dotenv.config();

const DEFAULT_JWT_SECRET = "dev-jwt-secret-change-me";

export const JWT_SECRET = process.env.SECRET_KEY || process.env.JWT_SECRET || DEFAULT_JWT_SECRET;

if(JWT_SECRET === DEFAULT_JWT_SECRET){
    console.warn("JWT secret missing. Falling back to default dev secret. Set SECRET_KEY or JWT_SECRET in backend/.env for production.");
}

