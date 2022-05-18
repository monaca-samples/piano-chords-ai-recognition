<template>
  <f7-page name="PredictingPage">
    <div class="predicting-page">
      <!-- Page content-->
      <h3 class="predicting-page__title">pAIno</h3>
      <p class="predicting-page__description">
        Play the chord shown below.<br />
        If you do not know, click on the <br />card to get hint.
      </p>

      <div class="predicting-page__chord-card">
        <div
          v-if="!chordImageVisible"
          class="predicting-page__card-face card-front"
        >
          <h2 class="predicting-page__chord-name">{{ currentChordLetter.toUpperCase() }}</h2>
        </div>

        <div
          v-if="chordImageVisible"
          class="predicting-page__card-face card-back"
        >
          <img
            class="predicting-page__chord-img"
            :src="`../static/${currentChordLetter}_chord.jpg`"
            alt="chord"
          />
        </div>
      </div>

      <div class="predicting-page__buttons">
        <a class="predicting-page__button-reveal" @click="flipCard()">Reveal</a>
        <a class="predicting-page__button-next" @click="randomizeChordLetter()"
          >Next</a
        >
      </div>

      <p>Recognized letter: {{ label }}</p>
    </div>
  </f7-page>
</template>

<script>
import { ref, onMounted } from "vue";
import helperFunctions from "../js/helperFunctions";

export default {
  setup() {
    const chordLetters = ["c", "d", "e", "f"];
    const currentChordLetter = ref("");
    const chordImageVisible = ref(false);
    const label = ref("Waiting...");
    let card;

    const flipCard = () => {
      card.classList.toggle("is-flipped");
      chordImageVisible.value = !chordImageVisible.value;
    };

    const randomizeChordLetter = () => {
      currentChordLetter.value = chordLetters[Math.floor(Math.random() * 4)];
    };

    // Predict piano chords
    const startRecognizingChords = async () => {
      helperFunctions.startPrediction((recognizedChord) => {
        console.log(recognizedChord);
        label.value = recognizedChord;

        if (recognizedChord === currentChordLetter.value) {
          card.classList.toggle("is-green");
          setTimeout(() => {
            card.classList.toggle("is-green");
            randomizeChordLetter();
          }, 1500);
        }
      });
    };

    onMounted(() => {
      randomizeChordLetter();
      card = document.querySelector(".predicting-page__chord-card");
      card.addEventListener("click", function () {
        flipCard();
      });
      startRecognizingChords();
    });

    return {
      startRecognizingChords,
      flipCard,
      randomizeChordLetter,
      label,
      chordImageVisible,
      currentChordLetter,
    };
  },
};
</script>
