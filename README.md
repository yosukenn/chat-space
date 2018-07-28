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
- has_many :groups,through: members
- has_many :members
- has_many :messages

## members table

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groups table

|Column|Type|Options|
|------|----|-------|
|id|integer|
|name|string|null: false|
|created_at|datetime|
|updated_at|datetime|

### Association
- has_many :users, through: members
- has_many :members
- has_many :messages

## messages table

|Column|Type|Options|
|------|----|-------|
|id|integer|
|body|text|null: false|
|image|blob|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|created_at|datetime|

### Association
- belongs_to :users
- belongs_to :groups
