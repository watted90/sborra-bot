export async function before(m, { conn }) {
    // Controlla se il messaggio contiene "buongiorno" (case-insensitive)
    const text = m.text?.toLowerCase() || '';
    
    if (text.includes('buongiorno')) {
        try {
            // Reagisce al messaggio con l'emoji della mano
            await conn.sendMessage(m.chat, { 
                react: { 
                    text: '👋', 
                    key: m.key 
                } 
            });
        } catch (error) {
            console.error('Errore reazione buongiorno:', error);
        }
    }
    
    return true;
}

export default before;
