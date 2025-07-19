// src/app/dashboard/product/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Product } from "@/app/api/products/route";

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: 0, description: "" });
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const fetchProducts = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
    setNewProduct({ name: "", price: 0, description: "" });
    fetchProducts();
  };

  const handleDeleteProduct = async (id: string) => {
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    fetchProducts();
  };

  const handleUpdateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;
    await fetch(`/api/products/${editingProduct.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingProduct),
    });
    setEditingProduct(null);
    fetchProducts();
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Products Management</h1>

      {/* Add Product Form */}
      <form onSubmit={handleAddProduct} className="mb-6">
        <input
          type="text"
          placeholder="Product name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({...newProduct, price: parseFloat(e.target.value)})}
          required
        />
        <textarea
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
        />
        <button type="submit">Add Product</button>
      </form>

      {/* Edit Form */}
      {editingProduct && (
        <form onSubmit={handleUpdateProduct} className="mb-6">
          <input
            type="text"
            value={editingProduct.name}
            onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})}
            required
          />
          <input
            type="number"
            value={editingProduct.price}
            onChange={(e) => setEditingProduct({...editingProduct, price: parseFloat(e.target.value)})}
            required
          />
          <textarea
            value={editingProduct.description || ""}
            onChange={(e) => setEditingProduct({...editingProduct, description: e.target.value})}
          />
          <button type="submit">Update</button>
          <button type="button" onClick={() => setEditingProduct(null)}>Cancel</button>
        </form>
      )}

      {/* Products List */}
      <div>
        <h2>Products List</h2>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <p>{product.description}</p>
            <button onClick={() => setEditingProduct(product)}>Edit</button>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}