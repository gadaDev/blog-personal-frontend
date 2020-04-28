<template>
  <div class="header">
    <div class="top-header">
      <!-- logo -->
      <router-link class="logo" :class="triggerLogo" to="/chat">
        <img src="../../assets/icons/icon.svg" alt="logo" />
      </router-link>
      <!-- icon search hide -->

      <!-- input search -->
      <div class="form-input" :style="styleInput" :class="triggerInput">
        <div class="back-button">
          <button>
            <img src="../../assets/icons/back.svg" alt />
          </button>
        </div>
        <!-- search form and button-submit -->
        <form action="#" method="get">
          <div class="wrapper-input">
            <input type="text" @click="clickInput" id="input-search" placeholder="Search" />
          </div>
          <div class="submit-button">
            <button type="submit">
              <img src="../../assets/icons/search.svg" alt="icon-chat" />
            </button>
          </div>
        </form>
        <!-- dropdown -->
        <div v-if="formActive" class="form-input-dropdown"></div>
      </div>
      <!-- end form input -->

      <!-- control -->
      <control :class="triggerControl"></control>
    </div>
  </div>
</template>

<script>
import control from "./header.control.vue";
export default {
  components: {
    control
  },
  data: () => {
    return {
      formActive: false,
      userActive: true,
      triggerControl: "EnableElement",
      styleIconSearchHide: {},
      styleInput: {},
      triggerLogo: "EnableELement"
    };
  },
  computed: {},
  methods: {
    clickInput: function() {},
    handleIconSearchHeader: function() {
      this.triggerLogo = "DisableElement";
      this.triggerControl = "DisableElement";
      this.styleInput = {
        display: "flex"
      };
      this.styleIconSearchHide = {
        display: "none"
      };
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  border-bottom: 1px solid rgba(187, 186, 186, 0.767);
  padding-bottom: 15px;
  height: 70px;
}
.top-header {
  width: 90%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-left: auto;
}
/* form input */
.form-input {
  width: 30vw;
  display: flex;
  align-items: center;
}
.form-input form {
  width: 100%;
  display: flex;
  align-items: center;
  height: 60%;
}
.wrapper-input {
  width: 90%;
  border: 1px solid rgba(51, 49, 49, 0.192);
  border-radius: 2px;
  height: 100%;
  display: flex;
  align-items: center;
}
#input-search {
  width: 80%;
  font-size: 1.3rem;
  height: 80%;
  border-radius: 2px;
  border: 0;
  outline: 0;
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.795);
}
.submit-button {
  height: 100%;
  border: 1px solid rgba(51, 49, 49, 0.192);
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  cursor: pointer;
}
.submit-button:active {
  transform: scale(1.1);
}
.form-input form button {
  background-color: white;
  height: 50%;
  border: 0;
  outline: none;
}
.form-input form button svg {
  outline: none;
}
.back-button {
  display: none;
}

.EnableElement {
  display: flex;
}
.DisableElement {
  display: none;
}

/* responsive */

@media only screen and (max-width: 850px) {
  .top-header {
    width: 100%;
    height: 100%;
  }
  .form-input {
    display: none;
    width: 100%;
    height: 100%;
  }
  /* end */
  .EnableElement {
    display: flex;
  }
  .icon-search-header {
    display: flex;
  }
}
</style>