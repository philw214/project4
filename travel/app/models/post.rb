class Post < ActiveRecord::Base
  belongs_to :user
  geocoded_by :location
  validates :location, presence: true
  validates :content, presence: true
  after_validation :geocode

end
