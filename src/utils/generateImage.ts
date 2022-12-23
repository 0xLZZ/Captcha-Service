import { Canvas, createCanvas } from "canvas";
import getRandomInt from "./getRandomInt";

export default async function generateImage(captchaText: string): Promise<Canvas> {
    // Create the canvas and context to draw on
    // Canvas is 300 wide and 100 high
    const canvas = createCanvas(300, 100);
    const ctx = canvas.getContext("2d");

    // Draw each letter of the text at a random angle
    for (let i = 0; i < captchaText.length; i++) {
        // Generate a random angle
        // If odd, make the angle negative
        let angle = getRandomInt(1, 3); // Between 1 and 3
        if (i % 2 == 0) {
            angle *= -1;
        }

        // Calculate the x and y coordinates of the letter
        const x = ((canvas.width / 2) - 80) + (i * 20);
        const y = canvas.height / 2;

        // Draw the letter with a random color and thickness
        ctx.fillStyle = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
        ctx.font = `${getRandomInt(20, 40)}px Arial`; // Between 20 and 40
        ctx.rotate(angle * Math.PI / 180);
        ctx.fillText(captchaText[i], x, y);
    }

    // Draw a random number of lines
    for (let i = 0; i < getRandomInt(1, 3); i++) {
        // Generate a random color
        ctx.strokeStyle = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;

        // Generate a random thickness
        ctx.lineWidth = getRandomInt(1, 5); // Between 1 and 5

        // Generate a random start and end point
        ctx.beginPath();
        ctx.moveTo(getRandomInt(0, canvas.width), getRandomInt(0, canvas.height));
        ctx.lineTo(getRandomInt(0, canvas.width), getRandomInt(0, canvas.height));
        ctx.stroke();
    }

    // Draw a random number of circles
    for (let i = 0; i < getRandomInt(1, 3); i++) {
        // Generate a random color
        ctx.strokeStyle = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;

        // Generate a random thickness
        ctx.lineWidth = getRandomInt(1, 5); // Between 1 and 5

        // Generate a random radius
        const radius = getRandomInt(10, 30); // Between 10 and 30

        // Generate a random start and end point
        ctx.beginPath();
        ctx.arc(getRandomInt(0, canvas.width), getRandomInt(0, canvas.height), radius, 0, 2 * Math.PI);
        ctx.stroke();
    }

    return canvas;
}
