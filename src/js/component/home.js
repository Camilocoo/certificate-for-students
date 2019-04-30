import React from "react";
import "bootstrap/dist/css/bootstrap.css";
//include images into your bundle

//create your first component
export class Home extends React.Component {
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
									&lt; / NAILA
								</p>
							</div>
							<div className="row">
								<p className="display-4 mx-auto col-1.5 font-weight-bold my-0 leftPadding">
									KAILIYEVA &gt;
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
								COHORT V
							</p>
							<p className=" fontSize font-weight-bold mb-0">
								NOV 30th, 2018
							</p>
						</div>
					</div>
				</div>
				{/*this is where the bootom row with the signature goes*/}
				<div className="row text-center">
					<div className="col">
						<hr className="my-1 borderSize" />
						<p className="mb-0 lead font-weight-bold">
							IGNACIO CORDOBA
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
