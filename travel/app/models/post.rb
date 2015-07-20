class Post < ActiveRecord::Base
  belongs_to :user
  geocoded_by :location
  validates :location, presence: true
  validates :content, allow_nil: true, length: { minimum: 2 }
  after_validation :geocode
end
