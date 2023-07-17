import './Modal.css';
import CloseIcon from '@mui/icons-material/Close';

import React from 'react'

type Props = {
    isVisible : boolean,
    handleExitEvent : () => void
}

const itemsList : string[] = [];

function ShoppingBagModal({isVisible, handleExitEvent}: Props) {
  return (
    <div className={`ShoppingBagModal ${isVisible ? "pop": "hidden"}`}>
        <div className="ShoppingBagModal__header">
            <p>Shopping Bag</p>
            <button className="ShoppingBagModal__header-btn button__clearStyle" onClick={handleExitEvent}>
                <CloseIcon/>
            </button>
        </div>
        <div className="ShoppingBagModal__bagItems">
            {itemsList.length === 0 ? "Your cart is empty" : itemsList}
        </div>
        
    </div>
  )
}

export default ShoppingBagModal;