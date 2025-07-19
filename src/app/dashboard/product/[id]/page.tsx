"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProductDetailPage() {
    const params = useParams();
    const id = params.id;

    if (!id) {
        return (
            <div className="flex flex-col h-full w-full items-center justify-center">
                <h1 className="text-2xl font-bold">Product ID not found</h1>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full w-full items-center justify-center">
            <h1 className="text-2xl font-bold">Product Detail Page</h1>
            <p className="mt-4">Product ID: {id}</p>
            <Link
                href="dashboard/product"
                className="mt-4 text-blue-500 hover:underline"
            >
                Back to Product Page
            </Link>
        </div>
    );
}