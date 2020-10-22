const { connection } = require("../database");
const { get } = require("../../ServerRoutes/Client");

const saveJobs = (req, callback) => {
  var query = `INSERT INTO Jobs (client_id,jobTitle,fields,imgUrl,jobDescription) values ('${req.client_id}','${req.jobTitle}','${req.fields}','${req.imgUrl}','${req.jobDescription}');`;
  connection.query(query, function (error, results, fields) {
    callback(results, error);
  });
};
module.exports = { saveJobs };
