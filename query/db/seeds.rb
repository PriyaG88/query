Comment.create(body: "Agreed!", answer_id: 1, user_id: 1)

Answer.create(body: "Because of people like Lord Voldemort", user_id: 2, question_id: 1)
Question.create(body: "Why can't people just get along?", user_id: 1, topic: "Behavior")
Question.create(body: "What would have happened if Neville Longbottom was decided to be the 'chosen one'?", user_id: 2, topic: "Harry Potter")

Question.create(body: "Coke or pepsi?", user_id: 1, topic: "Survey")

User.create(email: "sillysally1@gmail.com", name: "Sally Waters", password: "password")
User.create(email: "hp4lyfe@gmail.com", name: "Harry Potter", password: "gillywater")


Topic.create(name: "Behavior")
Topic.create(name: "Harry Potter")
Topic.create(name: "Computer Science")
Topic.create(name: "Game of Thrones")
