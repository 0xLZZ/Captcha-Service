import express from "express";
import { Request, Response } from "express";

import shortHash from "../utils/shortHash";
import generateImage from "../utils/generateImage";

const router = express.Router();
export default router;

async function generateCaptcha(): Promise<Captcha> {
    // Generate the random text based on parts:
    // - The current time in milliseconds
    // - The current process id
    // - The current thread id
    // - The current tick count
    const parts = [
        Date.now(),
        process.pid,
        process.uptime(),
        process.hrtime.bigint()
    ];

    // Generate the text
    const text = shortHash(parts.join(""));

    // Generate the image
    const image = await generateImage(text);

    // Return the captcha
    return {
        image: image.toDataURL(),
        data: image.toBuffer().toString("base64"),
        text
    }
}

router.get("/", async (req: Request, res: Response) => {
    // Generate the captcha
    const captcha = await generateCaptcha();

    // Send the captcha to the client as JSON
    res.json(captcha);
});
