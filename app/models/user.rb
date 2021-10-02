class User < ApplicationRecord
    has_one :profile
    has_many :journals, through: :profile
    has_many :quotes, through: :profile


    
end

