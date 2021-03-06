import React from 'react';
import TextField from '@material-ui/core/TextField';

class StackDescInput extends React.Component {
    handleNext = () => {
        const description = this.state && this.state.description ? this.state.description : this.props.fieldValues.description || '';
        let wordCount = description.split(' ');
        if(wordCount.length < 3) {
            this.props.handleError('Please enter a few words')
        } else {
            this.props.handleError(null);
            let data = { description }
            this.props.saveAndContinue(data)
        }
    }
    handleChange = (e) => {
        if (e.key === 'Enter') {
            this.handleNext();
        }
        this.setState({
            description: e.target.value
        })
    }
    goBack = () => {
        this.props.previousStep()
    }
    render() {
        let error;
        if(this.props.error) {
            error = <div className="red" aria-live="polite">
                        {this.props.error}
                    </div>
        }
        return (
            <div>
                <p>As the author of this stack, please provide a brief description</p>
                <br/>
                {error}
                <TextField 
                    tabIndex="1"
                    multiline
                    rows="4"
                    className="full-width"
                    defaultValue={this.props.fieldValues.description}
                    onKeyPress={this.handleChange}
                    placeholder="Author description"
                    name="stackDescription"
                    onChange={this.handleChange} 
                />
                <br/>
                <div className="nav-item">
                    <i className="material-icons icon-lg" onClick={this.goBack}>arrow_back</i>
                </div>
                <div className="nav-item">
                    <i className="material-icons icon-lg" onClick={this.handleNext}>arrow_forward</i>
                </div>

            </div>
        )
    }
}

export default StackDescInput;



                       