import {connect, useSelector} from 'react-redux';
import WorkspaceShow from './workspace_show';
import { fetchAllWorkspaceData } from '../../../actions/workspace_actions'
import {boardsSelector} from '../../selectors/boards_selector'
// import { logout } from '../../actions/session_actions'

const mSTP = (state, ownProps) => ({
        workspaces: state.entities.workspaces[state.session.id],
        currentUser: state.entities.users[state.session.id],
        boards: boardsSelector(state.entities.boards, ownProps.match.params.workspace_id)
})


const mDTP = (dispatch) => ({
    fetchAllWorkspaceData: (userId) => (dispatch(fetchAllWorkspaceData(userId))),
})

export default connect(mSTP, mDTP)(WorkspaceShow)     