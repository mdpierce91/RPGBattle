import React from 'react';
import TeamListItem from './TeamListItem';
import { connect } from 'react-redux';

/**
 * Shows the list of current units in the team.
 * If it is empty is displays a message.
 */

export const TeamList = ({ team }) => {
    // const {team} = useContext(AppContext);
    return (
        <div className="list-container">
            <h2>Team</h2>
            {
                team.length === 0 ? (
                    <div className="list-item">
                        <span>No Units in team</span>
                    </div>
                ) : (
                    team.map((unit) => {
                        return <TeamListItem key={`team-${unit.id}`} {...unit} />;
                    })
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    team: state.team
});

export default connect(mapStateToProps)(TeamList);