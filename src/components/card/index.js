import React from 'react';
import './card.css';
/**
 * Define a component for the cards displayed in the tables
 */

export default function index({number, type}) {
    return (
        <div className="card">
            <div className="card__number">
                {number}
            </div>
            <div className="card__type">
                <i class="fas fa-credit-card"></i>
                <span>{type}</span>
            </div>
        </div>
    )
}
