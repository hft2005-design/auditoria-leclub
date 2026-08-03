import Image from 'next/image';
import Link from 'next/link';
import {
  Wallet, Scale, ClipboardList, ShieldCheck, Users2, ArrowRight,
  Search, FileSearch, ListChecks, FileBarChart, Mail, Building2,
  AlertTriangle, CheckCircle2, TrendingUp,
} from 'lucide-react';

const servicios = [
  {
    icon: Wallet,
    title: 'Auditoría Financiera',
    desc: 'Revisión de gastos comunes, conciliación bancaria y verificación de cada cargo contra su respaldo documental.',
  },
  {
    icon: Scale,
    title: 'Auditoría Legal',
    desc: 'Cumplimiento de la Ley 21.442 de Copropiedad Inmobiliaria, reglamento de copropiedad y actas de asamblea.',
  },
  {
    icon: ClipboardList,
    title: 'Auditoría Administrativa',
    desc: 'Evaluación de la gestión de la administración: contratos, cobranza, licitaciones y procesos internos.',
  },
  {
    icon: ShieldCheck,
    title: 'Control Interno',
    desc: 'Detección de desviaciones, gastos no conciliados y oportunidades de mejora en los controles de la comunidad.',
  },
  {
    icon: Users2,
    title: 'RRHH y Previsional',
    desc: 'Verificación de remuneraciones, leyes sociales y cotizaciones Previred del personal de conserjería y aseo.',
  },
];

const metodologia = [
  {
    icon: Search,
    title: 'Levantamiento',
    desc: 'Recopilamos cartolas bancarias, planillas de gastos comunes, liquidaciones de sueldo y comprobantes.',
  },
  {
    icon: FileSearch,
    title: 'Revisión documental',
    desc: 'Conciliamos cada movimiento bancario con su respaldo: boletas, facturas y comprobantes de pago.',
  },
  {
    icon: ListChecks,
    title: 'Hallazgos',
    desc: 'Identificamos diferencias, gastos no encontrados y desviaciones respecto a lo declarado a la comunidad.',
  },
  {
    icon: FileBarChart,
    title: 'Informe final',
    desc: 'Entregamos un informe claro con resultados, hallazgos y recomendaciones para el comité de administración.',
  },
];

const stats = [
  { label: 'En gastos auditados', value: '$154,7M', icon: Wallet },
  { label: 'Meses de gestión revisados', value: '13', icon: TrendingUp },
  { label: 'Diferencia detectada vs. lo declarado', value: '$2,2M', icon: AlertTriangle },
  { label: 'De los gastos verificados con respaldo', value: '64%', icon: CheckCircle2 },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#14181f]">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#e7e9ec]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo-neoconsulting.jpg"
              alt="NeoConsulting"
              width={38}
              height={38}
              className="rounded-md object-cover"
            />
            <div>
              <p className="font-bold text-[15px] leading-tight tracking-tight">NeoConsulting</p>
              <p className="text-[10px] text-[#6b7280] leading-tight">Auditoría en Condominios</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#3a4250]">
            <a href="#servicios" className="hover:text-[#2f6690] transition-colors">Servicios</a>
            <a href="#metodologia" className="hover:text-[#2f6690] transition-colors">Metodología</a>
            <a href="#caso-de-estudio" className="hover:text-[#2f6690] transition-colors">Caso de estudio</a>
            <a href="#contacto" className="hover:text-[#2f6690] transition-colors">Contacto</a>
          </nav>
          <a
            href="#contacto"
            className="bg-[#14181f] text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#2f6690] transition-colors"
          >
            Solicitar auditoría
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 pt-16 pb-14 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block bg-[#eaf2f7] text-[#2f6690] text-xs font-semibold px-3 py-1 rounded-full mb-5">
            Ley 21.442 · Copropiedad Inmobiliaria
          </span>
          <h1 className="text-4xl md:text-[2.75rem] font-bold leading-[1.1] tracking-tight mb-5">
            Transparencia real en los gastos comunes de tu condominio
          </h1>
          <p className="text-[#4b5563] text-lg mb-8 leading-relaxed">
            Auditamos la gestión financiera, legal, administrativa y previsional de comunidades y
            condominios en Chile, conciliando cada peso gastado contra su respaldo documental.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-[#2f6690] text-white font-semibold px-5 py-3 rounded-md hover:bg-[#255373] transition-colors"
            >
              Solicitar una auditoría
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/casos/le-club"
              className="inline-flex items-center gap-2 border border-[#d7dce2] text-[#14181f] font-semibold px-5 py-3 rounded-md hover:bg-[#f5f6f7] transition-colors"
            >
              Ver caso de estudio
            </Link>
          </div>
        </div>
        <div className="bg-[#f5f6f7] rounded-2xl p-8 flex items-center justify-center">
          <Image
            src="/logo-neoconsulting.jpg"
            alt="NeoConsulting - Auditoría en Condominios"
            width={320}
            height={320}
            className="w-full max-w-[280px] h-auto rounded-xl"
            priority
          />
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#14181f]">
        <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label}>
                <Icon className="w-4 h-4 text-[#5b9bd5] mb-2" />
                <p className="text-white text-2xl font-bold">{s.value}</p>
                <p className="text-[#9aa4b2] text-xs mt-1">{s.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="max-w-6xl mx-auto px-5 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Servicios de auditoría</h2>
          <p className="text-[#4b5563] text-lg">
            Un examen integral de la gestión de tu comunidad, cubriendo cada área donde puede
            perderse el control de los recursos de los copropietarios.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicios.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="border border-[#e7e9ec] rounded-xl p-6 hover:border-[#2f6690]/40 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 bg-[#eaf2f7] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#2f6690]" />
                </div>
                <h3 className="font-semibold text-base mb-2">{s.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Metodología */}
      <section id="metodologia" className="bg-[#f5f6f7]">
        <div className="max-w-6xl mx-auto px-5 py-20">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-3">Cómo trabajamos</h2>
            <p className="text-[#4b5563] text-lg">
              Un proceso de cuatro etapas que va desde la recopilación de antecedentes hasta un
              informe final con hallazgos y recomendaciones concretas.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {metodologia.map((m, i) => {
              const Icon = m.icon;
              return (
                <div key={m.title} className="bg-white rounded-xl p-6 border border-[#e7e9ec]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-full bg-[#14181f] text-white text-[11px] font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <Icon className="w-4 h-4 text-[#2f6690]" />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{m.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{m.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Caso de estudio */}
      <section id="caso-de-estudio" className="max-w-6xl mx-auto px-5 py-20">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Caso de estudio: Edificio Le Club</h2>
          <p className="text-[#4b5563] text-lg">
            Auditamos 13 meses de gestión de gastos comunes, conciliando cada cargo bancario con su
            respaldo documental.
          </p>
        </div>

        <div className="bg-[#14181f] rounded-2xl p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 bg-gradient-to-br from-[#f0c75e] to-[#d4a832] rounded-lg flex items-center justify-center">
              <Building2 className="w-4.5 h-4.5 text-[#0a121e]" />
            </div>
            <div>
              <p className="text-white font-semibold">Auditoría Edificio Le Club</p>
              <p className="text-[#9aa4b2] text-xs">Enero 2025 – Enero 2026</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <Icon className="w-4 h-4 text-[#5b9bd5] mb-2" />
                  <p className="text-white text-xl font-bold">{s.value}</p>
                  <p className="text-[#9aa4b2] text-[11px] mt-1">{s.label}</p>
                </div>
              );
            })}
          </div>

          <p className="text-[#c3cad4] text-sm mb-8 leading-relaxed max-w-3xl">
            Entre los hallazgos: partidas como sueldos y préstamos a la comunidad de enero 2025 sin
            comprobante de pago localizado, mientras que gastos como leyes sociales, cuentas de
            servicios básicos y mantenciones quedaron conciliados al 100% contra su respaldo bancario.
          </p>

          <Link
            href="/casos/le-club"
            className="inline-flex items-center gap-2 bg-[#f0c75e] text-[#14181f] font-semibold px-5 py-3 rounded-md hover:bg-[#e0b84c] transition-colors"
          >
            Ver dashboard completo del caso
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="bg-[#eaf2f7]">
        <div className="max-w-6xl mx-auto px-5 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            ¿Tu comunidad necesita una auditoría?
          </h2>
          <p className="text-[#4b5563] text-lg mb-8 max-w-xl mx-auto">
            Conversemos sobre la gestión de tu condominio y cómo podemos ayudarte a auditarla.
          </p>
          <a
            href="mailto:hft2005@gmail.com"
            className="inline-flex items-center gap-2 bg-[#14181f] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#2f6690] transition-colors"
          >
            <Mail className="w-4 h-4" />
            hft2005@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e7e9ec]">
        <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo-neoconsulting.jpg"
              alt="NeoConsulting"
              width={28}
              height={28}
              className="rounded-md object-cover"
            />
            <p className="text-sm font-semibold">NeoConsulting</p>
          </div>
          <p className="text-[#9aa4b2] text-xs">© 2026 NeoConsulting · Auditoría en Condominios</p>
        </div>
      </footer>
    </main>
  );
}
