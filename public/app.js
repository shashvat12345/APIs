const fetchProducts = async () => { 
    try { 
        const response = await fetch('/products'); 
        if (!response.ok) { 
            throw new Error(`HTTP error! status: ${response.status}`); 
        } 
        const products = await response.json(); 
        const productSection = document.getElementById('product-section'); 
        productSection.innerHTML = '<h2>Products</h2>' + products.map(product => `<div>${product.name} - $${product.price}</div>`).join(''); 
        console.log('Products fetched successfully'); // Log successful fetch 
    } catch (error) { 
        console.error('Error fetching products:', error); // Log error details 
    } 
}; 
 
const fetchCategories = async () => { 
    try { 
        const response = await fetch('/categories'); 
        if (!response.ok) { 
            throw new Error(`HTTP error! status: ${response.status}`); 
        } 
        const categories = await response.json(); 
        const categorySection = document.getElementById('category-section'); 
        categorySection.innerHTML = '<h2>Categories</h2>' + categories.map(category => `<div>${category.name}</div>`).join(''); 
        console.log('Categories fetched successfully'); // Log successful fetch 
    } catch (error) { 
        console.error('Error fetching categories:', error); // Log error details 
    } 
}; 
 
const fetchOrders = async () => { 
    try { 
        const response = await fetch('/orders'); 
        if (!response.ok) { 
            throw new Error(`HTTP error! status: ${response.status}`); 
        } 
        const orders = await response.json(); 
        const orderSection = document.getElementById('order-section'); 
        orderSection.innerHTML = '<h2>Orders</h2>' + orders.map(order => `<div>Order ID: ${order._id}</div>`).join(''); 
        console.log('Orders fetched successfully'); // Log successful fetch 
    } catch (error) { 
        console.error('Error fetching orders:', error); // Log error details 
    } 
}; 
 
const fetchDeliveryOptions = async () => { 
    try { 
        const response = await fetch('/delivery-options'); 
        if (!response.ok) { 
            throw new Error(`HTTP error! status: ${response.status}`); 
        } 
        const deliveryOptions = await response.json(); 
        const deliverySection = document.getElementById('delivery-section'); 
        deliverySection.innerHTML = '<h2>Delivery Options</h2>' + deliveryOptions.map(option => `<div>${option.method} - $${option.cost}</div>`).join(''); 
        console.log('Delivery options fetched successfully'); // Log successful fetch 
    } catch (error) { 
        console.error('Error fetching delivery options:', error); // Log error details 
    } 
}; 
 
// Initialize the app by fetching data 
const init = async () => { 
    await fetchProducts(); 
    await fetchCategories(); 
    await fetchOrders(); 
    await fetchDeliveryOptions(); 
}; 
 
window.onload = init; 