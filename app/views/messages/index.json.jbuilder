json.array! @messages do |message|
  json.id message.id
  json.user_name message.user.name
  json.created_at message.created_at
  json.body message.body
  json.image message.image
end
