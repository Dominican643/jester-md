const fs = require('fs')
const chalk = require('chalk')
const axios = require('axios');

// INGAT CUY INI CUMA SC HASIL RENAME ATAU RECODE YA

// Credit : @theJayy_
// Ori : @callmevinz

//=== Edit Disini 🔥
global.namabot = "𝕸𝖆𝖘𝖙𝖊𝖗 𝕺𝖔𝖌𝖜𝖆𝖞'𝖘 𝕭𝖔𝖙"
global.namaowner = "𝕸𝖆𝖘𝖙𝖊𝖗 𝕺𝖔𝖌𝖜𝖆𝖞  ☢︎  𝖌𝖗𝖊𝖞 🕊️"
global.packname = "𝕭𝖊𝖑𝖔𝖓𝖌𝖘 𝖙𝖔"
global.creator = "𝕸𝖆𝖘𝖙𝖊𝖗 𝕺𝖔𝖌𝖜𝖆𝖞  ☢︎  𝖌𝖗𝖊𝖞 🕊️"
global.author = "𝕸𝖆𝖘𝖙𝖊𝖗 𝕺𝖔𝖌𝖜𝖆𝖞"
global.wm = "𝕸𝖆𝖘𝖙𝖊𝖗 𝕺𝖔𝖌𝖜𝖆𝖞'𝖘 𝕭𝖔𝖙"
global.syt = "https://www.youtube.com/@SanjayaAds"
global.sgc = "https://chat.whatsapp.com/BhLOaPSL3SKCw9QAnudLDw"
global.idgc = "120363250058335630@g.us"
global.email = "davidmichael47700@gmail.com"
global.sig = "https://Instagram.com/@Jayy_yete"
global.myweb = "https://shoplinks.to/AiBotzzSH"
global.footer_text = "© 𝕸𝖆𝖘𝖙𝖊𝖗 𝕺𝖔𝖌𝖜𝖆𝖞 ☢︎"
global.owner = ['2347015667458']
global.gifin = "https://telegra.ph/file/e358d95eaed6e4cab2034.jpg"
global.thumb = "https://telegra.ph/file/e358d95eaed6e4cab2034.jpg"
global.thumb2 = "https://telegra.ph/file/e358d95eaed6e4cab2034.jpg4"
global.mark = "https://telegra.ph/file/e358d95eaed6e4cab2034.jpg"
global.themeemoji = '☯︎'

//=== Introgasi 🗿
global.umurowner = "Privat" // Terserah🗿
global.kelasowner = "Privat" // Terserah🗿
global.statusowner = "Jomblo" // Terserah
global.lakiapacewek = "Lanang" // Terserah
// Kalo mau gak diisi juga gak papa

//=== Payment 😋
global.qris = "https://telegra.ph/file/e358d95eaed6e4cab2034.jpg"
global.pulsa = "https://telegra.ph/file/e358d95eaed6e4cab2034.jpg"
global.dana = "0838-3140-9855"
global.gopay = "Gak ada"
global.rek = "7605-0101-8289-536"

//=== Nokos Token 😱
global.apikey ='8c3a5b302815a138d88148fa0c5916c0595bba50' 

//=== Apikey Nya 🔥
global.lol = 'GataDios'
global.lol = 'SGWN'
global.rose = 'Rs-putangina'
global.xyro = '5dRkJDWvIG'
global.APIs = {
xyro: "https://api.xyroinee.xyz",
popcat : 'https://api.popcat.xyz'
}
// APIKeys
global.APIKeys = {
"https://api.xyroinee.xyz": "5dRkJDWvIG"
}

//=== Gak Tau 🐦
global.pairingNumber = "2347015667458"
// Nomor whatsapp bot lu
global.prefix = ['✓'] 
// Jangan diubah
global.tekspushcontact = "Izin Push" 
// Terserah
global.typemenu = "v6"
// Ini type menu nya
// v1 - v2 - v3 - v4 - v5 - v6
global.typeallmenu = "v1"
// Ini type allmenu nya
// v1 - v2 - v3 - v4 - v5 - v6
global.game = true
// False (Nonaktifin)
global.groupOnly = false 
// True (Mode grup)
global.privateOnly = false
// True (Mode grup)
global.antispam = true 
// False (Nonaktifin)
global.anticall = true
// False (Nonaktifin)
global.autoreadsw = true
// False (Nonaktifin)
global.antiBot = false
// False (Nonaktifin)
global.pengingat = true
// False (Nonaktifin)
global.autoTyping = false
// False (Nonaktifin)
global.autoBio = true
// False (Nonaktifin)
global.autoRestart = true
// False (Nonaktifin)
// AutoRestart Cocok Tuk Panel Butut
global.mess = {
 done: 'Success',
 wait: ' processing',
 admin: 'Only Admin!',
 botNotAdmin: 'Bot is not an admin',
 owner: 'Owner only!',
 group: 'Group command!',
}

// Setting Game
global.gamewaktu = 60 // Game waktu
global.bmin = 1000 // Balance minimal 
global.bmax = 5000 // Balance maksimal
global.limit = 30 // Limit user

// Database Game
global.suit = {};
global.tictactoe = {};
global.petakbom = {};
global.kuis = {};
global.siapakahaku = {};
global.asahotak = {};
global.susunkata = {};
global.caklontong = {};
global.family100 = {};
global.tebaklirik = {};
global.tebaklagu = {};
global.tebakgambar = {};
global.tebakkimia = {};
global.tebakkata = {};
global.tebakkalimat = {};
global.tebakbendera = {};
global.tebakanime = {};
global.kuismath = {};

