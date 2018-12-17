import React, { Component } from 'react';
import {connect} from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from "../store/actions";

class Persons extends Component {
    state = {
        persons: []
    };

    personAddedHandler = (name, age) => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: name,
            age: age
        };
        console.log("Adding new person: ", newPerson);
        this.props.personAdded(newPerson);
/*        this.setState( ( prevState ) => {
            return { persons: prevState.persons.concat(newPerson)}
        } );*/
    };

    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    };

    render () {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.personDeleted(person.id)}/>
                ))}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        persons: state.persons
    };
};


const mapDispatchToProps = dispatch =>{
    return{
        personAdded: (person) => dispatch({type: actionTypes.ADD_PERSON, person: person}),
        personDeleted: (personId) => dispatch({type: actionTypes.DELETE_PERSON, personId: personId})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);