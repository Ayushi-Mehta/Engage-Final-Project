# Engage-Final-Project

# Overview

1. This web app uses a websocket express server to set up a connection using STUN servers. The express server has been deployed using Heroku for universal access.
2. Further it uses WebRTC API for peer to peer connection to set up a connection between sender and receiver.
3. Once the connection is established, the sender and receiver can send and receive each other's audio and video to make an uninterrupted video call.
4. It creates a different room using the room name that the sender provides which can be used by the receiver to join that specific video chat room.
5. It allows multiple users to create different chat rooms at the same time.


# How it works
![image](https://user-images.githubusercontent.com/75256448/125440878-cf813a2f-802d-430f-930b-7752c5079a4d.png)

The server sends an offer through websocket to the STUN server. When the receiver joins the room with the same room name, he then accepts the offer 
and sends his own offer for the sender to accept.
The STUN server then sets up a peer to peer connection between the two and then they can video call uninterrupted for as long as they want.

# How to use
Option 1: Follow these Instructions - <br>
        &emsp;&emsp;&emsp;  Step 1 : Open the master branch and download its ZIP file. <br>
        &emsp;&emsp;&emsp;  Step 2 : Once the file is downloaded, just open the file named "index.html". <br>
        &emsp;&emsp;&emsp;  Step 3 : To start a new video call room, go to "Start Call". Enter your "room name", press "send" and then press "start". <br>
        &emsp;&emsp;&emsp;  Step 4 : Click "Allow" on the prompt for audio and video access. <br>
        &emsp;&emsp;&emsp;  Step 5 : Send the room name to your friend who wants to join the call. <br>
        &emsp;&emsp;&emsp;  Step 6 : Ask your friend to follow Steps 1 and 2. <br>
        &emsp;&emsp;&emsp;  Step 7 : To join call, go to "Join Call". Enter the room name sent by your friend and press "Join Call". <br>
        &emsp;&emsp;&emsp;  Step 8 : Click "Allow" on the prompt for audio and video access. <br>
        &emsp;&emsp;&emsp;  Step 9 : Enjoy interrupted video call ! <br><br>
Option 2: Follow this Youtube Tutorial : <br>
