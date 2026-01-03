/* PLUGIN IDEATO DA DIEH*/

import puppeteer from 'puppeteer';

const handler = async (m, { conn, text }) => {
    if (!text) return m.reply("🔍 Usa: *.amazon* <ricerca>");

    let browser;
    try {
        await conn.sendMessage(m.chat, { react: { text: "📸", key: m.key } });
        
        browser = await puppeteer.launch({
            headless: "new",
            args: [
                '--no-sandbox', 
                '--disable-setuid-sandbox', 
                '--disable-blink-features=AutomationControlled'
            ]
        });
        
        const page = await browser.newPage();
        
        await page.setViewport({ 
            width: 1920, 
            height: 1080,
            deviceScaleFactor: 1
        });
        
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36');

        const url = `https://www.amazon.it/s?k=${encodeURIComponent(text)}`;
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

        try {
            const cookieSelector = '#sp-cc-accept';
            await page.waitForSelector(cookieSelector, { timeout: 4000 });
            await page.click(cookieSelector);
        } catch (e) {}

        await page.evaluate(() => {
            document.body.style.zoom = "85%";
        });
        
        await new Promise(r => setTimeout(r, 1200));

        const products = await page.evaluate(() => {
            const results = [];
            const items = document.querySelectorAll(".s-result-item[data-component-type='s-search-result']");
            
            for (let i = 0; i < items.length && results.length < 5; i++) {
                const el = items[i];
                const titleEl = el.querySelector("h2");
                const linkEl = el.querySelector("a.a-link-normal");
                const priceEl = el.querySelector(".a-price .a-offscreen");

                if (titleEl && linkEl) {
                    let href = linkEl.getAttribute("href");
                    results.push({
                        title: titleEl.innerText.trim().substring(0, 30) + "...",
                        link: href.startsWith('http') ? href : "https://www.amazon.it" + href,
                        price: priceEl ? priceEl.innerText.trim() : "N/D"
                    });
                }
            }
            return results;
        });

        const screenshot = await page.screenshot({ type: 'jpeg', quality: 80 });
        await browser.close();

        if (products.length === 0) return m.reply("❌ Nessun risultato trovato.");

        await conn.sendMessage(m.chat, { 
            image: screenshot, 
            caption: `🔎 *Amazon Search (Zoom 85%):* ${text}` 
        }, { quoted: m });

        const buttons = products.map((prod, i) => ({
            name: 'cta_copy',
            buttonParamsJson: JSON.stringify({
                display_text: `📋 Link ${i + 1} (${prod.price})`,
                copy_code: prod.link.split('/ref=')[0]
            })
        }));
        
/* SISTEMATO INTERAMENTE DA 17! github.com/xviveree */

        await conn.sendMessage(m.chat, {
            text: `Tocca per copiare i link dei primi 5 prodotti:`,
            footer: 'sborra ✧ bot',
            interactiveButtons: buttons,
            headerType: 1
        }, { quoted: m });

        await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

    } catch (err) {
        if (browser) await browser.close();
        console.error("ERRORE AMAZON:", err);
        m.reply("⚠️ Errore durante la generazione dello screenshot (85% zoom).");
    }
};

handler.help = ["amazon <ricerca>"];
handler.tags = ["tools"];
handler.command = /^amazon$/i;

export default handler;

//fixxed by xvivere