import React from "react";
import Cards from "./cards";

const Cuerpo = () => {
	return (
		<div>
			<div className="row">
				<div className="col-3">
					<Cards />
				</div>
				<div className="col-3">
					<Cards />
				</div>

				<div className="col-3">
					<Cards />
				</div>

				<div className="col-3">
					<Cards />
				</div>
			</div>
		</div>
	);
};

export default Cuerpo;
