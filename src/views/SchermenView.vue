<template>
  <div class="con-weergave">
    <header class="con-weergave__header">
      <h1 class="con-weergave__header__title">Boodschap naar scherm</h1>
    </header>
    <form class="con-weergave-form">
      <textarea
        class="container-weergave__section__textarea"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <button class="con-form-schermopties__btn">Verzenden</button>
      <ul class="con-list-schermen">
        <div class="con-list-schermen__header" @click="onClickToggle()">
          <label class="list-header__label">Scherm weergave</label>
          <fa
            :class="
              isLijstOpen ? 'list-header__icon-down' : 'list-header__icon-up'
            "
            icon="chevron-down"
            color="black"
          />
        </div>
        <li
          @click="onItemClick"
          :class="
            isLijstOpen
              ? 'con-list-schermen__optie--visiable'
              : 'con-list-schermen__optie--invisiable'
          "
          class="con-list-schermen__optie"
        >
          Scherm 1
        </li>
        <li
          @click="onItemClick"
          :class="
            isLijstOpen
              ? 'con-list-schermen__optie--visiable'
              : 'con-list-schermen__optie--invisiable'
          "
          class="con-list-schermen__optie"
        >
          Scherm 2
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SchermenView',
  data() {
    return {
      isLijstOpen: true,
    }
  },
  methods: {
    onItemClick(e) {
      console.log(e.srcElement.innerText)
    },
    onClickToggle() {
      console.log('erserse')
      this.isLijstOpen = !this.isLijstOpen
    },
  },
}
</script>

<style lang="scss">
$primary-color: #8bd1b6;
$primary-color-dark: #8bd1b6;
$primary-color-darker: #8bd1b654;
$primary-text-color: black;
$list-width: 150px;
$list-width-sm: 100px;
$padding-items: 8px;

body {
  background: linear-gradient(
    120deg,
    rgb(10, 10, 10) 0%,
    rgb(38, 38, 38) 35%,
    rgb(60, 60, 60) 100%
  );
  color: $primary-text-color;
}

.con-weergave {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.con-weergave__header {
  margin-top: 45px;
}

.con-weergave__header__title {
  font-size: 24px;
  margin: 0;
  line-height: 0;
  font-weight: 500;
}

.con-weergave-form {
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.container-weergave__section__textarea {
  border-radius: 5px;
  padding: 12px;
  width: 400px;
  max-width: 400px;
  min-width: 100px;
  max-height: 200px;
  min-height: 100px;
}

.container-weergave__section__textarea:focus {
  outline: $primary-color 2px solid;
}

.con-form-schermopties__btn {
  all: unset;
  background-color: $primary-color;
  border-radius: 5px;
  padding: 10px 20px;
  color: black;
  font-weight: 900;
}

.con-form-schermopties__btn:active {
  background-color: $primary-color-darker;
}

.con-list-schermen {
  margin-top: 15px !important;
  all: unset;
  display: flex;
  flex-direction: column;
}

.con-list-schermen__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $primary-color;
  margin-bottom: 1px;
  padding: $padding-items;
  width: $list-width;
  border-radius: 5px;
  font-weight: 600;
}

.con-list-schermen__header:active {
  background-color: $primary-color-darker;
}

.list-header__icon-up {
  padding: $padding-items;
  margin-bottom: 1px;
  animation: up-animation 0.2s forwards;
}

@keyframes up-animation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}

.list-header__icon-down {
  padding: $padding-items;
  margin-bottom: 1px;
  animation: down-animation 0.2s forwards;
}

@keyframes down-animation {
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
}
.list-label__icon {
  padding: 0 !important;
}

.con-list-schermen__optie {
  all: unset;
  color: black;
  background-color: white;
  padding: $padding-items;
  transition: 0.2s;
}

.con-list-schermen__optie--visiable {
  opacity: 1;
}

.con-list-schermen__optie--invisiable {
  opacity: 0;
  pointer-events: none;
}

.con-list-schermen__optie:hover {
  background-color: $primary-color;
}

.con-list-schermen :nth-child(2) {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.con-list-schermen :last-child {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

@media screen and (max-width: 450px) {
  .container-weergave__section__textarea {
    width: 300px;
    max-width: none;
    max-height: none;
  }
  .con-weergave__header__title {
    font-size: 20px;
  }
}

@media screen and (max-width: 350px) {
  .container-weergave__section__textarea {
    width: 200px;
    height: 150px;
  }
  .con-weergave__header__title {
    font-size: 16px;
    font-weight: 600;
  }
}

@media screen and (max-width: 250px) {
  .container-weergave__section__textarea {
    width: 100px;
    height: 70px;
  }
  .con-weergave__header__title {
    font-size: 12px;
    font-weight: 600;
    opacity: 1;
  }
  .con-list-schermen__header {
    width: $list-width-sm;
  }
}
</style>
