// GET all cards
const getAllCards = (req, res) => {
  const db = req.app.get("db");

  db.get_allcards(req.params.userid)
    .then(response => {
      console.log("get all Cards", response);
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

// GET one card
const getCard = (req, res) => {
  const { cardid } = req.params;
  const db = req.app.get("db");

  db.get_card(cardid)
    // .then(console.log(cardid))
    .then(response => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

// POST (add) a card
const addCard = (req, res) => {
  const db = req.app.get("db");
  db.add_card(req.params.userid)
    .then(response => {
      console.log("added blank card");
      // let sortedResponse = response.sort((a, b) => a.importance - b.importance);
      res.status(200).send(response);
    })
    .catch(e => res.status(500).send(e));
};

// PUT (update) a card by id
const updateCard = (req, res) => {
  const { cardid } = req.params;
  const { itemname, price, importance } = req.body;
  console.log(cardid, itemname, price, importance);
  const db = req.app.get("db");

  db.update_card([cardid, itemname, price, importance])
    .then(response => {
      console.log("newCard:", response);
      res.status(200).send(response);
    })
    .catch(e => res.status(500).send(e));
};

// DELETE a card by cardid.
// Return all emergency deposits.
const deleteCard = (req, res) => {
  const { userid, cardid } = req.params;
  const db = req.app.get("db");
  console.log("params", req.params);

  db.delete_card([userid, cardid])
    .then(response => {
      console.log("removed:", cardid);
      console.log("newCards:", response);
      res.status(200).send(response);
    })
    .catch(e => res.status(500).send(e));
};

module.exports = {
  getAllCards,
  getCard,
  addCard,
  updateCard,
  deleteCard
};
