class Post < ActiveRecord::Base
  belongs_to :user
  geocoded_by :location
  validates :location, presence: true
  validates :content, length: { minimum: 2 }, allow_nil: true
  after_validation :geocode

end
