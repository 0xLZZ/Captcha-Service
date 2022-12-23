# Captcha-Service
A captcha service to generate random & unique captchas in image form via a HTTP API



<br />

---

<br />



## Example
> In this case the captcha text was "537ad236".

Captcha image will always be 300 wide and 100 high.

![Captcha example](captcha.png "Captcha example")



<br />

---

<br />



## API Response
> Refer to this to familiarise yourself with the API's response.

| Property      | Example         | Description                                                                                            |
| ------------- | --------------- | ------------------------------------------------------------------------------------------------------ |
| `image`   | awd443534534...    | A data URL containing a representation of the image in the png format. Used to visually present the challenge to the user in HTML. |
| `data`   | awd443534534...    | A png image buffer converted into base64. Used to visually present the challenge to the user. |
| `text` | 70bbcc1e | The actual text of the captcha that the user needs to enter to pass                            |



<br />

---

<br />



## Start

### Install dependencies
```bash
npm install
```

<br />

### Start the server
#### Production
```bash
npm run start
```

#### Development
```bash
npm run start-dev
```
