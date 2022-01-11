import React from 'react'

class BoardForm extends React.Component {
    constructor (props){
        super(props)
        this.state = this.props.board;

        this.processCreate = this.processCreate.bind(this)
    }

    updateTitle (e) {
        return e => (this.setState({['title']: e.target.value}))
    }

    processCreate () {
        debugger
        this.props.createBoard(this.state, parseInt(this.props.currentWorkspaceId))
    }
 
    render(){
        
        return (
            <div className='create-board-form-container'>
                <form onSubmit={this.processCreate}>
                    <label>Board Title
                        <input type='text' 
                            value={this.state.title}
                            onChange={this.updateTitle()}
                        />
                    </label>
                <button className='add-board-button' type='submit'>Add Board</button>
                </form>
            </div>
        )
    }
}

export default BoardForm;