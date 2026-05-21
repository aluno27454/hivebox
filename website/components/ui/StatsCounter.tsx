'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

interface Props {
  stats: Stat[];
}

function useCountUp(target: number, active: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = Date.now();
    const step = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

function Counter({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.value, active);
  return (
    <div className="text-center">
      <div className="font-display font-bold text-5xl lg:text-6xl text-honey mb-2">
        {stat.prefix && <span>{stat.prefix}</span>}
        {count.toLocaleString('pt-PT')}
        <span>{stat.suffix}</span>
      </div>
      <p className="text-white/70 text-sm leading-relaxed max-w-[180px] mx-auto">{stat.label}</p>
    </div>
  );
}

export default function StatsCounter({ stats }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
      {stats.map((stat, i) => (
        <Counter key={i} stat={stat} active={active} />
      ))}
    </div>
  );
}