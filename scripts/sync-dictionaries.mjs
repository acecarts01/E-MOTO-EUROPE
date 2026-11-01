import fs from 'fs';
import path from 'path';

const messagesDir = './src/messages';
const locales = ['de', 'en', 'fr', 'it', 'es', 'pt', 'nl', 'pl', 'cs', 'de-CH'];

// Load German master template
const master = JSON.parse(fs.readFileSync(path.join(messagesDir, 'de.json'), 'utf8'));

// Synchronize function
function sync(master, target) {
    for (const key in master) {
        if (Array.isArray(master[key])) {
            target[key] = master[key];
        } else if (typeof master[key] === 'object' && master[key] !== null) {
            if (!target[key] || typeof target[key] !== 'object' || Array.isArray(target[key])) target[key] = {};
            sync(master[key], target[key]);
        } else {
            if (target[key] === undefined) {
                target[key] = master[key];
            }
        }
    }
}

// Perform sync for all locales
locales.forEach(locale => {
    if (locale === 'de') return;
    const targetPath = path.join(messagesDir, `${locale}.json`);
    if (fs.existsSync(targetPath)) {
        const target = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
        sync(master, target);
        fs.writeFileSync(targetPath, JSON.stringify(target, null, 2));
    }
});
console.log('Dictionaries synchronized successfully with de.json master.');
