const baseUrl = 'http://localhost:8080/todos'

export const loadTodos = () => {
  return fetch(baseUrl)
    .then(response => response.json())
}

export const createTodo = (todo) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  }).then(res => res.json())

}