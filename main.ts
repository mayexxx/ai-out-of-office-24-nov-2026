import { mkdirSync, writeFileSync } from 'node:fs';

const reply = "I'm on vacation. My out-of-office reply is also on vacation. Please direct all urgent requests to /dev/null — it responds faster than I do.";

if (Array.from(reply).length < 1 || Array.from(reply).length > 160 || /[\r\n]/.test(reply)) {
  throw new Error('The reply must be a single line of 1–160 characters.');
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', `${reply}\n`, 'utf8');
