json.id @message.id
json.body @message.body
json.user_name @message.user.name
json.created_at format_posted_time(@message.created_at)
json.image @message.image
