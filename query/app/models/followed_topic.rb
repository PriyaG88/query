# == Schema Information
#
# Table name: followed_topics
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  topic_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class FollowedTopic < ApplicationRecord
end
