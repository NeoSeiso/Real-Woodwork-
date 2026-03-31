# 🚀 Simple Git Deployment to Plesk

## ✅ Project Structure is Now Clean!

The Next.js files are now at the **root level** of the repository. You can pull directly into `/httpdocs/` without moving anything!

---

## 📥 Deploy to Plesk (Simple Method)

### **Step 1: SSH into Your Server**

```bash
ssh your-username@realwoodwork.co.za
```

### **Step 2: Navigate to httpdocs**

```bash
cd /var/www/vhosts/realwoodwork.co.za/httpdocs
```

### **Step 3: Pull the Repository**

```bash
# If first time, clone the repo
git clone https://github.com/NeoSeiso/Real-Woodwork-.git .

# If updating, just pull
git pull origin main
```

### **Step 4: Install Dependencies**

```bash
npm install
```

### **Step 5: Build the Application**

```bash
npm run build
```

### **Step 6: Configure Plesk**

Go to Plesk → Node.js:
- **Application Startup File:** `server.js`
- **Application Mode:** `production`
- **Environment:** `NODE_ENV=production`

### **Step 7: Configure Nginx**

Go to Apache & nginx Settings → Additional nginx directives:

```nginx
location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```

### **Step 8: Restart App**

In Plesk Node.js settings, click **"Restart App"**

---

## 🔄 Future Updates

When you push changes to GitHub:

```bash
cd /var/www/vhosts/realwoodwork.co.za/httpdocs
git pull origin main
npm install
npm run build
```

Then restart the app in Plesk.

---

## ✅ That's It!

No more moving files around. Just `git pull` and you're done! 🎉
