# == Schema Information
#
# Table name: answers
#
#  id          :integer          not null, primary key
#  body        :text             not null
#  user_id     :integer          not null
#  question_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Answer < ApplicationRecord
  validates :body, :user_id, :question_id, presence: true
  validates :body, length: { minimum: 3 }

  belongs_to :user
  belongs_to :question
  has_many :comments

end
