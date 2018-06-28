import React from 'react';
import AddBtn from '../assets/images/glyphicons-433-plus.png';

export class SavedNootropics extends React.Component {

    render(props) {
        const savedNootropics = this.props.savedNootropics.map((savedNoop, index) => (
            <div className="user-nootropic" key={index}>
                <h3>{savedNoop.name}</h3>
            </div>
        ))
        return (
            <div className="saved-nootropics">
               <section className="grid">
                    <header>
                        <h2>nootropics</h2>
                    </header>
                    <img src={AddBtn}/>
                    {savedNootropics}
                </section> 
            </div>
        );
    }
}

export default SavedNootropics;
