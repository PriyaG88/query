@answers.each do |answer|
  json.set! answer.id do
    json.extract! answer, :id, :body, :user_id, :question_id
    json.author answer.user
  end
end
