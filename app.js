// modules import
const express = require("express");
const bodyParser = require("body-parser");
const memberController = require("./controllers/MemberController");

// db instance connection
require("./config/db");

// initialize express
const app = express();

const port = process.env.PORT || 3301;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// --- API ENDPOINTS ---

// to list all members
app
  .route("/members")
  .get(memberController.listAllMembers)

// to create a new member  
app
  .route("/member/create")
  .post(memberController.createNewMember);

app
  .route("/member/:memberid")
  // to display content member 
  .get(memberController.displayMember)
  // to update content member
  .put(memberController.updateMember)

// to delete member  
app
  .route("/member/delete/:memberid")  
  .delete(memberController.deleteMember);

// displaying a message when server is running
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});