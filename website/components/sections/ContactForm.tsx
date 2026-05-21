'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, CheckCircle } from 'lucide-react';

const schema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  telefone: z.string().optional(),
  assunto: z.string().min(1, 'Seleciona um assunto'),
  mensagem: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
  privacidade: z.literal(true, { error: () => ({ message: 'Deves aceitar a Política de Privacidade' }) }),
});

type FormData = z.infer<typeof schema>;

const SUBJECTS = [
  'Interesse em comprar — Starter',
  'Interesse em comprar — Pro',
  'Interesse em comprar — Institucional / Câmara Municipal / Cooperativa',
  'Suporte técnico',
  'Parceria',
  'Outro',
];

export default function ContactForm({ defaultSubject }: { defaultSubject?: string }) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { assunto: defaultSubject || '' },
  });

  const onSubmit = async (_data: FormData) => {
    await new Promise(r => setTimeout(r, 800));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <CheckCircle size={64} className="text-safe" />
        <h3 className="font-display text-2xl text-charcoal">Mensagem enviada!</h3>
        <p className="text-mid max-w-sm">
          Obrigado pelo teu contacto. Responderemos em breve para o teu email. 🐝
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Nome completo *" error={errors.nome?.message}>
          <input
            {...register('nome')}
            type="text"
            placeholder="André Vassalo"
            className={inputCls(!!errors.nome)}
            aria-required="true"
          />
        </Field>
        <Field label="Email *" error={errors.email?.message}>
          <input
            {...register('email')}
            type="email"
            placeholder="o.teu@email.pt"
            className={inputCls(!!errors.email)}
            aria-required="true"
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Telemóvel" error={undefined}>
          <input
            {...register('telefone')}
            type="tel"
            placeholder="+351 9XX XXX XXX"
            className={inputCls(false)}
          />
        </Field>
        <Field label="Assunto *" error={errors.assunto?.message}>
          <select
            {...register('assunto')}
            className={inputCls(!!errors.assunto)}
            aria-required="true"
          >
            <option value="">Seleciona um assunto</option>
            {SUBJECTS.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Mensagem *" error={errors.mensagem?.message}>
        <textarea
          {...register('mensagem')}
          rows={5}
          placeholder="Olá, gostaria de saber mais sobre..."
          className={inputCls(!!errors.mensagem) + ' resize-none'}
          aria-required="true"
        />
      </Field>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            {...register('privacidade')}
            type="checkbox"
            className="mt-1 w-4 h-4 accent-honey"
          />
          <span className="text-sm text-mid">
            Aceito a{' '}
            <a href="/privacidade" className="text-honey hover:underline" target="_blank">
              Política de Privacidade
            </a>{' '}
            *
          </span>
        </label>
        {errors.privacidade && (
          <p className="text-danger text-xs mt-1">{errors.privacidade.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-honey text-dark font-semibold hover:bg-honey-dark transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ boxShadow: '0 4px 16px rgba(245,166,35,0.3)' }}
      >
        {isSubmitting ? (
          <span className="animate-spin w-5 h-5 border-2 border-dark/30 border-t-dark rounded-full" />
        ) : (
          <>
            <Send size={18} />
            Enviar Mensagem
          </>
        )}
      </button>
    </form>
  );
}

function inputCls(hasError: boolean) {
  return `w-full px-4 py-3 rounded-xl border text-sm text-dark bg-white transition-all focus:outline-none focus:ring-2 focus:ring-honey ${
    hasError ? 'border-danger' : 'border-honey-light focus:border-honey'
  }`;
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-charcoal mb-1.5">{label}</label>
      {children}
      {error && <p className="text-danger text-xs mt-1">{error}</p>}
    </div>
  );
}