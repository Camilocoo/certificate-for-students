import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Notifier, Notify } from "bc-react-notifier";
import moment from "moment";
//include images into your bundle

//create your first component

function getUrlParameter(name) {
	var params = new URLSearchParams(window.location.search);
	return params.has(name) ? params.get(name) : null;
}

const HOST = "https://talenttree-alesanchezr.c9users.io";

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cohort: getUrlParameter("cohort"),
			token: getUrlParameter("access_token"),
			student: getUrlParameter("student"),
			isLoaded: false,
			selectedCohort: null,
			selectedStudent: null,
			graduationDate: null,
			nameOfCohort: null,
			teachers: [],
			studentName: null
		};
	}

	componentDidMount() {
		console.log("v1.0");
		if (this.state.cohort)
			fetch(
				HOST +
					"/cohort/" +
					this.state.cohort +
					"?access_token=" +
					this.state.token,
				{ method: "GET" }
			)
				.then(res => res.json())
				.then(json => {
					let aux = json.data["full_teachers"].map(t => t.full_name);
					this.setState({
						isLoaded: true,
						selectedCohort: json,
						nameOfCohort: json.data.name,
						graduationDate: json.data["ending_date"],
						teachers: aux
					});
				})
				.catch(err =>
					Notify.error(err.message || "there was a problem")
				);
		if (this.state.student)
			fetch(
				HOST +
					/student/ +
					this.state.student +
					"?access_token=" +
					this.state.token
			)
				.then(res => res.json())
				.then(json => {
					this.setState({
						isLoaded: true,
						selectedStudent: json,
						studentName: json.data["full_name"]
					});
				})
				.catch(err =>
					Notify.error(err.message || "there was a problem")
				);
	}

	getName = fullName => {
		if (fullName) {
			let arrayOffFirstAndLastName = fullName.split(" ");
			return arrayOffFirstAndLastName[0];
		}
	};
	getLastName = fullName => {
		if (fullName) {
			let arrayOffFirstAndLastName = fullName.split(" ");
			return arrayOffFirstAndLastName[1];
		}
	};

	render() {
		return (
			<div className="container">
				{/*here is the first row with the backgorund color black*/}
				<div className="row text-white blackBackGround text-center">
					<div className="col py-5 fontSizeFirstRow">
						<div className="row m-0 p-0">
							<div className="col-12">4GEEKS ACADEMY</div>
						</div>

						<div className="row">
							<div className="col-1.5 px-1 mx-auto blueBackground">
								CODING SCHOOL
							</div>
						</div>
					</div>

					<div className="col">
						<img
							className="mt-3"
							src="https://ucarecdn.com/f422469c-4d65-4daa-979f-e2ce93df68a6/-/resize/150x/"
						/>
					</div>
					<div className="col py-5 fontSizeFirstRow">
						<div className="row m-0 p-0">
							<div className="col-12 h4 mb-0">FULL STACK</div>
						</div>

						<div className="row">
							<div className="col-1.5 px-1 mx-auto orangeBackground ">
								DEVELOPMENT
							</div>
						</div>
					</div>
				</div>
				{/*this is where the jumbotron with the students name and hours goes*/}
				<div className="jumbotron jumbotron-fluid bg-white">
					<div className="row">
						<div className="col mx-auto text-center d-inline-block">
							<div className="row">
								<p className="lead col-1.5 mx-auto mb-0 font-weight-bold recognizesThat ">
									RECOGNIZES THAT
								</p>
							</div>
							<div className="row">
								<p className="display-4 col-1.5  mx-auto  my-0 rightPadding">
									&lt; /{" "}
									{this.getName(this.state.studentName)}
								</p>
							</div>
							<div className="row">
								<p className="display-4 mx-auto col-1.5 font-weight-bold my-0 leftPadding">
									{this.getLastName(this.state.studentName)}{" "}
									&gt;
								</p>
							</div>
							<hr className="my-1 px-5 colorBlue blueBackground mb-0  " />
							<p className=" fontSize font-weight-bold mb-0">
								HAS SUCCESFULLY COMPLETED
							</p>
							<p className=" fontSize font-weight-bold mb-0">
								THE FULL STACK DEVELOPMENT PROGRAM
							</p>
							<p className=" h3 font-weight-bold mb-0">
								320+HOURS
							</p>
							<p className=" fontSize font-weight-bold mb-0">
								{this.state.nameOfCohort}
							</p>
							<p className=" fontSize font-weight-bold mb-0">
								{moment(this.state.graduationDate).format(
									"MMMM Do YYYY"
								)}
							</p>
						</div>
					</div>
				</div>
				{/*this is where the bootom row with the signature goes*/}
				<div className="row text-center">
					<div className="col">
						<hr className="my-1 borderSize" />
						<p className="mb-0 lead font-weight-bold">
							{this.state.teachers[0]}
						</p>
						<p className="mb-0 lead">Lead Instructor</p>
					</div>
					<div className="col">
						<img
							className="imgMargin"
							src="https://ucarecdn.com/761d2f6c-366a-4df7-a2b9-e60d6f31e8f6/-/resize/400x/"
						/>
					</div>
					<div className="col">
						<hr className="my-1 borderSize " />
						<p className="mb-0 lead font-weight-bold">
							ALEJANDRO SANCHEZ
						</p>
						<p className="mb-0 lead">Co-founder and</p>
						<p className="mb-0 lead">Lead Instructor</p>
					</div>
				</div>
			</div>
		);
	}
}
