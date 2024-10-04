import React, { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const validateForm = () => {
        let valid = true;
        const newErrors = { name: '', phone: '', email: '' };

        if (formData.name.trim() === '') {
            newErrors.name = 'El nombre es obligatorio';
            valid = false;
        }

        const phonePattern = /^[0-9]{7,}$/;
        if (!phonePattern.test(formData.phone)) {
            newErrors.phone = 'El teléfono debe contener al menos 7 dígitos';
            valid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(formData.email)) {
            newErrors.email = 'El correo electrónico no es válido';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="phone">Teléfono:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                {errors.phone && <p className="error-message">{errors.phone}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <button type="submit" disabled={!formData.name || !formData.phone || !formData.email}>Crear Orden</button>
        </form>
    );
};

export default CheckoutForm;