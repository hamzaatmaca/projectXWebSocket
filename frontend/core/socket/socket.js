const socket = () => {
  let ws = new WebSocket(`ws://localhost:8080`);

  var device = navigator.mediaDevices.getUserMedia({ audio: true });
  var items = [];

  device.then((stream) => {
    var recorder = new MediaRecorder(stream);

    recorder.ondataavailable = (e) => {
      items.push(e.data);
      if (recorder.state == "inactive") {
        console.log(items);
        var blob = new Blob(items, { type: "audio/webm" });

        ws.send(blob);
      }
    };
    recorder.start();

    setTimeout(() => {
      recorder.stop();
    }, 5000);

    recorder.addEventListener("stop", () => {
      console.log("finish");
      recorder.start();
    });

    ws.onmessage = (event) => {
      console.log(event.data);

      var audio = document.getElementById("audio");
      audio.src = URL.createObjectURL(event.data);
      audio.autoplay;
      recorder.start();
    };
  });

  ws.onclose = () => {
    ws = null;
  };
};

export default socket;
