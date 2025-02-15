import { Candidate } from "./candidate";
import { Company } from "./company";
import { Job } from "./jobs";

Company.hasMany(Job)
Job.belongsTo(Company)

export {
    Candidate,
    Company,
    Job
}