import { confetti } from "@tsparticles/confetti";

const heroTitle = document.querySelector(".hero-title");
const launchSound = new Audio("assets/sounds/launch1.ogg");
const blastSound = new Audio("assets/sounds/blast1.ogg");
const twinkleSound = new Audio("assets/sounds/twinkle1.ogg");
const minecraftDyeColors = [
    "#3AB3DA",
    "#B02E26",
    "#80C71F",
    "#FED83D",
    "#C74EBD",
    "#F9801D"
];
const sparkSources = [
    "assets/particles/spark_0.png",
    "assets/particles/spark_2.png",
    "assets/particles/spark_4.png"
];

[launchSound, blastSound, twinkleSound].forEach(sound => {
    sound.preload = "auto";
});

const loadImage = source => new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Unable to load firework particle sprite: ${source}`));
    image.src = source;
});

const tintSprite = (image, color) => {
    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    const context = canvas.getContext("2d");
    if (!context) {
        throw new Error("Unable to create a canvas for tinting firework particles.");
    }

    context.imageSmoothingEnabled = false;
    context.drawImage(image, 0, 0);
    context.globalCompositeOperation = "source-in";
    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/png");
};

const tintedParticleImages = Promise.all(sparkSources.map(loadImage))
    .then(images => minecraftDyeColors.flatMap(color => images.map(image => ({
        src: tintSprite(image, color),
        width: 16,
        height: 16
    }))));

const playSound = (template, volume = 1) => {
    const sound = template.cloneNode();
    sound.volume = volume;
    const playback = sound.play();
    if (playback && typeof playback.catch === "function") {
        playback.catch(error => console.warn("Unable to play the firework sound.", error));
    }
};

const triggerFirework = () => {
    playSound(launchSound);

    window.setTimeout(() => {
        playSound(blastSound);
        tintedParticleImages
            .then(image => {
                confetti({
                    position: {
                        x: 15 + Math.random() * 70,
                        y: 15 + Math.random() * 50
                    },
                    shapes: ["image"],
                    shapeOptions: { image },
                    particleCount: 90 + Math.floor(Math.random() * 31),
                    spread: 360,
                    startVelocity: 40 + Math.random() * 12,
                    gravity: 0.8,
                    scalar: 1.8,
                    flat: true
                });
            })
            .catch(error => console.error("Unable to prepare colored firework particles.", error));
        window.setTimeout(() => playSound(twinkleSound, 0.6), 200);
    }, 500);
};

if (heroTitle) {
    heroTitle.addEventListener("click", triggerFirework);
}
