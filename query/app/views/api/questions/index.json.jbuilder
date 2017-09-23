
  @questions.each do |question|
    json.set! question.id do
      json.extract! question, :id, :body, :user_id
    end
  end
