"use client"

import { useState } from "react"
import { Star, Play, X } from "lucide-react"
import { useQuote } from "@/context/QuoteContext"

const testimonials = [
  {
    name: "Arun Prakash",
    role: "Villa Construction - Chennai",
    text: "The team delivered exactly what we imagined. Quality and timing were perfect.",
    rating: 5.0,
    gender: "male" as const,
    image: "/avatar_male_arun_1773035026174.png",
    videoUrl: "/testimonial_video_1.mp4"
  },
  {
    name: "Divya Ramesh",
    role: "Interior & Renovation - Chennai",
    text: "Smooth process from design to handover. Highly recommended!",
    rating: 5.0,
    gender: "female" as const,
    image: "/avatar_female_divya_1773035039932.png",
    videoUrl: "/testimonial_video_2.mp4"
  },
  {
    name: "Karthik S",
    role: "Independent House - Chennai",
    text: "Transparent pricing and excellent workmanship.",
    rating: 5.0,
    gender: "male" as const,
    image: "/avatar_male_karthik_1773035057842.png",
    videoUrl: "/testimonial_video_3.mp4"
  },
];

export default function TestimonialsSection() {
  const { openModal } = useQuote()
  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null);

  const handleSpeech = (text: string, index: number, gender: 'male' | 'female') => {
    // Stop if already speaking this one
    if (speakingIndex === index) {
      window.speechSynthesis.cancel();
      setSpeakingIndex(null);
      return;
    }

    // Cancel previous speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Select voice based on gender
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => {
      const name = v.name.toLowerCase();
      if (gender === 'female') {
        return name.includes('female') || name.includes('samantha') || name.includes('zira') || name.includes('victoria') || name.includes('google us english');
      } else {
        return name.includes('male') || name.includes('david') || name.includes('alex') || name.includes('prakash') || name.includes('google uk english male');
      }
    });

    if (voice) {
      utterance.voice = voice;
    }

    utterance.rate = 0.9; // Slightly slower for better clarity
    utterance.pitch = gender === 'female' ? 1.2 : 1; // Adjust pitch for female voice
    
    utterance.onstart = () => setSpeakingIndex(index);
    utterance.onend = () => setSpeakingIndex(null);
    utterance.onerror = () => setSpeakingIndex(null);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d1117]">
            What Our <span className="text-[#f37021]">Client Say</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-medium text-sm">
            Built on Trust, Proven Through Every Project. <br />
            Delivering quality construction with precision, reliability, and lasting value.
          </p>
        </div>

        <div className="relative group">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#0d1117] rounded-[1.5rem] overflow-hidden relative group/card shadow-xl">
                {/* Background Image / Placeholder */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover opacity-60 group-hover/card:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => handleSpeech(t.text, i, t.gender)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        speakingIndex === i 
                          ? "bg-[#f37021] border-[#f37021] text-white scale-110 shadow-[0_0_20px_rgba(243,112,33,0.5)]" 
                          : "bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-[#f37021] hover:border-[#f37021] shadow-lg"
                      }`}
                    >
                      {speakingIndex === i ? (
                        <div className="flex gap-1 items-center">
                          <span className="w-1 h-3 bg-white animate-bounce [animation-delay:-0.3s]" />
                          <span className="w-1 h-4 bg-white animate-bounce [animation-delay:-0.15s]" />
                          <span className="w-1 h-3 bg-white animate-bounce" />
                        </div>
                      ) : (
                        <Play className="w-5 h-5 fill-current ml-1" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 pt-12 bg-gradient-to-t from-black via-black/90 to-transparent">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star key={starIdx} className="w-3 h-3 fill-[#f37021] text-[#f37021]" />
                    ))}
                    <span className="text-white text-xs font-bold ml-1">{t.rating.toFixed(1)}</span>
                  </div>
                  <p className="text-white/80 text-[11px] mb-3 leading-relaxed italic line-clamp-2">"{t.text}"</p>
                  <div>
                    <h4 className="text-white font-bold text-base">{t.name}</h4>
                    <p className="text-[#f37021] text-[10px] font-semibold">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 space-y-4">
          <h4 className="text-lg font-bold text-[#0d1117]">Start Your Project With Us Today</h4>
          <button 
            onClick={openModal}
            className="px-8 py-2.5 rounded-lg border-2 border-[#f37021] text-[#f37021] font-bold hover:bg-[#f37021] hover:text-white transition-all shadow-lg hover:shadow-[#f37021]/20 text-sm"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  )
}
