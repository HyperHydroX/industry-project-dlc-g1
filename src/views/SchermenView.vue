<template>
  <div class="q-start">
    <div class="q-body">
      <h1 class="q-titel">Scherm tekstweergave</h1>
      <div class="js-tekstveld-scherm">
        <q-input
          class="q-input js-scherm-tekst"
          @click="recentTekst"
          v-model="text"
          filled
          type="textarea"
          label="Deze tekst is komt terecht op het scorebord"
        />
      </div>
      <q-btn class="q-btn" label="Verzenden" @click="setTekst(text)" />
      <div class="q-container">
        <h1 class="q-titel">Scherm weergave</h1>
          <q-btn-dropdown class="q-select" color="primary" label="Dropdown Button">
            <q-list>
              <q-item clickable v-close-popup @click="setScherm('scoreboard')" class="js-scherm" >
                <q-item-section>
                  <q-item-label>Scoreboard</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="setScherm('sponsers')" class="js-scherm" scherm="sponsers" data-team="sponsers">
                <q-item-section>
                  <q-item-label>Sponsers</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="setScherm('zwart scherm')" class="js-scherm" data-team="zwart scherm">
                <q-item-section>
                  <q-item-label>Zwart scherm</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        <!-- <q-select
          label-color="secondary"
          class="q-select js-scherm"
          filled
          v-model="model"
          :options="options"
          label="Scherm weergave"
        /> -->
      </div>

      <div class="q-pa-md">
        <div class="q-gutter-sm row items-start">
          <q-uploader
            :url="fileUploader"
            label="Individual upload"
            multiple
            style="max-width: 300px"
          />
        </div>
      </div>
      <!-- <div class="q-container">
        <h1 class="q-titel">Upload sponsors</h1>
        <q-uploader label="Custom header" multiple class="q-uploader">
          <template v-slot:header="scope">
            <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
              <q-btn
                v-if="scope.queuedFiles.length > 0"
                icon="clear_all"
                @click="scope.removeQueuedFiles"
                round
                dense
                flat
                class="q-btn__uploader"
              >
                <q-tooltip>Clear All</q-tooltip>
              </q-btn>
              <q-btn
                v-if="scope.uploadedFiles.length > 0"
                icon="done_all"
                @click="scope.removeUploadedFiles"
                round
                dense
                flat
                class="q-btn__uploader"
              >
                <q-tooltip>Remove Uploaded Files</q-tooltip>
              </q-btn>
              <q-spinner v-if="scope.isUploading" class="q-uploader__spinner" />
              <div class="col">
                <div class="q-uploader__title">Upload your files</div>
                <div class="q-uploader__subtitle">
                  {{ scope.uploadSizeLabel }} / {{ scope.uploadProgressLabel }}
                </div>
              </div>
              <q-btn
                v-if="scope.canAddFiles"
                type="a"
                icon="add_box"
                @click="scope.pickFiles"
                round
                dense
                flat
                class="q-btn__uploader"
              >
                <q-uploader-add-trigger />
                <q-tooltip>Pick Files</q-tooltip>
              </q-btn>
              <q-btn
                v-if="scope.canUpload"
                icon="cloud_upload"
                @click="upload"
                round
                dense
                flat
                class="q-btn__uploader"
              >
                <q-tooltip>Upload Files</q-tooltip>
              </q-btn>
              <q-btn
                v-if="scope.isUploading"
                icon="clear"
                @click="scope.abort"
                round
                dense
                flat
                class="q-btn__uploader"
              >
                <q-tooltip>Abort Upload</q-tooltip>
              </q-btn>
            </div>
          </template>
        </q-uploader>
      </div> -->
    </div>
  </div>
</template>

<script>
//updateScherm
import { ref } from 'vue'
import { useQuasar } from 'quasar'
// import { getStorage, ref } from "firebase/storage";
// const storage = getStorage();
import { uploadFile } from '../firebase/firebase'
import { updateTekstFirebase } from "../firebase/firebase2"
import { updateScherm, updateTekst } from '../scoreboard/scoreboard'

export default {
  name: 'SchermenView',
  methods: {
    verzendenTekst() {
      var myHeaders = new Headers()
      myHeaders.append('apikey', 'MDcPUplgUhlPp23cHJmBLSHhklEAArya')

      var raw = this.text

      var requestOptions = {
        method: 'POST',
        redirect: 'follow',
        headers: myHeaders,
        body: raw,
      }

      fetch(
        'https://api.apilayer.com/bad_words?censor_character={censor_character}',
        requestOptions,
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error))
    },
    async fileUploader(e) {
      await uploadFile(e[0])
      return
    },
    setScherm(scherm) {
      updateScherm(scherm)
    },
    setTekst(text) {
      updateTekstFirebase((" "+text))
    },
    recentTekst(){
      console.log(localStorage.getItem("recentbericht"))
      let tekst = localStorage.getItem("recentbericht")
      if (tekst != "") {
        document.querySelector(".q-field__native").innerHTML = tekst
        localStorage.setItem("recentbericht", "")
        updateTekst(" "+tekst)
      }
    }
  },
  setup() {
    const $q = useQuasar()

    function onRejected(rejectedEntries) {
      $q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) mogen niet dezelfde zijn.`,
      })
    }
    return {
      text: ref(''),
      model: ref(null),
      options: ['Scoreboard', 'Sponsers', 'Zwart scherm'],
      onRejected,
    }
  },
}
</script>

<style lang="scss" scoped>
// Fonts
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

// CSS Variables

// Universal
h1 {
  line-height: 2;
}

// Classes
.q-btn {
  height: 3rem;
  margin: 1.5rem auto;
  width: 70%;
  display: flex;
  border-radius: 0;
  background: rgba(20, 126, 109, 0.6);
  color: #f9f9f9;
  text-transform: capitalize;
  font-size: 1rem;
  font-family: 'Raleway', sans-serif;
}

.q-btn__uploader {
  height: 0;
  margin: auto;
  width: fit-content;
  border-radius: 0;
  background: none;
  color: #f9f9f9;
}

.q-titel {
  color: #f9f9f9;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1;
}

.q-input {
  font-size: 1em;
  background-color: #f9f9f9;
  color: #f9f9f9;
  width: 100%;
  font-family: 'Rajdhani', sans-serif;
}

.q-uploader {
  border-radius: 0;
  width: 100%;
  margin-top: 1rem;
  background: rgba(20, 126, 109, 0.6);
}
.q-select {
  margin: 1rem auto;
  border-radius: 0;
  background: rgba(20, 126, 109, 0.6);
  width: 70%;
  display: flex;
  color: #f9f9f9;
  text-transform: capitalize;
  font-size: 1rem;
  font-family: 'Raleway', sans-serif;
}

.q-start {
  margin: 0 auto;
  max-width: 28.125em;
  padding: 0 2.5em;
}

.q-body {
  // margin-top: 3.125rem;
}

.q-container {
  margin-top: 2rem;
}
</style>
