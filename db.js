db.patients.insertMany([
    {
        "firstName": "John",
        "lastName": "Campbell",
        "age": "45",
        "history": [
            {
                "disease": "cold",
                "treatment": "Ayurvedic"
            },
            {
                "lastVisited": "2 days back"
            }
        ]
    },
    {
        "firstName": "Maurice",
        "lastName": "Campbell",
        "age": "20",
        "history": [
            {
                "disease": "fever",
                "treatment": "Homeopathy"
            },
            {
                "lastVisited": "4 days back"
            }
        ]
    },
    {
        "firstName": "Rick",
        "lastName": "Pleaton",
        "age": "35",
        "history": [
            {
                "disease": "Jaundice",
                "treatment": "English Medicine"
            },
            {
                "lastVisited": "1 day back"
            }
        ]
    }
])

db.patients.updateOne({ "firstName": "John" }, {
    $set: {
        age: "50", lastName: "Travolta", history: [{
            "disease": "cold",
            "treatment": "Homeo"
        },
        {
            "lastVisited": "2 days back"
        }]
    }
})

db.patients.find({ age: { $gt: 30 } })
db.patients.find({ age: { $gt: "30" } }).pretty()
db.patients.deleteMany({ "history.disease": "cold" })