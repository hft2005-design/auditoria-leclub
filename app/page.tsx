'use client';

import { useState } from 'react';
import { 
  Building2, Wallet, TrendingUp, AlertTriangle, CheckCircle,
  Users, Droplets, Wrench, Shield, PiggyBank, Landmark, FileCheck
} from 'lucide-react';
import { 
  gastoComun, remuneraciones, usoConsumo, mantenciones, 
  seguros, gastosExclusivos, resumenBancario, revisionGastos 
} from '@/lib/gastos-data';

export default function Home() {
  const [activeTab, setActiveTab] = useState('consolidado');
  const formatNumber = (num: number) => num.toLocaleString('es-CL');

  const tabs = [
    { id: 'consolidado', label: 'Gastos Comunes', icon: Building2 },
    { id: 'remuneraciones', label: 'Remuneraciones', icon: Users },
    { id: 'usoConsumo', label: 'Uso y Consumo', icon: Droplets },
    { id: 'mantenciones', label: 'Mantenciones', icon: Wrench },
    { id: 'seguros', label: 'Seguros', icon: Shield },
    { id: 'gastosExclusivos', label: 'Gastos Exclusivos', icon: PiggyBank },
    { id: 'bancario', label: 'Detalle Bancario', icon: Landmark },
    { id: 'conciliacion', label: 'Revisión', icon: FileCheck }
  ];

  const getData = () => {
    switch(activeTab) {
      case 'consolidado': return gastoComun;
      case 'remuneraciones': return remuneraciones;
      case 'usoConsumo': return usoConsumo;
      case 'mantenciones': return mantenciones;
      case 'seguros': return seguros;
      case 'gastosExclusivos': return gastosExclusivos;
      case 'bancario': return resumenBancario;
      case 'conciliacion': return revisionGastos;
      default: return gastoComun;
    }
  };

  const getStatusBadge = (estado: string) => {
    const classes: Record<string, string> = {
      'Conciliado': 'estado-conciliado',
      'No encontrado': 'estado-no-encontrado',
      'Desviación': 'estado-desviacion'
    };
    return classes[estado] || '';
  };

  const data = getData();
  const isRevision = activeTab === 'conciliacion';

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#070c14] via-[#0a121e] to-[#08111c] p-4">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 bg-gradient-to-br from-[#f0c75e] to-[#d4a832] rounded-lg flex items-center justify-center">
            <Building2 className="w-4 h-4 text-[#0a121e]" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Auditoría Edificio Le Club</h1>
            <p className="text-[#9eb0c4] text-[11px]">Detalle de gastos mensuales · Enero 2025 – Enero 2026</p>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-3 mb-5">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-md p-2">
            <div className="flex justify-between"><span className="text-white/80 text-[9px]">Total Gastos</span><Wallet className="w-3.5 h-3.5 text-white/70" /></div>
            <p className="text-white text-lg font-bold">$154.7M</p>
            <p className="text-white/60 text-[8px]">13 meses</p>
          </div>
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-md p-2">
            <div className="flex justify-between"><span className="text-white/80 text-[9px]">Movimientos</span><TrendingUp className="w-3.5 h-3.5 text-white/70" /></div>
            <p className="text-white text-lg font-bold">$190.3M</p>
            <p className="text-white/60 text-[8px]">Total cargos</p>
          </div>
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-md p-2">
            <div className="flex justify-between"><span className="text-white/80 text-[9px]">Diferencia</span><AlertTriangle className="w-3.5 h-3.5 text-white/70" /></div>
            <p className="text-white text-lg font-bold">$2.2M</p>
            <p className="text-white/60 text-[8px]">Vs declarados</p>
          </div>
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-md p-2">
            <div className="flex justify-between"><span className="text-white/80 text-[9px]">Conciliación</span><CheckCircle className="w-3.5 h-3.5 text-white/70" /></div>
            <p className="text-white text-lg font-bold">64%</p>
            <p className="text-white/60 text-[8px]">Verificados</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-1.5 mb-4 border-b border-[#223246] pb-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#f0c75e] to-[#d4a832] text-black'
                    : 'bg-[#1a2637] text-[#9fb2c8] hover:bg-[#223246] hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tabla */}
        <div className="bg-[#0c1726] rounded-lg border border-[#26374d] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="bg-[#17263a]">
                <tr>
                  {data.headers.map((h, i) => (
                    <th key={i} className={`px-3 py-2 text-[#f2ce72] font-semibold ${i === 0 ? 'text-left' : 'text-right'}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.rows.map((row, i) => {
                  const isSection = !isRevision && typeof row[0] === 'string' && /^([IVX]+\.\-\s*\d|TOTAL$)/i.test(row[0]);
                  return (
                    <tr key={i} className={`border-b border-[#1f3045] hover:bg-[#142338] ${isSection ? 'row-section' : ''}`}>
                      {row.map((cell, j) => {
                        const isStatus = isRevision && j === 7;
                        return (
                          <td key={j} className={`px-3 py-1.5 text-[#d6e1ef] ${j === 0 ? 'text-left' : 'text-right font-mono'}`}>
                            {isStatus ? (
                              <span className={`${getStatusBadge(cell as string)} px-2 py-0.5 rounded text-xs inline-block`}>
                                {cell as string}
                              </span>
                            ) : j === 0 ? cell : formatNumber(cell as number)}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center">
          <p className="text-[#7e93aa] text-[10px]">📊 Datos actualizados · Información basada en fuentes oficiales</p>
        </div>
      </div>
    </main>
  );
}