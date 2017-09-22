json.array! @questions do |question|
  json.user_id question.user_id
  json.question question.body
end
