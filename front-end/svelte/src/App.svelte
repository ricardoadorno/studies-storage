<script>

  let name = ''
  let email = ''
  let password = ''

  let users = []

  const fetcher = async (url) => {
    const response = await fetch(url);
    users = await response.json();  
  }

  const register = async (url, data) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        name: data.name,
        email: data.email,
        password: data.password
      }
    });
    users = await response.json();
    console.log(users);
  }

  function clear() {
    users = []
  }

</script>

<main>


<h1>Fetch server</h1>


  <button on:click={() => fetcher('http://127.0.0.1:8000/user')}>Fetch</button>  
  {#each users as user}
    <p>{user.name}</p>    
  {/each}
  <button on:click={() => clear()}>Clear</button>

  <form class="form-group"
    on:submit|preventDefault={() => register('http://localhost:8000/user', {name, email, password})}>
    <label for="name">Name</label>
    <input type="text" class="form-control" bind:value={name} placeholder="Enter name" 
    >

    <label for="email">Email</label>
    <input type="text" class="form-control" bind:value={email} placeholder="Enter email">

    <label for="password">Password</label>
    <input type="text" class="form-control" bind:value={password} placeholder="Enter password">

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    
</main>


