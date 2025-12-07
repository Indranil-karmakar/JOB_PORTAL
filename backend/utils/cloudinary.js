import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

const cloudConfig = {
    cloud_name: process.env.CLOUD_NAME || process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUD_KEY || process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUD_SECRET || process.env.CLOUDINARY_SECRET
};

export const isCloudinaryConfigured = Boolean(
    cloudConfig.cloud_name && cloudConfig.api_key && cloudConfig.api_secret
);

if (isCloudinaryConfigured) {
    cloudinary.config(cloudConfig);
} else {
    const missing = [];
    if (!cloudConfig.cloud_name) missing.push("CLOUD_NAME or CLOUDINARY_NAME");
    if (!cloudConfig.api_key) missing.push("CLOUD_KEY or CLOUDINARY_KEY");
    if (!cloudConfig.api_secret) missing.push("CLOUD_SECRET or CLOUDINARY_SECRET");
    console.warn(`Cloudinary env vars missing: ${missing.join(", ")}. Image uploads will be disabled.`);
}

export default cloudinary;