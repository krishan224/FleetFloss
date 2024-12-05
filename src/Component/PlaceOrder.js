import { useReducer, useState } from 'react';
import './PlaceOrder.css';

const initialState = {
  customerName: '',
  email: '',
  phoneNumber: '',
  shoeType: '',
  cleaningType: '',
  instructions: '',
  isSubmitting: false,
  errorMessage: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD_VALUE':
      return { ...state, [action.field]: action.value };
    case 'SUBMIT_FORM':
      return { ...state, isSubmitting: true };
    case 'SUBMIT_SUCCESS':
      return {
        ...initialState,
        isSubmitting: false,
      };
    case 'SUBMIT_FAILURE':
      return {
        ...state,
        isSubmitting: false,
        errorMessage: 'Order placement failed!',                                                      
      };
    default:
      return state;
  }
}

function PlaceOrder() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cleaningType, setCleaningType] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT_FORM' });

    try {
      const response = await fetch('/place-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerName: state.customerName,
          email: state.email,
          phoneNumber: state.phoneNumber,
          shoeType: state.shoeType,
          cleaningType,
          instructions,
        }),
      });

      const data = await response.json();

      if (data.message === 'Order placed successfully!') {
        dispatch({ type: 'SUBMIT_SUCCESS' });
        alert('Order placed successfully!');
      } else {
        dispatch({ type: 'SUBMIT_FAILURE' });
        alert('Order placement failed!');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      dispatch({ type: 'SUBMIT_FAILURE' });
    }
  };

  const handleFieldChange = (e) => {
    dispatch({
      type: 'SET_FIELD_VALUE',
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div className='place-orderd'>
      <form className="place-order-form" onSubmit={handleSubmit}>
      <label className="place-order-label">
        Customer Name
        <input
          className="place-order-input"
          type="text"
          name="customerName"
          value={state.customerName}
          onChange={handleFieldChange}
          required
        />
      </label>
      <label className="place-order-label">
        Email
        <input
          className="place-order-input"
          type="email"
          name="email"
          value={state.email}
          onChange={handleFieldChange}
          required
        />
      </label>
      <label className="place-order-label">
        Phone Number
        <input
          className="place-order-input"
          type="tel"
          name="phoneNumber"
          value={state.phoneNumber}
          onChange={handleFieldChange}
          required
        />
      </label>
      <label className="place-order-label">
        Shoe Type
        <select
          className="place-order-select"
          name="shoeType"
          value={state.shoeType}
          onChange={handleFieldChange}
          required
        >
          <option value="">Select a shoe type</option>
          <option value="leather">Leather</option>
          <option value="suede">Suede</option>
          <option value="canvas">Canvas</option>
          <option value="synthetic">Synthetic</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label className="place-order-label">
        Cleaning Type
        <select className="place-order-select" value={cleaningType} onChange={(e) => setCleaningType(e.target.value)} required>
          <option value="">Select a cleaning type</option>
          <option value="deep-clean">Deep Clean</option>
          <option value="spot-cleaning">Spot Cleaning</option>
        </select>
      </label>
      <label className="place-order-label">
        Instructions
        <textarea className="place-order-textarea" value={instructions} onChange={(e) => setInstructions(e.target.value)} required></textarea>
      </label>
      <button className="place-order-button" type="submit">Place Order</button>
    </form>
  </div>
  );
}

export default PlaceOrder;
