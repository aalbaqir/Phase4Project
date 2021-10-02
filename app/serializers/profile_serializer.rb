class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :belongs_to, :picture, :bio
end
