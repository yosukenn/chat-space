# DB設計
- users table
- members table
- groups table
- messages table

## users table

|Column|Type|Options|
|------|----|-------|
|id|integer|
|name|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
|created_at|datetime|
|updated_at|datetime|

### Association
- has_many :members
- has_many :messages
