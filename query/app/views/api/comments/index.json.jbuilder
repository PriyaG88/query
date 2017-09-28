@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :body, :answer_id
  end
end
