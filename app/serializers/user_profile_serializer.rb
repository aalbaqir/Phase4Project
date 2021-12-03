class UserProfileSerializer < ActiveModel::Serializer
  attributes :username, :picture, :bio
end
