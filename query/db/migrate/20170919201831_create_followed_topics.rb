class CreateFollowedTopics < ActiveRecord::Migration[5.1]
  def change
    create_table :followed_topics do |t|
      t.integer :user_id, null: false
      t.integer :topic_id, null: false
      t.timestamps
    end
    add_index :followed_topics, :user_id
    add_index :followed_topics, :topic_id
    add_foreign_key :followed_topics, :users
    add_foreign_key :followed_topics, :topics
  end
end
