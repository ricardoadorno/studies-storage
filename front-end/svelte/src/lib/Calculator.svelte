
<script>
    let element1 = 0;
    let element2 = 0;
    let result = 0;

    function calculator(element1, element2, operation) {
        switch (operation) {
            case '+':
                result = element1 + element2;
                break;
            case '-':
                result = element1 - element2;
                break;
            case '*':
                result = element1 * element2;
                break;
            case '/':
                result = element1 / element2;
                break;
            default:
                result = 0;
                break;
        }  
        
        
    }
    $: element1 = result;
  

</script>

<div class="calculator">
    <div class="calculator__input">
        <input type="number" bind:value={element1}      
         />
        <input type="number" bind:value={element2} />
    </div>
    <div class="calculator__result">
        <p>Result: {result}</p>
    </div>
    <div class="calculator__buttons">
        <button on:click={() => calculator(element1, element2, '+')}>+</button>
        <button on:click={() => calculator(element1, element2, '-')}>-</button>
        <button on:click={() => calculator(element1, element2, '*')}>*</button>
        <button on:click={() => calculator(element1, element2, '/')}>/</button>
    </div>
</div>

<style>
    .calculator {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .calculator__input {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .calculator__result {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .calculator__buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
</style>