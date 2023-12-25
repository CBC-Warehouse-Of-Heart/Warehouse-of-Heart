// import useSound from "use-sound";

// import boopSfx from "../../../public/sound/ocean.mp3";

export default function testaudio() {
  // // create audio context
  // const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  // // set basic variables for example
  // const myAudio = new Audio('/sound/ocean_floor.mp3'); // Load the MP3 file

  // const linearRampPlus = document.querySelector(".linear-ramp-plus") as HTMLElement;
  // const linearRampMinus = document.querySelector(".linear-ramp-minus") as HTMLElement;

  // // Create a MediaElementAudioSourceNode
  // // Feed the HTMLMediaElement into it
  // const source = audioCtx.createMediaElementSource(myAudio);

  // // Create a gain node and set its gain value to 0.5
  // const gainNode = audioCtx.createGain();

  // // connect the AudioBufferSourceNode to the gainNode
  // // and the gainNode to the destination
  // gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
  // source.connect(gainNode);
  // gainNode.connect(audioCtx.destination);

  // if (linearRampPlus) {
  //   linearRampPlus.onclick = () => {
  //     gainNode.gain.linearRampToValueAtTime(1.0, audioCtx.currentTime + 2);
  //   };
  // }

  // if (linearRampMinus) {
  //   linearRampMinus.onclick = () => {
  //     gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 2);
  //   };
  // }

  // // Load the MP3 file when the page is loaded
  // myAudio.load();

  // // You might want to handle play/pause or other events as needed
  // // For example, to play the audio:
  // // myAudio.play();

  //   return (
  //     <div>
  //       Test Audio
  //     </div>
  //   )
  // const Arcade = () => {
  //   const [play, { sound }] = useSound('/win-theme.mp3');

  //   return (
  //     <button
  //       onClick={() => {
  //         // You win! Fade in the victory theme
  //         sound.fade(0, 1, 1000);
  //       }}
  //     >
  //       Click to win
  //     </button>
  //   );
  // };

  // const BoopButton = () => {
  //   const [play] = useSound(boopSfx);

  //   return <button onClick={play}>Boop!</button>;
  // };
}
