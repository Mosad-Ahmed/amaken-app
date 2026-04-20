'use client'

import { useState } from 'react'

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState(null)

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574]/20 via-transparent to-[#C9A961]/20"></div>
        
        <div className="relative z-10 text-center px-4">
          <div className="mb-8">
            <div className="inline-block p-6 rounded-3xl bg-gradient-to-br from-[#D4A574] to-[#C9A961] mb-6">
              <svg className="w-16 h-16 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-l from-[#D4A574] to-[#C9A961] bg-clip-text text-transparent">
            شركة أماكن
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto">
            احجز لوكيشن تصوير احترافي بالساعة
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto">
            اكتشف أفضل لوكيشنز التصوير في مصر. شوف المكان 360° قبل ما تروح
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-l from-[#D4A574] to-[#C9A961] text-black font-bold rounded-2xl text-lg hover:scale-105 transition-transform shadow-lg shadow-[#D4A574]/30">
              تصفح اللوكيشنز
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 font-bold rounded-2xl text-lg hover:bg-white/20 transition-all">
              إزاي نحجز؟
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#D4A574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-l from-[#D4A574] to-[#C9A961] bg-clip-text text-transparent">
            ليه تختار أماكن؟
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎥', title: 'معاينة 360°', desc: 'شوف اللوكيشن بالكامل قبل الحجز' },
              { icon: '⚡', title: 'حجز فوري', desc: 'احجز بالساعة والدفع أونلاين' },
              { icon: '📍', title: 'أماكن متنوعة', desc: 'استوديوهات، فيلل، كافيهات، وأماكن خارجية' },
              { icon: '💰', title: 'أسعار واضحة', desc: 'السعر بالساعة بدون مصاريف خفية' },
              { icon: '🎨', title: 'معدات متاحة', desc: 'إضاءة وكاميرات للإيجار في بعض الأماكن' },
              { icon: '⭐', title: 'تقييمات حقيقية', desc: 'شوف تجارب مصورين قبلك' },
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:border-[#D4A574]/50 transition-all hover:scale-105">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-[#D4A574]">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-[#D4A574]/20 to-[#C9A961]/20 backdrop-blur-lg border border-[#D4A574]/30">
          <h2 className="text-4xl font-bold mb-6">جاهز تبدأ تصور؟</h2>
          <p className="text-xl text-gray-300 mb-8">انضم لآلاف المصورين اللي بيثقوا في أماكن</p>
          <button className="px-10 py-5 bg-gradient-to-l from-[#D4A574] to-[#C9A961] text-black font-bold rounded-2xl text-xl hover:scale-105 transition-transform shadow-lg shadow-[#D4A574]/30">
            ابدأ التصفح الآن
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p className="mb-2">© 2026 شركة أماكن - جميع الحقوق محفوظة</p>
          <p>صُنع بحب للمصورين في مصر 🇪🇬</p>
        </div>
      </footer>
    </div>
  )
}
