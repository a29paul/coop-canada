import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { Card, CardContent } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

const job = {
  jobName: "Software Developer",
  company: "Google",
  targetedProgram: "Software Engineering",
  location: "Waterloo",
  requiredSkills: ["C++", "Java"],
  wagePerHour: 25.0,
  jobSummary:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  applicationDeadline: "02/01/2020",
  interviews: [],
  id: 123
};

function confirmApply() {
  console.log("applied");
}
export class JobDetail extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    // console.log(this.props);
  }

  render() {
    console.log(this.props);
    console.log(this.props.location);
    // console.log(job);
    return (
      <Container maxWidth="md">
        <Card>
          <CardContent>
            <Button onClick={confirmApply} variant="contained" color="primary">
              Apply
            </Button>
            <div>
              <strong>Job Name: </strong>
              {job.jobName}
            </div>
          </CardContent>
          <CardContent>
            <div>
              <strong>Company: </strong>
              {job.company}
            </div>
          </CardContent>
          <CardContent>
            <div>
              <strong>Job Location: </strong>
              {job.location}
            </div>
          </CardContent>
          <CardContent>
            <div>
              <strong>Application Deadline: </strong>
              {job.applicationDeadline}
            </div>
          </CardContent>

          <CardContent>
            <div>
              <strong>Job Summary: </strong>
              {job.jobSummary}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div>
              <strong>Job Summary: </strong>
            </div>
            {job.requiredSkills.map(skill => {
              // Return the element. Also pass key
              return <div> {skill} </div>;
            })}
          </CardContent>
        </Card>
      </Container>
    );
  }
}

export default JobDetail;
