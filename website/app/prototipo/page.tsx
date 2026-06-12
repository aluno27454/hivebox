import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Protótipo 3D — Hive Box',
  description: 'Explora o modelo 3D interactivo da colmeia inteligente Hive Box. Roda, aproxima e descobre cada componente.',
};

export default function PrototipoPage() {
  return (
    <main className="mt-16 lg:mt-20 h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)]">
      <iframe
        src="/hive-box-3d.html"
        className="w-full h-full border-0 block"
        title="Modelo 3D Hive Box"
        allow="accelerometer; autoplay"
        style={{ touchAction: 'none' }}
      />
    </main>
  );
}
