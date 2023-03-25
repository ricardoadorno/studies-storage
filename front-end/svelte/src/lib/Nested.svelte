<script>
    let content = "Content";

    let isEdit = false;

    let status

    function handleEdit() {
        isEdit = !isEdit;
    }

</script>

<div
    class="card"
    style="background-color: {status};"    
>
    {#if isEdit}
        <input type="text"
        on:blur={handleEdit}
        bind:value={content} />
    {:else}
        <p 
        on:keydown={handleEdit}
         on:click={handleEdit}>{content}</p>
    {/if}

    <select bind:value={status}>
        <option value="green">Sucess</option>
        <option value="yellow">Warning</option>
        <option value="red">Danger</option>
    </select>
</div>

<style>
    p {
        border: 1px solid black;
        padding: 10px;
        margin: 10px;
    }
    input {
        border: 1px solid black;
        padding: 10px;
        margin: 10px;
    }
    .card {
        border: 1px solid black;
        padding: 2rem;
        margin: 10px;
        display: flex;
        flex-direction: row; 
    }
</style>
