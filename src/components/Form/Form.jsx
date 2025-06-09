import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');
    const [telefono, setTelefono] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const validateEmail = (mail) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(false);

        if (!nombre.trim()) {
            setError('Por favor ingresa tu nombre.');
            return;
        }
        if (!apellido.trim()) {
            setError('Por favor ingresa tu apellido.');
            return;
        }
        if (!validateEmail(email)) {
            setError('Por favor ingresa un email válido.');
            return;
        }
        if (email !== email2) {
            setError('Los emails no coinciden.');
            return;
        }
        if (!telefono.trim()) {
            setError('Por favor ingresa tu teléfono.');
            return;
        }
        setError('');
        setSuccess(true);

    };

    return (
        <form className="form-contacto" onSubmit={handleSubmit}>
            <div className="form-row">
                <input
                    className="form-input-rounded"
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    autoComplete="off"
                    required
                />
                <input
                    className="form-input-rounded"
                    type="text"
                    placeholder="Apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    autoComplete="off"
                    required
                />
            </div>
            <div className="form-row">
                <input
                    className="form-input-rounded"
                    type="email"
                    placeholder="ejemplo@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                    required
                />
                <input
                    className="form-input-rounded"
                    type="tel"
                    placeholder="telefono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    autoComplete="off"
                    required
                />
            </div>
            <div className="form-row">
                <input
                    className="form-input-rounded"
                    type="email"
                    placeholder="Repetir email"
                    value={email2}
                    onChange={(e) => setEmail2(e.target.value)}
                    autoComplete="off"
                    required
                />
            </div>
            {error && <div className="form-error">{error}</div>}
            <button className="btn-enviar" type="submit">
                ENVIAR
            </button>
            {success && (
                <div className="form-success">
                    ¡Mensaje enviado correctamente!
                </div>
            )}
        </form>
    );
};

export default Form;