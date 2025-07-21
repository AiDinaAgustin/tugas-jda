'use client';

import { useState } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { addTodo } from '@/redux/features/todos/todosSlice';

export default function TodoForm() {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="mb-6 p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-semibold mb-3 text-black">Add New Todo</h2>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow p-2 border rounded text-black"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
        >
          Add
        </button>
      </form>
    </div>
  );
}