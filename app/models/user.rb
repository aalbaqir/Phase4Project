class User < ApplicationRecord
    # has_one :profile
    has_many :journals
    has_many :quotes

    has_secure_password

# validates :username, uniqueness: true
# validates :username, presence: true
# validates :password, presence: true
    
end

