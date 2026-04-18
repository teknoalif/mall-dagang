"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ChevronLeft, MapPin, MessageCircle, CheckCircle } from 'lucide-react';
import { PRODUCTS } from '../../../constants';

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  
  // Cari data produk berdasarkan ID dari URL
  const product = PRODUCTS.find((p) => p.id === Number(params.id));

  if (!product) return <div className="p-10 text-center">Produk tidak ditemukan...</div>;

  return (
    <div className="bg-madinah-light min-h-screen pb-20 font-sans text-black">
      {/* Header / Navigasi */}
<div className="bg-white p-2 border-b flex items-center sticky top-0 z-[100] shadow-sm">
  <button 
    onClick={() => router.push('/')} // Menggunakan push ke root agar lebih pasti daripada back()
    className="p-4 active:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
    aria-label="Kembali ke menu utama"
  >
    <ChevronLeft size={32} strokeWidth={2.5} className="text-black" />
  </button>
  <h1 className="font-black uppercase text-sm tracking-tighter ml-2">Detail Produk</h1>
</div>

      <div className="max-w-4xl mx-auto mt-6 px-4">
        {/* --- HORIZONTAL SLIDER --- */}
        <div className="flex overflow-x-auto gap-4 snap-x no-scrollbar pb-4">
          {product.images ? (
            product.images.map((img, index) => (
              <div key={index} className="min-w-[85%] md:min-w-[60%] snap-center">
                <img 
                  src={img} 
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-64 md:h-96 object-cover rounded-3xl border-2 border-black shadow-lg"
                />
              </div>
            ))
          ) : (
            <img src={product.image} className="w-full h-64 object-cover rounded-3xl border-2 border-black" />
          )}
        </div>

        {/* --- RINCIAN PRODUK --- */}
        <div className="bg-white rounded-3xl p-6 mt-6 border-2 border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-black text-white px-3 py-1 rounded text-[10px] font-black uppercase">
              {product.condition}
            </span>
            {product.isVerified && (
              <span className="text-[10px] font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 uppercase flex items-center gap-1">
                <CheckCircle size={12} /> Amanah
              </span>
            )}
          </div>

          <h2 className="text-2xl font-black uppercase leading-tight mb-2">{product.name}</h2>
          <p className="text-2xl font-black text-brand-gold mb-4">Rp {product.price}</p>
          
          <div className="flex items-center text-gray-600 text-sm font-bold mb-6">
            <MapPin size={18} className="mr-2 text-madinah-gold" /> {product.location}
          </div>

          {/* Deskripsi / Rincian dari User */}
          <div className="border-t pt-6">
            <h3 className="font-black uppercase text-sm mb-4 tracking-widest text-gray-400">Rincian Unit:</h3>
            <div className="whitespace-pre-line text-lg leading-relaxed font-medium">
              {product.description || "Hubungi penjual untuk rincian lebih lanjut."}
            </div>
          </div>

          {/* Tombol Kontak */}
          <div className="mt-10">
            <a 
              href={`https://wa.me/${product.whatsapp || '6285256162879'}?text=Assalamu'alaikum, saya tertarik dengan unit ${product.name}`}
              target="_blank"
              className="flex items-center justify-center gap-3 bg-black text-white py-5 rounded-2xl font-black text-lg hover:bg-gray-800 transition shadow-xl"
            >
              <MessageCircle size={24} /> HUBUNGI PENJUAL SEKARANG
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
