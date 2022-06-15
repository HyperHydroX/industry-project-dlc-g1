<template>
  <div class="q-start column no-wrap">
    <div class="q-body">
      <h1 class="q-titel">Kies welke sport</h1>
      <div class="q-grid">
        <div class="q-grid__item">
          <q-btn :to="`/start`" round :key="`btn_size_dense_round_${'xl'}`">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
              class="q-button__icon"
            >
              <g><rect fill="none" height="24" width="24" /></g>
              <g>
                <g>
                  <path
                    d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M13,5.3l1.35-0.95 c1.82,0.56,3.37,1.76,4.38,3.34l-0.39,1.34l-1.35,0.46L13,6.7V5.3z M9.65,4.35L11,5.3v1.4L7.01,9.49L5.66,9.03L5.27,7.69 C6.28,6.12,7.83,4.92,9.65,4.35z M7.08,17.11l-1.14,0.1C4.73,15.81,4,13.99,4,12c0-0.12,0.01-0.23,0.02-0.35l1-0.73L6.4,11.4 l1.46,4.34L7.08,17.11z M14.5,19.59C13.71,19.85,12.87,20,12,20s-1.71-0.15-2.5-0.41l-0.69-1.49L9.45,17h5.11l0.64,1.11 L14.5,19.59z M14.27,15H9.73l-1.35-4.02L12,8.44l3.63,2.54L14.27,15z M18.06,17.21l-1.14-0.1l-0.79-1.37l1.46-4.34l1.39-0.47 l1,0.73C19.99,11.77,20,11.88,20,12C20,13.99,19.27,15.81,18.06,17.21z"
                  />
                </g>
              </g>
            </svg>
          </q-btn>
          <p class="q-text">Voetbal</p>
        </div>
        <div class="q-grid__item">
          <q-btn round :key="`btn_size_dense_round_${'xl'}`">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
              class="q-button__icon"
            >
              <g><rect fill="none" height="24" width="24" /></g>
              <g>
                <g>
                  <g>
                    <path
                      d="M17.09,11h4.86c-0.16-1.61-0.71-3.11-1.54-4.4C18.68,7.43,17.42,9.05,17.09,11z"
                    />
                  </g>
                  <g>
                    <path
                      d="M6.91,11C6.58,9.05,5.32,7.43,3.59,6.6C2.76,7.89,2.21,9.39,2.05,11H6.91z"
                    />
                  </g>
                  <g>
                    <path
                      d="M15.07,11c0.32-2.59,1.88-4.79,4.06-6c-1.6-1.63-3.74-2.71-6.13-2.95V11H15.07z"
                    />
                  </g>
                  <g>
                    <path
                      d="M8.93,11H11V2.05C8.61,2.29,6.46,3.37,4.87,5C7.05,6.21,8.61,8.41,8.93,11z"
                    />
                  </g>
                  <g>
                    <path
                      d="M15.07,13H13v8.95c2.39-0.24,4.54-1.32,6.13-2.95C16.95,17.79,15.39,15.59,15.07,13z"
                    />
                  </g>
                  <g>
                    <path
                      d="M3.59,17.4c1.72-0.83,2.99-2.46,3.32-4.4H2.05C2.21,14.61,2.76,16.11,3.59,17.4z"
                    />
                  </g>
                  <g>
                    <path
                      d="M17.09,13c0.33,1.95,1.59,3.57,3.32,4.4c0.83-1.29,1.38-2.79,1.54-4.4H17.09z"
                    />
                  </g>
                  <g>
                    <path
                      d="M8.93,13c-0.32,2.59-1.88,4.79-4.06,6c1.6,1.63,3.74,2.71,6.13,2.95V13H8.93z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </q-btn>
          <p class="q-text">Basketball</p>
        </div>
        <div class="q-grid__item">
          <q-btn round :key="`btn_size_dense_round_${'xl'}`">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
              class="q-button__icon"
            >
              <g><rect fill="none" height="24" width="24" /></g>
              <g>
                <path
                  d="M19.52,2.49c-2.34-2.34-6.62-1.87-9.55,1.06c-1.6,1.6-2.52,3.87-2.54,5.46c-0.02,1.58,0.26,3.89-1.35,5.5l-4.24,4.24 l1.42,1.42l4.24-4.24c1.61-1.61,3.92-1.33,5.5-1.35s3.86-0.94,5.46-2.54C21.38,9.11,21.86,4.83,19.52,2.49z M10.32,11.68 c-1.53-1.53-1.05-4.61,1.06-6.72s5.18-2.59,6.72-1.06c1.53,1.53,1.05,4.61-1.06,6.72S11.86,13.21,10.32,11.68z"
                />
                <path
                  d="M18,17c0.53,0,1.04,0.21,1.41,0.59c0.78,0.78,0.78,2.05,0,2.83C19.04,20.79,18.53,21,18,21s-1.04-0.21-1.41-0.59 c-0.78-0.78-0.78-2.05,0-2.83C16.96,17.21,17.47,17,18,17 M18,15c-1.02,0-2.05,0.39-2.83,1.17c-1.56,1.56-1.56,4.09,0,5.66 C15.95,22.61,16.98,23,18,23s2.05-0.39,2.83-1.17c1.56-1.56,1.56-4.09,0-5.66C20.05,15.39,19.02,15,18,15L18,15z"
                />
              </g>
            </svg>
          </q-btn>
          <p class="q-text">Tennis</p>
        </div>
        <div class="q-grid__item">
          <q-btn round :key="`btn_size_dense_round_${'xl'}`">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
              class="q-button__icon"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </q-btn>
          <!-- <p>Add</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router/index.js'

export default {
  setup() {
    return {}
  },
  methods: {
    start() {
      router.push({ name: 'start' })
    },
  },
}
</script>

<style lang="scss" scoped>
// Fonts
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

// CSS Variables

// Universal

// Classes

.q-btn {
  background: #0d0d0d;
  border: 1px solid #333333;
  font-size: 1.6rem;
  box-shadow: 0px 3px 6px 0px rgb(0 0 0 / 16%);
}

.q-btn:focus {
  background: #f9f9f9;
}

.q-btn:focus .q-button__icon {
  fill: #0d0d0d;
}

.q-body {
  // margin-top: 3.125rem;
}

.q-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1.4rem;
  width: fit-content;
  margin: 3rem auto;
}

.q-grid__item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.q-titel {
  color: #f9f9f9;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;
  margin-top: 2rem;
}

.q-button__icon {
  height: 40px;
  width: 40px;
  fill: #f9f9f9;
}

.q-text {
  padding-top: 1rem;
  color: #f9f9f9;
  text-align: center;
  font-size: 1rem;
  font-family: 'Open sans', sans-serif;
}

@media screen and (min-width: 360px) {
  .q-btn {
    font-size: 1.8rem;
  }

  .q-button__icon {
    height: 44px;
    width: 44px;
  }
}
</style>
