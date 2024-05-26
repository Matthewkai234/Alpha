import React from 'react';
import './style.css';

export function Header() {
  const handleAddProduct = () => {
    fetch('http://localhost:3002/add-product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    })
    .then(response => {
      // هنا يمكنك التحقق من رمز الحالة للتأكد من نجاح الطلب
      if (response.status === 200) {
        // إعادة توجيه المستخدم إلى صفحة "Add Product" بعد تنفيذ الإجراءات اللازمة على الخادم
        window.location.href = 'http://localhost:3001/add-product';
      } else {
        console.error('حدث خطأ في الخادم:', response.statusText);
      }
    })
    .catch(error => console.error('حدث خطأ:', error));
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" alt="Logo" src="https://c.animaapp.com/VABn9zZH/img/image-5@2x.png" />
        <div className="skin-clinic">
          <span className="title">Lobo </span>
          <span className="title2">MotorSport</span>
        </div>
      </div>
      <nav className="nav-links">
        <a href="/shop" className="nav-link">Shop</a>
        <a href="/about" className="nav-link">About Us</a>
        <a href="/contact" className="nav-link">Contact</a>
        <button onClick={handleAddProduct} className="nav-link">Add Product</button>
      </nav>
      <div className="icons">
        <div className="mdi-account-alert icon" />
        <div className="akar-icons-search icon" />
        <div className="heart-icon icon" />
        <div className="shopping-cart icon" />
      </div>
    </header>
  );
}
