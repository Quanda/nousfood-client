import React from 'react';

class Stack extends React.Component {

    render() {
        const { code } = this.props.data;
        let saveButton, deleteButton;
        if (this.props.loggedIn) {
            if(this.props.saved) {
                deleteButton = (
                    <button className="delete-stack-btn" onClick={() => this.props.onDelete(code)}>Delete</button>
                )
            } else {
                saveButton = (
                    <button onClick={() => this.props.onSave(code)} id="save-stack-btn">Save</button>
                )
            }
        }
        return (
            <div className="stack">
                <h3>{this.props.data.name}</h3><br/>
                <div className="stack-contents">
                    <h5 className="stack-header">Contents:</h5>
                    <ul>
                        {this.props.data.contents.map( (element, index) => 
                            <li key={index}>{element}</li>
                        )}
                    </ul>
                </div>
                {deleteButton}
                {saveButton}
            </div>
        )
    }
}
      
export default Stack;

