'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Float } from '@react-three/drei'
import { useState, useEffect } from 'react'
import { Sun, MapPin, Clock, Camera } from 'lucide-react'

function GoldenHourWidget() {
  const [goldenHour, setGoldenHour] = useState('4:30 - 5:15 عصراً')
  
  return (
    <div className="backdrop-blur-xl bg-gradient-gold/20 border border-golden-hour/30 rounded-2xl p-4 flex items-center gap-3 shadow-glow-gold">
      <Sun className="text-golden-hour w-6 h-6" />
      <div className="text-right">
        <p className="text-white/60 text-xs">أفضل إضاءة اليوم</p>
        <p className="text-white font-bold text-lg">{goldenHour}</p>
      </div>
    </div>
  )
}

export default function Home() {
  const [liveBooking, setLiveBooking] = useState('')
  const [selectedLoc, setSelectedLoc] = useState<any>(null)

  useEffect(() => {
    const names = ['سارة', 'محمد', 'نور', 'أحمد', 'فاطمة', 'خالد']
    const interval = setInterval(() => {
      setLiveBooking(`${names[Math.floor(Math.random() * names.length)]} حجز من ${Math.floor(Math.random() * 10) + 1} دقايق`)
      setTimeout(() => setLiveBooking(''), 4000)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const locations = [
    { 
      id: 1, 
      name: 'ليفيل لوكيشن', 
      address: 'نادي مدينة نصر - القاهرة', 
      price: 400, 
      available: true, 
      nextSlot: '2:00 ظهراً',
      rating: 4.9,
      images: 12
    },
  ]

  return (
    <main className="relative h-screen w-full bg-cinema-black overflow-hidden">
      {/* 3D Hero Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh>
              <boxGeometry args={[2.5, 2.5, 2.5]} />
              <meshStandardMaterial 
                color="#D4A574" 
                metalness={0.4} 
                roughness={0.1}
                emissive="#D4A574"
                emissiveIntensity={0.2}
              />
            </mesh>
          </Float>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
          <Environment preset="sunset" />
        </Canvas>
      </div>

      {/* UI Overlay */}
      <div className="relative z-10 p-4 md:p-6 space-y-4 max-w-2xl">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-glass">
          <div className="flex items-center gap-3 mb-3">
            <Camera className="text-golden-hour w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-black text-white">شركة أماكن</h1>
          </div>
          <p className="text-white/70 text-lg">احجز لوكيشن تصوير بالساعة. شوفه 360° قبل ما تروح</p>
        </div>
        
        <GoldenHourWidget />
      </div>

      {/* Social Proof Toast */}
      {liveBooking && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl bg-green-500/20 border border-green-500/30 rounded-full px-6 py-3 shadow-glow-gold animate-pulse">
          <p className="text-white text-sm font-semibold">🔥 {liveBooking}</p>
        </div>
      )}

      {/* Google Maps Embed - مجاني 100% */}
      <div className="absolute inset-0 z-0">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.61185058729!2d31.17606!3d30.059462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2YPYp9mE2YrZg9in2LHYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1713510000000!5m2!1sar!2seg"
        ></iframe>
      </div>

      {/* Pins فوق الخريطة */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {locations.map(loc => (
          <div 
            key={loc.id}
            className="absolute pointer-events-auto cursor-pointer"
            style={{ 
              top: '50%', 
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            onClick={() => setSelectedLoc(loc)}
          >
            <div className={`w-20 h-20 rounded-2xl backdrop-blur-md border-2 ${
              loc.available 
                ? 'bg-green-500/30 border-green-500 shadow-glow-gold' 
                : 'bg-red-500/30 border-red-500'
            } flex flex-col items-center justify-center text-white transition-all hover:scale-125 hover:rotate-3`}>
              <MapPin className="w-5 h-5 mb-1" />
              <span className="font-black text-xl">{loc.price}</span>
              <span className="text-xs font-semibold">ج/ساعة</span>
            </div>
            {loc.available && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
            )}
          </div>
        ))}
      </div>

      {/* Popup التفاصيل */}
      {selectedLoc && (
        <div className="fixed bottom-32 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl bg-black/80 border border-golden-hour/30 rounded-3xl p-6 w-80 md:w-96 shadow-glow-gold">
          <button 
            onClick={() => setSelectedLoc(null)} 
            className="absolute top-3 left-3 text-white/60 hover:text-white text-2xl w-8 h-8"
          >
            ×
          </button>
          
          <div className="space-y-3">
            <div>
              <p className="font-black text-white text-2xl mb-1">{selectedLoc.name}</p>
              <p className="text-white/60 text-sm flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {selectedLoc.address}
              </p>
            </div>

            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-1 text-green-400">
                <Clock className="w-4 h-4" />
                متاح: {selectedLoc.nextSlot}
              </div>
              <div className="flex items-center gap-1 text-golden-hour">
                <Camera className="w-4 h-4" />
                {selectedLoc.images} صورة
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/10">
              <div>
                <p className="text-white/60 text-xs">السعر</p>
                <p className="text-golden-hour font-black text-2xl">{selectedLoc.price} ج/ساعة</p>
              </div>
              <button className="bg-gradient-gold px-6 py-3 rounded-xl text-black font-bold text-sm hover:scale-105 transition-all shadow-glow-gold">
                احجز الساعة الذهبية
              </button>
            </div>
          </div>
        </div>
      )}

      {/* زر CTA ثابت */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <button className="backdrop-blur-xl bg-gradient-gold px-8 py-4 rounded-2xl text-black font-black text-lg shadow-glow-gold hover:scale-105 transition-all flex items-center gap-2">
          <Camera className="w-5 h-5" />
          استكشف اللوكيشنز
        </button>
      </div>
    </main>
  )
}
