// src/components/TodoList.tsx
'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleTodo, removeTodo } from '@/redux/features/todos/todosSlice';

export default function TodoList() {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4 text-black">Todo List</h2>
      {todos.length === 0 ? (
        <p className="text-gray-500">No todos yet. Add some above!</p>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-3 bg-white border rounded shadow-sm"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(toggleTodo(todo.id))}
                  className="mr-3 h-5 w-5"
                />
                <span className={todo.completed ? 'line-through text-gray-500' : 'text-black'}>
                  {todo.text}
                </span>
              </div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}