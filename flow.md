2 ports 
1. web app 8002 shows QR code image
2. web app 8003/login shows login form/qr scanner kind off
2.  8001 is the websocket

WS message server side 
socket.headers["sec-websocket-key"]
{ type: 'server', code: 0, step: 0 }


QR show screen 8002
Scan code successfully


Logged in app 8003
http://192.168.0.111:8003/?t=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiOTkwMGRiZDgtOWM0Yi00ZWE4LTk0NzktY2Y5MTY3ZDg0ZjZkIiwiaWF0IjoxNjM0MDE1OTg4LCJleHAiOjE2MzQwMTYwNDh9.6AvycBGgvZ6LBhl2Jv5cYNQ67H0oYpjzkJc75lCjviY
Login successful