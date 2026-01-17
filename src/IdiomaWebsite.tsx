import { useState } from 'react';
import { Calendar, Music, Users, Instagram, Radio, MapPin, Clock, Play, X, Pause } from 'lucide-react';

interface Set {
  titulo: string;
  duracao: string;
  dj: string;
  soundcloudUrl: string;
}

export default function IdiomaWebsite() {
  const [activeSet, setActiveSet] = useState<Set | null>(null);

  const eventos = [
    {
      id: 1,
      data: '13/12',
      titulo: 'IDIOMA DE PISTA',
      local: 'Bendito Club',
      horario: '23h',
      lineup: ['TIJU', 'SASSI', 'KOIKE', 'RIYST'],
      status: 'próximo'
    },
    {
      id: 2,
      data: '07/06',
      titulo: 'JAM SESSIONS',
      local: 'Provisório Bar',
      horario: '22h',
      lineup: ['SASSI', 'TIJU', 'KOIKE', 'RIYST'],
      status: 'realizado'
    }
  ];

  const djs = [
    { nome: 'SASSI', estilo: 'Techno / House', instagram: '@sassi_dj' },
    { nome: 'TIJU', estilo: 'Electro / Breaks', instagram: '@tiju_dj' },
    { nome: 'KOIKE', estilo: 'Tech House', instagram: '@koike_dj' },
    { nome: 'RIYST', estilo: 'Minimal / Deep', instagram: '@riyst_dj' }
  ];

  const sets: Set[] = [
    {
      titulo: 'SASSI - Live Set Dec 2024',
      duracao: '1:23:45',
      dj: 'SASSI',
      soundcloudUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/riyst/riyst-set-id_idioma-1-edicao&color=%23EF4029&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true'
    },
    {
      titulo: 'TIJU - Warehouse Session',
      duracao: '58:32',
      dj: 'TIJU',
      soundcloudUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/riyst/riyst-set-id_idioma-1-edicao&color=%23EF4029&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true'
    },
    {
      titulo: 'KOIKE - Bendito Club',
      duracao: '1:15:20',
      dj: 'KOIKE',
      soundcloudUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/riyst/riyst-set-id_idioma-1-edicao&color=%23EF4029&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true'
    },
    {
      titulo: 'RIYST - Set ID_IDIOMA 1ª Edição',
      duracao: '1:02:18',
      dj: 'RIYST',
      soundcloudUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/riyst/riyst-set-id_idioma-1-edicao&color=%23EF4029&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true'
    }
  ];

  const navItems = [
    { id: 'home', label: 'INÍCIO', icon: Radio },
    { id: 'eventos', label: 'EVENTOS', icon: Calendar },
    { id: 'sets', label: 'SETS', icon: Music },
    { id: 'djs', label: 'DJS', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Floating Player */}
      {activeSet && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t-4 border-yellow-400 shadow-[0_-4px_20px_rgba(250,204,21,0.3)]">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-start gap-4">
              <button
                onClick={() => setActiveSet(null)}
                className="bg-yellow-400 p-2 text-black hover:scale-110 transition-transform shrink-0 mt-1"
              >
                <X size={20} />
              </button>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-yellow-400 text-black px-2 py-0.5 font-black text-xs shrink-0">
                    {activeSet.dj}
                  </span>
                  <p className="text-yellow-400 font-bold text-sm truncate">{activeSet.titulo}</p>
                </div>
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={activeSet.soundcloudUrl}
                  className="rounded"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header id="home" className="relative overflow-hidden bg-yellow-400 border-b-8 border-black">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-black blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#EF4029' }}></div>
        </div>

        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <p className="text-black font-bold tracking-[0.5em] mb-4 text-sm">COLETIVO DE DJS</p>
          <h1
            className="text-8xl md:text-9xl font-black tracking-tighter text-black mb-4"
            style={{ fontFamily: 'Impact, sans-serif', textShadow: '6px 6px 0 rgba(0,0,0,0.2)' }}
          >
            IDIOMA
          </h1>
          <p className="text-black font-bold tracking-widest text-lg">LONDRINA · PR</p>
        </div>

        <div className="h-3" style={{ background: 'linear-gradient(to right, #000000, #EF4029, #EF4029, #000000)' }}></div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b-4 border-yellow-400">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-1 md:space-x-3 py-4">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-4 md:px-6 py-3 font-black text-xs md:text-sm tracking-wider transition-all duration-300 flex items-center gap-2 bg-black text-yellow-400 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black hover:scale-105"
              >
                <item.icon size={18} />
                <span className="hidden sm:inline">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className={activeSet ? 'pb-56' : ''}>
        {/* Hero Section - Próximo Evento */}
        <section className="container mx-auto px-4 py-16">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-30" style={{ backgroundColor: '#EF4029' }}></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full blur-3xl opacity-20 bg-yellow-400"></div>

            <div className="relative bg-yellow-400 p-8 md:p-12 border-8 border-black shadow-[12px_12px_0_0_#EF4029]">
              <div className="absolute top-4 right-4 md:top-6 md:right-6 text-yellow-400 px-4 md:px-6 py-2 md:py-3 font-black text-xs md:text-sm tracking-wider rotate-3 shadow-lg" style={{ backgroundColor: '#EF4029' }}>
                PRÓXIMO EVENTO
              </div>

              <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tight text-black pt-8" style={{ fontFamily: 'Impact, sans-serif' }}>
                IDIOMA DE PISTA
              </h2>

              <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8">
                <div className="bg-black p-6 flex items-center gap-4">
                  <Calendar size={32} className="text-yellow-400" />
                  <div>
                    <p className="text-yellow-400/70 font-bold text-sm mb-1 tracking-wider">DATA</p>
                    <p className="text-4xl md:text-5xl font-black text-yellow-400">13/12</p>
                  </div>
                </div>
                <div className="bg-black p-6 flex items-center gap-4">
                  <Clock size={32} className="text-yellow-400" />
                  <div>
                    <p className="text-yellow-400/70 font-bold text-sm mb-1 tracking-wider">HORÁRIO</p>
                    <p className="text-4xl md:text-5xl font-black text-yellow-400">23H</p>
                  </div>
                </div>
                <div className="bg-black p-6 flex items-center gap-4">
                  <MapPin size={32} className="text-yellow-400" />
                  <div>
                    <p className="text-yellow-400/70 font-bold text-sm mb-1 tracking-wider">LOCAL</p>
                    <p className="text-2xl md:text-3xl font-black text-yellow-400">BENDITO CLUB</p>
                  </div>
                </div>
              </div>

              <div className="border-t-4 border-black pt-6">
                <p className="text-black font-black text-lg mb-4 tracking-wider">LINEUP</p>
                <div className="flex flex-wrap gap-3">
                  {['23:00 SASSI', '00:30 TIJU', '01:30 KOIKE', '02:30 RIYST'].map((dj, idx) => (
                    <span
                      key={idx}
                      className="bg-black text-yellow-400 px-5 py-3 font-black text-sm md:text-base border-2 hover:scale-105 transition-transform cursor-default"
                      style={{ borderColor: '#EF4029' }}
                    >
                      {dj}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://soundcloud.com/id_idioma"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-yellow-400 p-8 md:p-10 border-8 border-black hover:shadow-[8px_8px_0_0_#EF4029] transition-all duration-300 hover:-translate-y-1"
            >
              <Music size={48} className="mb-4 text-black group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl md:text-4xl font-black mb-2 text-black">SOUNDCLOUD</h3>
              <p className="text-black font-bold text-lg">Ouça nossos sets</p>
            </a>

            <a
              href="https://instagram.com/id_idioma"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-yellow-400 p-8 md:p-10 border-8 border-black hover:shadow-[8px_8px_0_0_#EF4029] transition-all duration-300 hover:-translate-y-1"
            >
              <Instagram size={48} className="mb-4 text-black group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl md:text-4xl font-black mb-2 text-black">INSTAGRAM</h3>
              <p className="text-black font-bold text-lg">@id_idioma</p>
            </a>
          </div>
        </section>

        {/* Eventos Section */}
        <section id="eventos" className="py-20 scroll-mt-24">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-12">
              <Calendar size={48} className="text-yellow-400" />
              <h2 className="text-5xl md:text-7xl font-black text-yellow-400" style={{ fontFamily: 'Impact, sans-serif' }}>
                EVENTOS
              </h2>
            </div>

            <div className="space-y-8">
              {eventos.map(evento => (
                <div
                  key={evento.id}
                  className={`relative p-6 md:p-8 border-8 bg-yellow-400 transition-all duration-300 hover:-translate-y-1 ${
                    evento.status === 'próximo'
                      ? 'border-yellow-400 shadow-[8px_8px_0_0_#EF4029]'
                      : 'border-black opacity-80'
                  }`}
                >
                  {evento.status === 'próximo' && (
                    <div className="absolute -top-4 -right-4 bg-black text-yellow-400 px-4 py-2 font-black text-xs tracking-wider">
                      PRÓXIMO
                    </div>
                  )}
                  {evento.status === 'realizado' && (
                    <div className="absolute -top-4 -right-4 px-4 py-2 font-black text-xs tracking-wider text-yellow-400" style={{ backgroundColor: '#EF4029' }}>
                      REALIZADO
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-black mb-2 text-black">
                        {evento.titulo}
                      </h3>
                      <div className="flex items-center gap-2 text-black">
                        <MapPin size={18} />
                        <p className="font-black text-lg md:text-xl">{evento.local}</p>
                      </div>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="text-4xl md:text-5xl font-black text-black">
                        {evento.data}
                      </div>
                      <div className="text-lg font-bold text-black flex items-center gap-2 md:justify-end">
                        <Clock size={16} />
                        {evento.horario}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {evento.lineup.map((dj, idx) => (
                      <span key={idx} className="px-4 py-2 font-black text-sm md:text-base border-4 bg-black text-yellow-400 border-black">
                        {dj}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sets Section */}
        <section id="sets" className="py-20 bg-zinc-950 scroll-mt-24">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-12">
              <Music size={48} className="text-yellow-400" />
              <h2 className="text-5xl md:text-7xl font-black text-yellow-400" style={{ fontFamily: 'Impact, sans-serif' }}>
                SETS
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {sets.map((set, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSet(activeSet?.titulo === set.titulo ? null : set)}
                  className={`group bg-yellow-400 border-8 border-black p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 text-left ${
                    activeSet?.titulo === set.titulo
                      ? 'shadow-[8px_8px_0_0_#EF4029] ring-4 ring-[#EF4029]'
                      : 'hover:shadow-[8px_8px_0_0_#EF4029]'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-full transition-all duration-300 ${
                      activeSet?.titulo === set.titulo
                        ? 'bg-[#EF4029] scale-110'
                        : 'bg-black group-hover:scale-110'
                    }`}>
                      {activeSet?.titulo === set.titulo ? (
                        <Pause size={24} className="text-yellow-400" />
                      ) : (
                        <Play size={24} className="text-yellow-400" />
                      )}
                    </div>
                    <span className="bg-black text-yellow-400 px-3 py-1 font-black text-sm">
                      {set.dj}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black mb-3 text-black">{set.titulo}</h3>
                  <div className="flex items-center gap-2 text-black font-black text-lg border-t-4 border-black pt-3">
                    <Clock size={18} />
                    {set.duracao}
                  </div>
                  {activeSet?.titulo === set.titulo && (
                    <div className="mt-4 pt-4 border-t-4 border-black">
                      <p className="text-black font-bold text-sm flex items-center gap-2">
                        <span className="inline-block w-2 h-2 bg-[#EF4029] rounded-full animate-pulse"></span>
                        TOCANDO AGORA
                      </p>
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="https://soundcloud.com/id_idioma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-black px-10 md:px-12 py-4 md:py-5 font-black text-lg md:text-xl border-8 border-black hover:shadow-[8px_8px_0_0_#EF4029] transition-all duration-300 hover:-translate-y-1"
              >
                VER TODOS NO SOUNDCLOUD
              </a>
            </div>
          </div>
        </section>

        {/* DJs Section */}
        <section id="djs" className="py-20 scroll-mt-24">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-12">
              <Users size={48} className="text-yellow-400" />
              <h2 className="text-5xl md:text-7xl font-black text-yellow-400" style={{ fontFamily: 'Impact, sans-serif' }}>
                RESIDENTS
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {djs.map((dj, idx) => (
                <div
                  key={idx}
                  className="group bg-yellow-400 border-8 border-black p-8 md:p-10 relative overflow-hidden hover:shadow-[8px_8px_0_0_#EF4029] transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 group-hover:opacity-40 transition-opacity -translate-y-1/2 translate-x-1/2"
                    style={{ backgroundColor: '#EF4029' }}
                  ></div>

                  <div className="relative z-10">
                    <h3 className="text-4xl md:text-5xl font-black mb-3 text-black">{dj.nome}</h3>
                    <p className="text-black font-black text-lg md:text-xl mb-4">{dj.estilo}</p>
                    <div className="flex items-center gap-2 text-black/70 font-bold">
                      <Instagram size={18} />
                      <span>{dj.instagram}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`bg-yellow-400 border-t-8 border-black py-12 ${activeSet ? 'mb-56' : ''}`}>
        <div className="container mx-auto px-4 text-center">
          <a href="#home" className="inline-block mb-6">
            <h2
              className="text-5xl md:text-6xl font-black text-black hover:scale-105 transition-transform"
              style={{ fontFamily: 'Impact, sans-serif' }}
            >
              IDIOMA
            </h2>
          </a>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://instagram.com/id_idioma"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black p-4 text-yellow-400 hover:scale-110 transition-transform"
            >
              <Instagram size={32} />
            </a>
            <a
              href="https://soundcloud.com/id_idioma"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black p-4 text-yellow-400 hover:scale-110 transition-transform"
            >
              <Music size={32} />
            </a>
          </div>

          <p className="text-black font-black text-lg">© 2024 ID_IDIOMA · LONDRINA/PR</p>
        </div>
      </footer>
    </div>
  );
}
