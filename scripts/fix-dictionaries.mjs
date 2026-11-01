
import fs from 'fs';
import path from 'path';

const messagesDir = './src/messages';
const locales = ['de', 'en', 'fr', 'it', 'es', 'pt', 'nl', 'pl', 'cs', 'de-CH'];
const master = JSON.parse(fs.readFileSync(path.join(messagesDir, 'de.json'), 'utf8'));

locales.forEach(locale => {
    if (locale === 'de') return;
    const targetPath = path.join(messagesDir, `${locale}.json`);
    if (fs.existsSync(targetPath)) {
        let target = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
        
        // Force array structure for keys that should be arrays
        const arrayKeys = ['faqItems', 'categories', 'products', 'posts'];
        arrayKeys.forEach(key => {
            if (master[key] && Array.isArray(master[key])) {
                if (!Array.isArray(target[key])) {
                    console.log(`Fixing ${locale}.json: forcing ${key} to array`);
                    target[key] = Object.values(target[key] || {});
                }
            }
        });
        
        fs.writeFileSync(targetPath, JSON.stringify(target, null, 2));
    }
});
console.log('Dictionaries fixed successfully.');
