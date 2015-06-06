class Post < ActiveRecord::Base
  belongs_to :user
  # nice use of the geocoder gem!
  geocoded_by :location
  after_validation :geocode
end
