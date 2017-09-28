# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: "sillysally1@gmail.com", name: "Sally Waters", password: "password")
User.create(email: "hp4lyfe@gmail.com", name: "Harry Potter", password: "gillywater")

Question.create(body: "Why can't people just get along?", user_id: 2, topic: "behavior")
Question.create(body: "What would have happened if Neville Longbottom was decided to be the 'chosen one'?", user_id: 3, topic: "Harry Potter")
Question.create(body: "Coke or pepsi?", user_id: 2, topic: "Survey")


Answer.create(body: "Because of people like Lord Voldemort", user_id: 10, question_id: 1)
# Answer.create(body:, user_id:, question_id:)
# Answer.create(body:, user_id:, question_id:)

Comment.create(body: "Agreed!", answer_id: 1, user_id: 9)
