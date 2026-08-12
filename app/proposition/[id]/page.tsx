import { Redis } from '@upstash/redis';

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

  const acompte = proposition ? Math.round(proposition.total * 0.5 * 100) / 100 : 0;
  const solde = proposition ? Math.round((proposition.total - acompte) * 100) / 100 : 0;

  return (
    <div className="prop-page">
      {/* Styles responsive — les styles inline ne supportent pas les media queries,
          donc ce bloc gère l'adaptation mobile sans toucher au rendu desktop. */}
      <style>{`
        .prop-page {
          min-height: 100vh;
          background: #f8f4ef;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 60px 20px;
        }
        .prop-wrap {
          max-width: 640px;
          width: 100%;
        }
        .prop-card {
          background: #fff;
          border: 1px solid #e8e0d6;
          padding: 48px 40px;
        }
        .prop-greet {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          color: #1a1512;
          margin-bottom: 20px;
        }
        .prop-table-wrap {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        .prop-table {
          width: 100%;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          border-collapse: collapse;
        }
        .prop-table td {
          white-space: normal;
          word-break: break-word;
        }
        .prop-table td:first-child {
          color: #888;
          padding: 10px 0;
          border-bottom: 1px solid #f0ebe3;
          width: 42%;
        }
        .prop-table td:last-child {
          text-align: right;
          font-weight: 600;
          padding: 10px 0 10px 12px;
          border-bottom: 1px solid #f0ebe3;
        }
        .prop-total {
          background: #f8f4ef;
          padding: 20px 24px;
          margin-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }
        .prop-total-amount {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          color: #c8956c;
          font-weight: 600;
          white-space: nowrap;
        }

        @media (max-width: 640px) {
          .prop-page {
            padding: 32px 14px;
          }
          .prop-card {
            padding: 28px 20px;
          }
          .prop-greet {
            font-size: 22px;
          }
          .prop-table {
            font-size: 13px;
          }
          .prop-table td:first-child {
            width: 48%;
          }
          .prop-total {
            padding: 16px 18px;
            flex-wrap: wrap;
          }
          .prop-total-amount {
            font-size: 24px;
          }
        }

        @media (max-width: 380px) {
          .prop-table td:first-child,
          .prop-table td:last-child {
            display: block;
            width: 100%;
            text-align: left;
            padding: 4px 0;
          }
          .prop-table tr {
            display: block;
            padding: 8px 0;
            border-bottom: 1px solid #f0ebe3;
          }
          .prop-table td:first-child,
          .prop-table td:last-child {
            border-bottom: none;
          }
        }
      `}</style>

      {!proposition ? (
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#888' }}>Cette proposition n&apos;existe pas ou plus.</p>
      ) : (
      <div className="prop-wrap">

        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <img src="/icon.png" alt="MamZelles en Vadrouille" style={{ width: 56, height: 56, marginBottom: 16, marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 28, color: '#1a1512', letterSpacing: '0.02em' }}>
            MamZelles en Vadrouille
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c8956c', marginTop: 8 }}>
            Votre proposition de voyage
          </div>
        </div>

        <div className="prop-card">

          <div className="prop-greet">
            Bonjour <em style={{ color: '#c8956c' }}>{proposition.clientName.split(' ')[0]}</em>,
          </div>

          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#1a1512', lineHeight: 1.8, marginBottom: 32, whiteSpace: 'pre-line' }}>
            {proposition.messagePerso || "On est ravies de pouvoir imaginer votre prochain voyage avec vous.\nVoici notre proposition."}
          </p>

          <div style={{ borderTop: '1px solid #e8e0d6', paddingTop: 32 }}>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, color: '#1a1512', marginBottom: 20 }}>
              Récapitulatif
            </div>

            <div className="prop-table-wrap">
              <table className="prop-table">
                <tbody>
                  <tr>
                    <td>Formule</td>
                    <td>{proposition.formule}</td>
                  </tr>
                  {proposition.destination && (
                    <tr>
                      <td>Voyage</td>
                      <td>{proposition.destination}</td>
                    </tr>
                  )}
                  {proposition.dateVoyage && (
                    <tr>
                      <td>Date de départ</td>
                      <td>{proposition.dateVoyage}</td>
                    </tr>
                  )}
                  {proposition.options && proposition.options.map((o, i) => (
                    <tr key={i}>
                      <td>{o.label}{o.qty > 1 ? ` × ${o.qty}` : ''}</td>
                      <td>+{o.prix * o.qty} €</td>
                    </tr>
                  ))}
                  {(proposition.remise ?? 0) > 0 && (
                    <tr>
                      <td>Remise</td>
                      <td style={{ color: '#c8956c' }}>-{proposition.remise} €</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="prop-total">
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#1a1512' }}>Total estimé</span>
              <span className="prop-total-amount">{proposition.total} €</span>
            </div>

            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#888', marginTop: 16, lineHeight: 1.6 }}>
              Réglable en 2 fois : un acompte de {acompte} € à la validation, puis le solde de {solde} € avant la livraison de votre carnet de voyage.
            </p>
          </div>
        </div>

        <p style={{ textAlign: 'center', fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#888', marginTop: 32 }}>
          Une question ? Répondez simplement à notre dernier email.
        </p>
        <p style={{ textAlign: 'center', fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#aaa', marginTop: 12 }}>
          <a href="https://mamzellesenvadrouille.com/cgv" style={{ color: '#aaa', textDecoration: 'underline' }}>Conditions générales de vente</a>
        </p>
      </div>
      )}
    </div>
  );
}
