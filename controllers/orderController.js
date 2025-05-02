const Order = require('../models/order'); 
 
// Create a new order 
exports.createOrder = async (req, res) => { 
    try { 
        const order = new Order(req.body); 
        await order.save(); 
        console.log('Order created successfully:', order); // Log successful creation 
        res.status(201).send(order); 
    } catch (error) { 
        console.error('Error creating order:', error); // Log error details 
        res.status(400).send({ error: 'Failed to create order' }); 
    } 
}; 
 
// Get all orders 
exports.getOrders = async (req, res) => { 
    try { 
        const orders = await Order.find().populate('productId categoryId'); 
        console.log('Fetched orders successfully:', orders); // Log successful fetch 
        res.status(200).send(orders); 
    } catch (error) { 
        console.error('Error fetching orders:', error); // Log error details 
        res.status(500).send({ error: 'Failed to fetch orders' }); 
    } 
}; 
 
// Update an order 
exports.updateOrder = async (req, res) => { 
    try { 
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
        if (!order) { 
            console.error('Order not found for update:', req.params.id); // Log not found error 
            return res.status(404).send({ error: 'Order not found' }); 
        } 
        console.log('Order updated successfully:', order); // Log successful update 
        res.status(200).send(order); 
    } catch (error) { 
        console.error('Error updating order:', error); // Log error details 
        res.status(400).send({ error: 'Failed to update order' }); 
    } 
}; 
 
// Delete an order 
exports.deleteOrder = async (req, res) => { 
    try { 
        const order = await Order.findByIdAndDelete(req.params.id); 
        if (!order) { 
            console.error('Order not found for deletion:', req.params.id); // Log not found error 
            return res.status(404).send({ error: 'Order not found' }); 
        } 
        console.log('Order deleted successfully:', req.params.id); // Log successful deletion 
        res.status(204).send(); 
    } catch (error) { 
        console.error('Error deleting order:', error); // Log error details 
        res.status(500).send({ error: 'Failed to delete order' }); 
    } 
};