const Delivery = require('../models/delivery'); 
 
// Create a new delivery option 
exports.createDeliveryOption = async (req, res) => { 
    try { 
        const deliveryOption = new Delivery(req.body); 
        await deliveryOption.save(); 
        console.log('Delivery option created successfully:', deliveryOption); // Log successful creation 
        res.status(201).send(deliveryOption); 
    } catch (error) { 
        console.error('Error creating delivery option:', error); // Log error details 
        res.status(400).send({ error: 'Failed to create delivery option' }); 
    } 
}; 
 
// Get all delivery options 
exports.getDeliveryOptions = async (req, res) => { 
    try { 
        const deliveryOptions = await Delivery.find(); 
        console.log('Fetched delivery options successfully:', deliveryOptions); // Log successful fetch 
        res.status(200).send(deliveryOptions); 
    } catch (error) { 
        console.error('Error fetching delivery options:', error); // Log error details 
        res.status(500).send({ error: 'Failed to fetch delivery options' }); 
    } 
}; 
 
// Update a delivery option 
exports.updateDeliveryOption = async (req, res) => { 
    try { 
        const deliveryOption = await Delivery.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
        if (!deliveryOption) { 
            console.error('Delivery option not found for update:', req.params.id); // Log not found error 
            return res.status(404).send({ error: 'Delivery option not found' }); 
        } 
        console.log('Delivery option updated successfully:', deliveryOption); // Log successful update 
        res.status(200).send(deliveryOption); 
    } catch (error) { 
        console.error('Error updating delivery option:', error); // Log error details 
        res.status(400).send({ error: 'Failed to update delivery option' }); 
    } 
}; 
 
// Delete a delivery option 
exports.deleteDeliveryOption = async (req, res) => { 
    try { 
        const deliveryOption = await Delivery.findByIdAndDelete(req.params.id); 
        if (!deliveryOption) { 
            console.error('Delivery option not found for deletion:', req.params.id); // Log not found error 
            return res.status(404).send({ error: 'Delivery option not found' }); 
        } 
        console.log('Delivery option deleted successfully:', req.params.id); // Log successful deletion 
        res.status(204).send(); 
    } catch (error) { 
        console.error('Error deleting delivery option:', error); // Log error details 
        res.status(500).send({ error: 'Failed to delete delivery option' }); 
    } 
}; 