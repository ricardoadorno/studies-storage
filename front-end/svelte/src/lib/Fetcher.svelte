<script>

import { onMount } from 'svelte';

  let data = [];


onMount(
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    data = json;
    }
);


</script>

<div>
    <h1>Fetch</h1>
    <ul>
        {#each data as item}
        <li>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
        </li>
        {/each}
    </ul>


</div>

