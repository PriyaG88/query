@questions.each do |question|
  json.set! question.id do
    json.extract! question, :id, :body, :topic, :user_id, :created_at
  end
end
