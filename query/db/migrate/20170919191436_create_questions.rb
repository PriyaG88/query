class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.text :body, null: false
      t.integer :user_id, null: false
      t.string :topic, null: false
      t.timestamps
    end
    add_index :questions, :user_id
  end
end
