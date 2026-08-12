/**
 * 11-gym「拳心（KENSHIN）」ボクシングジム
 * 01/02が淡色だったので、ここは黒地・高彩度で振り切る。
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { atmosphere, texture, portraitBox } from '../_shared/scenes.mjs';

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), 'images');
mkdirSync(OUT, { recursive: true });
const put = (n, s) => writeFileSync(resolve(OUT, n + '.svg'), s, 'utf8');

const BLACK='#0D0F12', SMOKE='#171B21', RED='#E8392B', RED_D='#C42B1E', STEEL='#3A4756', EMBER='#F2703A';

put('hero',   atmosphere({ w:1400,h:1700, palette:[BLACK,RED_D,EMBER,STEEL], seed:9,  light:.30, label:'ジム内観' }));
put('og',     atmosphere({ w:1200,h:630,  palette:[BLACK,RED_D,EMBER],           seed:9,  light:.30, label:'OGP' }));
put('band',   atmosphere({ w:1400,h:500,  palette:[SMOKE,RED_D,EMBER],           seed:33, light:.26, label:'帯' }));
put('floor',  texture({ w:1200,h:800, base:'#2B3038', tint:'#0A0C0F',  kind:'concrete', label:'フロア' }));
put('wall',   texture({ w:1000,h:1000,base:'#333A44', tint:'#0A0C0F',  kind:'concrete', label:'壁' }));
put('tape',   texture({ w:900, h:900, base:'#454E59', tint:'#0A0C0F',  kind:'fabric',   label:'バンテージ' }));

/* 実写が要る枠 */
put('coach-01', portraitBox({ w:800,h:1000, bg:SMOKE, ink:'#F2F0EB', accent:RED, label:'実写差し替え', note:'トレーナー / 全身' }));
put('coach-02', portraitBox({ w:800,h:1000, bg:STEEL, ink:'#F2F0EB', accent:RED, label:'実写差し替え', note:'トレーナー / 全身' }));
put('member-01',portraitBox({ w:400,h:400,  bg:SMOKE, ink:'#F2F0EB', accent:RED, label:'会員', note:'' }));
put('member-02',portraitBox({ w:400,h:400,  bg:STEEL, ink:'#F2F0EB', accent:RED, label:'会員', note:'' }));
put('member-03',portraitBox({ w:400,h:400,  bg:SMOKE, ink:'#F2F0EB', accent:RED, label:'会員', note:'' }));
put('gym-01',   portraitBox({ w:1000,h:750, bg:BLACK, ink:'#F2F0EB', accent:RED, label:'実写差し替え', note:'リング全景' }));

console.log('✓ 11-gym 12枚');
