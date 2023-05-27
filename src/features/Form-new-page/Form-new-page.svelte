<script lang="ts">
  import List from '../../shared/List/List.svelte';

   import { createEventDispatcher } from "svelte";
   
   const dispatch = createEventDispatcher();

   const destroyItself = () => {
        dispatch('destroy', false);
   }

   const list = ['Página vacía']
</script>


<section>
     <div class="modal"> 
        <button class="button button--x" on:click={destroyItself}> x </button>
        <List list={list}></List>

    </div>
</section>


<style>

    section {
        position: absolute;
        inset: 0;
        background: rgb(0,0,0,35%);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    div {
        background: white;
        padding: 2rem;
    }

    .modal {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .button--x {
        margin-left: auto;
    }

</style>