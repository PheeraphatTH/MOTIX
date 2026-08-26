# 🚀 วิธีการ Deploy เว็บไซต์ Motix Auto Parts ขึ้น GitHub Pages

โปรเจกต์นี้ได้รับการตั้งค่าไฟล์ Deploy และโครงสร้าง Router ให้พร้อมใช้งานกับ **GitHub Pages** ได้ทันทีแล้วครับ

---

## 📌 วิธีที่ 1: อัปเดตอัตโนมัติด้วย GitHub Actions (แนะนำ)

ไฟล์ `.github/workflows/deploy.yml` ได้ถูกสร้างไว้เรียบร้อยแล้ว ทุกครั้งที่คุณ Push โค้ดขึ้น GitHub ระบบจะ Build และ Deploy เว็บไซต์ให้อัตโนมัติ:

1. **สร้าง Repository บน GitHub** (เช่น ชื่อ `motix-autoparts`)
2. **Push โค้ดขึ้น GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git
   git push -u origin main
   ```
3. **เปิดใช้งาน GitHub Pages**:
   - ไปที่หน้า Repository บน GitHub -> **Settings** -> **Pages**
   - ในหัวข้อ **Build and deployment** > **Source**: เลือก **GitHub Actions**
   - ระบบจะเริ่มรัน Workflow และ Deploy เว็บไซต์ขึ้น `https://<YOUR_USERNAME>.github.io/<YOUR_REPO_NAME>/` ให้โดยอัตโนมัติ

---

## 📌 วิธีที่ 2: Deploy ด้วยคำสั่ง npm run deploy (เร็วที่สุด)

คุณสามารถสั่ง Deploy โดยตรงจาก Terminal ในเครื่องได้ทันที:

```bash
npm run deploy
```

> **หมายเหตุ**: คำสั่งนี้จะทำการ Build ไฟล์ลงใน `dist/` และอัปโหลดไปยัง Branch `gh-pages` โดยอัตโนมัติ
> - ไปที่ **Settings** -> **Pages** -> ใน **Source** เลือก **Deploy from a branch** -> เลือก Branch **gh-pages** และกด Save
