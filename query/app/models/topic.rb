# == Schema Information
#
# Table name: topics
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Topic < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :followed_topics,
    primary_key: :id,
    foreign_key: :topic_id,
    class_name: "FollowedTopic"

  has_many :questions,
    through: :followed_topics,
    source: :question

end
