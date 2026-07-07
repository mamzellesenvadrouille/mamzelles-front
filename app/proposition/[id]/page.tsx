import { Redis } from '@upstash/redis';
import { notFound } from 'next/navigation';

const redis = Redis.fromEnv();

type PropositionOption = { label: string; qty: number; prix: number };

type PropositionData = {
  clientName: string;
  destination?: string;
  dateVoyage?: string;
  formule: string;
  options?: PropositionOption[];
  remise?: number;
  total: number;
  messagePerso?: string;
  date: string;
};

async function getProposition(id: string): Promise<PropositionData | null> {
  const data = await redis.get(`proposition:${id}`);
  if (!data) return null;
  return (typeof data === 'string' ? JSON.parse(data) : data) as PropositionData;
}

export default async function PropositionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const proposition = await getProposition(id);

  if (!proposition) notFound();

  const acompte = Math.round(proposition.total * 0.5 * 100) / 100;
  const solde = Math.round((proposition.total - acompte) * 100) / 100;

  return (
    <div style={{ minHeight: '100vh', background: '#f8f4ef', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 20px' }}>
      <div style={{ maxWidth: 640, width: '100%' }}>

        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <img src="/icon.png" alt="MamZelles en vadrouille" style={{ width: 56, height: 56, marginBottom: 16 }} />
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 28, color: '#1a1512', letterSpacing: '0.02em' }}>
            MamZelles en vadrouille
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c8956c', marginTop: 8 }}>
            Votre proposition de voyage
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid #e8e0d6', padding: '48px 40px' }}>

          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: '#1a1512', lineHeight: 1.7, marginBottom: 32 }}>
            Bonjour {proposition.clientName.split(' ')[0]},
            <br /><br />
            {proposition.messagePerso || "Merci pour votre message, on a hâte de préparer votre voyage sur-mesure ! Voici un premier aperçu de ce que l'on vous propose."}
          </p>

          <div style={{ borderTop: '1px solid #e8e0d6', paddingTop: 32 }}>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, color: '#1a1512', marginBottom: 20 }}>
              Récapitulatif
            </div>

            <table style={{ width: '100%', fontFamily: 'Inter, sans-serif', fontSize: 14, borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  <td style={{ padding: '10px 0', color: '#888', borderBottom: '1px solid #f0ebe3' }}>Formule</td>
                  <td style={{ padding: '10px 0', textAlign: 'right', fontWeight: 600, borderBottom: '1px solid #f0ebe3' }}>{proposition.formule}</td>
                </tr>
                {proposition.destination && (
                  <tr>
                    <td style={{ padding: '10px 0', color: '#888', borderBottom: '1px solid #f0ebe3' }}>Voyage</td>
                    <td style={{ padding: '10px 0', textAlign: 'right', fontWeight: 600, borderBottom: '1px solid #f0ebe3' }}>{proposition.destination}</td>
                  </tr>
                )}
                {proposition.dateVoyage && (
                  <tr>
                    <td style={{ padding: '10px 0', color: '#888', borderBottom: '1px solid #f0ebe3' }}>Date de départ</td>
                    <td style={{ padding: '10px 0', textAlign: 'right', fontWeight: 600, borderBottom: '1px solid #f0ebe3' }}>{proposition.dateVoyage}</td>
                  </tr>
                )}
                {proposition.options && proposition.options.map((o, i) => (
                  <tr key={i}>
                    <td style={{ padding: '10px 0', color: '#888', borderBottom: '1px solid #f0ebe3' }}>{o.label}{o.qty > 1 ? ` × ${o.qty}` : ''}</td>
                    <td style={{ padding: '10px 0', textAlign: 'right', fontWeight: 600, borderBottom: '1px solid #f0ebe3' }}>+{o.prix * o.qty} €</td>
                  </tr>
                ))}
                {proposition.remise && proposition.remise > 0 && (
                  <tr>
                    <td style={{ padding: '10px 0', color: '#888', borderBottom: '1px solid #f0ebe3' }}>Remise</td>
                    <td style={{ padding: '10px 0', textAlign: 'right', fontWeight: 600, color: '#c8956c', borderBottom: '1px solid #f0ebe3' }}>-{proposition.remise} €</td>
                  </tr>
                )}
              </tbody>
            </table>

            <div style={{ background: '#f8f4ef', padding: '20px 24px', marginTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#1a1512' }}>Total estimé</span>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 28, color: '#c8956c', fontWeight: 600 }}>{proposition.total} €</span>
            </div>

            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#888', marginTop: 16, lineHeight: 1.6 }}>
              Réglable en 2 fois : un acompte de {acompte} € à la validation, puis le solde de {solde} € avant la livraison de votre carnet de voyage.
            </p>
          </div>
        </div>

        <p style={{ textAlign: 'center', fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#888', marginTop: 32 }}>
          Une question ? Répondez simplement à notre dernier email.
        </p>
      </div>
    </div>
  );
}
