import React, { useState, useEffect } from 'react';
import {
  Wifi,
  ShieldCheck,
  MapPin,
  Phone,
  CheckCircle2,
  Video,
  Wrench,
  Menu,
  X,
  Globe,
  Clock,
  ExternalLink,
  MessageSquare,
  UserCheck,
  Tag,
  Zap,
  Tv,
  Camera,
  Router,
  Gauge,
  Star,
  Quote
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const waNumber = "628999781711";
  const mapsLink = "https://maps.app.goo.gl/LdyJvuxWhV2PfCue7";
  const rstLink = "https://rst.net.id/";
  const officialWebsite = "https://www.skyfiber.my.id";

  const packages = [
    {
      name: "BASIC",
      speed: "7 Mbps",
      price: "105.000",
      features: ["Unlimited Kuota", "Hemat Biaya", "Support 7/24", "Cocok untuk Sosmed & Chat"]
    },
    {
      name: "STANDAR",
      speed: "10 Mbps",
      price: "130.000",
      features: ["Unlimited Kuota", "Gratis Sewa Modem/ONT", "Support 7/24", "Cocok untuk 1-3 Perangkat"]
    },
    {
      name: "CUSTOM",
      speed: "15 Mbps",
      price: "152.000",
      popular: true,
      features: ["Unlimited Kuota", "Gratis Sewa Modem/ONT", "Support 7/24", "Paling Banyak Diminati", "Ideal untuk Keluarga"]
    },
    {
      name: "PRO",
      speed: "20 Mbps",
      price: "199.000",
      features: ["Unlimited Kuota", "Prioritas Jaringan", "Gratis Sewa Modem/ONT", "Bisnis & Work from Home", "Low Latency"]
    },
    {
      name: "ENTERPRISE",
      speed: "35 Mbps",
      price: "259.000",
      features: ["Unlimited Kuota", "Ultra Fast Speed", "Prioritas Jaringan", "Streaming 4K Lancar", "Gamer Friendly"]
    },
    {
      name: "ROYAL",
      speed: "50 Mbps",
      price: "349.000",
      features: ["Kecepatan Sultan", "Unlimited Tanpa FUP", "Dedicated Support", "Multi-User Heavy Use", "Stabilitas Maksimal"]
    }
  ];

  const testimonials = [
    {
      name: "Kang Asep",
      role: "Wirausaha (Pasirbiru)",
      comment: "Alhamdulillah, ti saprak nganggo Skyfiber Enigma, jualan online teh jadi lancar jaya. Sinyalna ajag, hargana oge moal matak kantong bolong!",
      rating: 5
    },
    {
      name: "Teh Eneng",
      role: "Guru (Rancakalong)",
      comment: "Cocok pisan kanggo Zoom meeting sareng ngintun tugas sakola. Pelayanan teknisina oge garcep pisan upami aya nanaon. Hatur nuhun Skyfiber!",
      rating: 5
    },
    {
      name: "Mang Dadang",
      role: "Gamer (Sukasirna)",
      comment: "Maen game online moal sieun nge-lag deui ayeuna mah. Ping-na rendah pisan, mantap lah pokona mah kasta kuli rasa sultan!",
      rating: 5
    }
  ];

  const team = [
    {
      name: "Maulana Yusuf",
      phones: ["+62 857-9483-5579"],
      role: "Account Manager & Technician"
    },
    {
      name: "Usep Sopian",
      phones: ["+62 823-8604-6810"],
      role: "Technical Support"
    },
    {
      name: "Koaliongg",
      phones: ["+62 857-9722-0294"],
      role: "Customer Service"
    }
  ];

  const locations = ["Pasirbiru", "Rancakalong", "Sukasirna"];

  const generateWaLink = (packageName, speed) => {
    const message = encodeURIComponent(`Halo Skyfiber Enigma, saya tertarik untuk melakukan pemasangan paket internet ${packageName} dengan kecepatan ${speed}. Saya melihat ada promo biaya instalasi Rp 150.000 (dari Rp 250.000). Mohon informasi lebih lanjut.`);
    return `https://wa.me/${waNumber}?text=${message}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-900 p-2 rounded-xl shadow-lg">
              <Wifi className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-2xl leading-none tracking-tighter ${scrolled ? 'text-blue-900' : 'text-white'}`}>
                SKYFIBER <span className="text-blue-500 italic">ENIGMA</span>
              </span>
              <span className={`text-[10px] font-bold tracking-[0.2em] ${scrolled ? 'text-blue-600' : 'text-blue-200'}`}>WWW.SKYFIBER.MY.ID</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10 font-bold text-xs tracking-widest uppercase">
            {['Beranda', 'Layanan', 'Paket', 'Bantuan'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`${scrolled ? 'text-slate-600' : 'text-white'} hover:text-blue-500 transition-colors`}>{item}</a>
            ))}
            <a href="#kontak" className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition shadow-lg hover:scale-105 active:scale-95">Hubungi Kami</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className={scrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-blue-950 z-40 md:hidden flex flex-col items-center justify-center gap-8 text-2xl font-black text-white italic uppercase tracking-tighter">
          <a href="#beranda" onClick={() => setIsMenuOpen(false)}>Beranda</a>
          <a href="#layanan" onClick={() => setIsMenuOpen(false)}>Layanan</a>
          <a href="#paket" onClick={() => setIsMenuOpen(false)}>Paket</a>
          <a href="#tim" onClick={() => setIsMenuOpen(false)}>Bantuan</a>
          <a href={`https://wa.me/${waNumber}`} className="bg-blue-600 text-white px-10 py-4 rounded-full shadow-2xl">WhatsApp</a>
        </div>
      )}

      {/* Hero Section */}
      <section id="beranda" className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-blue-950">
          <img
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover opacity-30"
            alt="Infrastruktur Jaringan"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-transparent to-blue-950"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white text-center md:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-5 py-2 rounded-full mb-8">
              <Zap className="text-blue-400 w-4 h-4 fill-blue-400" />
              <span className="text-xs font-bold tracking-widest uppercase">Koneksi Terbaik di Rancakalong</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
              Internet Cepat <br /> <span className="text-blue-400">Tanpa Batas</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/80 mb-12 leading-relaxed font-medium">
              Layanan internet handal hingga pelosok Rancakalong.
              Partner resmi PT Artha Mega Data untuk kualitas prima.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#paket" className="bg-white text-blue-900 px-10 py-5 rounded-2xl font-black text-center hover:bg-blue-50 transition shadow-xl uppercase tracking-tighter italic text-lg">Lihat Paket</a>
              <a href={`https://wa.me/${waNumber}`} className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-center hover:bg-blue-700 transition flex items-center justify-center gap-3 shadow-xl uppercase tracking-tighter italic text-lg">
                <Phone size={20} /> Daftar Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Motivation Quote Section */}
      <section className="py-20 bg-blue-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <Wifi className="absolute top-10 left-10 w-64 h-64 -rotate-12" />
            <Globe className="absolute bottom-10 right-10 w-64 h-64 rotate-12" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <Quote className="text-blue-400 mx-auto mb-8 opacity-50" size={60} />
          <h2 className="text-3xl md:text-4xl font-black text-white italic tracking-tighter max-w-4xl mx-auto leading-tight uppercase">
            "Internet bukan sakadar teknologi, tapi jembatan pikeun ngawujudkeun <span className="text-blue-400">impian</span> sareng muka <span className="text-blue-400">cakrawala</span> dunya ti lembur sorangan."
          </h2>
          <p className="text-blue-200 mt-6 font-bold tracking-[0.3em] uppercase text-xs">— Skyfiber Enigma Team —</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-5xl font-black text-blue-950 mb-6 uppercase italic tracking-tighter">Solusi Digital <span className="text-blue-500">Unggulan</span></h2>
            <p className="text-lg text-slate-500 font-medium">Layanan terlengkap untuk mendukung produktivitas dan keamanan Anda setiap hari.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Globe, title: "Broadband Internet", desc: "Internet resmi dengan kecepatan stabil untuk rumah dan UMKM." },
              { icon: Video, title: "Instalasi CCTV", desc: "Keamanan maksimal dengan sistem pemantauan jarak jauh." },
              { icon: Wrench, title: "Maintenance", desc: "Perbaikan dan optimalisasi infrastruktur oleh teknisi ahli." }
            ].map((item, i) => (
              <div key={i} className="group p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-blue-900 transition-all duration-500 hover:-translate-y-4 shadow-xl shadow-slate-200/50">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:scale-110 transition-all">
                  <item.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-white transition-colors uppercase italic tracking-tight">{item.title}</h3>
                <p className="text-slate-500 group-hover:text-blue-100/70 transition-colors leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="paket" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-black text-blue-950 mb-6 uppercase italic tracking-tighter">Pilihan <span className="text-blue-500">Paket</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Harga transparan, tanpa biaya tersembunyi, dan tanpa denda.</p>
          </div>

          {/* Promo Installation Banner */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 p-8 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-white">
              <div className="flex items-center gap-6">
                <div className="bg-white/20 p-5 rounded-2xl backdrop-blur-md">
                  <Tag className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h4 className="font-black text-2xl italic tracking-tight uppercase">Promo Biaya Instalasi!</h4>
                  <p className="text-orange-100 font-medium">Khusus Wilayah Baru di Rancakalong</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <span className="block text-white/50 line-through text-xl font-bold italic">Rp 250.000</span>
                  <span className="block text-white font-black text-4xl italic tracking-tighter">Rp 150.000</span>
                </div>
                <div className="bg-white text-orange-600 px-6 py-4 rounded-2xl font-black text-sm shadow-xl animate-pulse">
                  HEMAT 100K
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto items-stretch mb-20">
            {packages.map((pkg, idx) => (
              <div key={idx} className={`relative bg-white rounded-[3rem] p-10 shadow-2xl flex flex-col transition-all duration-500 ${pkg.popular ? 'border-4 border-blue-600 lg:scale-105 z-10 shadow-blue-200' : 'border border-slate-100 hover:scale-105'}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-8 py-2 rounded-full text-xs font-black tracking-widest uppercase shadow-xl italic">
                    REKOMENDASI
                  </div>
                )}
                <h3 className="text-lg font-black text-slate-400 mb-4 uppercase italic tracking-tight">{pkg.name}</h3>
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-6xl font-black text-blue-900 tracking-tighter italic">{pkg.speed}</span>
                </div>
                <div className="mb-10 p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                  <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Tagihan Bulanan</span>
                  <div className="text-3xl font-black text-slate-800 tracking-tighter italic">Rp {pkg.price} <span className="text-sm font-medium text-slate-400 tracking-normal italic">/bln</span></div>
                  <div className="mt-2 inline-flex items-center gap-2 text-blue-600 bg-blue-50 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">
                    <CheckCircle2 size={12} /> Sudah Termasuk Pajak
                  </div>
                </div>
                <div className="space-y-4 mb-12 flex-grow">
                  {pkg.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-4">
                      <div className="bg-green-100 p-1 rounded-full">
                        <CheckCircle2 className="text-green-600 w-4 h-4" />
                      </div>
                      <span className="text-slate-600 text-sm font-bold tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={generateWaLink(pkg.name, pkg.speed)}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-5 rounded-2xl font-black text-center transition flex items-center justify-center gap-3 shadow-xl uppercase italic tracking-widest text-sm ${pkg.popular ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200' : 'bg-slate-100 text-blue-950 hover:bg-slate-200'}`}
                >
                  <Phone size={18} /> Pesan Paket
                </a>
              </div>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="max-w-7xl mx-auto mb-32">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-black text-blue-950 uppercase italic tracking-tighter">Layanan <span className="text-blue-500">Tambahan</span></h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-blue-600 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group border border-blue-400">
                  <div className="absolute -right-6 -bottom-6 opacity-20 group-hover:scale-110 transition-transform duration-700">
                    <Zap size={120} className="text-white" />
                  </div>
                  <div className="flex flex-col h-full relative z-10">
                    <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                      <Gauge size={24} className="text-white" />
                    </div>
                    <h4 className="text-white text-xl font-black italic uppercase tracking-tighter mb-2">Speed Boost</h4>
                    <p className="text-blue-100 text-[9px] font-black uppercase tracking-widest mb-4">75 Mbps (1:1 Ratio)</p>
                    <p className="text-blue-50 text-xs leading-relaxed mb-8 opacity-80">Nikmati kecepatan ultra tinggi untuk kebutuhan bandwidth besar sementara.</p>
                    <div className="mt-auto pt-4 border-t border-white/10">
                       <span className="text-blue-200 text-[9px] font-black uppercase tracking-widest block mb-1">Harga 30 Hari</span>
                       <div className="text-2xl font-black text-white italic tracking-tighter">Rp 150.000</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl relative overflow-hidden group">
                  <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:rotate-12 transition-transform duration-700">
                    <Router size={120} className="text-blue-600" />
                  </div>
                  <div className="flex flex-col h-full relative z-10">
                    <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                      <Router size={24} className="text-blue-600" />
                    </div>
                    <h4 className="text-slate-900 text-xl font-black italic uppercase tracking-tighter mb-2">Router WISP</h4>
                    <p className="text-blue-600 text-[9px] font-black uppercase tracking-widest mb-4">Perluas Sinyal WiFi</p>
                    <p className="text-slate-500 text-xs leading-relaxed mb-8">Solusi terbaik untuk rumah bertingkat atau area yang tidak terjangkau WiFi utama.</p>
                    <div className="mt-auto pt-4 border-t border-slate-100">
                       <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest block mb-1">Harga Per Unit</span>
                       <div className="text-2xl font-black text-blue-900 italic tracking-tighter">Rp 150.000</div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 rounded-[2.5rem] p-8 border border-slate-800 shadow-xl relative overflow-hidden group">
                  <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                    <Tv size={120} className="text-blue-400" />
                  </div>
                  <div className="flex flex-col h-full relative z-10">
                    <div className="bg-blue-600/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                      <Tv size={24} className="text-blue-400" />
                    </div>
                    <h4 className="text-white text-xl font-black italic uppercase tracking-tighter mb-2">STB Android</h4>
                    <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-4">TV Pintar 4K</p>
                    <p className="text-slate-400 text-xs leading-relaxed mb-8">Ubah TV biasa jadi Smart TV. Bisa YouTube, Netflix, & Ribuan Channel TV.</p>
                    <div className="mt-auto pt-4 border-t border-white/5">
                       <span className="text-slate-500 text-[9px] font-black uppercase tracking-widest block mb-1">Harga Unit</span>
                       <div className="text-2xl font-black text-white italic tracking-tighter">Rp 400.000</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl relative overflow-hidden group">
                  <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:-rotate-12 transition-transform duration-700">
                    <Camera size={120} className="text-blue-600" />
                  </div>
                  <div className="flex flex-col h-full relative z-10">
                    <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-blue-100">
                      <Camera size={24} className="text-blue-600" />
                    </div>
                    <h4 className="text-slate-900 text-xl font-black italic uppercase tracking-tighter mb-2">CCTV Dahua</h4>
                    <p className="text-blue-600 text-[9px] font-black uppercase tracking-widest mb-4">Keamanan 24 Jam</p>
                    <p className="text-slate-500 text-xs leading-relaxed mb-8">Pantau keamanan rumah atau tempat usaha secara realtime dari smartphone.</p>
                    <div className="mt-auto pt-4 border-t border-slate-100">
                       <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest block mb-1">Harga Unit</span>
                       <div className="text-2xl font-black text-blue-900 italic tracking-tighter">Rp 300.000</div>
                    </div>
                  </div>
                </div>
             </div>
          </div>

          {/* Testimonials Section */}
          <div className="max-w-7xl mx-auto py-20 border-t border-slate-200">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-black text-blue-950 uppercase italic tracking-tighter">Ulasan <span className="text-blue-500">Wargi</span></h3>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mt-2">Apa kata mereka tentang Skyfiber Enigma?</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testi, i) => (
                <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testi.rating)].map((_, starIdx) => (
                      <Star key={starIdx} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic font-medium leading-relaxed mb-8">"{testi.comment}"</p>
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center font-black text-blue-600 italic">
                      {testi.name[0]}
                    </div>
                    <div>
                      <h5 className="font-black text-slate-900 italic uppercase tracking-tight">{testi.name}</h5>
                      <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">{testi.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="bantuan" className="py-32 bg-white border-y">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-blue-950 mb-6 uppercase italic tracking-tighter">Bantuan <span className="text-blue-500">Teknis</span></h2>
            <p className="text-lg text-slate-500 font-medium">Tim profesional kami siap membantu kebutuhan pemasangan dan bantuan teknis.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {team.map((staff, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 p-10 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all group text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-blue-500/5 group-hover:text-blue-500/10 transition-colors">
                  <UserCheck size={120} />
                </div>
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center text-white mb-8 mx-auto shadow-xl group-hover:rotate-6 transition-transform">
                    <UserCheck size={40} />
                  </div>
                  <h4 className="text-2xl font-black text-slate-800 mb-2 uppercase italic tracking-tight">{staff.name}</h4>
                  <p className="text-xs text-blue-600 font-black uppercase tracking-[0.2em] mb-8 px-4 py-1 bg-blue-100 rounded-full inline-block">{staff.role}</p>
                  <div className="w-full space-y-4">
                    {staff.phones.map((phone, pi) => (
                      <a
                        key={pi}
                        href={`https://wa.me/${phone.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-black transition shadow-lg shadow-green-500/20 active:scale-95 uppercase text-sm italic tracking-widest"
                      >
                        <MessageSquare size={18} />
                        <span>Chat WhatsApp</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wilayah Layanan Section */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-black text-blue-950 mb-8 uppercase italic tracking-tighter">Wilayah <span className="text-blue-500">Layanan</span></h2>
            <p className="text-lg text-slate-500 mb-12 font-medium leading-relaxed">
              Jaringan fiber optik kami meluas di Kecamatan Rancakalong untuk memastikan akses internet terbaik bagi masyarakat.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-12">
              {locations.map((loc, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                  <div className="bg-blue-100 p-3 rounded-2xl text-blue-600 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <span className="font-black text-slate-800 italic uppercase tracking-tight">{loc}</span>
                </div>
              ))}
              <div className="flex items-center gap-4 bg-blue-600 p-6 rounded-3xl shadow-xl text-white">
                <Clock size={24} />
                <span className="font-black italic uppercase tracking-tight">Segera Hadir...</span>
              </div>
            </div>

            <div className="bg-blue-950 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-blue-500/10">
                <ShieldCheck size={150} />
              </div>
              <h4 className="text-2xl font-black mb-6 italic tracking-tight uppercase flex items-center gap-4 relative z-10">
                <ShieldCheck className="text-blue-400" /> Kemitraan Resmi
              </h4>
              <p className="text-blue-100/60 leading-relaxed mb-10 text-sm font-medium relative z-10">
                Partner resmi dari <a href={rstLink} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 font-black underline italic">RST.net.id</a>. Legalitas operasional penuh di bawah <strong>PT Artha Mega Data</strong>.
              </p>
              <a href={mapsLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-white text-blue-950 px-10 py-4 rounded-2xl font-black hover:bg-blue-50 transition-all shadow-xl uppercase italic tracking-widest text-sm relative z-10">
                Cek Lokasi Kantor <MapPin size={18} />
              </a>
            </div>
          </div>

          <div className="h-[650px] bg-white rounded-[4rem] overflow-hidden shadow-2xl relative border-[12px] border-white group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1434.9351093122114!2d107.8286284!3d-6.8377774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68d700078170c9%3A0xe5493b827e8a9f0!2sJl.%20Lebakjat%20-%20Rancakalong%20No.23%2C%20Pasir%20Biru%2C%20Kec.%20Rancakalong%2C%20Kabupaten%20Sumedang%2C%20Jawa%20Barat%2045361!5e0!3m2!1sid!2sid!4v1710000000000"
              className="w-full h-full border-none group-hover:scale-105 transition-transform duration-1000"
              allowFullScreen=""
              loading="lazy"
              title="Maps Skyfiber"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="kontak" className="bg-blue-950 text-white pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-4 gap-20 mb-24">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-blue-600 p-2 rounded-xl">
                  <Wifi className="text-white w-8 h-8" />
                </div>
                <span className="font-black text-3xl tracking-tighter italic uppercase">SKYFIBER <span className="text-blue-500">ENIGMA</span></span>
              </div>
              <p className="text-blue-100/50 max-w-md leading-loose font-medium mb-10 text-lg">
                Memberikan konektivitas terbaik untuk masyarakat Rancakalong dengan standar kualitas premium.
              </p>
              <div className="flex flex-wrap gap-4 text-[10px] font-black tracking-[0.2em] uppercase">
                <span className="bg-white/5 px-5 py-3 rounded-xl border border-white/10">PT Artha Mega Data</span>
                <span className="bg-blue-600 px-5 py-3 rounded-xl">Sumedang, Jawa Barat</span>
              </div>
            </div>
            <div>
              <h4 className="font-black text-lg mb-10 text-blue-500 uppercase italic tracking-widest underline decoration-2 underline-offset-8">Kantor Pusat</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin size={22} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-blue-100 font-medium leading-relaxed">
                    Jl. Lebakjat - Rancakalong No.23, Pasir Biru, Kec. Rancakalong, Sumedang, Jawa Barat 45361
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-lg mb-10 text-blue-500 uppercase italic tracking-widest underline decoration-2 underline-offset-8">Tautan</h4>
              <ul className="space-y-4 text-sm font-black uppercase italic tracking-widest">
                <li><a href="#beranda" className="text-blue-100/50 hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#layanan" className="text-blue-100/50 hover:text-white transition-colors">Layanan</a></li>
                <li><a href="#paket" className="text-blue-100/50 hover:text-white transition-colors">Paket Internet</a></li>
                <li><a href={officialWebsite} target="_blank" rel="noreferrer" className="text-blue-100/50 hover:text-white transition-colors">Situs Resmi</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-blue-100/20 text-[10px] font-black uppercase tracking-[0.3em]">
              &copy; 2025 Skyfiber Enigma. All Rights Reserved.
            </p>
            <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-blue-100/20">
              <span className="hover:text-white cursor-pointer transition">Terms</span>
              <span className="hover:text-white cursor-pointer transition">Privacy</span>
            </div>
          </div>
        </div>

        {/* Floating WhatsApp CTA */}
        <a
          href={`https://wa.me/${waNumber}`}
          className="fixed bottom-10 right-10 bg-green-500 text-white p-5 rounded-[2rem] shadow-2xl hover:bg-green-600 transition-all z-50 animate-bounce group"
          target="_blank"
          rel="noreferrer"
        >
          <Phone size={28} />
          <div className="absolute right-full mr-5 bg-white text-blue-900 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition shadow-2xl border border-slate-100 italic whitespace-nowrap">Daftar Sekarang</div>
        </a>
      </footer>
    </div>
  );
};

export default App;
