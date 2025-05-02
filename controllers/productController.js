const Product = require('../models/product'); 
 
// Create a new product 
exports.createProduct = async (req, res) => { 
    try { 
        const product = new Product(req.body); 
        await product.save(); 
        res.status(201).send(product); 
    } catch (error) { 
        console.error(error); 
        res.status(400).send({ error: 'Failed to create product' }); 
    } 
}; 
 
// Get all products 
exports.getProducts = async (req, res) => { 
    try { 
        const products = await Product.find(); 
        res.status(200).send(products); 
    } catch (error) { 
        console.error(error); 
        res.status(500).send({ error: 'Failed to fetch products' }); 
    } 
}; 
 
// Update a product 
exports.updateProduct = async (req, res) => { 
    try { 
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
        if (!product) { 
            return res.status(404).send({ error: 'Product not found' }); 
        } 
        res.status(200).send(product); 
    } catch (error) { 
        console.error(error); 
        res.status(400).send({ error: 'Failed to update product' }); 
    } 
}; 
 
// Delete a product 
exports.deleteProduct = async (req, res) => { 
    try { 
        const product = await Product.findByIdAndDelete(req.params.id); 
        if (!product) { 
            return res.status(404).send({ error: 'Product not found' }); 
        } 
        res.status(204).send(); 
    } catch (error) { 
        console.error(error); 
        res.status(500).send({ error: 'Failed to delete product' }); 
    } 
}; 