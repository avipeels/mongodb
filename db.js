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

"------"

db.companiesData.insertOne({
    "_id": '123aaa',
    name: 'shell'
})

db.companiesData.insertMany([
    {
        "_id": '123bbb',
        name: 'Indian Oil'
    },
    {
        "_id": '123ccc',
        name: 'Hindustan Petroleum'
    }
])


db.companiesData.insertMany([
    {
        "_id": '123bbb',
        name: 'Indian Oil - 1'
    },
    {
        "_id": '123ccc',
        name: 'Hindustan Petroleum - 1'
    },
    {
        "_id": '123ddd',
        name: 'Aaramco'
    }
])

db.companiesData.insertMany([
    {
        "_id": '123bbb',
        name: 'Indian Oil - 1'
    },
    {
        "_id": '123ccc',
        name: 'Hindustan Petroleum - 1'
    },
    {
        "_id": '123ddd',
        name: 'Aaramco'
    }
], { ordered: false })


db.companiesData.insertOne({
    "_id": '123eee',
    name: 'Mansfield Oil'
}, { writeConcern: { w: 1, j: true } })

"---"
mongoimport tv-shows.json -d movieData -c movies --jsonArray --drop