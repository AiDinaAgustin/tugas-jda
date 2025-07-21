'use client';

import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';
import Link from 'next/link';

export default function TodoPage() {
  return (
    <div className="max-w-lg mx-auto my-8 p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-black">Todo App</h1>
      <TodoForm />
      <TodoList />
      <div className="mt-8">
        <Link href="/dashboard" className="text-blue-500 hover:underline">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}