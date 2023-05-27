<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();


    async function createNewPage(){
        const FormNewPage = (await (import ('../../../../features/Form-new-page/Form-new-page.svelte'))).default;

        dispatch('action', FormNewPage);
    }
</script>

<button class="button button--nav" on:click={ createNewPage }> <span>+</span> Nueva página </button>


<style>

    button {
        display: flex;
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;
    
        background-color: var(--primary-bg-color);
        border-radius: 50%;
        width: 1rem;
        height: 1rem;

        margin-right: 0.5rem;
    }
</style>

