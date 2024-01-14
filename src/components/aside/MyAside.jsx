
import { Input } from "@/components/input/input";
import './MyAside.css';
import React, { useState} from 'react';




const MyAside = ({onFilterChange}) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [client, setClient] = useState('');
    const [product, setProduct] = useState('');
    const [service, setService] = useState('');

    const handleFilterChange = () => {
        onFilterChange({ startDate, endDate, client, product, service});
        
    }
    return (
        <aside className="my-aside">
            <div className="company-info">
                <img className="company-logo" alt="Logo" />
                <p className="company-name">Nome da Empresa Logada</p>
            </div>
            <div className="profile-link">
                <p title="Perfil" className="profile-icon">
                    <a href="/profile"><i className="bi bi-person-circle"></i></a>
                </p>
            </div>
            <div className="filters">
                <p className="filter-title">Filtros</p>
                <label htmlFor="startDate">Data Início</label>
                <Input height="30px" type="date" id="startDate" onChange={(e) => setStartDate(e.target.value)}  />
                <label htmlFor="endDate">Data Fim</label>
                <Input height="30px" type="date" id="endDate" onChange= {(e) => setEndDate(e.target.value)} />
                <label htmlFor="client">Cliente</label>
                <Input height="30px" id="client" onChange={() => setClient(e.target.value)} />
                <label htmlFor="product">Produto</label>
                <Input height="30px" id="product" onChange={(e) => setProduct(e.target.value)} />
                <label htmlFor="service">Serviço</label>
                <Input height="30px" id="service" onChange={(e) => setService(e.target.value)} />
                <button onClick={handleFilterChange} >Aplicar Filtros</button>
            </div>
            <div className="logout">
                <p title="Logout" className="logout-icon">
                    <a href="/login"><i className="bi bi-box-arrow-in-right"></i></a>
                </p>
                <div className="info">
                    <p title="Informações sobre Kósmos Tecnologia" className="info-icon">
                        <i className="bi bi-info-circle"></i>
                    </p>
                </div>
            </div>
        </aside>
    );
};

export default MyAside;
