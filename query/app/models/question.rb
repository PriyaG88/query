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

  has_many :topics

end
