<script>
    import {todos, saveStorage} from '~/store';
    import shortid from 'shortid'

    let title = ''

    function createTodo() {
        if(!title || !title.trim()) return
        
        $todos.unshift({
            id: shortid.generate(),
            title
        })
        $todos = $todos
        saveStorage()

        title = ''
        console.log($todos)
    };
</script>

<div class="bidtitle">
    <h1>TodoList</h1>
</div>
<div class="create-todo" id="create-todo">
    <input 
    bind:value={title} 
    type="text"
    class="form-control"
    on:keyup={e => {
        if(e.key === 'Enter') createTodo()
    }} />
    <button
    class="btn btn-primary"
    on:click={createTodo}>
        Create Todo
    </button>
</div>

<style lang="scss">
    .bidtitle{
        display: flex;
        align-items: center;
        justify-content: center;
        h1{
            font-size: 50px;
            
        }
    }
    .create-todo {
        display: flex;
        margin-top: 50px;
        .btn {
            width: 130px;
            height: 50px;
            font-weight: 700;
            margin-left: 10px;
            flex-shrink: 0;
        }
    }
</style>