"use client";
import React, { useState } from 'react';
import { Search, MapPin, MessageCircle, CheckCircle, Plus } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../constants';

export default function MallDagangMadinah() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = activeTab === "Semua" || product.category === activeTab;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-madinah-light min-h-screen pb-24 font-sans text-black">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-white border-b border-gray-200 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-black mb-2 tracking-tighter uppercase italic">
            MALL DAGANG
          </h1>
          <p className="text-gray-600 font-bold mb-8 text-lg">
            Marketplace Komunitas Berkah & Amanah
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Cari barang apa saja..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-5 px-8 rounded-2xl focus:outline-none text-black text-lg border-2 border-black transition-all bg-white"
            />
            <button className="absolute right-3 top-3 bg-black p-3.5 rounded-xl text-white hover:bg-gray-800 transition shadow-lg">
              <Search size={24} strokeWidth={3} />
            </button>
          </div>
        </div>
      </section>

      {/* --- CATEGORY TABS --- */}
      <div className="max-w-6xl mx-auto px-4 mt-10">
        <div className="flex overflow-x-auto gap-3 pb-4 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-3 rounded-xl whitespace-nowrap font-black text-sm uppercase tracking-widest transition-all border-2 ${
                activeTab === cat 
                ? "bg-black text-white border-black shadow-lg" 
                : "bg-white text-black border-gray-200 hover:border-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- PRODUCT GRID --- */}
      <main className="max-w-6xl mx-auto px-4 mt-8">
        <h2 className="text-3xl font-black text-black mb-8 border-l-8 border-madinah-gold pl-4 uppercase tracking-tighter">
          {activeTab}
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-black transition-all duration-300 flex flex-col">
              
              <div className="relative h-48 bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-black text-white text-[10px] font-black uppercase rounded">
                  {item.condition}
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  {item.isVerified && (
                    <span className="text-[10px] font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 uppercase">Amanah</span>
                  )}
                  <span className="text-[10px] text-gray-500 font-bold uppercase">{item.category}</span>
                </div>

                <h3 className="font-bold text-black text-base line-clamp-2 mb-4 leading-tight uppercase group-hover:text-gray-700 transition">
                  {item.name}
                </h3>

                <div className="mt-auto">
                  <p className="text-black font-black text-xl mb-1">Rp {item.price}</p>
                  <div className="flex items-center text-gray-600 text-[11px] font-bold mb-5">
                    <MapPin size={14} className="mr-1" /> {item.location}
                  </div>

                  <a 
                    href={item.link ? item.link : `https://wa.me/${item.whatsapp || '6285256162879'}?text=Assalamu'alaikum, saya tertarik dengan ${item.name}`}
                    target="_blank"
                    className="flex items-center justify-center gap-2 bg-white border-2 border-black text-black py-3 rounded-xl font-black text-xs hover:bg-black hover:text-white transition-all shadow-md active:scale-95"
                  >
                    <MessageCircle size={18} /> {item.link ? "KUNJUNGI TOKO" : "HUBUNGI PENJUAL"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* --- FLOATING BUTTON --- */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center z-50 pointer-events-none">
        <a 
          href="https://wa.me/6285256162879?text=Assalamu'alaikum Kak Alif, saya mau titip jual barang di Mall Dagang"
          target="_blank"
          className="pointer-events-auto flex items-center gap-3 bg-madinah-gold text-white px-10 py-4.5 rounded-full shadow-2xl font-black text-lg transition-all hover:scale-110 border-4 border-white active:scale-95"
        >
          <Plus size={24} strokeWidth={4} /> MAU JUALAN?
        </a>
      </div>

    </div>
  );
}
