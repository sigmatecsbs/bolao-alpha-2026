import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'

function App() {
  const [apostas, setApostas] = useState([])
  const [jogo, setJogo] = useState(null)

  useEffect(() => {
    carregarDados()
  }, [])

  async function carregarDados() {

    const { data: apostasData } = await supabase
      .from('apostas')
      .select('*')

    const { data: jogoData } = await supabase
      .from('jogos')
      .select('*')
      .limit(1)
      .single()

    setApostas(apostasData || [])
    setJogo(jogoData)
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>🏆 Bolão Alpha 2026</h1>

      {jogo && (
        <>
          <h2>
            🇧🇷 Brasil {jogo.placar_brasil} x {jogo.placar_adversario} 🇦🇷 {jogo.adversario}
          </h2>

          <p>Status: {jogo.status}</p>
        </>
      )}

      <hr />

      <h2>Apostas Registradas</h2>

      <ul>
        {apostas.map(aposta => (
          <li key={aposta.id}>
            {aposta.nome} → {aposta.aposta_brasil} x {aposta.aposta_adversario}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App