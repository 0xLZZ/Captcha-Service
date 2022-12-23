# Captcha-Service
A captcha service to generate random & unique captchas in image form via a HTTP API



<br />

---

<br />



## API Response
> Refer to this to familiarise yourself with the API's response.

| Property      | Example         | Description                                                                                            |
| ------------- | --------------- | ------------------------------------------------------------------------------------------------------ |
| `text` | 70bbcc1e | The actual text of the captcha that the user needs to enter to pass                            |
| `image`   | awd443534534...    | A png image buffer converted into base64. Used to visually present the challenge to the user. |



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
