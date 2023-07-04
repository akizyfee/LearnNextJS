// sever router api/contact/

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if ( 
      !email || 
      !email.includes("@") || 
      !name || name.trim() === "" || 
      !message || message.trim() === ""
    ) {
      res.status(400).json(
        { message: "Invalid input." }
      );
      return;
    }

    const newMessage = {
      email,
      name,
      message
    };

    let client;

    try {
      const password = process.env.DB_PASS
      client = await MongoClient.connect(`mongodb+srv://akidyfee:${password}@cluster0.mjqkz.mongodb.net/?retryWrites=true&w=majority`);
    } catch(error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch(error) {
      client.close();
      res.status(500).json({ message: "Stroing message failed" });
      return;
    }

    client.close();
    
    res.status(200).json(
      { message: "Successfully stored message!", message: newMessage }
    );
  }
}

export default handler;