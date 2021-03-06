import React from 'react';
import Modal from './modal';
import ModalContainer from './modal-container';
import './styles/card.css';

class Card extends React.Component {
    state = {
        open: false
    };
    onOpenModal = () => {
        this.setState({ open: true });
    }
    onCloseModal = () => {
        this.setState({ open: false });
    }
    
    render() {
        let name, data, type;
        if (this.props.type === 'nootropic') {
            name = this.props.data.name;
            data = this.props.data;
            type = 'nootropic';

        } else if (this.props.type === 'stack') {
            name = this.props.data.name;
            data = this.props.data;
            type = 'stack';
        }

        return (
            <div>
                <div 
                    type={this.props.type}
                    className={this.props.isSelected ? `card-item light border selected-card` : `card-item light-border`}
                    onClick={() => this.onOpenModal()}
                >
                    <h4>{name}</h4>
                </div>
                <Modal 
                    show={this.state.open} 
                    onClose={this.onCloseModal}
                    modalLevel="1"
                >
                    <ModalContainer
                        header={<div className="modal-header">{name}<i className="material-icons white right" onClick={() => this.onCloseModal()}>cancel</i></div>}
                        env={this.props.env}
                        saved={this.props.isSaved}
                        public={this.props.isPublic}
                        type={type}
                        data={data}
                        onDelete={this.props.onDelete}
                        onSave={this.props.onSave}
                        onExit={this.onCloseModal}
                        selectable={this.props.selectable}
                        isSelected={this.props.isSelected}
                        onSelectNoop={this.props.onSelectNoop}
                        onDeSelectNoop={this.props.onDeSelectNoop}
                        closeModal={this.onCloseModal}
                    />
                </Modal>
            </div>
        );  
      }
}

export default Card;
