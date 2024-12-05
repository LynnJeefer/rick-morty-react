import ResidentCard from './ResidentCard';
import './../styles/ResidentsList.css';
import { useState } from 'react';

function ResidentsList({ residents }) {
	const residentsPerPage = 10;
	const [currentPage, setCurrentPage] = useState(1);

	const indexOfLastResident = currentPage * residentsPerPage;
	const indexOfFirstResident = indexOfLastResident - residentsPerPage;

	const currentResidents = residents?.slice(
		indexOfFirstResident,
		indexOfLastResident,
	);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	const totalPages = Math.ceil(residents?.length / residentsPerPage);

	return (
		<div className="resident-list">
			<div className="cards">
				{currentResidents?.map((resident) => {
					const residentSplit = resident.split('/');
					const id = residentSplit[residentSplit.length - 1];

					return <ResidentCard key={id} url={resident} />;
				})}
			</div>

			<div className="pagination">
				<button
					className="pagination__btn"
					onClick={() => paginate(currentPage - 1)}
					disabled={currentPage === 1}
				>
					Prev
				</button>

				{Array.from({ length: totalPages }, (_, index) => (
					<button
						key={index + 1}
						className={`pagination__btn ${
							currentPage === index + 1 ? 'active' : ''
						}`}
						onClick={() => paginate(index + 1)}
					>
						{index + 1}
					</button>
				))}

				<button
					className="pagination__btn"
					onClick={() => paginate(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default ResidentsList;
