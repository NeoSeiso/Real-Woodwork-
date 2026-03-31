# 🚀 Upload Next.js to Plesk - Simple Guide

## 📦 What You Need to Upload

Upload these files/folders to `/httpdocs/` on your Plesk server:

```
/httpdocs/
├── server.js              ← Entry point
├── package.json           ← Dependencies
├── package-lock.json      ← Lock file
├── next.config.ts         ← Config
├── tsconfig.json          ← TypeScript
├── tailwind.config.ts     ← Tailwind
├── postcss.config.mjs     ← PostCSS
├── app/                   ← All app files
├── components/            ← All components
├── public/                ← All images & assets
└── .eslintrc.json         ← ESLint config
```

**DO NOT upload:**
- ❌ `node_modules/` (too large, will install on server)
- ❌ `.next/` (will build on server)
- ❌ `.git/` (not needed)

---

## 🎯 Step-by-Step Upload Process

### **Method 1: Via Plesk File Manager (Easiest)**

1. **Zip the project locally:**
   ```bash
   # In the real-woodwork-nextjs folder
   # Exclude node_modules and .next
   ```

2. **Upload to Plesk:**
   - Go to Plesk → Files → File Manager
   - Navigate to `/httpdocs/`
   - Click "Upload Files"
   - Upload the zip file
   - Extract it in `/httpdocs/`

3. **Or upload files directly:**
   - Select all files EXCEPT `node_modules` and `.next`
   - Drag and drop to Plesk File Manager

---

### **Method 2: Via FTP/SFTP**

1. **Connect with FTP client** (FileZilla, WinSCP, etc.)
   - Host: `realwoodwork.co.za`
   - Username: Your Plesk FTP username
   - Password: Your FTP password
   - Port: 21 (FTP) or 22 (SFTP)

2. **Navigate to `/httpdocs/`**

3. **Upload all files** except:
   - `node_modules/`
   - `.next/`
   - `.git/`

---

### **Method 3: Via Git (Advanced)**

If you have SSH access:

```bash
# SSH into your server
ssh your-username@realwoodwork.co.za

# Navigate to httpdocs
cd /var/www/vhosts/realwoodwork.co.za/httpdocs

# Clone the repository
git clone https://github.com/NeoSeiso/Real-Woodwork-.git .

# Navigate to the Next.js folder
cd real-woodwork-nextjs

# Move all files to httpdocs root
mv * ../
mv .* ../ 2>/dev/null
cd ..
rm -rf real-woodwork-nextjs

# Now you're ready for the next steps
```

---

## ⚙️ Configure Plesk Node.js Settings

Once files are uploaded, configure in Plesk:

### **Go to: Domains → realwoodwork.co.za → Node.js**

Set these values:

| Setting | Value |
|---------|-------|
| **Node.js Version** | 18.x or higher |
| **Application Mode** | `production` |
| **Document Root** | `/httpdocs` |
| **Application Root** | `/httpdocs` |
| **Application Startup File** | `server.js` |
| **Package Manager** | `npm` |

### **Custom Environment Variables:**
```
NODE_ENV=production
PORT=3000
```

Click **"Enable Node.js"**

---

## 📦 Install Dependencies & Build

### **Option A: Via Plesk Interface**

1. In Node.js settings, click **"NPM Install"**
2. Wait for installation (2-5 minutes)
3. Go to **"Run Node.js commands"**
4. Run: `npm run build`
5. Wait for build to complete

### **Option B: Via SSH (Faster)**

```bash
cd /var/www/vhosts/realwoodwork.co.za/httpdocs
npm install
npm run build
```

---

## 🔧 Configure Nginx Reverse Proxy

**Important:** Next.js runs on port 3000, so you need to proxy it.

1. **Go to:** Apache & nginx Settings
2. **Add to "Additional nginx directives":**

```nginx
location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
```

3. Click **"OK"**

---

## 🚀 Start the Application

1. Go back to **Node.js settings**
2. Click **"Restart App"**
3. Visit: `http://realwoodwork.co.za`

✅ Your website should now be live!

---

## 🔍 Verify Everything is Working

### **Check File Structure:**
```
/httpdocs/
├── server.js              ✅ Must exist
├── package.json           ✅ Must exist
├── node_modules/          ✅ Created after npm install
├── .next/                 ✅ Created after npm run build
├── app/                   ✅ Must exist
├── components/            ✅ Must exist
└── public/                ✅ Must exist
```

### **Check Logs:**
- Plesk → Logs → Error Log
- Look for any Node.js errors

### **Test the Website:**
- Visit: `http://realwoodwork.co.za`
- Check all pages load
- Check images display
- Test WhatsApp links

---

## 🐛 Common Issues & Solutions

### **"server.js not found"**
✅ **Solution:** Make sure `server.js` is in `/httpdocs/` root

### **"Module not found" errors**
✅ **Solution:** Run `npm install` again

### **"Cannot find module 'next'"**
✅ **Solution:** 
```bash
cd /var/www/vhosts/realwoodwork.co.za/httpdocs
rm -rf node_modules package-lock.json
npm install
```

### **Images not loading**
✅ **Solution:** 
- Check `public/` folder is uploaded
- Check file permissions: `chmod 755 public/`

### **502 Bad Gateway**
✅ **Solution:**
- Check Node.js app is running in Plesk
- Verify nginx proxy configuration
- Restart nginx: `service nginx restart`

### **Application won't start**
✅ **Solution:**
1. Check Node.js version (must be 18+)
2. Verify `server.js` exists
3. Check application logs
4. Try: Disable Node.js → Enable Node.js

---

## 🔄 Updating the Website

When you make changes:

1. **Upload changed files** via FTP/File Manager
2. **If you changed code:**
   ```bash
   cd /var/www/vhosts/realwoodwork.co.za/httpdocs
   npm run build
   ```
3. **Restart app** in Plesk Node.js settings

---

## 🔒 Enable HTTPS (SSL)

1. Go to **SSL/TLS Certificates**
2. Click **"Install"** → **"Let's Encrypt"**
3. Select your domain
4. Click **"Get it free"**
5. Enable **"Redirect from HTTP to HTTPS"**

---

## ✅ Final Checklist

Before going live:

- [ ] All files uploaded to `/httpdocs/`
- [ ] `server.js` exists in root
- [ ] Node.js enabled in Plesk
- [ ] Application Startup File = `server.js`
- [ ] `npm install` completed
- [ ] `npm run build` completed
- [ ] Nginx reverse proxy configured
- [ ] Application restarted
- [ ] Website loads at realwoodwork.co.za
- [ ] All images display correctly
- [ ] WhatsApp links work
- [ ] SSL certificate installed
- [ ] HTTP redirects to HTTPS

---

## 📞 Need Help?

**Email:** bhekani36@gmail.com  
**WhatsApp:** 072 086 5620

---

**Your Next.js website is now ready for Plesk! 🎉**
