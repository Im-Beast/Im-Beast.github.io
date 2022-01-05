<template>
  <div v-if="!welcomeFinished" ref="modalEl" class="modal greeting-modal">
    <p
      ref="greetingEl"
      class="
        font-bold
        m-5
        transform
        top-1/2
        left-1/2
        text-blue-300 text-4xl
        w-50
        -translate-x-1/2 -translate-y-1/2
        greeting
        absolute
        relative
        pointer-events-none
      "
      @animationiteration="updateGreeting"
    >
      {{ greeting }}
    </p>

    <button
      class="
        font-semibold
        outline-none
        text-white
        right-5
        bottom-5
        uppercase
        absolute
        focus:outline-none
      "
      @click="finishWelcoming"
    >
      Skip
    </button>
  </div>
</template>

<style scoped>
  .hidden-modal {
    animation: hide-modal 1s ease-in forwards;
  }

  @keyframes hide-modal {
    0% {
      height: 100%;
      opacity: 100%;
      border-radius: 0 0 0.5rem 0.5rem;
    }

    100% {
      border-radius: 5rem 5rem 5rem 5rem;
      height: 5px;
      opacity: 0%;
      transform: scale(50%);
    }
  }

  .greeting:after {
    content: "";
    position: absolute;

    z-index: 1;

    left: -0.1em;
    right: -0.1em;

    border-radius: 0.1em 0.1em 0.1em 0.1em;

    background: linear-gradient(
      35deg,
      theme("colors.blue.400"),
      theme("colors.blue.500")
    );

    animation: zoop 1.5s infinite alternate-reverse
      cubic-bezier(0.6, 0.3, 0.3, 0.6);
  }

  @keyframes zoop {
    30% {
      top: calc(100% + 0.1em);
      bottom: -0.1em;
    }

    44% {
      top: -0.1em;
    }

    55% {
      top: -0.1em;
      bottom: 0%;
    }

    70% {
      top: -0.1em;
      bottom: calc(100% + 0.1em);
    }
  }
</style>

<script setup lang="ts">
  import { ref } from "vue";

  const emit = defineEmits(["finish"]);
  const modalEl = ref({} as HTMLElement);
  const greetingEl = ref({} as HTMLElement);

  const finishWelcoming = () => {
    console.log("start");
    modalEl?.value?.classList?.add("hidden-modal");
    setTimeout(() => {
      emit("finish");
      welcomeFinished.value = true;
      document.body.style.overflow = "visible";
    }, 1000);
  };

  const welcomeFinished = ref(
    localStorage.getItem("welcome-finished") === "true"
  );
  if (!welcomeFinished.value) {
    document.body.style.overflow = "hidden";
    localStorage.setItem("welcome-finished", "true");
  }

  const greetings = [
    "Hello",
    "Cześć",
    "Servus",
    "Ahoj",
    "Привет",
    "Hola",
    "Salve",
    "Merhaba",
    "こんにちは",
    "你好",
    "",
  ];

  const greeting = ref(greetings[0]);

  let index = 0;
  const updateGreeting = () => {
    index = Math.min(++index, greetings.length - 1);
    setTimeout(() => {
      greeting.value = greetings[index];
      if (index === greetings.length - 1) {
        finishWelcoming();
      }
    }, 600);
  };
</script>
