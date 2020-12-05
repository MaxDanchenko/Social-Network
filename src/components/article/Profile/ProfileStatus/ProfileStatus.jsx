import React from 'react';
import Styles from './ProfileStatus.module.scss'

export class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateStatus = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateStatus = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return <>
            <div className={Styles.statusWrap}>
                {!this.state.editMode &&
                <p onDoubleClick={this.activateStatus} className={Styles.status}>
                    {this.props.status || 'Write your status here'}
                </p>}
            </div>
            <div>
                {this.state.editMode &&
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateStatus}
                       className={Styles.statusInput} type="textarea" maxLength={50}
                       value={this.state.status}/>
                }
            </div>


        </>
    }
}
