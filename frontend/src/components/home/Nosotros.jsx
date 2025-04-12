import React from "react";
import { Link } from "react-router-dom";
import '../../scss/layout/_nosotros.scss';

export default function Nosotros() {
    return (
        <div id="nosotros" className="nosotros">
            <div className="nosotros-container">
                <div className="nosotros-background">
                </div>
                <div className="titulo">
                    <h1>SOBRE NOSOTROS</h1>
                </div>
                <div className="enlaces">
                    <ul>
                        <li className="menu">
                             <Link to="/historia">HISTORIA</Link>
                        </li>
                        <li className="menu">
                             <Link to="/repertorio">REPERTORIO</Link>
                        </li>
                        <li className="menu">
                        <Link to="/equipo">EQUIPO</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}