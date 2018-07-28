# DB設計
- users table
- members table
- groups table
- messages table

## users table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :groups, through: members
- has_many :members
- has_many :messages

## members table

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groups table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users, through: members
- has_many :members
- has_many :messages

## messages table

|Column|Type|Options|
|------|----|-------|
|body|string|
|image|blob|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :users
- belongs_to :groups
