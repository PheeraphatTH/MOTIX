import React, { createContext, useContext, useState, useEffect } from 'react';
import { promotions } from '../data/promotions';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  // 1. Cart state (with LocalStorage persistence)
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('motix_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // 2. Wishlist state
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('motix_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // 3. Vehicle Finder state
  const [selectedVehicle, setSelectedVehicle] = useState(() => {
    try {
      const saved = localStorage.getItem('motix_selected_vehicle');
      return saved ? JSON.parse(saved) : { type: 'car', brand: '', model: '', year: '' };
    } catch {
      return { type: 'car', brand: '', model: '', year: '' };
    }
  });

  // 4. Applied Coupon
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  // 5. Quick View modal product
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // 6. User Auth mock state
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('motix_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // 7. Toast Notification state
  const [toast, setToast] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('motix_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('motix_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('motix_selected_vehicle', JSON.stringify(selectedVehicle));
  }, [selectedVehicle]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('motix_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('motix_user');
    }
  }, [user]);

  const showToast = (message, severity = 'success') => {
    setToast({ open: true, message, severity });
  };

  const closeToast = () => {
    setToast(prev => ({ ...prev, open: false }));
  };

  // Cart operations
  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(item => item.product.id === product.id);
      if (existingIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingIndex].quantity += quantity;
        return newCart;
      } else {
        return [...prevCart, { product, quantity, vehicle: selectedVehicle.model || null }];
      }
    });
    showToast(`เพิ่ม "${product.name}" ลงในตะกร้าแล้ว!`, 'success');
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
    showToast('ลบสินค้าออกจากตะกร้าเรียบร้อย', 'info');
  };

  const updateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  // Wishlist operations
  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        showToast(`นำ "${product.name}" ออกจากรายการโปรดแล้ว`, 'info');
        return prev.filter(item => item.id !== product.id);
      } else {
        showToast(`บันทึก "${product.name}" ในรายการโปรดแล้ว!`, 'success');
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  // Vehicle filter operations
  const updateVehicleFilter = (filter) => {
    setSelectedVehicle(filter);
    if (filter.model) {
      showToast(`กรองอะไหล่ตรงรุ่นสำหรับ ${filter.brand} ${filter.model} (${filter.year || 'ทุกปี'})`, 'info');
    }
  };

  const clearVehicleFilter = () => {
    setSelectedVehicle({ type: 'car', brand: '', model: '', year: '' });
    showToast('ล้างตัวกรองรุ่นรถแล้ว แสดงอะไหล่ทั้งหมด', 'info');
  };

  // Coupon calculations
  const applyCoupon = (code) => {
    const cleanCode = code.trim().toUpperCase();
    const found = promotions.find(p => p.code === cleanCode);
    if (found) {
      setAppliedCoupon(found);
      showToast(`ใช้โค้ดส่วนลด "${found.code}" สำเร็จ! (${found.discount})`, 'success');
      return { success: true, message: 'ใช้โค้ดสำเร็จ' };
    } else {
      showToast('ไม่พบโค้ดส่วนลดนี้ หรือโค้ดหมดอายุ', 'error');
      return { success: false, message: 'โค้ดไม่ถูกต้อง' };
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('ยกเลิกโค้ดส่วนลดแล้ว', 'info');
  };

  // Calculations
  const cartSubtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const cartTotalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.discountPercent > 0) {
      discountAmount = Math.round((cartSubtotal * appliedCoupon.discountPercent) / 100);
    } else if (appliedCoupon.code === 'FREESHIP') {
      discountAmount = 0; // Handled in shipping
    }
  }

  const shippingFee = cartSubtotal >= 1500 || appliedCoupon?.code === 'FREESHIP' || cartSubtotal === 0 ? 0 : 60;
  const cartGrandTotal = Math.max(0, cartSubtotal - discountAmount + shippingFee);

  // User auth mock
  const loginUser = (email, name = 'คุณสมาชิก MOTIX') => {
    const newUser = {
      name,
      email,
      phone: '089-123-4567',
      points: 250,
      tier: 'Gold Member',
    };
    setUser(newUser);
    showToast(`ยินดีต้อนรับ ${name} เข้าสู่ระบบ`, 'success');
  };

  const logoutUser = () => {
    setUser(null);
    showToast('ออกจากระบบเรียบร้อยแล้ว', 'info');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartSubtotal,
        cartTotalItems,
        shippingFee,
        discountAmount,
        cartGrandTotal,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        wishlist,
        toggleWishlist,
        isInWishlist,
        selectedVehicle,
        updateVehicleFilter,
        clearVehicleFilter,
        quickViewProduct,
        setQuickViewProduct,
        user,
        loginUser,
        logoutUser,
        toast,
        showToast,
        closeToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
