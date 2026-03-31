# 🚀 Deploy Next.js to Plesk Using Git

## The Issue
When you clone the repository, the Next.js files are in a **subfolder** (`real-woodwork-nextjs/`), but Plesk expects them in the **root** of `/httpdocs/`.

---

## ✅ Solution: Move Files from Subfolder to Root

### **Step 1: SSH into Your Server**

```bash
ssh your-username@realwoodwork.co.za
```

### **Step 2: Navigate to httpdocs**

```bash
cd /var/www/vhosts/realwoodwork.co.za/httpdocs
```

### **Step 3: Clean Up (if needed)**

```bash
# Remove any existing files (be careful!)
rm -rf *
rm -rf .*
```

### **Step 4: Clone the Repository**

```bash
git clone https://github.com/NeoSeiso/Real-Woodwork-.git temp
```

### **Step 5: Move Next.js Files to Root**

```bash
# Move all files from the Next.js subfolder to httpdocs root
mv temp/real-woodwork-nextjs/* ./
mv temp/real-woodwork-nextjs/.* ./ 2>/dev/null

# Clean up the temp folder
rm -rf temp
```

### **Step 6: Verify Files Are in Place**

```bash
ls -la
```

You should see:
- ✅ server.js
- ✅ package.json
- ✅ package-lock.json
- ✅ next.config.ts
- ✅ app/
- ✅ components/
- ✅ public/

### **Step 7: Install Dependencies**

```bash
npm install
```

### **Step 8: Build the Application**

```bash
npm run build
```

### **Step 9: Configure Plesk Node.js**

Go to Plesk → Node.js and set:
- **Application Startup File:** `server.js`
- **Application Mode:** `production`
- **Custom environment variables:** `NODE_ENV=production`

### **Step 10: Restart the App**

In Plesk Node.js settings, click **"Restart App"**

---

## 🔄 For Future Updates

When you update the code and push to GitHub:

```bash
# SSH into server
ssh your-username@realwoodwork.co.za

# Navigate to httpdocs
cd /var/www/vhosts/realwoodwork.co.za/httpdocs

# Pull latest changes (if you set up git properly)
git pull origin main

# Or re-clone and move files
rm -rf temp
git clone https://github.com/NeoSeiso/Real-Woodwork-.git temp
cp -r temp/real-woodwork-nextjs/* ./
cp -r temp/real-woodwork-nextjs/.* ./ 2>/dev/null
rm -rf temp

# Rebuild
npm install
npm run build

# Restart in Plesk
```

---

## 🎯 Alternative: Set Up Git Directly in httpdocs

### **Option A: Initialize Git in httpdocs**

```bash
cd /var/www/vhosts/realwoodwork.co.za/httpdocs

# Initialize git
git init

# Add remote
git remote add origin https://github.com/NeoSeiso/Real-Woodwork-.git

# Configure sparse checkout to only get the Next.js folder
git config core.sparseCheckout true
echo "real-woodwork-nextjs/*" >> .git/info/sparse-checkout

# Pull the files
git pull origin main

# Move files from subfolder to root
mv real-woodwork-nextjs/* ./
mv real-woodwork-nextjs/.* ./ 2>/dev/null
rm -rf real-woodwork-nextjs

# Install and build
npm install
npm run build
```

---

## 📝 Quick Reference Commands

### **Full Deployment from Scratch:**

```bash
cd /var/www/vhosts/realwoodwork.co.za/httpdocs
rm -rf *
git clone https://github.com/NeoSeiso/Real-Woodwork-.git temp
mv temp/real-woodwork-nextjs/* ./
mv temp/real-woodwork-nextjs/.* ./ 2>/dev/null
rm -rf temp
npm install
npm run build
```

Then restart the app in Plesk.

### **Update Existing Deployment:**

```bash
cd /var/www/vhosts/realwoodwork.co.za/httpdocs
git clone https://github.com/NeoSeiso/Real-Woodwork-.git temp
cp -r temp/real-woodwork-nextjs/* ./
rm -rf temp
npm install
npm run build
```

Then restart the app in Plesk.

---

## ✅ Checklist

After running the commands:

- [ ] Files are in `/httpdocs/` root (not in a subfolder)
- [ ] `server.js` exists in `/httpdocs/`
- [ ] `package.json` exists in `/httpdocs/`
- [ ] `node_modules/` folder created (after npm install)
- [ ] `.next/` folder created (after npm run build)
- [ ] Plesk Node.js configured with `server.js`
- [ ] App restarted in Plesk
- [ ] Website loads at realwoodwork.co.za

---

**Now your Git deployment will work correctly!** 🎉
