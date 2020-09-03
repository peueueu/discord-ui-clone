<template>
  <div id="grid">
    <ServerList />
  </div>
</template>

<script>
import ServerList from "../components/Server/ServerList";
export default {
  name: "defaultLayout",
  components: {
    ServerList,
  },
};
</script>

<style scoped>
#grid {
  display: grid;
  height: 100vh;
  grid-template-columns: 71px 240px auto 240px;
  grid-template-rows: 46px auto 52px;
  grid-template-areas:
    "ServerList ServerName ChannelInfo ChannelInfo"
    "ServerList ChannelList ChannelData UserList"
    "ServerList UserInfo ChannelData UserList";
}
</style>
