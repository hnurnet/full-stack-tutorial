import express from "express";
import cors from "cors";
import database from "./database/db.js";


const app = express();
app.use(express.json());
app.use(cors());


app.get("/api/students", (req,res) => {
    const q = "SELECT * FROM student";
    database.query(q, (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/api/students/:id", (req,res) => {
    const id = req.params.id;
    const q = "SELECT * FROM student WHERE id = ?";
    database.query(q,id, (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.put("/api/students/post/:id", (req,res) => {
    const id = req.params.id;
    const q = "UPDATE student SET name = ?, email = ?, contact = ? WHERE id = ?";
    database.query(q,[req.body.name,req.body.email,req.body.contact,id], (err,data) => {
        if(err) return res.json(err)
        return res.json({updated: true})
    })
});

app.post("/api/students/post", (req,res) => {
    const q = "INSERT INTO student (name, email, contact) VALUES (?, ?, ?)";
    database.query(q,[req.body.name,req.body.email,req.body.contact], (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })   
});

app.delete("/api/students/delete/:id", (req,res) => {
    const id = req.params.id;
    const q = "DELETE FROM student WHERE id = ?";
    database.query(q,id,(err,data) => {
        if(err) return console.log(err)
        return res.json("Successfully Deleted!")
    })

})








app.listen(8800, () => console.log("Server Connected!"))