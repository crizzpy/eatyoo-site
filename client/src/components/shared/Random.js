export default function App() {
    const [state, dispatch] = useReducer(loginReducer, initialState);
    const { todos, isLoggedIn } = state;
    return (
      <div className="App useContext">
        <TodoPage todos={todos} dispatch={dispatch} isLoggedIn={isLoggedIn} />
      </div>
    );
  }
  
  function TodoPage({ todos, dispatch, isLoggedIn }) {
    return (
      <div className="todoContainer">
        <h2>Todos</h2>
        {todos.map((item) => (
          <TodoItem
            key={item.title}
            dispatch={dispatch}
            isLoggedIn={isLoggedIn}
            {...item}
          />
        ))}
      </div>
    );
  }
  
  function TodoItem({ title, completed, dispatch, isLoggedIn }) {
    const isLoggedIn = true;
    return (
      <div className="todoItem">
        <p>{title}</p>
        <div>
          <input
            type="checkbox"
            checked={completed}
            onClick={() => {
              if (!isLoggedIn) {
                alert('Please login to click this!');
              }
            }}
            onChange={() => {
              if (isLoggedIn) {
                dispatch({ type: 'toggleTodoCompleted', payload: title });
              }
            }}
          />
        </div>
      </div>
    );