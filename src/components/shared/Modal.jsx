import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import styles from '../styles.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  closeModal = ({ target, currenttarget, code }) => {
    if (target === currenttarget || code === 'Escape') {
      this.props.close();
    }
  };

  componentDidMount = () => {
    document.addEventListener('keydown', this.closeModal);
  };

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.closeModal);
  };

  render() {
    return createPortal(
      <div className={styles.Overlay} onClick={this.closeModal}>
        <span className={styles.closeButton} onClick={this.props.close}>
          X
        </span>
        <div className={styles.Modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  close: PropTypes.func.isRequired,
};
