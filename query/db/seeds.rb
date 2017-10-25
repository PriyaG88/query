Topic.create(name: "General")
Topic.create(name: "Behavior")
Topic.create(name: "Harry Potter")
Topic.create(name: "Computer Science")
Topic.create(name: "Game of Thrones")

User.create(email: "sillysally1@gmail.com", name: "Sally Waters", password: "password")
User.create(email: "hp4lyfe@gmail.com", name: "Harry Potter", password: "gillywater")
User.create(email: "pg88@email.com", name: "Priya G", password: "password")
User.create(email: "cool_kel@me.com", name: "Kelli Terada", password: "sachiko")
User.create(email: "kydances@dance.com", name: "Kyle Shea", password: "lifestyle")
User.create(email: "ojking12@gmail.com", name: "Ollie King", password: "puglyfe")
User.create(email: "annabanana31@example.com", name: "Anna Miller", password: "animals")
User.create(email: "mariog@yahoo.com", name: "Mario Guttierez", password: "marioistall")
User.create(email: "tyg86@gmail.com", name: "Tessa York", password: "fashion")
User.create(email: "yazriri@gmail.com", name: "Yaz Badri", password: "photography")
User.create(email: "pg_rated@gmail.com", name: "Priya Gurung", password: "playonwords")
User.create(email: "jazzyBeats@gmail.com", name: "Jasmine Conrad", password: "hilarity")

Comment.create(body: "Agreed!", answer_id: 1, user_id: 1)

Answer.create(body: "Because of people like Lord Voldemort", user_id: 2, question_id: 1)
Question.create(body: "Why can't people just get along?", user_id: 1, topic: "Behavior")
Question.create(body: "What would have happened if Neville Longbottom was decided to be the 'chosen one'?", user_id: 2, topic: "Harry Potter")
Question.create(body: "What is the meaning of life?", user_id: 12, topic: "General")
Question.create(body: "Who will make it to the end of Game of Thrones?", user_id: 14, topic: "Game of Thrones")
Question.create(body: "What is a good programming language for a beginner to pick up?", user_id: 15, topic: "Computer Science")
Question.create(body: "So Jon Snow and Dany...", user_id: 14, topic: "Game of Thrones")
Question.create(body: "Why are humans so pre-occupied with living in the past and future?", user_id: 12, topic: "Behavior")
Question.create(body: "What goes with the color blue?", user_id: 17, topic: "General")
Question.create(body: "Who runs the world?", user_id: 15, topic: "General")
Question.create(body: "What are some cool things to do in SF for Halloween?", user_id: 18, topic: "General")
Question.create(body: "When is the next Fantastic Beasts moving coming out?", user_id: 19, topic: "Harry Potter")
Question.create(body: "How would people behave during the zombie apocolypse?", user_id: 20, topic: "Behavior")
