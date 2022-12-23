interface Captcha {
    image: string; // png image buffer converted into base64
    data: string; // a data URL containing a representation of the image in the base64 format 
    text: string; // text of the captcha
}
