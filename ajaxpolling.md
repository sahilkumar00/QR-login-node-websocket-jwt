# WebSocket QRcode Login

https://user-images.githubusercontent.com/28584349/131832159-eb336b17-3747-4b25-9328-89cf7478930e.mp4

## Usage

```shell
# server
yarn dev:ser

# client
yarn dev:app
```

load http://[LOCAL_IP]:8002 in a browser to see the output.

## UML
1. Create Qrcode
POST /api/login/create/qrcode HTTP/1.1
Host: 127.0.0.1:8000
<img src="./docs/ajaxpolling/1.png" />
2. check QR code scan status

<img src="./docs/ajaxpolling/2.png" />
<img src="./docs/ajaxpolling/3.png" />
<img src="./docs/ajaxpolling/4.png" />
<img src="./docs/ajaxpolling/5.png" />

## authorization middleware

<img src="./docs/auth-middleware.jpg" width="500" />
