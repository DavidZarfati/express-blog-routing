import express from "express"

const app = express()
const port = 3000

app.use(express.static("public"))

const posts = [
    {
        title: "I Am BatMan",
        content: "storia di un pipistrello ubriaco",
        path: "images/ciambellone.jpeg",
        tags: ["animals", "heroes", "addictions"]
    },
    {
        title: "SuperErrori",
        content: "quali sono gli errori piu comuni da non commettere?",
        path: "images/cracker_barbabietola.jpeg",
        tags: ["guide", "heroes", "errors"]
    },
    {
        title: "THORneranno gli Avengers?",
        content: "vedremo di nuovo gli avengers? o ci dovremo accontentare dei nuovi avengers?",
        path: "images/pane_fritto_dolce.jpeg",
        tags: ["Thor", "avengers", "new avengers", "heroes"]
    },
    {
        title: "Bootstrap:l'eroe moderno",
        content: "è un uomo?è un aereo? NO! è MatteoStrap",
        path: "images/pasta_barbabietola.jpeg",
        tags: ["MatteoStrap", "heroes", "Bootstrap-addicted", "modern-heroes"]
    },
    {
        title: "R.I.P. programmatore",
        content: "Nulla ha potuto neanche superman, il suo cuore non ha resistito alla terza volta che qualcuno chiamava Javascript,JAVA!!!",
        path: "images/torta_paesana.jpeg",
        tags: ["programmatore", "heroes", "Superman", "java", "javascript", "morti-illustri"]
    }
]




app.get("/", (req, res) => {
    console.log("sono console log 1");
    res.send("Server Del Mio Blog")
})
app.get("/bacheca", (req, res) => {
    console.log("sono console log dei post");
    const contatore = posts.length
    const postList = posts.map((post) => ({
        title: post.title,
        content: post.content,
        imageUrl: post.path,
        tags: post.tags,
        totalePost: contatore
    }))
    res.json(postList)
})






app.listen(port, function () {
    console.log("il server è in ascolto sulla porta " + port);
})
