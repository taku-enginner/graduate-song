class Song < ApplicationRecord
  def self.ransackable_attributes(auth_object = nil)
    ["title"]
  end
end
