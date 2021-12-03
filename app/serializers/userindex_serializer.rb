class UserIndexSerializer < ActiveModel::Serializer
    attributes :username, :picture, :bio
  
  
    # has_many: journals
  end
  