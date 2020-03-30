import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

// Icon Imports
import { ReactComponent as DeleteIcon } from '../../assets/TeamsIcons/delete.svg';
import { ReactComponent as GroupIcon } from '../../assets/TeamsIcons/Group.svg';
import { ReactComponent as RecognitionIcon } from '../../assets/TeamsIcons/recognition.svg';
// import { ReactComponent as DropdownIcon } from '../../assets/dropdown.svg';

// Modal imports
import Modal from '../Modal';
import RecogModal from '../RecogModal/index';
import DeleteModal from './DeleteModal';

const OrgEmployees = ({
	employee,
	empButton,
	addTeamMember,
	id,
	setEmployees,
}) => {
	const [modal, setModal] = useState(false);
	const [teamInfo, setTeamInfo] = useState([]);
	const [deleteModal, setDeleteModal] = useState(false);

	// const [showTeams, setShowTeams] = useState(false);

	useEffect(() => {
		axiosWithAuth()
			.get(`profile/${id}`)
			.then(res => {
				setTeamInfo(res.data.peer);
			})
			.catch(error => console.log(error.response));
	}, [id]);

	const handleDeleteClick = e => {
		e.preventDefault();
		setDeleteModal(true);
	};

	//not working yet

	const handleDeleteOrgMember = e => {
		e.preventDefault();
		axiosWithAuth()
			.delete(`/users/${id}`)
			.then(() => {
				setEmployees(previous =>
					previous.filter(emps => emps.id !== id),
				);
			});
	};

	return (
		<>
			{deleteModal && (
				<DeleteModal
					setDeleteModal={setDeleteModal}
					deleteMemberFromOrg={true}
					handleDeleteOrgMember={handleDeleteOrgMember}
				/>
			)}
			<tr className="teams-employee-card">
				<td className="teams-employee">
					<label
						onClick={e => {
							addTeamMember(e, employee.id);
						}}
						style={
							empButton
								? { display: 'none' }
								: { display: 'block' }
						}>
						<input type="checkbox" className="css-checkbox" />
						<i></i>
					</label>
					<Link to={`/profile/${employee.id}`}>
						<div className="teams-employee-info">
							<img
								src={employee.profile_picture}
								alt="profile img"
								className="teams-profile-picture"
							/>
							<h3>
								{employee.first_name} {employee.last_name}
							</h3>
						</div>
					</Link>
				</td>
				<td className="teams-employee-details">
					<h3 className="job-title">{employee.job_title}</h3>
				</td>
				<td className="teams-container">
					{teamInfo.teams ? (
						<>
							<h3 className="teams">{`Teams (${teamInfo.teams.length})`}</h3>
							{/* {teamInfo.teams.map(team => {
								return (
									<div
										className="team-dropdown"
										key={team.id}>
										<DropdownIcon
											style={{
												marginLeft: '5rem',
												cursor: 'pointer',
											}}
											onClick={() =>
												setShowTeams(!showTeams)
											}
										/>
										{showTeams ? (
											<div>
												<p>{team.name}</p>
											</div>
										) : null}
									</div>
								);
							})} */}
						</>
					) : (
						<h3 className="teams">Teams (0)</h3>
					)}
				</td>
				<td className="recognition-btn">
					<RecognitionIcon
						onClick={() => setModal(!modal)}
						style={{
							height: '20px',
							width: '20px',
						}}
					/>
					{modal && (
						<Modal close={setModal}>
							<RecogModal profile={employee} />
						</Modal>
					)}
				</td>
				<td className="teams-employee-icons">
					<DeleteIcon
						style={{ marginRight: '20px', cursor: 'pointer' }}
						onClick={handleDeleteClick}
					/>
					<GroupIcon />
				</td>
			</tr>
		</>
	);
};

export default OrgEmployees;