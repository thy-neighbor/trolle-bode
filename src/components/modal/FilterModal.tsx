import React, { forwardRef } from 'react'
import './Modal.css';

type Props = {
    isVisible : boolean,
    handleExitEvent : () => void
}

function FilterModal({isVisible, handleExitEvent}: Props , ref:  React.Ref<HTMLDivElement>) {
  return (
    <div className={`FilterModal__container ${isVisible ? "pop": "hidden"}`} ref={ref}>
        <div className='FilterModal__section'></div>
        <div className='FilterModal__section'></div>
        <div className='FilterModal__section'></div>
        <div className='FilterModal__section'>
            <button className="FilterModal__button button__clearStyle">
                Apply
            </button>
        </div>
    </div>
  )
};

// Forward the ref to the component
const FilterModalWithRef = forwardRef<HTMLDivElement, Props>(FilterModal);

export default FilterModalWithRef;
