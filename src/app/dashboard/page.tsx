import Link from "next/link";

export default function DashboardPage() {
    return (
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
    );
}