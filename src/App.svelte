<script lang="ts">
    import Header from "./shared/Header/Header.svelte";
    import Sidebar from "./shared/Sidebar/Sidebar.svelte";
let component
</script>

<main>
  <Header />
  <Sidebar on:action={(event) => component = event.detail}/>
  <svelte:component this={component} on:destroy={(event) => component = event.detail}/>
</main>