import React from 'react';
import { Input } from "@/components/input/input";
import './MyAside.css';

const MyAside = () => {
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
                <Input height="30px" type="date" id="startDate" />
                <label htmlFor="endDate">Data Fim</label>
                <Input height="30px" type="date" id="endDate" />
                <label htmlFor="client">Cliente</label>
                <Input height="30px" id="client" />
                <label htmlFor="product">Produto</label>
                <Input height="30px" id="product" />
                <label htmlFor="service">Serviço</label>
                <Input height="30px" id="service" />
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
