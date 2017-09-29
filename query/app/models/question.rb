# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  user_id    :integer          not null
#  topic      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord
  validates :body, :user_id, :topic, presence: true
  validates :body, length: { minimum: 3 }

  belongs_to :user
  has_many :answers
  has_many :topics, through: :followed_topic

end
