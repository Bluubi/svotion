<script lang="ts">
    import { resizeCol } from "../../utils/resize";
    import NewPage from "./Actions/New-page/New-page.svelte";
    
    
</script>


<nav use:resizeCol>
    <NewPage on:action />
</nav>


<style>
    nav {
        display: flex;
        width: 13rem;
        min-width: 10rem;
        height: 100vh;
        background-color: var(--primary-bg-color);
        flex-direction: column;
    }

    nav:is(.resizing) {
        border-right: 6px solid var(--primary-highlight-bg-color);
    }
</style>