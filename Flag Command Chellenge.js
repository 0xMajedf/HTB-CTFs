## Steps

1. go to the website look at the page source

2. u will find json files of the website it looks suspicious
  <audio id="typing-sound" src="/static/terminal/audio/typing_sound.mp3" preload="auto"></audio>
  <script src="/static/terminal/js/commands.js" type="module"></script>
  <script src="/static/terminal/js/main.js" type="module"></script>
  <script src="/static/terminal/js/game.js" type="module"></script>

3. look at main.js | at the end of the file there is and endpoint called /api/options -> telling the user whats the possible commmands he can run

4. navigate to the endpoint /api/options through burpsuite | response ->

## Possible Commands 
{
  "allPossibleCommands": {
    "1": [
      "HEAD NORTH",
      "HEAD WEST",
      "HEAD EAST",
      "HEAD SOUTH"
    ],
    "2": [
      "GO DEEPER INTO THE FOREST",
      "FOLLOW A MYSTERIOUS PATH",
      "CLIMB A TREE",
      "TURN BACK"
    ],
    "3": [
      "EXPLORE A CAVE",
      "CROSS A RICKETY BRIDGE",
      "FOLLOW A GLOWING BUTTERFLY",
      "SET UP CAMP"
    ],
    "4": [
      "ENTER A MAGICAL PORTAL",
      "SWIM ACROSS A MYSTERIOUS LAKE",
      "FOLLOW A SINGING SQUIRREL",
      "BUILD A RAFT AND SAIL DOWNSTREAM"
    ],
    "secret": [
      "Blip-blop, in a pickle with a hiccup! Shmiggity-shmack"
    ]
  }
}

5. finally u could see there is a posbbile command called Blip-blop, in a pickle with a hiccup! Shmiggity-shmack

6. run this command through the terminal and retrieve the flag 

## Extra Tip

7. navigate to /api/monitor with POST request through burpsuite and u could see t the command u write on the terminal type [ Blip-blop, in a pickle with a hiccup! Shmiggity-shmack ] and u got the flag in burpsuite


-----------------------------------------------
HTTP/1.1 200 OK
Server: Werkzeug/3.0.1 Python/3.11.8
Date: Sat, 22 Mar 2025 10:13:04 GMT
Content-Type: application/json
Content-Length: 76
Connection: close

{
  "message": "HTB{D3v3l0p3r_t00l5_4r3_b35t__t0015_wh4t_d0_y0u_Th1nk??}"
}
-----------------------------------------------
