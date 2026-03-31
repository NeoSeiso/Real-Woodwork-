# Deploying Next.js to Plesk - REAL WOODWORK PTY LTD

## 📋 Prerequisites

- Plesk Panel with Node.js support
- SSH/FTP access to your server
- Domain: `realwoodwork.co.za`
- Node.js 18+ installed on Plesk

---

## 🚀 Step-by-Step Deployment Guide

### **Step 1: Upload Files to Plesk**

1. **Connect via FTP/SFTP or File Manager**
   - Go to Plesk → Files → File Manager
   - Navigate to `/httpdocs/` (or your domain's document root)

2. **Upload the Next.js Project**
   - Upload the entire `real-woodwork-nextjs` folder contents to `/httpdocs/`
   - **Important**: Upload ALL files including:
     - `package.json`
     - `package-lock.json`
     - `server.js` ✅ (newly created)
     - `next.config.ts`
     - `app/` folder
     - `components/` folder
     - `public/` folder
     - All configuration files

---

### **Step 2: Configure Node.js in Plesk**

1. **Go to Node.js Settings**
   - Plesk → Domains → `realwoodwork.co.za` → Node.js

2. **Configure the Following Settings:**

   | Setting | Value |
   |---------|-------|
   | **Application Mode** | `production` |
   | **Application Root** | `/httpdocs` |
   | **Application Startup File** | `server.js` ✅ |
   | **Custom environment variables** | `NODE_ENV=production` |
   | **Package Manager** | `npm` |

3. **Click "Enable Node.js"** if not already enabled

---

### **Step 3: Install Dependencies**

You have two options:

#### **Option A: Via Plesk Interface**
1. Go to Node.js settings
2. Click "NPM Install" button
3. Wait for installation to complete (may take 2-5 minutes)

#### **Option B: Via SSH (Recommended)**
```bash
# Connect via SSH
ssh your-username@realwoodwork.co.za

# Navigate to your domain directory
cd /var/www/vhosts/realwoodwork.co.za/httpdocs

# Install dependencies
npm install

# Build the Next.js application
npm run build
```

---

### **Step 4: Build the Application**

**Via SSH (Recommended):**
```bash
cd /var/www/vhosts/realwoodwork.co.za/httpdocs
npm run build
```

This will create the `.next` folder with optimized production files.

**Via Plesk:**
1. Go to Node.js → "Run Node.js commands"
2. Run: `npm run build`

---

### **Step 5: Configure Application Startup**

In Plesk Node.js settings:

1. **Application Startup File**: `server.js`
2. **Application Mode**: `production`
3. **Custom environment variables**:
   ```
   NODE_ENV=production
   PORT=3000
   ```

---

### **Step 6: Set Up Reverse Proxy (Important!)**

Since Next.js runs on port 3000, you need to proxy requests from port 80/443:

1. **Go to Apache & nginx Settings**
   - Plesk → Domains → `realwoodwork.co.za` → Apache & nginx Settings

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

3. **Click "OK"** to save

---

### **Step 7: Start the Application**

1. Go to Node.js settings
2. Click **"Restart App"** or **"Enable Node.js"**
3. The application should start on port 3000

---

### **Step 8: Verify Deployment**

1. Visit: `http://realwoodwork.co.za`
2. You should see your Next.js website!

---

## 🔧 Troubleshooting

### **Issue: "Application will be restarted after the first request"**
- **Solution**: Just visit your website once, and it will start automatically

### **Issue: "server.js not found"**
- **Solution**: Make sure you uploaded the `server.js` file to `/httpdocs/`
- Check the "Application Startup File" is set to `server.js`

### **Issue: "Module not found" errors**
- **Solution**: Run `npm install` again via SSH or Plesk
- Make sure `node_modules` folder exists

### **Issue: "Build failed" or missing .next folder**
- **Solution**: Run `npm run build` via SSH
- Check that all source files are uploaded

### **Issue: 502 Bad Gateway**
- **Solution**: 
  - Check if Node.js app is running in Plesk
  - Verify nginx reverse proxy configuration
  - Check application logs in Plesk

### **Issue: Images not loading**
- **Solution**: Make sure the `public/` folder is uploaded with all images
- Check file permissions (should be 644 for files, 755 for folders)

---

## 📁 Required File Structure on Server

```
/httpdocs/
├── server.js              ✅ Entry point
├── package.json           ✅ Dependencies
├── package-lock.json      ✅ Lock file
├── next.config.ts         ✅ Next.js config
├── tsconfig.json          ✅ TypeScript config
├── tailwind.config.ts     ✅ Tailwind config
├── postcss.config.mjs     ✅ PostCSS config
├── .next/                 ✅ Built files (after npm run build)
├── node_modules/          ✅ Dependencies (after npm install)
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ... (all components)
└── public/
    ├── logo/
    ├── gallery/
    └── clients-work/
```

---

## 🔄 Updating the Website

When you make changes:

1. **Update files via FTP/Git**
2. **Rebuild the application:**
   ```bash
   cd /var/www/vhosts/realwoodwork.co.za/httpdocs
   npm run build
   ```
3. **Restart Node.js app** in Plesk

---

## 🌐 SSL Certificate (HTTPS)

1. Go to Plesk → SSL/TLS Certificates
2. Install Let's Encrypt certificate (free)
3. Enable "Redirect from HTTP to HTTPS"

---

## 📊 Performance Tips

1. **Enable Gzip Compression** in nginx settings
2. **Set up caching** for static assets
3. **Use CDN** for images (optional)
4. **Monitor logs** in Plesk → Logs

---

## 🆘 Getting Help

If you encounter issues:

1. **Check Plesk Logs:**
   - Plesk → Logs → Error Log
   - Node.js application logs

2. **Check Application Status:**
   - Plesk → Node.js → Dashboard

3. **Restart Services:**
   - Restart Node.js app
   - Restart nginx: `service nginx restart` (via SSH)

---

## ✅ Quick Checklist

- [ ] All files uploaded to `/httpdocs/`
- [ ] `server.js` exists in root directory
- [ ] Node.js enabled in Plesk
- [ ] Application Startup File set to `server.js`
- [ ] `npm install` completed successfully
- [ ] `npm run build` completed successfully
- [ ] Nginx reverse proxy configured
- [ ] Application Mode set to `production`
- [ ] NODE_ENV=production set
- [ ] Application restarted
- [ ] Website accessible at realwoodwork.co.za

---

**Your Next.js website should now be live on Plesk! 🎉**

For support: bhekani36@gmail.com
