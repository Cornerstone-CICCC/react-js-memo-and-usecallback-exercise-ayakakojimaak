import React from "react";

type profileProps = {
	firstname: string;
	lastname: string;
};

export const Profile = React.memo(({ firstname, lastname }: profileProps) => {
	console.log("Rendered Profile Component");
	return (
		<div>
			<h2>Profile</h2>
			<p>First Name: {firstname}</p>
			<p>Last Name: {lastname}</p>
		</div>
	);
});
