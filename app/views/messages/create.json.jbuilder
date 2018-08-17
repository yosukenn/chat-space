json.id @message.id
json.body @message.body
json.user_name @message.user.name
json.created_at @message.created_at.to_s(:sent_on)
json.image @message.image
