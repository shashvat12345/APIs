const Category = require('../models/category'); 
 
// Create a new category 
exports.createCategory = async (req, res) => { 
    try { 
        const category = new Category(req.body); 
        await category.save(); 
        res.status(201).send(category); 
    } catch (error) { 
        console.error(error); 
        res.status(400).send({ error: 'Failed to create category' }); 
    } 
}; 
 
// Get all categories 
exports.getCategories = async (req, res) => { 
    try { 
        const categories = await Category.find(); 
        res.status(200).send(categories); 
    } catch (error) { 
        console.error(error); 
        res.status(500).send({ error: 'Failed to fetch categories' }); 
    } 
}; 
 
// Update a category 
exports.updateCategory = async (req, res) => { 
    try { 
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
        if (!category) { 
            return res.status(404).send({ error: 'Category not found' }); 
        } 
        res.status(200).send(category); 
    } catch (error) { 
        console.error(error); 
        res.status(400).send({ error: 'Failed to update category' }); 
    } 
}; 
 
// Delete a category 
exports.deleteCategory = async (req, res) => { 
    try { 
        const category = await Category.findByIdAndDelete(req.params.id); 
        if (!category) { 
            return res.status(404).send({ error: 'Category not found' }); 
        } 
        res.status(204).send(); 
    } catch (error) { 
        console.error(error); 
        res.status(500).send({ error: 'Failed to delete category' }); 
    } 
}; 