class UsernameSerializer < ActiveModel::Serializer
  attributes :id, :password_digest
end
