'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const kpis = {
    totalGastos: 154741300,
    movimientosBancarios: 190260997,
    diferencia: 2226218,
    tasaConciliacion: 64
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a121e] to-[#08111c] p-4">
      <div className="max-w-[1680px] mx-auto">
        {/* Header */}
        <div className="border-b border-[#223246] pb-4 mb-4">
          <h1 className="text-2xl font-bold text-white">📊 Auditoría Edificio Le Club</h1>
          <p className="text-[#9eb0c4] text-sm mt-1">
            Detalle de gastos mensuales, movimientos bancarios y conciliación de gastos · Enero 2025 – Enero 2026
          </p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-[#0d1420] border-[#223246]">
            <CardHeader className="pb-2">
              <CardTitle className="text-[#8da0b6] text-xs uppercase tracking-wide">Total Gastos Comunes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">${kpis.totalGastos.toLocaleString('es-CL')}</div>
              <p className="text-[#90a3b8] text-xs">13 meses</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0d1420] border-[#223246]">
            <CardHeader className="pb-2">
              <CardTitle className="text-[#8da0b6] text-xs uppercase tracking-wide">Movimientos Bancarios</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">${kpis.movimientosBancarios.toLocaleString('es-CL')}</div>
              <p className="text-[#90a3b8] text-xs">Total cargos acumulados</p>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1420] border-[#223246]">
            <CardHeader className="pb-2">
              <CardTitle className="text-[#8da0b6] text-xs uppercase tracking-wide">Diferencia Detectada</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#ff5e5e]">${kpis.diferencia.toLocaleString('es-CL')}</div>
              <p className="text-[#90a3b8] text-xs">Gastos vs declarados</p>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1420] border-[#223246]">
            <CardHeader className="pb-2">
              <CardTitle className="text-[#8da0b6] text-xs uppercase tracking-wide">Estado Revisión</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#3ddc84]">{kpis.tasaConciliacion}%</div>
              <p className="text-[#90a3b8] text-xs">Tasa de conciliación</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="consolidado" className="w-full">
          <TabsList className="bg-[#0b1522] border border-[#223247] flex flex-wrap h-auto gap-1 p-2">
            <TabsTrigger value="consolidado" className="data-[state=active]:bg-[#17263a] data-[state=active]:text-[#f0c75e]">
              Gasto Comun
            </TabsTrigger>
            <TabsTrigger value="remuneraciones" className="data-[state=active]:bg-[#17263a] data-[state=active]:text-[#f0c75e]">
              I.- 1 REMUNERACIONES
            </TabsTrigger>
            <TabsTrigger value="bancario" className="data-[state=active]:bg-[#17263a] data-[state=active]:text-[#f0c75e]">
              Detalle Bancario
            </TabsTrigger>
            <TabsTrigger value="conciliacion" className="data-[state=active]:bg-[#17263a] data-[state=active]:text-[#f0c75e]">
              Revision Gastos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="consolidado" className="mt-4">
            <Card className="bg-[#0c1726] border-[#26374d]">
              <CardContent className="p-4">
                <h3 className="text-[#e8f0fa] font-bold mb-2">📋 Gastos Comunes Consolidados</h3>
                <p className="text-[#8da0b6] text-sm">Aquí irá la tabla de gastos comunes</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="remuneraciones" className="mt-4">
            <Card className="bg-[#0c1726] border-[#26374d]">
              <CardContent className="p-4">
                <h3 className="text-[#e8f0fa] font-bold mb-2">💰 Remuneraciones</h3>
                <p className="text-[#8da0b6] text-sm">Aquí irá la tabla de remuneraciones</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bancario" className="mt-4">
            <Card className="bg-[#0c1726] border-[#26374d]">
              <CardContent className="p-4">
                <h3 className="text-[#e8f0fa] font-bold mb-2">🏦 Movimientos Bancarios</h3>
                <p className="text-[#8da0b6] text-sm">Aquí irá el detalle de la cartola bancaria</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="conciliacion" className="mt-4">
            <Card className="bg-[#0c1726] border-[#26374d]">
              <CardContent className="p-4">
                <h3 className="text-[#e8f0fa] font-bold mb-2">🔍 Revisión de Gastos</h3>
                <p className="text-[#8da0b6] text-sm">Aquí irá la tabla de conciliación</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}