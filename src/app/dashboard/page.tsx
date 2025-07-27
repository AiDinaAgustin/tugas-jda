import Link from "next/link";
import { requireAuth } from "@/lib/auth";
import AuthStatus from "@/components/auth/AuthStatus";

export default async function DashboardPage() {
    const session = await requireAuth();

    return (
        <>
            <div className="flex flex-col h-full w-full items-center justify-center gap-4">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <div className="flex items-center justify-center gap-4">
                    <Link href="/dashboard/product" className="text-blue-500 hover:underline">
                        Product Page
                    </Link>
                    <Link href="/dashboard/todo" className="text-blue-500 hover:underline">
                        Todo App
                    </Link>
                </div>
            </div>
            <div className="p-4">
                <AuthStatus/>
                <h1 className="text-2xl font-bold mt-4">Dashboard</h1>
                <p>Welcome to your protected dashboard!</p>
                <pre className="mt-4 p-4 bg-gray-100 rounded">
                            {JSON.stringify(session, null, 2)}
                        </pre>
            </div>
        </>
    )
}