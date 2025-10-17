#  Test Intern Project – Next.js App Router

โปรเจกต์นี้เป็นแบบทดสอบการเขียน Next.js (App Router)  
สร้างด้วยคำสั่ง `npx create-next-app@Test-inter`  
ใช้ TypeScript + App Router (`/app` directory)

---

## ลิงก์สรุปโจทย์
--> [ดูรายละเอียดโจทย์ทั้งหมดที่นี่]([https://docs.google.com/document/d/1NJ0t3r2_IicACZdtJZJgJE56HObBKMP5LemH4DckhrY/edit?usp=sharing](https://drive.google.com/drive/folders/1QCHZJjQbVHQ8Nl8VAeomhYKBrTtG_h1l?usp=sharing))

---

## โจทย์และสิ่งที่ทำ

### 1️ Counter Button
สร้างปุ่ม “Click me” ที่นับจำนวนครั้งที่คลิก โดยใช้ `useState`.

### 2️ Fruit List
สร้าง array ของผลไม้ `['Apple', 'Banana', 'Orange']`  
และแสดงผลเป็น `<ul><li>...</li></ul>` โดยมี `key` ที่เหมาะสม.

### 3️ Alert Button
เมื่อคลิกปุ่ม ให้ alert ข้อความว่า “Button clicked!”.

### 4️ Blue Box
สร้าง `<div>` สีพื้นหลังฟ้า (`backgroundColor: 'skyblue'`)  
และมีข้อความสีขาวด้านใน.

### 5️ Fetch Posts
ดึงข้อมูลจาก API  
`https://jsonplaceholder.typicode.com/posts`  
และแสดง `title` ของโพสต์ พร้อม `loading` และ `error` state.

### 6️ Name Form (with LocalStorage)
มีช่องกรอกชื่อและปุ่ม Submit  
เมื่อ Submit ให้แสดงชื่อด้านล่าง  
และเมื่อรีเฟรช หน้าก็ยังจำชื่อได้.

### 7️ ProductCard (Props + Routing)
สร้าง Component `ProductCard` ที่รับ `props: title, price, image`  
แสดงสินค้าทั้งหมด 3 ชิ้นใน layout แบบ Grid (3 คอลัมน์)  
และเมื่อคลิกจะพาไปหน้า `/product/[id]`.

---

## การรันโปรเจกต์

```bash
# ติดตั้ง dependencies
npm install

# รันเซิร์ฟเวอร์
npm run dev

# เปิดในเบราว์เซอร์
http://localhost:3000
