import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelection}
        contentLabel="Selected Option"
    >
        <h3>Selected option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelection}>Okay</button>
    </Modal>
);

export default OptionModal;