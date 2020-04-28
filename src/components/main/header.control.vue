<template>
  <div class="control">
    <div class="control-left">
      <div class="icon-search-header" :style="styleIconSearchHide" @click="handleIconSearchHeader">
        <img src="../../assets/icons/search-res.svg" alt="icon-search-hide" />
      </div>
      <div class="control-left-item book">
        <router-link to="/book">
          <img src="../../assets/icons/book.svg" alt="icon-book" />
        </router-link>
      </div>
      <div class="control-left-item chat">
        <router-link to="/chat">
          <img src="../../assets/icons/chat.svg" alt="icon-chat" />
        </router-link>
      </div>
      <div class="control-left-item auth">
        <router-link to="/auth">
          <img src="../../assets/icons/notification.svg" alt="icon-chat" />
        </router-link>
      </div>
    </div>

    <div class="wrap-user control-right">
      <div v-if="!userActive" class="user signin">
        <router-link class="redirect-auth" to="/auth">
          <img src="../../assets/icons/signin.svg" alt />
          <h3>SIGN IN</h3>
        </router-link>
      </div>
      <div v-else class="user logon">logon</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.control {
  width: 400px;
  right: 0;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.control-left {
  display: flex;

  width: 40%;
  justify-content: space-between;
}

.control-right {
  display: flex;

  width: 40%;
  justify-content: center;
  align-items: center;
}
.signin {
  width: 85%;
}
.signin a {
  display: flex;
  border: 1px solid rgba(59, 58, 58, 0.603);
  width: 100%;
  height: 45px;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  padding: 3px;
}
.icon-search-header {
  display: none;
}

@media only screen and (max-width: 850px) {
  .icon-search-header {
    display: flex;
  }
}
</style>
