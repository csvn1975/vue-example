<template>
  <div>
    <center>{{ title }}</center>

    <div class="wrapper">
      <h3 id="example-2">Upload files mit axios</h3>
      <UploadImages
        :max="5"
        :maxError="maxError"
        :uploadMsg="uploadMsg"
        :fileError="fileError"
        :clearAll="clearAll"
        @change="handleImages"
      >
      </UploadImages>

      <button style="margin-right: 20px" @click="sendFile()">Senden</button>

      <el-alert
        title="Upload files"
        :type="typeMessage"
        v-if="message != ''"
        effect="dark"
      >
        {{ message }}
      </el-alert>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import UploadImages from 'vue-upload-drop-images';
export default {
  name: 'UploadMultiFiles',

  data: () => ({
    title: 'Upload Files',
    files: [],

    message: '',
    typeMessage: 'success',

    maxError: 'Es dürfen maximal 5 Files upload.',
    uploadMsg: 'Hier klicken, um die Dateien zu hochladen',
    fileError: 'Dateien konnten nicht holaden, Bitte Prüfen Sie noch einmal.',
    clearAll: 'alle entfernen',
  }),

  methods: {
    handleImages(files) {
      this.message = '';
      this.files = files;
    },

    sendFile() {
      let formData = new FormData();
      let len = this.files.length;

      if (len < 1) {
        this.typeMessage = 'error';
        this.message = 'Bitte wählen Sie eine Datei aus';
        return;
      }

      for (var i = 0; i < len; i++) {
        let file = this.files[i];
        formData.append('files[' + i + ']', file);
      }

      axios
        .post('http://localhost:8081/api_multi.php', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(() => {

          this.message = len == 1 ? 'Die Datei wurde erfolgreich hochgeladen' : 'Die Dateien wurden erfolgreich hochgeladen' ;
          this.typeMessage = 'success';
        })
        .catch((err) => {
          this.typeMessage = 'error';
          this.message = err.message;
        });
    },
  },

  components: {
    UploadImages,
  },
};
</script>
<style src="@vueform/slider/themes/default.css"></style>
<style scoped>
button {
  padding: 8px 16px;
  color: white;
  margin-top: 5px;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: coral;
}
</style>
