const ws = new WebSocket("ws://192.168.1.10:3000")

ws.onmessage = (event) => {
    handleSignallingData(JSON.parse(event.data))

}
ws.onopen = () => console.log("connected");
function handleSignallingData(data) {
    switch (data.type) {
        case "offer":
            peerConn.setRemoteDescription(data.offer)
            createAndSendAnswer()
            break
        case "candidate":
            peerConn.addIceCandidate(data.candidate)
    }
}

function createAndSendAnswer() {
    peerConn.createAnswer((answer) => {
        peerConn.setLocalDescription(answer)
        sendData({
            type: "send_answer",
            answer: answer
        })
    }, error => {
        console.log(error)
    })
}

function sendData(data) {
    data.username = username
    // ws.send(JSON.stringify(data))

    // ws.onopen = () => ws.send(JSON.stringify(data));

    ws.send(JSON.stringify(data));
}


let localStream
let peerConn
let username

function joinCall() {

    let joincallcontainer=document.getElementById("joincall")
    let joincallheader=document.getElementById("header-navbar")

    username = document.getElementById("username-input").value

    document.getElementById("video-call-div")
        .style.display = "inline"

    navigator.getUserMedia({
        video: {
            frameRate: 24,
            width: {
                min: 480, ideal: 720, max: 1280
            },
            aspectRatio: 1.33333
        },
        audio: true
    }, (stream) => {
        localStream = stream
        document.getElementById("local-video").srcObject = localStream

        let configuration = {
            iceServers: [
                {
                    "urls": ["stun:stun.l.google.com:19302",
                        "stun:stun1.l.google.com:19302",
                        "stun:stun2.l.google.com:19302"]
                }
            ]
        }

        peerConn = new RTCPeerConnection(configuration)
        peerConn.addStream(localStream)
        joincallcontainer.style.display="none"
        joincallheader.style.display="none"

        peerConn.onaddstream = (e) => {
            document.getElementById("remote-video")
                .srcObject = e.stream
              
        }

        peerConn.onicecandidate = ((e) => {
            if (e.candidate == null)
                return

            sendData({
                type: "send_candidate",
                candidate: e.candidate
            })
        })

        sendData({
            type: "join_call"
        })

    }, (error) => {
        console.log(error)
    })
}

let isAudio = true
function muteAudio() {
    isAudio = !isAudio
    localStream.getAudioTracks()[0].enabled = isAudio
}

let isVideo = true
function muteVideo() {
    isVideo = !isVideo
    localStream.getVideoTracks()[0].enabled = isVideo
}