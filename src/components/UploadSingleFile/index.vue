<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <center>
        <h3 class="mb">Vue JS Axios - Image Upload using PHP API</h3>
        <div class="wrapper">
          <input
            type="file"
            name="file"
            @change="onChangeFileUpload()"
            ref="inputfile"
            id="file"
            class="inputfile"
          />
          <label for="file" ref="filename">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="17"
              viewBox="0 0 20 17"
            >
              <path
                d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"
              />
            </svg>
            <span> {{ loadInfo }}</span>
          </label>
          <p><img :src="src" width="200" /></p>
          <button v-on:click="submitForm()">Upload</button>
          <span class="message"> {{ message }} </span>
        </div>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UploadSingleFile',
  data() {
    return {
      file: '',
      message:'',
      loadInfo: 'Choose a file ...',
      src : '',
    };
  },

  methods: {

    fileExists(url)
    {
        var http = new XMLHttpRequest();
        http.open('POST', url, false);
        http.send();
    },

    submitForm() {
      let formData = new FormData();
      formData.append('file', this.file);

      this.fileExists('/api.php');
      return "ok";

      
    },

    onChangeFileUpload() {
      this.file = this.$refs.inputfile.files[0];
      this.message = '';

      if (this.file) {
				this.src = URL.createObjectURL(this.file);
        this.loadInfo = this.file['name'] || 'Choose a file ...';
			}
    }
  },
};
</script>
<style lang="scss" scoped>
.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  + label {
    max-width: 80%;
    font-size: 1.25rem;
    border-radius: 5px;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    padding: 0.625rem 1.25rem;

    color: #f1e5e6;
    background-color: #d3394c;

    svg {
      width: 1em;
      height: 1em;
      vertical-align: middle;
      fill: currentColor;
      margin-top: -0.25em;
      margin-right: 0.25em;
    }
  }

  :focus + label,
  .has-focus + label,
  + label:hover {
    background-color: #722040;
  }

  :focus + label,
  .has-focus + label {
    outline: 1px dotted #000;
    outline: -webkit-focus-ring-color auto 5px;
  }
}

button {
  padding: 8px 24px;
  background-color: coral;
  font-size: 16px;
  color: #a1a1a1;
  cursor: pointer;
}

.mb {
  margin-bottom: 20px;
}

.message {
  display: block;
  margin-top: 10px;
  font-size: 16px;
}

p {
  font-size: 12px;
  color: red;
}
</style>
