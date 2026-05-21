'use client';

import { useState, useMemo } from 'react';

export default function ROICalculator() {
  const [colmeias, setColmeias] = useState(10);
  const [producao, setProducao] = useState(20);
  const [preco, setPreco] = useState(8);
  const [perdas, setPerdas] = useState(20);
  const [modelo, setModelo] = useState<'starter' | 'pro'>('pro');

  const result = useMemo(() => {
    const producaoTotal = colmeias * producao * preco;
    const perdasEvitadas = producaoTotal * (perdas / 100);
    const custoHardware = modelo === 'starter' ? colmeias * 299 : colmeias * 499;
    const paybackMeses = perdasEvitadas > 0 ? (custoHardware / perdasEvitadas) * 12 : Infinity;
    return { perdasEvitadas, custoHardware, paybackMeses };
  }, [colmeias, producao, preco, perdas, modelo]);

  const paybackColor = result.paybackMeses < 12 ? 'text-safe' : result.paybackMeses < 24 ? 'text-warn' : 'text-danger';

  return (
    <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-card" style={{ boxShadow: 'var(--shadow-lg)' }}>
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Inputs */}
        <div className="space-y-6">
          <h3 className="font-display text-2xl text-charcoal">Calcula o teu ROI</h3>

          <SliderField
            label="Número de colmeias"
            value={colmeias}
            min={1} max={100} step={1}
            onChange={setColmeias}
            display={colmeias.toString()}
          />
          <SliderField
            label="Produção média (kg/colmeia/ano)"
            value={producao}
            min={5} max={60} step={1}
            onChange={setProducao}
            display={`${producao} kg`}
          />
          <SliderField
            label="Preço de venda do mel (€/kg)"
            value={preco}
            min={3} max={25} step={0.5}
            onChange={setPreco}
            display={`${preco} €`}
          />
          <SliderField
            label="Perdas estimadas por vespa asiática (%)"
            value={perdas}
            min={0} max={80} step={5}
            onChange={setPerdas}
            display={`${perdas}%`}
          />

          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">Modelo selecionado</label>
            <div className="flex gap-3">
              {(['starter', 'pro'] as const).map(m => (
                <button
                  key={m}
                  onClick={() => setModelo(m)}
                  className={`flex-1 py-2.5 rounded-xl border-2 font-semibold text-sm transition-all capitalize ${
                    modelo === m
                      ? 'border-honey bg-honey-light text-dark'
                      : 'border-honey-light text-mid hover:border-honey'
                  }`}
                >
                  {m === 'starter' ? `Starter — 299 €/un.` : `Pro — 499 €/un.`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Output */}
        <div className="bg-dark rounded-2xl p-6 lg:p-8 flex flex-col justify-center text-white">
          <p className="text-white/60 text-sm mb-6">Estimativa anual com Hive Box {modelo === 'starter' ? 'Starter' : 'Pro'}</p>

          <div className="space-y-5">
            <ResultRow label="Perdas evitadas por ano" value={`${result.perdasEvitadas.toFixed(0)} €`} highlight={false} />
            <ResultRow label="Investimento total" value={`${result.custoHardware.toFixed(0)} €`} highlight={false} />
            <div className="border-t border-white/10 pt-5">
              <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Retorno do investimento</p>
              <p className={`font-display font-bold text-5xl ${paybackColor}`}>
                {result.paybackMeses === Infinity ? '∞' : `${result.paybackMeses.toFixed(1)}`}
                {result.paybackMeses !== Infinity && <span className="text-2xl ml-1 font-sans">meses</span>}
              </p>
              {result.paybackMeses !== Infinity && result.paybackMeses < 30 && (
                <p className="text-white/60 text-sm mt-2">
                  Com a Hive Box, o teu investimento retorna em {result.paybackMeses.toFixed(1)} meses 🐝
                </p>
              )}
            </div>
          </div>

          <p className="text-white/30 text-xs mt-8">
            * Estimativa indicativa. Resultados reais podem variar.
          </p>
        </div>
      </div>
    </div>
  );
}

function SliderField({
  label, value, min, max, step, onChange, display
}: {
  label: string; value: number; min: number; max: number; step: number;
  onChange: (v: number) => void; display: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <label className="text-sm font-semibold text-charcoal">{label}</label>
        <span className="text-sm font-bold text-honey">{display}</span>
      </div>
      <input
        type="range"
        min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full accent-honey h-2 cursor-pointer"
        aria-label={label}
      />
    </div>
  );
}

function ResultRow({ label, value, highlight }: { label: string; value: string; highlight: boolean }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-white/70 text-sm">{label}</span>
      <span className={`font-bold text-lg ${highlight ? 'text-honey' : 'text-white'}`}>{value}</span>
    </div>
  );
}