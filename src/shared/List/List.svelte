<script lang="ts">  
   export let list: string[];
</script>

        <ul>
            {#each list as  item }
                <li> { item } </li>
            {/each}
        </ul>

<style>

    ul {
        list-style: none;
        margin-top: 16px;
        flex: 1 0 100%;
    }

    li {
        padding: 0.6rem;
    }

</style>

