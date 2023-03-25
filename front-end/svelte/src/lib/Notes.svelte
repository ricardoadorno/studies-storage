<script>
    let notes = [
        {
            title: 'Note 1',
            content: 'This is note 1'
        }

    ]

    let newNote = {
        done: false,
        title: '',
        content: ''

    }

    function addNote() {   
        const add = [...notes]     
        add.push(
            {
                done: newNote.done,
                title: newNote.title,
                content: newNote.content
            }
        )
        notes = add
    }

    function removeNote() {
        const del = [...notes]
        del.pop()

        notes = del
    }

    function clearNotes() {
        notes = []
    }
    
</script>

<main>
    <h1>Notes</h1>
    <input type="text" bind:value={newNote.title} />
    <input type="text" bind:value={newNote.content} />
    <button on:click={addNote}>Add note</button>
    <button on:click={removeNote}>Remove note</button>
    <button on:click={clearNotes}>Clear notes</button>
    <ul>
        {#each notes as note}
        <li  class="note_element"
        >
            <input type="checkbox" checked={note.done} on:click={
                () => {
                    const update = [...notes]
                    update[notes.indexOf(note)].done = !update[notes.indexOf(note)].done
                    notes = update
                }
            } />
            <h2>{note.title}</h2>
            <p>{note.content}</p>
        </li>
        {/each}
    </ul>
</main>

<style>
    .note_element {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

</style>