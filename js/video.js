var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log("New Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.9;
	console.log("New Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	let x = video.currentTime + 5;
	if (x > video.duration) {
		console.log("Going back to beginning");
		video.currentTime = 0;
	} else {
		video.currentTime += 5;
	}
	console.log("Current location " + video.currentTime);
	video.play()
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		document.querySelector('#mute').innerHTML = "Unmute";
		video.muted = true;
	} else {
		document.querySelector('#mute').innerHTML = "Mute";
		video.muted = false;
	}
});

document.querySelector("#volumeSlider").addEventListener("click", function() {
	let slide = document.getElementById("volumeSlider");
	video.volume = slide.value / 100;
	let vol = document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
	console.log(video.volume);
});

document.querySelector("#old").addEventListener("click", function() {
	let z = document.querySelector("#myVideo");
	z.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	let y = document.querySelector("#myVideo");
	y.classList.remove("oldTime");
});
