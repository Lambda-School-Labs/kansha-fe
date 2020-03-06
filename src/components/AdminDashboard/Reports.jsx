import React from 'react';
import MostRecog from './reports/MostRecog';
import TotalRecogGraph from './reports/TotalRecogGraph';

export default function Reports() {
	return (
		<div className="reports">
			<h1 className="admin-title">Reports</h1>
			<main>
				<section className="container-total-recog-graph">
					<TotalRecogGraph />
				</section>
				<section className="container-thanked-leaderboard">
					<MostRecog />
				</section>
				<section className="container-team-engagement"></section>
				<section className="container-thankful-engagement"></section>
			</main>
		</div>
	);
}
