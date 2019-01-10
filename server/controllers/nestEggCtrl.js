// GET all deposits by user id
const getUserDeposits = (req, res) => {
  const db = req.app.get("db");
  db.get_userdeposits(req.params.userid)
    .then(response => {
      console.log("get all Deposits", response);
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

// POST (add) a deposit to emergency fund
const addEmergencyDeposit = (req, res) => {
  const { user_id, depositemergency } = req.body;
  const db = req.app.get("db");

  db.add_emergencydeposit([user_id, depositemergency])
    .then(response => {
      console.log("add emergencydeposit:", response);
      res.status(200).send(response);
    })
    .catch(e => res.status(500).send(e));
};

// POST (add) a deposit to retirement fund
const addRetirementDeposit = (req, res) => {
  const { user_id, depositretirement } = req.body;
  const db = req.app.get("db");

  db.add_retirementdeposit([user_id, depositretirement])
    .then(response => {
      console.log("add retirementdeposit:", response);
      res.status(200).send(response);
    })
    .catch(e => res.status(500).send(e));
};

// DELETE a deposit by depositid.
// Return all users deposits.
const deleteDeposit = (req, res) => {
  const { userid, depositid } = req.params;
  const db = req.app.get("db");
  console.log("params", req.params);

  db.delete_deposit([userid, depositid])
    .then(response => {
      console.log("removed:", depositid);
      console.log("newDeposits:", response);
      res.status(200).send(response);
    })
    .catch(e => res.status(500).send(e));
};

module.exports = {
  getUserDeposits,
  addEmergencyDeposit,
  addRetirementDeposit,
  deleteDeposit
};
